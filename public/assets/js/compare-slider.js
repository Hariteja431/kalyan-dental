/**
 * Compare slider — vanilla JS (pointer events + rAF).
 * Expects [data-compare-slider] with .compare-slider__viewport, .compare-slider__handle, optional .compare-slider__hint.
 */
(function () {
  "use strict";

  var CLAMP_MIN = 5;
  var CLAMP_MAX = 95;

  function clamp(n) {
    return Math.min(CLAMP_MAX, Math.max(CLAMP_MIN, n));
  }

  function setPos(viewport, pct) {
    viewport.style.setProperty("--pos", String(clamp(pct)) + "%");
  }

  function init(root) {
    if (root.dataset.compareSliderInit === "1") return;

    var viewport = root.querySelector(".compare-slider__viewport");
    var handle = root.querySelector(".compare-slider__handle");
    var hint = root.querySelector(".compare-slider__hint");
    if (!viewport || !handle) return;

    root.dataset.compareSliderInit = "1";

    setPos(viewport, 50);

    var dragging = false;
    var rafId = 0;
    var pendingX = null;
    var teaserFrame = null;
    var teaserRunning = false;

    function applyFromClientX(clientX) {
      var rect = viewport.getBoundingClientRect();
      if (rect.width <= 0) return;
      var x = ((clientX - rect.left) / rect.width) * 100;
      setPos(viewport, x);
    }

    function flushRaf() {
      rafId = 0;
      if (pendingX !== null) {
        applyFromClientX(pendingX);
        pendingX = null;
      }
    }

    function onPointerMove(e) {
      if (!dragging) return;
      pendingX = e.clientX;
      if (!rafId) rafId = requestAnimationFrame(flushRaf);
    }

    function onPointerUp(e) {
      dragging = false;
      try {
        viewport.releasePointerCapture(e.pointerId);
      } catch (_) {}
      viewport.removeEventListener("pointermove", onPointerMove);
      viewport.removeEventListener("pointerup", onPointerUp);
      viewport.removeEventListener("pointercancel", onPointerUp);
    }

    function cancelTeaser() {
      if (teaserFrame != null) {
        cancelAnimationFrame(teaserFrame);
        teaserFrame = null;
      }
      teaserRunning = false;
    }

    function onPointerDown(e) {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      cancelTeaser();

      viewport.setPointerCapture(e.pointerId);
      dragging = true;
      viewport.addEventListener("pointermove", onPointerMove);
      viewport.addEventListener("pointerup", onPointerUp);
      viewport.addEventListener("pointercancel", onPointerUp);

      pendingX = e.clientX;
      if (!rafId) rafId = requestAnimationFrame(flushRaf);
    }

    viewport.addEventListener("pointerdown", onPointerDown);

    function runTeaser() {
      if (teaserRunning) return;
      teaserRunning = true;
      var start = performance.now();
      var duration = 1800;

      function frame(now) {
        if (!teaserRunning) return;
        var elapsed = now - start;
        var t = Math.min(1, elapsed / duration);
        var pos;
        if (t < 0.5) {
          pos = 50 + (30 - 50) * (t / 0.5);
        } else {
          pos = 30 + (50 - 30) * ((t - 0.5) / 0.5);
        }
        setPos(viewport, pos);
        if (t < 1) {
          teaserFrame = requestAnimationFrame(frame);
        } else {
          teaserFrame = null;
          teaserRunning = false;
          setPos(viewport, 50);
        }
      }
      teaserFrame = requestAnimationFrame(frame);
    }

    function runPulse() {
      handle.classList.add("compare-slider__handle--pulse");
      var btn = handle.querySelector(".compare-slider__handle-btn");
      var target = btn || handle;
      function onAnimEnd() {
        handle.classList.remove("compare-slider__handle--pulse");
        target.removeEventListener("animationend", onAnimEnd);
      }
      target.addEventListener("animationend", onAnimEnd);
    }

    var io = new IntersectionObserver(
      function (entries) {
        if (!entries[0] || !entries[0].isIntersecting) return;
        io.disconnect();
        runTeaser();
        runPulse();
        if (typeof window.matchMedia === "function" && window.matchMedia("(max-width: 767px)").matches && hint) {
          window.setTimeout(function () {
            hint.classList.add("compare-slider__hint--fade");
          }, 2500);
        }
      },
      { threshold: 0.2 },
    );
    io.observe(root);
  }

  function boot() {
    document.querySelectorAll("[data-compare-slider]").forEach(init);
  }

  window.__compareSliderBoot = boot;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
