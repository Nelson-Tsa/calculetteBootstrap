const reset = document.getElementById("btnreset");
const plus = document.getElementById("btnplus");
const moins = document.getElementById("btnmoins");
const mult = document.getElementById("btnmult");
const div = document.getElementById("btndiv");
const egal = document.getElementById("btneq");
const result = document.getElementById("result");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn0 = document.getElementById("btn0");


reset.addEventListener("click", function(){
    document.getElementById("result").value = "";
})
egal.addEventListener("click", function(){
    if(document.getElementById("result").value == "") {
        document.getElementById("result").value = "0";
    }
    document.getElementById("result").value = eval(document.getElementById("result").value);
})
plus.addEventListener("click", function(){
    document.getElementById("result").value += "+";
})
moins.addEventListener("click", function(){
    document.getElementById("result").value += "-";
})
mult.addEventListener("click", function(){
    document.getElementById("result").value += "*";
})
div.addEventListener("click", function(){
    document.getElementById("result").value += "/";
})

btn0.addEventListener("click", function(){
    document.getElementById("result").value += 0;
})
btn1.addEventListener("click", function(){
    document.getElementById("result").value += 1;
})
btn2.addEventListener("click", function(){
    document.getElementById("result").value += 2;
})
btn3.addEventListener("click", function(){
    document.getElementById("result").value += 3;
})
btn4.addEventListener("click", function(){
    document.getElementById("result").value += 4;
})
btn5.addEventListener("click", function(){
    document.getElementById("result").value += 5;
})
btn6.addEventListener("click", function(){
    document.getElementById("result").value += 6;
})
btn7.addEventListener("click", function(){
    document.getElementById("result").value += 7;
})
btn8.addEventListener("click", function(){
    document.getElementById("result").value += 8;
})
btn9.addEventListener("click", function(){
    document.getElementById("result").value += 9;
})
