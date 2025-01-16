document.getElementById("button").addEventListener("click", doa) // event listener do not delete
//variable declarations below
var number
var debug = false
//variable declarations above
//redirects below here
function page_redirect()
{ 
    window.location = "https://hayess2121.github.io/clicker.html";
}
function page_redirectdos()
{ 
    window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}
//redirects above here

//do not touch this
function random()
{
    number = Math.floor(Math.random()*100)
    if(debug === true)
    {
        console.log(number)
    }
    return number
}
//do not touch this

function doa() //main function that does things
{ 
    if(debug === true) // checks if debug is true. if true then it does not call the random function
    {
        if(number === 99) // redirects to clicker
        {
            page_redirect()
        }
        else if(number === 98) // blows up button
        {
            button.style.transform = "scale(20)"
            button.style.transition = "transform 10s ease"
            setTimeout(blowup,10100)
        }
        else if(number === 97) //seizure mode
        {
            alert("seizure mode incoming. Leave now if you are epileptic.")
            setInterval(green,10)
            setInterval(blue,11)
            setInterval(red,12)
            setInterval(yellow,13)
            setInterval(purple,14)
            setInterval(orange,15)
            setInterval(indigo,16) 
        }
        else if(number === 96)//tells you to mess off
        {
            alert("Screw off")
             
        }
        else if(number === 69)//rick roll
        {
            page_redirectdos()
        }
        else if(number === 0)//error 404
        {
            alert("ERROR 404 NOT FOUND")
            document.body.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/3/3b/Windows_9X_BSOD.png)"
        }
        }
    else
        {
        random()//generates a random number
        if(number === 99)// redirects to clicker
        {
            page_redirect()
        }
        else if(number === 98)// blows up button
        {
            button.style.transform = "scale(20)"
            button.style.transition = "transform 10s ease"
            setTimeout(blowup,10100)
        }
        else if(number === 97) // seizure mode
        {
            alert("seizure mode incoming. Leave now if you are epileptic.")
            setInterval(green,10)
            setInterval(blue,11)
            setInterval(red,12)
            setInterval(yellow,13)
            setInterval(purple,14)
            setInterval(orange,15)
            setInterval(indigo,16) 
        }
        else if(number === 96)//tells you to mess off
        {
            alert("Screw off")    
        }
        else if(number === 69) //rick roll
        {
            page_redirectdos()
        }
        else if(number === 0)//error 404
        {
            alert("ERROR 404 NOT FOUND")
            document.body.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/3/3b/Windows_9X_BSOD.png)"
        }
    }
    return number
}
// the random shit functions
function blowup() 
{
    button.style.transition = "transform 0.1s ease"
    button.style.transform = "scale(1)"    
}
//color functions for seizure mode below

function green()//makes background green
{
    document.body.style.backgroundColor = "green"
}
function blue()//makes background blue
{
    document.body.style.backgroundColor = "blue"
}
function red()//makes background red
{
    document.body.style.backgroundColor = "red"    
}
function purple()//makes background purple
{
    document.body.style.backgroundColor = "purple"    
}
function yellow()//makes background yellow
{
    document.body.style.backgroundColor = "yellow"    
}
function orange()//makes the background orange
{
    document.body.style.backgroundColor = "orange"    
}
function indigo()//makes the background indigo
{
    document.body.style.backgroundColor = "indigo"    
}

//color functions for seizure mode above