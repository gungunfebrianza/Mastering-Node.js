// This Function must be executed in the browser

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript(
  'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js',
  script => {
    alert(`Cool, the ${script.src} is loaded`);
    alert(_); // function declared in the loaded script
  }
);


