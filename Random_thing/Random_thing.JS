var number
function random()
{
number = Math.floor(Math.random()*100)
document.getElementById("thin").innerHTML = number
return number    
}
document.getElementById("button").addEventListener("click", random) 