document.getElementById("button").addEventListener("click", doa)
var number
var test
var debug = false
function page_redirect(){ 
window.location = "https://hayess2121.github.io/clicker.html";
}
function random()
{
number = Math.floor(Math.random()*100)
if(debug === true)
{
console.log(number)
}
return number
}
function doa()
{ 
if(debug === true)
{
if(number === 99)
{
page_redirect()
}
else if(number === 98)
{
button.style.transform = "scale(20)"
button.style.transition = "transform 10s ease"
setTimeout(blowup,10100)
}
else if(number === 97)
{
    
}
}
else
{
    random()
    if(number === 99)
        {
        page_redirect()
        }
        else if(number === 98)
        {
        button.style.transform = "scale(20)"
        button.style.transition = "transform 10s ease"
        setTimeout(blowup,10100)
        }
        else if(number === 97)
        {
            
        }
}
return number
}
function blowup()
{
button.style.transition = "transform 0.1s ease"
button.style.transform = "scale(1)"    
}