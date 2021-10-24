let source = "Maudy Cantik, Maudy Manis, Maudy Pintar";
let newStr = source.replaceAll("Maudy", "Maudya Ayunda Faza");

console.log(newStr);

//output : Maudya Ayunda Faza Cantik, Maudya Ayunda Faza Manis, Maudya Ayunda Faza Pintar

let str = "Maudy Cantik, MAudy Manis, maudy Pintar";

let pattern = /maudy/gi;

newStr = str.replaceAll(pattern, function (match, offset, str) {
  if (match === "MAudy") return "MAUDYA AYUNDA FAZA";
  if (match === "Maudy") return "Maudya Ayunda Faza";
  if (match === "maudy") return "maudya ayunda faza";
  return "";
});

console.log(newStr);

//output : Maudya Ayunda Faza Cantik, MAUDYA AYUNDA FAZA Manis, maudya ayunda faza Pintar
a