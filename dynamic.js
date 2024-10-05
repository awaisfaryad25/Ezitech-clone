function myFunction() {
  var x = document.getElementById("myNav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  const burgerBtn = document.getElementById('burgerBtn');
  burgerBtn.classList.toggle('show');
}

function menuSecond(){
  var y = document.getElementById("myLog");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }

  const loginBtn = document.getElementById('loginBtn');
  loginBtn.classList.toggle('open');
}