<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>Apply Function</title>
</head>

<body>
  <h2>JavaScript Functions</h2>
  <p>In this example the fulllName method of person is <b>applied</b> on person1:</p>

  <p id="demo"></p>
</body>
<script>
  var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person1 = {
    firstName: "John",
    lastName: "Doe",
  }
  var x = person.fullName.apply(person1);
  document.getElementById("demo").innerHTML = x;
</script>

</html>