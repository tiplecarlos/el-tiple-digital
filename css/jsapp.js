document.addEventListener("DOMContentLoaded", () => {
  // 1. Navegación entre módulos
  const navButtons = document.querySelectorAll(".nav-btn");
  const panels = document.querySelectorAll(".module-panel");
  const jumpButtons = document.querySelectorAll("[data-jump]");

  function activateModule(targetId) {
    navButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.target === targetId);
    });
    panels.forEach((panel) => {
      panel.classList.toggle("active", panel.id === targetId);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => activateModule(btn.dataset.target));
  });

  jumpButtons.forEach((btn) => {
    btn.addEventListener("click", () => activateModule(btn.dataset.jump));
  });

  // 2. Indicador de conectividad (En línea / Modo Offline PWA)
  const statusPill = document.getElementById("offline-status");
  const statusText = document.getElementById("status-text");

  function updateOnlineStatus() {
    if (navigator.onLine) {
      statusPill.classList.remove("offline");
      statusText.textContent = "En línea";
    } else {
      statusPill.classList.add("offline");
      statusText.textContent = "Modo Offline (PWA)";
    }
  }

  window.addEventListener("online", updateOnlineStatus);
  window.addEventListener("offline", updateOnlineStatus);
  updateOnlineStatus();

  // 3. Registro del Service Worker para almacenamiento local PWA
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./sw.js")
      .catch((err) => console.warn("Service Worker no registrado:", err));
  }
});
