function so(){
    var n= document.getElementById("input").value;
    var t=Math.floor( n/100);
    var c=Math.floor(n%100/10);
    var s=n%10;
    
    var tong=t+c+s;
    
    document.getElementById("spanoutput").innerHTML = tong;
}