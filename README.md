# Avaliativo B3-02 — Lista com busca (JavaScript)

**Vale 100 pontos** · Correção automática a cada envio (`push`).

O **HTML e os dados já estão prontos**. Edite **apenas `js/script.js`** para **renderizar** a
lista e **filtrar ao digitar** — praticando `filter`/`map`, DOM e o evento `input`.

## Requisitos (edite `js/script.js`)

- [ ] Ao carregar, a `#lista` mostra os **3 cursos** **(25)**
- [ ] Cada item mostra o **nome** do curso **(20)**
- [ ] Digitar na busca **filtra** a lista (ex.: "css" → 1 item) **(25)**
- [ ] Sem resultados, mostra **"Nada encontrado"** (estado vazio) **(20)**
- [ ] O JavaScript roda **sem erros** **(10)**

> Dica: `cursos.filter(...).map(c => \`<li>...</li>\`).join("")` e
> `busca.addEventListener("input", () => render(busca.value))`.

## ⚠️ Como entregar — a entrega é por TAG `submit/`

> 📌 **Dar _Commit_ NÃO registra a nota oficial.** Enquanto trabalha, edite o `js/script.js`
> no **VS Code online** (tecla `.` → *Commit*) e veja o **feedback** rodar na aba **Actions**
> (workflow **"Corretor automatico"**), quantas vezes quiser — isso é só o feedback (0–100).

Para **registrar a sua nota oficial** (a que o professor recebe), você **submete** criando uma
**tag** — tudo pelo navegador, **sem terminal**:

1. Abra o seu repositório em **github.com** (o site normal, **não** o editor `.`).
2. À direita, clique em **Releases** → **Draft a new release**.
3. Em **Choose a tag**, digite exatamente **`submit/1`** e clique em
   **"Create new tag: submit/1 on publish"**.
4. Clique no botão verde **Publish release**.
5. Pronto — dispara a correção **oficial** (workflow **"Autograde"**). Veja a nota na aba **Actions**.

Melhorou e quer reenviar? Repita com **`submit/2`**, **`submit/3`**, e assim por diante — vale a
**melhor tentativa até o prazo (29/11)**.

> ⚠️ A tag **precisa** começar com `submit/` (ex.: `submit/1`). Outro nome (`v1`, `entrega`, ou
> só `submit`) **não gera** a nota oficial. O editor `.` (github.dev) **não cria tag** — use a
> tela de **Releases** no github.com.
