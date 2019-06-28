function tampilkanPesan(from, text = test()) {
  console.log(from + ': ' + text);
}

function test() {
  return 'Hello';
}
tampilkanPesan('Racheysa'); // Ann: no text given
