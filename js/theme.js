// Alterna entre tema claro e escuro (o padrão segue o sistema).
export function initTheme() {
  const button = document.getElementById("theme");
  if (!button) return;
  button.addEventListener("click", () => {
    const root = document.documentElement;
    const dark = getComputedStyle(root).colorScheme === "dark";
    root.setAttribute("data-theme", dark ? "light" : "dark");
  });
}
