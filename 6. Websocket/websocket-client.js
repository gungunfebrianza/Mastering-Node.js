const WS = new WebSocket('ws://localhost:3232');
WS.onmessage = (payload) => {
  console.log(payload.data);
  displayMessages(payload.data);
};

WS.onopen = () => {
  displayTitle('CONNECTED TO SERVER');
};

WS.onclose = () => {
  displayTitle('DISCONNECTED TO SERVER');
};

function displayTitle(title) {
  document.querySelector('h1').innerHTML = title;
}

function displayMessages(message) {
  let h1 = document.createElement('h1');
  h1.innerText = message;
  document.querySelector('div.messages').appendChild(h1);
}

document.forms[0].onsubmit = () => {
  let input = document.getElementById('message');
  // console.log(input.value);
  WS.send(input.value);
};
