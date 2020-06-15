var countDownDate = new Date("Jan 1, 2021 15:37:25").getTime();
var i = 0;
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    if(i == 0)
    {document.getElementById("demo").setAttribute("style","color: grey");i=2;}
    else if(i == 2)
    {document.getElementById("demo").setAttribute("style","color: tomato");i=3;}
    else if(i == 3)
    {document.getElementById("demo").setAttribute("style","color: aqua");i=4;}
    else
    {document.getElementById("demo").setAttribute("style","color: green");i=0;}
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);


