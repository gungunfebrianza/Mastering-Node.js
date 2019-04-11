<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>Callback Function</title>
</head>

<body>

</body>
<script type="text/javascript">
  function ask(question, yes, no) {
    if (confirm(question))
      yes()
    else
      no();
  }

  function showOk() {
    alert("You agreed.");
  }

  function showCancel() {
    alert("You canceled the execution.");
  }

  // usage: functions showOk, showCancel are passed as arguments to ask
  ask("Do you agree?", showOk, showCancel);
</script>

</html>