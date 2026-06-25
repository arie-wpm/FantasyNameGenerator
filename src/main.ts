import './style.css'
import template from './template.html?raw'
import { generateName } from './namegenerator.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = template;  
generateName(document.querySelector<HTMLButtonElement>('#generate')!,document.querySelector<HTMLInputElement>('#input')!,document.querySelector('#header')!)
