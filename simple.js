/* AgroSense — site simple (hébergement web classique, sans serveur) : config.js contient « app: "" ».
   Retire tout ce qui mène au tableau de bord et remplace les appels à l'action par la vidéo.
   Chargé avant site-i18n.js pour que les nouveaux textes soient aussi traduits en arabe. */
(function () {
  const CFG = window.SAQIYA || {};
  if (CFG.app !== "") return;                                   // sur le PC (serveur Python) : rien à changer
  document.documentElement.classList.add("site-simple");
  const toVideo = (a, txt) => { a.href = "#video"; a.removeAttribute("data-app"); a.textContent = txt; };
  document.querySelectorAll("[data-app]").forEach((a) => {
    if (a.closest(".final")) toVideo(a, "Voir la vidéo");
    else if (a.closest(".top") && a.classList.contains("btn")) toVideo(a, "Voir la vidéo");
    else (a.closest(".cta-main") || a.closest("li") || a).remove();
  });
  document.querySelector("section.preview")?.remove();          // aperçu en direct du tableau de bord
  const h = document.querySelector(".final h2");
  if (h) h.textContent = "Découvrez AgroSense en vidéo.";
  document.querySelectorAll(".xf-cta p").forEach((p) => {
    if (/tableau de bord/.test(p.textContent)) p.textContent = "Suivez le projet sur GitHub ou regardez la vidéo de présentation.";
  });
})();
