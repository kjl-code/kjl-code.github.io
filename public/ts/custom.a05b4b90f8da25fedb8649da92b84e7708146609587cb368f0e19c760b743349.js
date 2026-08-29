(() => {
  // <stdin>
  var toSafeText = (value) => {
    const cleaned = value?.replace(/\s+/g, " ").trim();
    return cleaned ? cleaned : void 0;
  };
  var getPageContext = () => {
    const title = toSafeText(
      document.querySelector('meta[property="og:title"]')?.getAttribute("content") || document.title || document.querySelector(".article-title")?.textContent || void 0
    ) || "Untitled";
    const url = window.location.href;
    const category = toSafeText(document.querySelector(".article-category a, .article-header .category a")?.textContent || void 0);
    return { title, url, category };
  };
  var trackUmami = (eventName, payload = {}) => {
    const tracker = window.umami;
    if (!tracker || typeof tracker.track !== "function") {
      return;
    }
    const context = getPageContext();
    const merged = {
      title: context.title,
      url: context.url,
      ...payload
    };
    const cleanPayload = Object.fromEntries(
      Object.entries(merged).filter(([, value]) => value !== void 0 && value !== null && value !== "")
    );
    tracker.track(eventName, cleanPayload);
  };
  var runWhenUmamiReady = (callback) => {
    if (window.umami && typeof window.umami.track === "function") {
      callback();
      return;
    }
    let tries = 0;
    const timer = window.setInterval(() => {
      tries += 1;
      if (window.umami && typeof window.umami.track === "function") {
        window.clearInterval(timer);
        callback();
        return;
      }
      if (tries >= 40) {
        window.clearInterval(timer);
      }
    }, 250);
  };
  var initScrollToTop = () => {
    const scrollToTop = document.querySelector(".scroll-to-top");
    if (!scrollToTop) {
      return;
    }
    const updateVisibility = () => {
      scrollToTop.classList.toggle("is-visible", window.scrollY > 300);
    };
    window.addEventListener("scroll", updateVisibility, { passive: true });
    updateVisibility();
    scrollToTop.addEventListener("click", () => {
      trackUmami("scroll_to_top", { label: "\u8FD4\u56DE\u9876\u90E8" });
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };
  var initArticleTracking = () => {
    const isArticlePage = !!document.querySelector("article.main-article, .article-content, .post-content");
    if (!isArticlePage) {
      return;
    }
    const { title, url, category } = getPageContext();
    trackUmami("article_read", {
      title,
      url,
      category: category || "uncategorized"
    });
  };
  var initOutboundLinkTracking = () => {
    document.querySelectorAll("a[href]").forEach((link) => {
      const href = link.getAttribute("href") || "";
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) {
        return;
      }
      const isExternal = href.startsWith("http://") || href.startsWith("https://") || href.startsWith("//");
      if (!isExternal) {
        return;
      }
      link.addEventListener("click", (event) => {
        const target = event.currentTarget;
        const destination = target?.href || href;
        const label = toSafeText(target?.textContent || target?.getAttribute("aria-label") || target?.title) || "external_link";
        trackUmami("outbound_click", {
          href: destination,
          label
        });
      }, { passive: true });
    });
  };
  var initButtonTracking = () => {
    document.body.addEventListener("click", (event) => {
      const target = event.target;
      if (!target) {
        return;
      }
      const interactive = target.closest('button, [role="button"], a');
      if (!interactive) {
        return;
      }
      if (interactive.matches("a")) {
        const href = interactive.getAttribute("href") || "";
        if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("//")) {
          return;
        }
      }
      const label = toSafeText(
        interactive.getAttribute("aria-label") || interactive.getAttribute("title") || interactive.textContent || interactive.className || "button"
      ) || "button";
      if (interactive.classList.contains("scroll-to-top")) {
        return;
      }
      if (interactive.classList.contains("copyCodeButton")) {
        trackUmami("code_copy", { label });
        return;
      }
      trackUmami("button_click", {
        label,
        tag: interactive.tagName.toLowerCase()
      });
    }, { passive: true });
  };
  document.addEventListener("DOMContentLoaded", () => {
    initScrollToTop();
    runWhenUmamiReady(() => {
      initArticleTracking();
      initOutboundLinkTracking();
      initButtonTracking();
    });
  });
})();
