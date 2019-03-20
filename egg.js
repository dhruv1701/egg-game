var x,pos=0,id1,id,score=0,pos1=500,m;
window.addEventListener("keydown",function (e){
    // console.log(e.keyCode);
     if(e.keyCode==39)
     {
         m=document.getElementById("basket");
         m.style.left=pos1+"px";
         pos1=pos1+10;
     }
     if(e.keyCode==37)
     {
        m=document.getElementById("basket");
        m.style.left=(pos1)+"px";
        pos1=pos1-10; 
     }
 });
function func1()
{
    var z=document.getElementById("button");
    z.style.opacity="0";
    var bas=document.getElementById("basket");
    bas.src="./img/basket.jpg";
    bas.style.position="absolute";    
    bas.style.left="500px";
    bas.style.height="100px";
    bas.style.top="514px";
    id=setInterval(func2,6000);

}
function func2()
{
    clearInterval(id1);
    x=Math.floor(358+Math.random()*630);
    var y=document.getElementById("egg");
    console.log(x);
    y.style.position="absolute";    
    y.style.left=x+"px";
    y.style.height="40px";
    y.src="./img/egg.jpeg";
    id1=setInterval(func3,100);
}
function func3()
{
    if(pos>=560)
    {
       // document.write("li");
        var p=document.getElementById("basket");
        var l=document.getElementById("egg");
        var num1="60";
        var num2=p.style.left;
        var len=num2.length;
        var num3=l.style.left;
        var len1=num3.length;

        var z5=num2.substring(0,len-2);
        var z6=num3.substring(0,len1-2);

        var h=(+z5) +(+num1);
        var h1=""+h;
        if(z5.localeCompare(z6)==-1 && h1.localeCompare(z6)==1 )
        {
            clearInterval(id1);
            score++;
            pos=0;
        }
        else
        { 
            clearInterval(id1);
            clearInterval(id);
            l.src="./img/broken.jpg";
            pos=0;
            alert("your score is"+score);
        }
    }
    else
    {
        pos=pos+10;
        var c=document.getElementById("egg");
        c.style.top=pos+"px";
    }
}