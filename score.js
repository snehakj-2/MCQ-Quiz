var value=localStorage.getItem("scorePass");
var mark=Number(value);

if(mark==2)
{
  $(".result").text("2/3");
}
if(mark==1)
{
  $(".result").text("1/3");
  $(".score-head").text("WORK HARDER AND KEEP TRYING");
}
if(mark==0)
{
  $(".result").text("0/3");
  $(".score-head").text("WORK HARDER AND KEEP TRYING");
}