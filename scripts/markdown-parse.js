import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
export function createMarkup(my_markdown_input) {
  return { __html: marked(my_markdown_input) };
}

import { readText } from "./getText.js";

export function mdConvert(destination, mdFilePath) {
  readText(mdFilePath).then((x) => {
    destination.innerHTML = marked(x);
    // console.log(marked(x))
  });
}
