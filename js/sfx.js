// Som de clique (assets/sounds/click.mp3) em links e botões, com botão ♪ para ligar/desligar.
// Para deixar mais baixo ou mais alto, mexa só em VOLUME (0 a 1).
const VOLUME = 0.6;
const CLICK_URL = new URL("../assets/sounds/click.mp3", import.meta.url).href;

let enabled = true;
let clickSound = null;

function playClick() {
  if (!enabled) return;
  try {
    if (!clickSound) {
      clickSound = new Audio(CLICK_URL);
      clickSound.preload = "auto";
    }
    // Clona o áudio para que cliques rápidos possam se sobrepor.
    const instance = clickSound.cloneNode();
    instance.volume = VOLUME;
    instance.play().catch(() => {});
  } catch (e) {
    /* áudio indisponível: ignora */
  }
}

export function initSfx() {
  // Carrega o arquivo antes do primeiro clique para não haver atraso.
  clickSound = new Audio(CLICK_URL);
  clickSound.preload = "auto";

  document.addEventListener("click", (e) => {
    const el = e.target.closest && e.target.closest("a,button");
    if (el && el.id !== "sfx") playClick();
  });

  const toggle = document.getElementById("sfx");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    if (enabled) {
      playClick(); // último clique antes de silenciar
      enabled = false;
    } else {
      enabled = true;
      playClick();
    }
    toggle.textContent = enabled ? "♪ on" : "♪ off";
    toggle.setAttribute("aria-pressed", String(enabled));
  });
}
