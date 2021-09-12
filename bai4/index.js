function tamGiac() {
    var a = document.getElementById("input1").value;
    var b = document.getElementById("input2").value;
    var c = document.getElementById("input3").value;
    var a=a/10;
    var a=a*10;
    var b=b/10;
    var b=b*10;
    var c=c/10;
    var c=c*10; 
    console.log(a+b)
    console.log(b+c)

    console.log(a+c)

    if (a + b >= c && a + c >= b && b + c >= a) {
        if (a == b && b == c) {
            document.getElementById("spanoutput").innerHTML = "tam giác đều";
        } else
            if (a == b || b == c || a == c) {
                if (a * a + b * b == c * c || a * a + c * c == b * b || b * b + c * c == a * a) {
                    document.getElementById("spanoutput").innerHTML = "tam giác vuông cân"
                } else {
                    document.getElementById("spanoutput").innerHTML = "tam giác cân"
                }
            } else
                if (a * a + b * b == c * c || a * a + c * c == b * b || b * b + c * c == a * a) {
                    document.getElementById("spanoutput").innerHTML = "tam giác vuông";
                }
            else{
                document.getElementById("spanoutput").innerHTML ="tam giác thường"
            }
 
    } else{
        document.getElementById("spanoutput").innerHTML = "ko phải tam giác"
    }


}