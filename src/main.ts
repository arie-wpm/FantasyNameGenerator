import './style.css'
import template from './template.html?raw'
import { generateName } from './namegenerator.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = template;  
window.addEventListener("load", (event) => {
   new (fairyDustCursor as any)({
	colors: ["#f4ec02", "#f2ed65", "#969213", "#f4f3dc"],
	fairySymbol: "✦"
  });
});
generateName(document.querySelector<HTMLButtonElement>('#generate')!,document.querySelector<HTMLInputElement>('#nameInput')!,document.querySelector('#fantasy-name')!)
