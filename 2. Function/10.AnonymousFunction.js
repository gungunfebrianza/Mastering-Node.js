<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>Anonymous Function</title>
</head>

<body>
  <p>After a function has been stored in a variable, the variable can be used as a function:</p>

  <p id="demo"></p>
</body>
<script>
  var x = function(a, b) {
    return a * b
  };
  document.getElementById("demo").innerHTML = x(4, 3);
</script>

</html>