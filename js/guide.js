// Guide Viewer - Loads and renders markdown guides
(function () {
  'use strict';

  var GUIDES = {
    'kubernetes': {
      file: '../guides/kubernetes-complete-guide.md',
      title: 'Kubernetes Complete CKA Technical Reference',
      breadcrumb: 'Kubernetes Guide'
    },
    'linux-networking': {
      file: '../guides/linux-network-commands.md',
      title: 'Complete Linux Network Commands Reference',
      breadcrumb: 'Linux Networking Guide'
    },
    'gateway-api': {
      file: '../guides/gateway-api-complete-guide.md',
      title: 'Gateway API Complete Guide',
      breadcrumb: 'Gateway API Guide'
    },
    'gateway-api-cka': {
      file: '../guides/gateway-api-cka-guide.md',
      title: 'Gateway API CKA Step-by-Step Guide',
      breadcrumb: 'Gateway API Step-By-Step Guide'
    },
    'coredns': {
      file: '../guides/coredns-complete-guide.md',
      title: 'CoreDNS Kubernetes Complete Guide',
      breadcrumb: 'CoreDNS Guide'
    },
    'coredns-cka': {
      file: '../guides/coredns-cka-guide.md',
      title: 'CoreDNS CKA Step-by-Step Guide',
      breadcrumb: 'CoreDNS Step-By-Step Guide'
    },
    'ingress': {
      file: '../guides/ingress-complete-guide.md',
      title: 'Ingress Complete Guide',
      breadcrumb: 'Ingress Guide'
    },
    'ingress-cka': {
      file: '../guides/ingress-cka-guide.md',
      title: 'Ingress CKA Step-by-Step Guide',
      breadcrumb: 'Ingress Step-By-Step Guide'
    },
    'k8s-install': {
      file: '../Kubernetes installation/guide.md',
      title: 'Kubernetes HA Cluster Setup Lab Guide',
      breadcrumb: 'K8s HA Cluster Setup'
    }
  };

  function getGuideKey() {
    var params = new URLSearchParams(window.location.search);
    return params.get('id') || 'kubernetes';
  }

  function getReferrerPage() {
    var params = new URLSearchParams(window.location.search);
    return params.get('from') || '';
  }

  function setupBackNavigation() {
    var fromPage = getReferrerPage();
    var backUrl = fromPage ? '../index.html#' + fromPage : '../index.html#main';

    // Update the existing "Mind Map" breadcrumb link to return to the correct page
    var breadcrumbLink = document.querySelector('.breadcrumb-link');
    if (breadcrumbLink) {
      breadcrumbLink.href = backUrl;
    }

    // Also update the logo link
    var logoLink = document.querySelector('.logo');
    if (logoLink) {
      logoLink.href = backUrl;
    }

    // Add a back button in the header for easy navigation (especially on mobile)
    var backBtn = document.createElement('a');
    backBtn.href = backUrl;
    backBtn.className = 'guide-back-btn';
    backBtn.innerHTML = '&#8592; Back';
    backBtn.title = 'Return to mind map';
    var headerLeft = document.querySelector('.header-left');
    if (headerLeft) {
      headerLeft.insertBefore(backBtn, headerLeft.firstChild);
    }
  }

  function slugify(text) {
    return text.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  // Scroll a heading into view inside .guide-content WITHOUT scrolling the
  // body/window (which scrollIntoView can do, pushing the header off-screen).
  function scrollContentTo(target, behavior) {
    var content = document.querySelector('.guide-content');
    if (!content || !target) return;
    var contentRect = content.getBoundingClientRect();
    var targetRect = target.getBoundingClientRect();
    var offset = targetRect.top - contentRect.top;
    content.scrollTo({ top: content.scrollTop + offset, behavior: behavior || 'smooth' });
  }

  function buildTOC(article) {
    var headings = article.querySelectorAll('h1, h2, h3');
    var tocContainer = document.getElementById('sidebar-toc');
    tocContainer.innerHTML = '';

    var tocItems = [];

    headings.forEach(function (h, index) {
      var id = 'heading-' + index + '-' + slugify(h.textContent.substring(0, 50));
      h.id = id;

      var level = parseInt(h.tagName.charAt(1));
      // Only show h1 and h2 in TOC to keep it manageable
      if (level > 2) return;

      var a = document.createElement('a');
      a.href = '#' + id;
      a.className = 'toc-item toc-h' + level;
      a.textContent = h.textContent;
      a.setAttribute('data-target', id);

      a.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.getElementById(id);
        if (target) {
          scrollContentTo(target, 'smooth');
          history.replaceState(null, null, '#' + id);
        }
        document.getElementById('guide-sidebar').classList.remove('mobile-open');
      });

      tocContainer.appendChild(a);
      tocItems.push({ el: a, target: document.getElementById(id) });
    });

    return tocItems;
  }

  function setupScrollSpy(tocItems) {
    var content = document.querySelector('.guide-content');
    if (!content || tocItems.length === 0) return;

    var lastActive = null;

    function updateActive() {
      var scrollTop = content.scrollTop;
      var active = null;

      for (var i = tocItems.length - 1; i >= 0; i--) {
        var target = tocItems[i].target;
        if (target && target.offsetTop - 100 <= scrollTop) {
          active = tocItems[i];
          break;
        }
      }

      if (active !== lastActive) {
        if (lastActive) lastActive.el.classList.remove('active');
        if (active) {
          active.el.classList.add('active');
          var sidebar = document.getElementById('sidebar-toc');
          var itemTop = active.el.offsetTop - sidebar.offsetTop;
          var sidebarScroll = sidebar.scrollTop;
          var sidebarHeight = sidebar.clientHeight;
          if (itemTop < sidebarScroll || itemTop > sidebarScroll + sidebarHeight - 40) {
            sidebar.scrollTo({ top: itemTop - sidebarHeight / 3, behavior: 'smooth' });
          }
        }
        lastActive = active;
      }
    }

    content.addEventListener('scroll', updateActive);
    updateActive();
  }

  function setupBackToTop() {
    var btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.innerHTML = '&#8593;';
    btn.title = 'Back to top';
    document.body.appendChild(btn);

    var content = document.querySelector('.guide-content');

    btn.addEventListener('click', function () {
      content.scrollTo({ top: 0, behavior: 'smooth' });
    });

    content.addEventListener('scroll', function () {
      if (content.scrollTop > 400) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    });
  }

  function displayContent(html) {
    var article = document.getElementById('guide-article');
    var loading = document.getElementById('guide-loading');

    article.innerHTML = html;
    article.classList.add('loaded');
    loading.style.display = 'none';

    var tocItems = buildTOC(article);
    setupScrollSpy(tocItems);
    setupBackToTop();

    // Initialize search feature after content is rendered
    if (typeof window.initGuideSearch === 'function') {
      window.initGuideSearch();
    }

    if (window.location.hash) {
      var hashTarget = document.getElementById(window.location.hash.slice(1));
      if (hashTarget) {
        setTimeout(function () {
          scrollContentTo(hashTarget, 'auto');
        }, 100);
      }
    }
  }

  function parseAndDisplay(md, cacheKey) {
    requestAnimationFrame(function () {
      marked.setOptions({ gfm: true, breaks: false, pedantic: false });
      var html = marked.parse(md);

      // Cache rendered HTML for instant subsequent visits
      try {
        sessionStorage.setItem(cacheKey, html);
      } catch (e) {
        // sessionStorage full or unavailable — ignore
      }

      displayContent(html);
    });
  }

  function loadGuide() {
    var key = getGuideKey();
    var guide = GUIDES[key];

    if (!guide) {
      document.getElementById('guide-loading').innerHTML =
        '<p>Guide not found. <a href="guide.html?id=kubernetes">Load Kubernetes Guide</a></p>';
      return;
    }

    // Update page title and breadcrumb
    document.title = guide.title + ' - CKA Mind Map';
    var breadcrumbEl = document.getElementById('guide-title-breadcrumb');
    if (breadcrumbEl) breadcrumbEl.textContent = guide.breadcrumb;

    var cacheKey = 'guide-html-' + key;

    // 1) Check sessionStorage cache first (instant — no parsing needed)
    try {
      var cached = sessionStorage.getItem(cacheKey);
      if (cached) {
        displayContent(cached);
        return;
      }
    } catch (e) { /* ignore */ }

    // 2) Fetch the markdown file and parse it
    fetch(guide.file)
      .then(function (res) {
        if (!res.ok) throw new Error('Failed to load guide');
        return res.text();
      })
      .then(function (md) {
        parseAndDisplay(md, cacheKey);
      })
      .catch(function (err) {
        document.getElementById('guide-loading').innerHTML =
          '<p style="color: #f85149;">Error loading guide: ' + err.message + '</p>';
      });
  }

  // Sidebar toggle
  function setupSidebar() {
    var toggle = document.getElementById('sidebar-toggle');
    var sidebar = document.getElementById('guide-sidebar');

    toggle.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        sidebar.classList.toggle('mobile-open');
        updateOverlay();
      } else {
        sidebar.classList.toggle('collapsed');
      }
    });

    // Mobile TOC button in header — always visible so users can reopen the sidebar
    var tocBtn = document.createElement('button');
    tocBtn.className = 'mobile-toc-btn';
    tocBtn.innerHTML = '&#9776;';
    tocBtn.title = 'Show table of contents';
    tocBtn.addEventListener('click', function () {
      sidebar.classList.add('mobile-open');
      updateOverlay();
    });
    var headerRight = document.querySelector('.header-right');
    if (headerRight) {
      headerRight.insertBefore(tocBtn, headerRight.firstChild);
    }

    // Overlay to close sidebar on mobile when tapping outside
    var overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    overlay.addEventListener('click', function () {
      sidebar.classList.remove('mobile-open');
      updateOverlay();
    });
    document.body.appendChild(overlay);

    function updateOverlay() {
      if (sidebar.classList.contains('mobile-open')) {
        overlay.classList.add('active');
      } else {
        overlay.classList.remove('active');
      }
    }
  }

  // Init
  document.addEventListener('DOMContentLoaded', function () {
    setupBackNavigation();
    setupSidebar();
    loadGuide();
  });
})();
