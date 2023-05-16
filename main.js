const pre = document.createElement('pre');
pre.style.cssText = 'border: solid 1px tomato; margin: 0.5em; padding: 0.5em; border-radius: 0.5em;'
pre.textContent = pre.innerText = 'Injected <pre> element from linked JavaScript file main.js.';
document.body.appendChild(pre);
