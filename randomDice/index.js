var randomvariable1=Math.random();
randomvariable1=randomvariable1*6;
randomvariable1=Math.floor(randomvariable1)+1;
var randomvariable2=Math.floor(Math.random()*6+1);

var randomimgsource="dice"+randomvariable1+".png";
randomimgsource="images/"+randomimgsource;
var randomimgsource2="images/"+"dice"+randomvariable2+".png";
document.querySelector("img").setAttribute("src",randomimgsource);
document.querySelector(".img2").setAttribute("src",randomimgsource2);

if(randomvariable2>randomvariable1)
{
  document.querySelector("h1").innerHTML=("Player 2 Wins!⛳");
}
else if(randomvariable2==randomvariable1)
{
  document.querySelector("h1").innerHTML=("⛳Draw!⛳");
}
else
{
  document.querySelector("h1").innerHTML=("⛳Player 1 Wins!");
}
