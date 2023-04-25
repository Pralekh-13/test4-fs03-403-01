document.addEventListener("keydown", (event) => {
  var key = event.code;
  var code = event.keyCode;
  document.getElementById("kpress").innerHTML = `<span>You Pressed <span style="color:green;">${key}</span></span>` ;
  document.getElementById("kcode").innerHTML = code;
});
