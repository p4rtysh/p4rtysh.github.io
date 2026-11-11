// Desenha o gatinho pixel art dentro do <svg id="cat"> a partir de um mapa em texto.
const MAP = [
  "..kk......kk..",
  ".kppk....kppk.",
  ".kpokkkkkkopk.",
  ".kooooooooook.",
  ".kooeooooeook.",
  ".kooeooooeook.",
  ".kooooonnoook.",
  ".kooooooooook.",
  "..kooooooook..",
  "...kkkkkkkk...",
];

const COLORS = { k: "#120a24", o: "#ffb86b", p: "#ff8fab", e: "#120a24", n: "#ff6b8b" };

export function renderCat(svg) {
  if (!svg) return;
  let html = "";
  MAP.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const ch = row[x];
      if (ch === "." || !COLORS[ch]) continue;
      html += `<rect x="${x}" y="${y}" width="1" height="1" fill="${COLORS[ch]}"${ch === "e" ? ' class="eye"' : ""}/>`;
    }
  });
  svg.innerHTML = html;
}
