/* =========================================================
   Codevo — main.js
   Plain vanilla JavaScript (no framework, no build step).
   Safe to include directly via {% static 'portfolio/js/main.js' %}
   ========================================================= */
document.addEventListener("DOMContentLoaded", function () {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------
     1) Preloader
  --------------------------------------------------------- */
  var preloader = document.getElementById("preloader");
  window.addEventListener("load", function () {
    setTimeout(function () {
      if (preloader) {
        preloader.style.opacity = "0";
        setTimeout(function () {
          preloader.style.display = "none";
        }, 600);
      }
    }, 500);
  });

  /* ---------------------------------------------------------
     2) Sticky header shrink-on-scroll + scroll progress bar
  --------------------------------------------------------- */
  var headerInner = document.getElementById("header-inner");
  var scrollProgress = document.getElementById("scroll-progress");
  var backToTop = document.getElementById("back-to-top");

  function onScrollHeader() {
    var y = window.scrollY;

    if (headerInner) {
      if (y > 24) {
        headerInner.classList.add(
          "my-3", "rounded-2xl", "border", "border-white/10",
          "bg-base/70", "backdrop-blur-xl"
        );
        headerInner.classList.remove("my-4");
      } else {
        headerInner.classList.remove(
          "my-3", "rounded-2xl", "border", "border-white/10",
          "bg-base/70", "backdrop-blur-xl"
        );
        headerInner.classList.add("my-4");
      }
    }

    if (scrollProgress) {
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var progress = docHeight > 0 ? y / docHeight : 0;
      scrollProgress.style.transform = "scaleX(" + progress + ")";
    }

    if (backToTop) {
      if (y > 800) {
        backToTop.style.opacity = "1";
        backToTop.style.pointerEvents = "auto";
        backToTop.style.transform = "translateY(0)";
      } else {
        backToTop.style.opacity = "0";
        backToTop.style.pointerEvents = "none";
        backToTop.style.transform = "translateY(16px)";
      }
    }
  }
  window.addEventListener("scroll", onScrollHeader, { passive: true });
  onScrollHeader();

  /* ---------------------------------------------------------
     3) Mobile menu (hamburger)
  --------------------------------------------------------- */
  var hamburgerBtn = document.getElementById("hamburger-btn");
  var mobileMenu = document.getElementById("mobile-menu");
  var mobileNavItems = document.querySelectorAll(".mobile-nav-item");

  function closeMobileMenu() {
    mobileMenu.classList.remove("open");
  }
  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("open");
    });
    mobileNavItems.forEach(function (item) {
      item.addEventListener("click", closeMobileMenu);
    });
  }

  /* ---------------------------------------------------------
     4) Smooth scroll for in-page anchor links
  --------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: top, behavior: reduceMotion ? "auto" : "smooth" });
      }
    });
  });

  /* ---------------------------------------------------------
     5) Scroll-spy: highlight active nav link
  --------------------------------------------------------- */
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll(".nav-link");

  var spyObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute("id");
          navLinks.forEach(function (link) {
            link.classList.toggle("active", link.getAttribute("href") === "#" + id);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach(function (s) {
    spyObserver.observe(s);
  });

  /* ---------------------------------------------------------
     6) Scroll reveal animations (IntersectionObserver)
  --------------------------------------------------------- */
  var revealEls = document.querySelectorAll(".reveal");
  var revealObserver = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ---------------------------------------------------------
     7) Workflow timeline: animated progress fill on scroll
  --------------------------------------------------------- */
  var timeline = document.getElementById("timeline");
  var timelineFill = document.getElementById("timeline-fill");

  function updateTimeline() {
    if (!timeline || !timelineFill) return;
    var rect = timeline.getBoundingClientRect();
    var viewportH = window.innerHeight;
    var start = viewportH * 0.85;
    var total = rect.height + viewportH * 0.5;
    var progress = (start - rect.top) / total;
    progress = Math.max(0, Math.min(1, progress));
    timelineFill.style.transform = "scaleY(" + progress + ")";
  }
  window.addEventListener("scroll", updateTimeline, { passive: true });
  window.addEventListener("resize", updateTimeline);
  updateTimeline();

  /* ---------------------------------------------------------
     8) Projects carousel (horizontal scroll buttons)
  --------------------------------------------------------- */
  var scroller = document.getElementById("project-scroller");
  var nextBtn = document.getElementById("proj-next");
  var prevBtn = document.getElementById("proj-prev");

  if (scroller && nextBtn && prevBtn) {
    nextBtn.addEventListener("click", function () {
      scroller.scrollBy({ left: 320, behavior: "smooth" });
    });
    prevBtn.addEventListener("click", function () {
      scroller.scrollBy({ left: -320, behavior: "smooth" });
    });
  }

  /* ---------------------------------------------------------
     10) Footer year
  --------------------------------------------------------- */
  var footerYear = document.getElementById("footer-year");
  if (footerYear) footerYear.textContent = new Date().getFullYear();

  /* ---------------------------------------------------------
     11) Chat widget (rule-based assistant, no external API)
  --------------------------------------------------------- */
  var chatToggle = document.getElementById("chat-toggle");
  var chatWindow = document.getElementById("chat-window");
  var chatClose = document.getElementById("chat-close");
  var chatForm = document.getElementById("chat-form");
  var chatInput = document.getElementById("chat-input");
  var chatMessages = document.getElementById("chat-messages");
  var chatTooltip = document.getElementById("chat-tooltip");
  var chatIconOpen = document.getElementById("chat-icon-open");
  var chatIconClose = document.getElementById("chat-icon-close");

  var chatIsOpen = false;
  var chatStarted = false;

  var quickReplies = [
    "هزینه پروژه چقدره؟",
    "چقدر طول می‌کشه؟",
    "چطور باهات تماس بگیرم؟",
    "روی چه تکنولوژی‌هایی کار می‌کنی؟",
  ];

  var chatRules = [
    {
      keywords: ["قیمت", "هزینه", "تعرفه", "چند تومن", "چقدر می\u200cشه"],
      answer:
        "هزینه هر پروژه بسته به میزان پیچیدگی، قابلیت‌ها و زمان‌بندی متفاوت است. بهترین راه، ارسال توضیح کوتاهی از پروژه از طریق تلگرام یا تماس تلفنی است تا یک برآورد دقیق و شفاف دریافت کنید.",
    },
    {
      keywords: ["زمان", "طول می\u200cکشه", "مدت", "چند روز", "چند هفته"],
      answer:
        "بسته به دامنه پروژه معمولاً بین ۲ تا ۸ هفته زمان می‌برد. پروژه‌های کوچک‌تر سریع‌تر و پروژه‌های سازمانی‌تر با زمان‌بندی دقیق‌تری تحویل داده می‌شوند.",
    },
    {
      keywords: ["تماس", "ارتباط", "شماره", "تلفن", "تلگرام", "چطور بگیرم"],
      answer:
        "می‌تونید از طریق دکمه‌های تماس، تلگرام یا اینستاگرام در پایین صفحه در ارتباط باشید. خوشحال می‌شم درباره پروژه‌تون صحبت کنیم!",
    },
    {
      keywords: ["تکنولوژی", "استک", "زبان", "ابزار", "جنگو", "پایتون", "django", "python"],
      answer:
        "تخصص اصلی من Python و Django برای بک‌اند است، همراه با JavaScript و Tailwind CSS برای فرانت‌اند، PostgreSQL برای دیتابیس و Docker برای استقرار.",
    },
    {
      keywords: ["سلام", "درود", "خسته نباشید", "وقت بخیر"],
      answer: "سلام! خوش اومدید 🌿 چطور می‌تونم درباره خدمات یا پروژه‌تون کمکتون کنم؟",
    },
    {
      keywords: ["نمونه کار", "پروژه قبلی", "کارنامه", "سابقه"],
      answer:
        "نمونه‌کارهای من رو می‌تونید در بخش «نمونه‌کارها» همین صفحه ببینید؛ از فروشگاه‌های اینترنتی تا سامانه‌های تحلیلی و مدیریتی.",
    },
  ];

  var chatFallback =
    "ممنون از پیامتون! برای پاسخ دقیق‌تر و سریع‌تر بهتره مستقیم از طریق تلگرام یا تماس تلفنی در ارتباط باشیم. دکمه‌های تماس رو در پایین صفحه ببینید 😊";

  function getBotReply(input) {
    var lower = input.toLowerCase();
    for (var i = 0; i < chatRules.length; i++) {
      var rule = chatRules[i];
      for (var k = 0; k < rule.keywords.length; k++) {
        if (lower.indexOf(rule.keywords[k].toLowerCase()) !== -1) {
          return rule.answer;
        }
      }
    }
    return chatFallback;
  }

  function addMessage(role, text) {
    var wrapper = document.createElement("div");
    wrapper.className = "flex " + (role === "user" ? "justify-end" : "justify-start");

    var bubble = document.createElement("p");
    bubble.className =
      "max-w-[80%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed " +
      (role === "user"
        ? "bg-gradient-to-br from-brand-bright to-brand text-base"
        : "bg-white/8 text-mist/85");
    bubble.textContent = text;

    wrapper.appendChild(bubble);
    chatMessages.appendChild(wrapper);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function addQuickReplies() {
    var wrap = document.createElement("div");
    wrap.className = "flex flex-wrap gap-2 pt-2";
    quickReplies.forEach(function (q) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = q;
      btn.className =
        "rounded-full border border-brand/25 bg-brand/10 px-3 py-1.5 text-xs font-medium text-brand-bright hover:bg-brand/20 transition-colors";
      btn.addEventListener("click", function () {
        wrap.remove();
        sendMessage(q);
      });
      wrap.appendChild(btn);
    });
    chatMessages.appendChild(wrap);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function showTyping() {
    var wrap = document.createElement("div");
    wrap.id = "typing-indicator";
    wrap.className = "flex justify-start";
    wrap.innerHTML =
      '<div class="flex items-center gap-1 rounded-2xl bg-white/8 px-4 py-3">' +
      '<span class="h-1.5 w-1.5 rounded-full bg-mist/60 animate-pulse"></span>' +
      '<span class="h-1.5 w-1.5 rounded-full bg-mist/60 animate-pulse" style="animation-delay:.2s"></span>' +
      '<span class="h-1.5 w-1.5 rounded-full bg-mist/60 animate-pulse" style="animation-delay:.4s"></span>' +
      "</div>";
    chatMessages.appendChild(wrap);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  function hideTyping() {
    var el = document.getElementById("typing-indicator");
    if (el) el.remove();
  }

  function sendMessage(text) {
    var trimmed = (text || "").trim();
    if (!trimmed) return;
    addMessage("user", trimmed);
    chatInput.value = "";
    showTyping();
    setTimeout(function () {
      hideTyping();
      addMessage("bot", getBotReply(trimmed));
    }, 800);
  }

  function toggleChat() {
    chatIsOpen = !chatIsOpen;
    if (chatTooltip) chatTooltip.style.opacity = "0";

    if (chatIsOpen) {
      chatWindow.classList.remove("hidden");
      chatWindow.classList.add("flex");
      requestAnimationFrame(function () {
        chatWindow.style.opacity = "1";
        chatWindow.style.transform = "translateY(0)";
      });
      chatIconOpen.classList.add("hidden");
      chatIconClose.classList.remove("hidden");

      if (!chatStarted) {
        chatStarted = true;
        showTyping();
        setTimeout(function () {
          hideTyping();
          addMessage(
            "bot",
            "سلام! من دستیار هوشمند Codevo هستم 👋 چطور می‌تونم درباره خدمات یا پروژه‌تون کمکتون کنم؟"
          );
          addQuickReplies();
        }, 700);
      }
    } else {
      chatWindow.style.opacity = "0";
      chatWindow.style.transform = "translateY(24px)";
      chatIconOpen.classList.remove("hidden");
      chatIconClose.classList.add("hidden");
      setTimeout(function () {
        chatWindow.classList.add("hidden");
        chatWindow.classList.remove("flex");
      }, 300);
    }
  }

  if (chatToggle) chatToggle.addEventListener("click", toggleChat);
  if (chatClose) chatClose.addEventListener("click", toggleChat);
  if (chatForm) {
    chatForm.addEventListener("submit", function (e) {
      e.preventDefault();
      sendMessage(chatInput.value);
    });
  }

  setTimeout(function () {
    if (!chatIsOpen && chatTooltip) chatTooltip.style.opacity = "1";
  }, 4500);

  /* ---------------------------------------------------------
     12) Custom cursor (desktop, fine-pointer only)
  --------------------------------------------------------- */
  var isFinePointer = window.matchMedia("(pointer: fine)").matches;
  var cursorDot = document.querySelector(".cursor-dot");
  var cursorOutline = document.querySelector(".cursor-outline");

  if (isFinePointer && !reduceMotion && cursorDot && cursorOutline) {
    var outlineX = window.innerWidth / 2;
    var outlineY = window.innerHeight / 2;
    var targetX = outlineX;
    var targetY = outlineY;

    window.addEventListener("mousemove", function (e) {
      targetX = e.clientX;
      targetY = e.clientY;
      cursorDot.style.transform = "translate(" + targetX + "px," + targetY + "px) translate(-50%,-50%)";
    });

    document.addEventListener("mouseover", function (e) {
      if (e.target.closest && e.target.closest('a, button, input, textarea, [role="button"]')) {
        cursorOutline.classList.add("hovering");
      }
    });
    document.addEventListener("mouseout", function (e) {
      if (e.target.closest && e.target.closest('a, button, input, textarea, [role="button"]')) {
        cursorOutline.classList.remove("hovering");
      }
    });

    (function loop() {
      outlineX += (targetX - outlineX) * 0.18;
      outlineY += (targetY - outlineY) * 0.18;
      cursorOutline.style.transform = "translate(" + outlineX + "px," + outlineY + "px) translate(-50%,-50%)";
      requestAnimationFrame(loop);
    })();
  } else {
    if (cursorDot) cursorDot.style.display = "none";
    if (cursorOutline) cursorOutline.style.display = "none";
  }

  /* ---------------------------------------------------------
     13) Interactive particle background (plain <canvas>)
  --------------------------------------------------------- */
  var canvas = document.getElementById("bg-canvas");
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var width = window.innerWidth;
    var height = window.innerHeight;
    var isMobile = width < 768;
    var density = isMobile ? 55 : 120;
    var maxDist = isMobile ? 100 : 150;
    var particles = [];
    var mouse = { x: width / 2, y: height / 2, active: false };
    var raf;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * (window.devicePixelRatio || 1);
      canvas.height = height * (window.devicePixelRatio || 1);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(window.devicePixelRatio || 1, 0, 0, window.devicePixelRatio || 1, 0, 0);
    }

    function initParticles() {
      particles = [];
      for (var i = 0; i < density; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.6 + 0.6,
        });
      }
    }

    function step() {
      ctx.clearRect(0, 0, width, height);

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        if (mouse.active) {
          var dx = p.x - mouse.x;
          var dy = p.y - mouse.y;
          var dist = Math.hypot(dx, dy);
          if (dist < 140 && dist > 0) {
            var force = (140 - dist) / 140;
            p.x += (dx / dist) * force * 1.2;
            p.y += (dy / dist) * force * 1.2;
          }
        }
      }

      for (var a = 0; a < particles.length; a++) {
        for (var b = a + 1; b < particles.length; b++) {
          var dx2 = particles[a].x - particles[b].x;
          var dy2 = particles[a].y - particles[b].y;
          var dist2 = Math.hypot(dx2, dy2);
          if (dist2 < maxDist) {
            ctx.strokeStyle = "rgba(34,211,238," + 0.14 * (1 - dist2 / maxDist) + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }

      for (var j = 0; j < particles.length; j++) {
        ctx.fillStyle = "rgba(103,232,249,.75)";
        ctx.beginPath();
        ctx.arc(particles[j].x, particles[j].y, particles[j].r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(step);
    }

    window.addEventListener("mousemove", function (e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    });
    window.addEventListener("mouseleave", function () {
      mouse.active = false;
    });
    window.addEventListener("resize", function () {
      resize();
      initParticles();
    });

    resize();
    initParticles();

    if (!reduceMotion) {
      step();
    } else {
      step();
      cancelAnimationFrame(raf);
    }
  }
});
