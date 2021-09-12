function nguoi() {
    var a = document.getElementById("input").value;
   


    if (a == "b") {
        document.getElementById("spanoutput").innerHTML = " chào bố đẹp trai ";
    }else
     if (a == "m") {
        document.getElementById("spanoutput").innerHTML = " chào mẹ đẹp gái ";
        console.log(1);
    } else
    if (a == "a") {
        document.getElementById("spanoutput").innerHTML = " chào thằng anh bất tài ";
    }else
    if (a == "e") {
        document.getElementById("spanoutput").innerHTML = " chào con em bất hiếu ";
    }else{
        document.getElementById("spanoutput").innerHTML = " ko quen bt ";
    }
}