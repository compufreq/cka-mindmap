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
    }
  };

  function getGuideKey() {
    var params = new URLSearchParams(window.location.search);
    return params.get('id') || 'kubernetes';
  }

  function slugify(text) {
    return text.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
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
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

    if (window.location.hash) {
      var hashTarget = document.getElementById(window.location.hash.slice(1));
      if (hashTarget) {
        setTimeout(function () {
          hashTarget.scrollIntoView({ block: 'start' });
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
      } else {
        sidebar.classList.toggle('collapsed');
      }
    });
  }

  // Init
  document.addEventListener('DOMContentLoaded', function () {
    setupSidebar();
    loadGuide();
  });
})();
