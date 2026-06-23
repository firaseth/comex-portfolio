document.addEventListener('DOMContentLoaded', function() {

      /* ===== DATA ===== */
      var skillsData = [
        { name: 'JavaScript', sub: 'ES6+, TypeScript', percent: 92 },
        { name: 'React', sub: 'Next.js, Redux', percent: 88 },
        { name: 'Node.js', sub: 'Express, Fastify', percent: 85 },
        { name: 'Three.js', sub: 'WebGL, Shaders', percent: 78 },
        { name: 'UI/UX Design', sub: 'Figma, Prototyping', percent: 90 },
        { name: 'DevOps', sub: 'Docker, CI/CD', percent: 75 }
      ];

      var projectsData = [
        { title: 'Nova Commerce', desc: 'Full-stack e-commerce platform with real-time inventory, AI-powered recommendations, and a seamless checkout experience.', tags: ['React', 'Node.js', 'PostgreSQL'], category: 'web', img: 'novacommerce3' },
        { title: 'Stellar Viewer', desc: 'Interactive 3D product configurator allowing users to customize and explore products in real-time 3D space.', tags: ['Three.js', 'WebGL', 'React'], category: 'web', img: 'stellarviewer3' },
        { title: 'PulseTrack', desc: 'Cross-platform fitness application with workout tracking, social challenges, and health analytics dashboard.', tags: ['React Native', 'Firebase'], category: 'mobile', img: 'pulsetrack3' },
        { title: 'Lumina Brand System', desc: 'Complete brand identity system including logo, typography, color system, and comprehensive design guidelines.', tags: ['Figma', 'Illustrator'], category: 'design', img: 'luminabrand3' },
        { title: 'DataFlow Dashboard', desc: 'Real-time analytics dashboard with interactive charts, live data streams, and customizable widget layouts.', tags: ['Vue.js', 'D3.js', 'WebSocket'], category: 'web', img: 'dataflowdash3' },
        { title: 'Connecta Social', desc: 'Feature-rich social networking app with stories, live messaging, and algorithmic content discovery.', tags: ['Flutter', 'GraphQL'], category: 'mobile', img: 'connectasocial3' }
      ];

      var testimonialsData = [
        { quote: 'Comex transformed our vision into a stunning digital reality. The attention to detail and technical execution exceeded every expectation we had. Our conversion rate jumped 40% after the redesign.', name: 'Sarah Chen', role: 'CEO, TechFlow', avatar: 'sarahchen42', stars: 5 },
        { quote: 'Working with Comex was a game-changer for our product. They brought a level of polish and interactivity that our users immediately noticed and loved. Truly world-class work.', name: 'Marcus Rivera', role: 'Creative Director, Studio Nine', avatar: 'marcusrivera7', stars: 5 },
        { quote: 'The attention to detail and creative problem-solving Comex brings to every project is unmatched. They delivered our platform ahead of schedule and it performed flawlessly from day one.', name: 'Elena Kowalski', role: 'Founder, BrightPath', avatar: 'elenakowalski3', stars: 5 }
      ];

      var typingStrings = [
        'Creative Development Studio',
        'UI/UX Design Team',
        '3D Experience Builders',
        'Digital Craft Studio'
      ];

      /* ===== HERO CHARACTER ANIMATION ===== */
      var heroNameEl = document.getElementById('hero-name');
      var nameText = 'comex';
      var splashDelay = 2600; /* match splash hide timing */
      nameText.split('').forEach(function(ch, i) {
        var span = document.createElement('span');
        span.className = 'char';
        span.textContent = ch;
        span.style.animationDelay = (splashDelay + 100 + i * 80) + 'ms';
        heroNameEl.appendChild(span);
      });
      /* Add the dot */
      var dot = document.createElement('span');
      dot.className = 'char';
      dot.textContent = '.';
      dot.style.color = 'var(--accent)';
      dot.style.animationDelay = (splashDelay + 100 + nameText.length * 80) + 'ms';
      heroNameEl.appendChild(dot);

      /* ===== SPLASH ===== */
      var splash = document.getElementById('splash');
      setTimeout(function() {
        splash.classList.add('hide');
        setTimeout(function() { splash.style.display = 'none'; }, 900);
      }, 2400);

      /* ===== THEME ===== */
      var html = document.documentElement;
      var themeBtn = document.querySelector('.theme-toggle');
      html.setAttribute('data-theme', localStorage.getItem('theme') || 'dark');
      themeBtn.addEventListener('click', function() {
        var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateParticleColors();
      });

      /* ===== CURSOR ===== */
      var cursorOuter = document.getElementById('cursor-outer');
      var cursorDot = document.getElementById('cursor-dot');
      var mouseX = 0, mouseY = 0, outerX = 0, outerY = 0, dotX = 0, dotY = 0;
      var isTouch = !window.matchMedia('(pointer: fine)').matches;

      if (!isTouch) {
        document.addEventListener('mousemove', function(e) { mouseX = e.clientX; mouseY = e.clientY; });
        var hoverSel = 'a, button, .filter-btn, .project-card, .skill-card, input, textarea';
        document.addEventListener('mouseover', function(e) { if (e.target.closest(hoverSel)) document.body.classList.add('cursor-hover'); });
        document.addEventListener('mouseout', function(e) { if (e.target.closest(hoverSel)) document.body.classList.remove('cursor-hover'); });
        (function cursorLoop() {
          outerX += (mouseX - outerX) * 0.15; outerY += (mouseY - outerY) * 0.15;
          dotX += (mouseX - dotX) * 0.35; dotY += (mouseY - dotY) * 0.35;
          cursorOuter.style.left = outerX + 'px'; cursorOuter.style.top = outerY + 'px';
          cursorDot.style.left = dotX + 'px'; cursorDot.style.top = dotY + 'px';
          requestAnimationFrame(cursorLoop);
        })();
      } else { cursorOuter.style.display = 'none'; cursorDot.style.display = 'none'; }

      /* ===== MAGNETIC ===== */
      if (!isTouch) {
        document.querySelectorAll('.magnetic').forEach(function(el) {
          el.addEventListener('mousemove', function(e) {
            var r = el.getBoundingClientRect();
            el.style.transform = 'translate(' + ((e.clientX - r.left - r.width/2) * 0.25) + 'px,' + ((e.clientY - r.top - r.height/2) * 0.25) + 'px)';
          });
          el.addEventListener('mouseleave', function() { el.style.transform = ''; });
        });
      }

      /* ===== HERO GLOW ===== */
      var heroGlow = document.getElementById('hero-glow');
      if (!isTouch) {
        document.addEventListener('mousemove', function(e) {
          heroGlow.style.left = e.clientX + 'px';
          heroGlow.style.top = e.clientY + 'px';
        });
      }

      /* ===== PARTICLES ===== */
      var canvas = document.getElementById('particles-canvas');
      var ctx = canvas.getContext('2d');
      var particles = [];
      var pCount = isTouch ? 35 : 75;
      var connectDist = 120;
      var mpX = -1000, mpY = -1000;
      var pCol, lCol;

      function getRGB() { return getComputedStyle(html).getPropertyValue('--accent-rgb').trim(); }
      function updateParticleColors() { pCol = 'rgba(' + getRGB() + ','; lCol = 'rgba(' + getRGB() + ','; }
      updateParticleColors();

      function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
      resizeCanvas(); window.addEventListener('resize', resizeCanvas);
      if (!isTouch) document.addEventListener('mousemove', function(e) { mpX = e.clientX; mpY = e.clientY; });

      for (var i = 0; i < pCount; i++) particles.push({ x: Math.random()*canvas.width, y: Math.random()*canvas.height, vx: (Math.random()-0.5)*0.5, vy: (Math.random()-0.5)*0.5, r: Math.max(1, Math.random()*2.5) });

      (function animP() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var pO = parseFloat(getComputedStyle(html).getPropertyValue('--particle-opacity')) || 0.5;
        var lO = parseFloat(getComputedStyle(html).getPropertyValue('--line-opacity')) || 0.06;
        for (var i = 0; i < particles.length; i++) {
          var p = particles[i]; p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
          p.x = Math.max(0, Math.min(canvas.width, p.x));
          p.y = Math.max(0, Math.min(canvas.height, p.y));
          if (!isTouch) {
            var mdx = p.x-mpX, mdy = p.y-mpY, md = Math.sqrt(mdx*mdx+mdy*mdy);
            if (md < 150 && md > 0) { var f = (150-md)/150*0.02; p.vx += (mdx/md)*f; p.vy += (mdy/md)*f; }
          }
          var sp = Math.sqrt(p.vx*p.vx+p.vy*p.vy); if (sp > 1.5) { p.vx *= 0.98; p.vy *= 0.98; }
          ctx.beginPath(); ctx.arc(p.x, p.y, Math.max(0.5, p.r), 0, Math.PI*2);
          ctx.fillStyle = pCol + pO + ')'; ctx.fill();
          for (var j = i+1; j < particles.length; j++) {
            var p2 = particles[j], dx = p.x-p2.x, dy = p.y-p2.y, d = Math.sqrt(dx*dx+dy*dy);
            if (d < connectDist) {
              ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = lCol + ((1-d/connectDist)*lO) + ')'; ctx.lineWidth = 0.8; ctx.stroke();
            }
          }
        }
        requestAnimationFrame(animP);
      })();

      /* ===== NAV ===== */
      var nav = document.querySelector('nav');
      var hamburger = document.querySelector('.hamburger');
      var mobileMenu = document.getElementById('mobile-menu');
      var navLinks = document.querySelectorAll('.nav-link');
      var sections = document.querySelectorAll('section[id]');

      window.addEventListener('scroll', function() {
        nav.classList.toggle('scrolled', window.scrollY > 50);
        var sp = window.scrollY + 200;
        sections.forEach(function(s) {
          if (sp >= s.offsetTop && sp < s.offsetTop + s.offsetHeight) {
            navLinks.forEach(function(l) { l.classList.toggle('active', l.getAttribute('href') === '#' + s.id); });
          }
        });
      });

      hamburger.addEventListener('click', function() {
        var open = hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', open);
        document.body.style.overflow = open ? 'hidden' : '';
      });
      document.querySelectorAll('.mobile-link').forEach(function(l, i) {
        l.style.transitionDelay = (i * 0.06) + 's';
        l.addEventListener('click', function() {
          hamburger.classList.remove('open'); mobileMenu.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false'); document.body.style.overflow = '';
        });
      });

      /* ===== SCROLL PROGRESS ===== */
      var scrollProg = document.getElementById('scroll-progress');
      window.addEventListener('scroll', function() {
        var h = document.documentElement.scrollHeight - window.innerHeight;
        scrollProg.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
      });

      /* ===== TYPING ===== */
      var typedEl = document.getElementById('typed-text');
      var sIdx = 0, cIdx = 0, deleting = false;
      (function typeLoop() {
        var s = typingStrings[sIdx];
        if (deleting) { typedEl.textContent = s.substring(0, --cIdx); }
        else { typedEl.textContent = s.substring(0, ++cIdx); }
        var d = deleting ? 35 : 75;
        if (!deleting && cIdx === s.length) { d = 2200; deleting = true; }
        else if (deleting && cIdx === 0) { deleting = false; sIdx = (sIdx + 1) % typingStrings.length; d = 400; }
        setTimeout(typeLoop, d);
      })();

      /* ===== HERO 3D CARD ===== */
      var heroCard = document.getElementById('hero-card');
      var floatEls = heroCard.querySelectorAll('.float-el');
      if (!isTouch) {
        document.addEventListener('mousemove', function(e) {
          var r = heroCard.getBoundingClientRect();
          var dx = Math.max(-1, Math.min(1, (e.clientX - r.left - r.width/2) / (r.width/2)));
          var dy = Math.max(-1, Math.min(1, (e.clientY - r.top - r.height/2) / (r.height/2)));
          heroCard.style.transform = 'rotateY(' + (dx*12) + 'deg) rotateX(' + (-dy*12) + 'deg)';
          floatEls.forEach(function(el) {
            var dp = parseFloat(el.getAttribute('data-depth')) || 1;
            el.style.transform = 'translate(' + (dx*20*dp) + 'px,' + (dy*20*dp) + 'px) rotate(' + (el.style.getPropertyValue('--rot') || '0deg') + ')';
          });
        });
        document.addEventListener('mouseleave', function() {
          heroCard.style.transform = '';
          floatEls.forEach(function(el) { el.style.transform = ''; });
        });
      }

      /* ===== REVEAL ===== */
      var revealObs = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('visible'); });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      document.querySelectorAll('.reveal').forEach(function(el) { revealObs.observe(el); });

      /* ===== SKILLS ===== */
      var skillsGrid = document.getElementById('skills-grid');
      var circ = 2 * Math.PI * 50;
      skillsData.forEach(function(sk, i) {
        var card = document.createElement('div');
        card.className = 'skill-card reveal' + (i ? ' reveal-delay-' + Math.min(i, 5) : '');
        card.innerHTML = '<div class="skill-ring"><svg viewBox="0 0 120 120"><circle class="ring-bg" cx="60" cy="60" r="50"/><circle class="ring-fill" cx="60" cy="60" r="50" data-percent="' + sk.percent + '"/></svg><div class="ring-percent">0%</div></div><div class="skill-name">' + sk.name + '</div><div class="skill-sub">' + sk.sub + '</div>';
        skillsGrid.appendChild(card); revealObs.observe(card);
      });
      var skillAnim = false;
      new IntersectionObserver(function(entries) {
        entries.forEach(function(e) {
          if (e.isIntersecting && !skillAnim) {
            skillAnim = true;
            document.querySelectorAll('.ring-fill').forEach(function(r) { r.style.strokeDashoffset = circ - (parseInt(r.getAttribute('data-percent')) / 100) * circ; });
            document.querySelectorAll('.ring-percent').forEach(function(l, i) { animNum(l, 0, skillsData[i].percent, 1200, '%'); });
          }
        });
      }, { threshold: 0.2 }).observe(document.querySelector('.skill-card'));

      /* ===== STATS ===== */
      var statAnim = false;
      new IntersectionObserver(function(entries) {
        entries.forEach(function(e) {
          if (e.isIntersecting && !statAnim) {
            statAnim = true;
            document.querySelectorAll('.stat-num').forEach(function(el) { animNum(el, 0, parseInt(el.getAttribute('data-target')), 1800, '+'); });
          }
        });
      }, { threshold: 0.3 }).observe(document.querySelector('.stat-item'));

      function animNum(el, start, end, dur, suf) {
        var st = null;
        (function step(ts) {
          if (!st) st = ts;
          var p = Math.min((ts - st) / dur, 1);
          el.textContent = Math.round(start + (end - start) * (1 - Math.pow(1 - p, 3))) + suf;
          if (p < 1) requestAnimationFrame(step);
        })(performance.now());
      }

      /* ===== PROJECTS ===== */
      var projGrid = document.getElementById('projects-grid');
      projectsData.forEach(function(pr, i) {
        var card = document.createElement('article');
        card.className = 'project-card reveal' + (i ? ' reveal-delay-' + Math.min(i, 5) : '');
        card.setAttribute('data-category', pr.category);
        card.innerHTML = '<div class="project-img-wrap"><img class="project-img" src="https://picsum.photos/seed/' + pr.img + '/800/500" alt="' + pr.title + '" loading="lazy"><div class="project-overlay"><a href="#" aria-label="Live demo"><i class="fa-solid fa-arrow-up-right-from-square"></i></a><a href="#" aria-label="Source code"><i class="fa-brands fa-github"></i></a></div></div><div class="project-info"><div class="project-tags">' + pr.tags.map(function(t) { return '<span class="project-tag">' + t + '</span>'; }).join('') + '</div><h3 class="project-title">' + pr.title + '</h3><p class="project-desc">' + pr.desc + '</p></div>';
        projGrid.appendChild(card); revealObs.observe(card);
      });
      document.querySelectorAll('.filter-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
          document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
          btn.classList.add('active'); btn.setAttribute('aria-selected', 'true');
          var f = btn.getAttribute('data-filter');
          document.querySelectorAll('.project-card').forEach(function(c) {
            if (f === 'all' || c.getAttribute('data-category') === f) { c.classList.remove('filtered-out'); c.classList.add('filter-in'); setTimeout(function() { c.classList.remove('filter-in'); }, 400); }
            else { c.classList.add('filtered-out'); c.classList.remove('filter-in'); }
          });
        });
      });

      /* ===== TESTIMONIALS ===== */
      var track = document.getElementById('testimonial-track');
      var dotsC = document.getElementById('carousel-dots');
      var curSlide = 0, autoInt;
      testimonialsData.forEach(function(t, i) {
        var sl = document.createElement('div'); sl.className = 'testimonial-slide';
        var stars = ''; for (var s = 0; s < t.stars; s++) stars += '<i class="fa-solid fa-star"></i> ';
        sl.innerHTML = '<div class="testimonial-stars">' + stars + '</div><p class="testimonial-quote">' + t.quote + '</p><div class="testimonial-author"><img class="testimonial-avatar" src="https://picsum.photos/seed/' + t.avatar + '/120/120" alt="' + t.name + '"><div><div class="testimonial-name">' + t.name + '</div><div class="testimonial-role">' + t.role + '</div></div></div>';
        track.appendChild(sl);
        var d = document.createElement('button'); d.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        d.setAttribute('aria-label', 'Testimonial ' + (i+1)); d.addEventListener('click', function() { goSlide(i); });
        dotsC.appendChild(d);
      });
      function goSlide(idx) {
        curSlide = idx; track.style.transform = 'translateX(-' + (idx*100) + '%)';
        dotsC.querySelectorAll('.carousel-dot').forEach(function(d, i) { d.classList.toggle('active', i === idx); });
        clearInterval(autoInt); autoInt = setInterval(function() { goSlide(curSlide === testimonialsData.length-1 ? 0 : curSlide+1); }, 5000);
      }
      document.getElementById('carousel-prev').addEventListener('click', function() { goSlide(curSlide === 0 ? testimonialsData.length-1 : curSlide-1); });
      document.getElementById('carousel-next').addEventListener('click', function() { goSlide(curSlide === testimonialsData.length-1 ? 0 : curSlide+1); });
      autoInt = setInterval(function() { goSlide(curSlide === testimonialsData.length-1 ? 0 : curSlide+1); }, 5000);

      /* ===== CONTACT FORM ===== */
      var toastC = document.getElementById('toast-container');
      document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault(); var ok = true;
        var n = document.getElementById('name').value.trim();
        if (n.length < 2) { fErr('name', 'Enter at least 2 characters'); ok = false; } else fOk('name');
        var em = document.getElementById('email').value.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) { fErr('email', 'Enter a valid email'); ok = false; } else fOk('email');
        var su = document.getElementById('subject').value.trim();
        if (su.length < 3) { fErr('subject', 'Enter at least 3 characters'); ok = false; } else fOk('subject');
        var msg = document.getElementById('message').value.trim();
        if (msg.length < 10) { fErr('message', 'Enter at least 10 characters'); ok = false; } else fOk('message');
        if (ok) { toast('Message sent! We\'ll get back to you soon.', 'success'); this.reset(); }
      });
      function fErr(id, m) { document.getElementById(id).classList.add('error'); var e = document.getElementById(id+'-error'); e.textContent = m; e.classList.add('show'); }
      function fOk(id) { document.getElementById(id).classList.remove('error'); document.getElementById(id+'-error').classList.remove('show'); }
      ['name','email','subject','message'].forEach(function(id) { document.getElementById(id).addEventListener('input', function() { fOk(id); }); });

      function toast(msg, type) {
        var t = document.createElement('div'); t.className = 'toast toast-' + (type||'success');
        var ic = type === 'error' ? 'fa-circle-exclamation' : 'fa-circle-check';
        t.innerHTML = '<i class="fa-solid ' + ic + '"></i><span>' + msg + '</span><button class="toast-close" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>';
        toastC.appendChild(t);
        requestAnimationFrame(function() { requestAnimationFrame(function() { t.classList.add('show'); }); });
        t.querySelector('.toast-close').addEventListener('click', function() { t.classList.remove('show'); setTimeout(function() { t.remove(); }, 400); });
        setTimeout(function() { t.classList.remove('show'); setTimeout(function() { t.remove(); }, 400); }, 4500);
      }

      /* ===== BACK TO TOP ===== */
      var btt = document.getElementById('back-to-top');
      window.addEventListener('scroll', function() { btt.classList.toggle('show', window.scrollY > 600); });
      btt.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });

    });