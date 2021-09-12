function Tinh(){
    var a=document.getElementById("input1").value;
    var b=document.getElementById("input2").value;
    var c=document.getElementById("input3").value;
   
    if (a>b){
        var g=a;
        var a=b;
        var b=g;
    }
    
    if (a>c){
        var g=c;
        var c=a;
        var a=g;
    }
    if (b>c){
        var g=b;
        var b=c;
        var c=g;
    }
   
    console.log(a);
    console.log(b);
    console.log(c);
    document.getElementById("spaninput1").innerHTML = a;
    document.getElementById("spaninput2").innerHTML = b;
    document.getElementById("spaninput3").innerHTML = c;


    
}