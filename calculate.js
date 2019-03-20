var n1,n2;
function getnumbers()
{
    n1=document.getElementById("number1").value;
    
    n2=document.getElementById("number2").value;
    check();
}
function check()
{
    if(isNaN(n2)||isNaN(n1)){
        document.getElementById("result").innerHTML="Please enter correct values";
        exit;
    }
    
}
function Add()
{
    getnumbers();
    var sum=+n1+ +n2;
    document.getElementById("result").innerHTML=sum;
    
}
function Sub()
{
    getnumbers();
    var sum=n1-n2;
    document.getElementById("result").innerHTML=sum;
    
}
function Multiply()
{
    getnumbers();
    var sum=n1*n2;
    document.getElementById("result").innerHTML=sum;
    
}
function Divide()
{
    getnumbers();
    if(n2==0)
    {
        document.getElementById("result").innerHTML="Number2 cannot be 0";
        return;

    }
    var sum=n1/n2;
    document.getElementById("result").innerHTML=sum.toFixed(2);
    
}
