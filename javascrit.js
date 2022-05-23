function changeimg(){
    document.getElementById("imgone").src="images/1.jpg";
}
function change1(){
    document.getElementById("h2one").style.color="blue";
}
function variableex(){
    let name ="joseph";
    const PI=3.14444;

    var a=1;
    var b=2;
    var c= 3;

    var prod= a*b*c;
    document.getElementById("sampleprod").innerHTML = prod;
}
function condstat(){
    var age=20;
    let comment;

    if (age <=20){
        comment="you are young"
    }
    else if(age<30){
        comment="you are old"
    }
    else{
        comment="we have no comment"
    }
    document.getElementById("showcom").innerHTML=comment;
}