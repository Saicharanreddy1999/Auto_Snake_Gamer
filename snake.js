var ini="00";
const p=["00"];
var count=0;
function Access(id)
{
    console.log(id);
    var fin=id;
    if(ini==fin)
    {
        return;
    }
    var ix=ini.charAt(0);
    var iy=ini.charAt(1);
    var fx=fin.charAt(0);
    var fy=fin.charAt(1);
    document.getElementById("0"+id).innerHTML="&#128000;";
    count++;
    pros(Number(ix),Number(iy),Number(fx),Number(fy));
    ini=id;
    
}

async function pros(ix,iy,fx,fy)
{
    var i=ix; 
    var j=iy;
    console.log(count);
    var x;
while(i!=fx || j!=fy)
{
    if(i>fx)
    {
        document.getElementById("0"+String(i)+String(j)).innerHTML=" ";
        i=i-1;  
        x=document.getElementById("0"+String(i)+String(j)).innerHTML;
        document.getElementById("0"+String(i)+String(j)).innerHTML="X";
          
    }  
    else if(i<fx)
    {   
        document.getElementById("0"+String(i)+String(j)).innerHTML=" ";
        i=i+1;
        x=document.getElementById("0"+String(i)+String(j)).innerHTML;
        document.getElementById("0"+String(i)+String(j)).innerHTML="X";   
    }

    else if(j>fy)
    {
        document.getElementById("0"+String(i)+String(j)).innerHTML=" ";
        j=j-1;
        x=document.getElementById("0"+String(i)+String(j)).innerHTML;
        document.getElementById("0"+String(i)+String(j)).innerHTML="X"; 
    }
    else if(j<fy)
    {
        
        document.getElementById("0"+String(i)+String(j)).innerHTML=" ";
        j=j+1;
        x=document.getElementById("0"+String(i)+String(j)).innerHTML;
        document.getElementById("0"+String(i)+String(j)).innerHTML="X";
    }
    
    

    for(k=1;k<count;k++)
    {
        if(k==count-1)
        {
        document.getElementById("0"+p[p.length-1-k]).innerHTML=" ";
        }
        document.getElementById("0"+p[p.length-1]).innerHTML="0";
    }
    
    await delay(250);
    p.push((String(i)+String(j)));
    console.log(p);
    if(x=='0')
    {
        document.getElementById("snackbar").className="show";
       for(var k=0;k<count;k++)
        document.getElementById("0"+p[p.length-1-k]).className="animate__animated animate__flash";
        await(10);
       document.getElementById("0"+String(i)+String(j)).style.color='red';
       // alert("Game Over");
        return;
    }
}

document.getElementById("0"+p[p.length-2-count+1]).innerHTML="0";

document.getElementById("score").innerHTML=count;

while(true)
{
var ia=Math.floor(Math.random()*10);
var ib=Math.floor(Math.random()*10);
if(document.getElementById("0"+String(ia)+String(ib)).innerHTML=="0" || document.getElementById("0"+String(ia)+String(ib)).innerHTML=="X")
{
}
else
{
    break;
}

}
Access(String(ia)+String(ib));
}


function delay(ms)
{
        return new Promise(resolve => setTimeout(resolve,ms));
}

