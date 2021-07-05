
var n=0;
function marks()
{
  
    if(document.querySelector('input[id="ans1"]:checked')!=null)
    n++;
    if(document.querySelector('input[id="ans2"]:checked')!=null)
    n++;
    if(document.querySelector('input[id="ans3"]:checked')!=null)
    n++;

    var result=n;
    
    localStorage.setItem("scorePass",result);
}




