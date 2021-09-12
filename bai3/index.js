function soChanLe(){
    var a=document.getElementById("input1").value;
    var b=document.getElementById("input2").value;
    var c=document.getElementById("input3").value;
    var chan=0;
    var le=0;
    if ((a%2)==0){
       var chan=chan+1;
    } else{
       var le=le+1;
    }
    if ((b%2)==0){
       var chan=chan+1;
    } else{
       var le=le+1;
    }
    if ((c%2)==0){
       var chan=chan+1;
    } else{
      var  le=le+1;
    }
   document.getElementById("spanchan").innerHTML = chan
   document.getElementById("spanle").innerHTML = le
}
