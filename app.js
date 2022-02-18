var one = "";
var two = "";
var flag = 0;
var op = "";
const clickHandler = (id) => {
  if (id == "CL") {
    document.querySelector(".slide").style.animation = "slider 1s linear 1";
    setTimeout(() => {
      document.querySelector(".slide").style.animation = "";
    }, 1000);
    setTimeout(() => {
      document.querySelector(".digits").innerHTML = "";
      document.querySelector(".operation").innerHTML = "";
      one = "";
      two = "";
      flag = 0;
    }, 500);
  } else {
    //console.log(id);
    //console.log(typeof id);
    if (id != "e" && parseInt(id) && flag == 0) {
      var x = document.querySelector(".digits").innerHTML;
      document.querySelector(".digits").innerHTML = x + id;
      one = document.querySelector(".digits").innerHTML;
      // console.log(one);
    } else {
      var x = document.querySelector(".digits").innerHTML;
      document.querySelector(".digits").innerHTML = x + id;
      two = document.querySelector(".digits").innerHTML;
    }
    if (!parseInt(id) && flag == 0 && id != "e") {
      flag = 1;
      op = id;
      //console.log(op);
      //one = document.querySelector(".digits").innerHTML;
      two = one;
      //console.log(one, two);
      document.querySelector(".digits").innerHTML = "";
      document.querySelector(".operation").innerHTML = id;
    } else if (!parseInt(id) && flag != 0 && id != "e") {
      flag = 0;
      document.querySelector(".operation").innerHTML = id;
      //two = document.querySelector(".digits").innerHTML;
      // one = parseInt(one);
      // two = parseInt(two);
      if (op == "/") {
        //console.log("dome");
        one = parseInt(one) / parseInt(two);
      } else if (op == "*") {
        one = parseInt(one) * parseInt(two);
      } else if (op == "-") {
        one = parseInt(one) - parseInt(two);
      } else {
        one = parseInt(one) + parseInt(two);
      }
      op = id;
    }
    if (id == "e") {
      document.querySelector(".operation").innerHTML = "=";
      //console.log(one);
      // one = parseInt(one);
      // two = parseInt(two);
      var r = 0;
      if (op == "/") {
        r = parseInt(one) / parseInt(two);
        r = parseFloat(r).toFixed(2);
      } else if (op == "*") {
        r = parseInt(one) * parseInt(two);
      } else if (op == "-") {
        r = parseInt(one) - parseInt(two);
      } else {
        r = parseInt(one) + parseInt(two);
      }
      document.getElementById("digits").innerHTML = r;
      one = r;
      flag = 0;
      two = "";
    }
  }
};
