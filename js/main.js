/**
 * ACM — ACME Cognitive Mind
 * Main JavaScript: Neural Canvas + Interactions + Animations
 */

'use strict';

// ─────────────────────────────────────────────
// NEURAL NETWORK CANVAS BACKGROUND
// ─────────────────────────────────────────────
(function initNeuralCanvas() {
  const canvas = document.getElementById('neural-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, nodes, mouse = { x: -1000, y: -1000 };
  const NODE_COUNT = 80;
  const MAX_DIST   = 160;
  const NODE_SPEED = 0.4;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createNodes() {
    nodes = Array.from({ length: NODE_COUNT }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * NODE_SPEED,
      vy: (Math.random() - 0.5) * NODE_SPEED,
      r:  Math.random() * 2 + 1,
    }));
  }

  function drawFrame() {
    ctx.clearRect(0, 0, W, H);

    // Move nodes
    nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    });

    // Draw connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.35;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(0, 102, 255, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Mouse interaction
      const mdx = nodes[i].x - mouse.x;
      const mdy = nodes[i].y - mouse.y;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mdist < 200) {
        const alpha = (1 - mdist / 200) * 0.6;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(0, 245, 255, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    // Draw nodes
    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 245, 255, 0.5)';
      ctx.fill();
    });

    requestAnimationFrame(drawFrame);
  }

  window.addEventListener('resize', () => { resize(); createNodes(); });
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

  resize();
  createNodes();
  drawFrame();
})();

// ─────────────────────────────────────────────
// HEADER SCROLL EFFECT
// ─────────────────────────────────────────────
(function initHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
})();

// ─────────────────────────────────────────────
// MOBILE MENU
// ─────────────────────────────────────────────
(function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const nav    = document.querySelector('.nav-links');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => nav.classList.remove('open'));
  });
})();

// ─────────────────────────────────────────────
// COUNTER ANIMATION
// ─────────────────────────────────────────────
(function initCounters() {
  const els = document.querySelectorAll('.stat-value[data-target]');
  if (!els.length) return;

  function animateCounter(el) {
    const target  = parseFloat(el.dataset.target);
    const isFloat = target % 1 !== 0;
    const duration = 2000;
    const step     = 16;
    const steps    = duration / step;
    let current    = 0;

    const timer = setInterval(() => {
      current += target / steps;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = isFloat
        ? current.toFixed(2)
        : Math.floor(current).toString();
    }, step);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  els.forEach(el => observer.observe(el));
})();

// ─────────────────────────────────────────────
// SCROLL REVEAL
// ─────────────────────────────────────────────
(function initScrollReveal() {
  // Generic fade-in elements
  document.querySelectorAll('.section, .cap-card, .research-card, .contact-card').forEach(el => {
    el.classList.add('fade-in');
  });

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-in, .arch-layer').forEach(el => io.observe(el));
})();

// ─────────────────────────────────────────────
// TERMINAL TYPEWRITER
// ─────────────────────────────────────────────
(function initTerminal() {
  const output = document.getElementById('terminal-output');
  if (!output) return;

  const lines = [
    { cls: '',        prompt: 'ACM>', text: 'initializing cognitive core...' },
    { cls: 'success', prompt: 'SYS>', text: 'memory_matrix: ONLINE' },
    { cls: 'success', prompt: 'SYS>', text: 'reasoning_engine: ACTIVE' },
    { cls: 'success', prompt: 'SYS>', text: 'causal_model: LOADED' },
    { cls: '',        prompt: 'ACM>', text: 'loading agent_swarm[847]...' },
    { cls: 'success', prompt: 'SYS>', text: 'coordination_layer: NOMINAL' },
    { cls: '',        prompt: 'ACM>', text: 'engaging safety_alignment_v2...' },
    { cls: 'success', prompt: 'SYS>', text: 'alignment_score: 99.97%' },
  ];

  let started = false;

  function runTerminal() {
    if (started) return;
    started = true;
    output.innerHTML = '';

    lines.forEach((line, i) => {
      setTimeout(() => {
        const div = document.createElement('div');
        div.className = 't-line' + (line.cls ? ' ' + line.cls : '');
        div.innerHTML = `<span class="prompt">${line.prompt}</span> ${line.text}`;
        output.appendChild(div);

        if (i === lines.length - 1) {
          setTimeout(() => {
            const cursor = document.createElement('div');
            cursor.className = 't-line blink-cursor';
            cursor.innerHTML = '<span class="prompt">ACM></span> <span class="cursor">█</span>';
            output.appendChild(cursor);
          }, 400);
        }
      }, i * 380);
    });
  }

  const io = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      runTerminal();
      io.disconnect();
    }
  }, { threshold: 0.3 });
  io.observe(output);
})();

// ─────────────────────────────────────────────
// SMOOTH ANCHOR SCROLLING
// ─────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      const offset = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ─────────────────────────────────────────────
// GLITCH EFFECT ON LOGO HOVER
// ─────────────────────────────────────────────
(function initGlitch() {
  const logoAcm = document.querySelector('.logo-acm');
  if (!logoAcm) return;
  logoAcm.addEventListener('mouseenter', () => {
    logoAcm.style.animation = 'neon-flicker 1.5s linear';
    setTimeout(() => { logoAcm.style.animation = ''; }, 1500);
  });
})();

// ─────────────────────────────────────────────
// CAPABILITY CARDS — STAGGER REVEAL
// ─────────────────────────────────────────────
(function initCapCards() {
  const cards = document.querySelectorAll('.cap-card');
  const io = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      cards.forEach((card, i) => {
        setTimeout(() => card.classList.add('visible'), i * 100);
      });
      io.disconnect();
    }
  }, { threshold: 0.1 });
  const grid = document.querySelector('.cap-grid');
  if (grid) io.observe(grid);
})();

console.log('%c[ACM] System initialized. Cognition active.', 'color:#00f5ff;font-family:monospace;font-size:12px;');
