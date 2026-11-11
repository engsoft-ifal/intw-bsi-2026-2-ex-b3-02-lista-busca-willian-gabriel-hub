/**
 * Correção automática — Avaliativo B3-02: Lista com busca ao vivo
 *
 * O HTML é fixo; o aluno edita js/script.js. Verifica o COMPORTAMENTO:
 * renderizar a lista e filtrar ao digitar (map/filter + evento input).
 *
 * Uso:  node avaliar.mjs [pastaDoAluno]
 */

import path from "node:path";
import { avaliar, exigir } from "./lib/avaliador.js";

const args = process.argv.slice(2);
const formato = args.includes("--json") ? "json" : "texto";
const pastaAluno = path.resolve(args.find((a) => !a.startsWith("--")) ?? ".");

const { nota } = await avaliar({
  titulo: "Avaliativo B3-02 — Lista com busca (JavaScript)",
  pastaAluno,
  formato,
  verificacoes: ({ pagina, errosDeConsole }) => [
    {
      nome: "Ao carregar, a lista mostra os 3 cursos",
      pontos: 25,
      executar: async () => {
        const n = await pagina.locator("#lista li").count();
        exigir(n === 3, `a lista tem ${n} item(ns) — deveria renderizar os 3 cursos`);
      },
    },
    {
      nome: "Os itens mostram o nome do curso",
      pontos: 20,
      executar: async () => {
        const txt = (await pagina.locator("#lista").textContent()) ?? "";
        exigir(/HTML/.test(txt) && /CSS/.test(txt) && /JavaScript/.test(txt),
          "os <li> devem conter os nomes dos cursos (HTML, CSS, JavaScript)");
      },
    },
    {
      nome: 'Digitar "css" filtra para 1 item',
      pontos: 25,
      executar: async () => {
        await pagina.fill("#busca", "css");
        const n = await pagina.locator("#lista li").count();
        exigir(n === 1, `ao filtrar por "css" a lista tem ${n} item(ns) — deveria ter 1`);
      },
    },
    {
      nome: 'Sem resultados, mostra "Nada encontrado"',
      pontos: 20,
      executar: async () => {
        await pagina.fill("#busca", "zzz");
        const txt = ((await pagina.locator("#lista").textContent()) ?? "").toLowerCase();
        exigir(txt.includes("nada"), 'quando não há resultados, mostre "Nada encontrado"');
      },
    },
    {
      nome: "O JavaScript roda sem erros",
      pontos: 10,
      executar: async () => exigir(errosDeConsole.length === 0, `erro de JavaScript: ${errosDeConsole[0]}`),
    },
  ],
});

process.exit(formato === "json" || nota === 100 ? 0 : 1);
