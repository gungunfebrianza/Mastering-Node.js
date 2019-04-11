function showMessage(from, text = test()) {
  console.log(from + ': ' + text);
}

function test() {
  return 'St';
}
showMessage('Ann'); // Ann: no text given
