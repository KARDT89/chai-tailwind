import { scanDOM, watchDOM } from './engine.js';

function init() {
  scanDOM(); // style everything already in the DOM
  watchDOM(); // watch for anything added later
  console.log('☕ Chai TailwinDT89 is ready');
}

// Run after the DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
