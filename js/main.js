 
 var myFingers = Math.floor((Math.random() * 10) + 1);
checkButton = document.getElementById("check").onclick = function(){
    var x = document.getElementById("guess").value;
    var text = "input not valid";
    if (isNaN(x) || x < 0 || x > 10) {
        document.getElementById("valid").innerHTML = text;
    } else {
        if (x < myFingers) {
            alert("Number is to low!");
    } if(x > myFingers){
        alert("Number is to High");
    } if(x == myFingers){
        alert("Your Correct!");
    }
    }
   
};