document.getElementById("button").addEventListener("click", doa) // event listener do not delete
//variable declarations below
var number         
var debug = false
//variable declarations above
//redirects below here
var redirects = 
{
    clicker : function()
    { 
        window.location = "https://hayess2121.github.io/clicker.html"; //sends you to the clicker game
    },
    rick_roll : function ()
    { 
        window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; //Rick rolls you
    },
    trojan : function()
    {
        window.location = "https://www.trojanbrands.com/en/products/condoms"; //Sends you to the trojan condoms main webpage
    },
}
//redirects above here

//do not touch this
function random()
{
    number = Math.floor(Math.random()*100)
    return number
}
//do not touch this

function doa() //main function that does things
{ 
    if(debug === true) // checks if debug is true. if true then it does not call the random function
    {
        if(number === 99) // redirects to clicker
        {
            redirects.clicker()
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
            document.body.style.animationName = "color"
        }
        else if(number === 96)//tells you to mess off
        {
            alert("Screw off")
             
        }
        else if(number === 95) 
        {
            alert("You might need these soon")
            redirects.trojan() 
        }
        else if(number === 69)//rick roll
        {
            redirects.rick_roll()
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
            redirects.clicker()
        }
        else if(number === 98)// blows up button
        {
            button.style.animationName = "blowup"
        }
        else if(number === 97) // seizure mode
        {
            alert("seizure mode incoming. Leave now if you are epileptic.")
            document.body.style.animationName = "color"
        }
        else if(number === 96)//tells you to mess off
        {
            alert("Screw off")    
        }
        else if(number === 95) 
        {
            alert("You might need these soon")
            redirects.trojan()
        }  
        else if(number === 69) //rick roll
        {
            redirects.rick_roll()
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
//password stuff below
const correctPassword = "IEatCrackForBreakfast"; // Set your password here
const submitButton = document.getElementById('submitButton');
const passwordInput = document.getElementById('passwordInput');
const protectedContent = document.getElementById('protectedContent');
submitButton.addEventListener('click', function() 
{
    const enteredPassword = passwordInput.value;

    // Check if the entered password is correct
    if (enteredPassword === correctPassword) {
        button.style.display = 'block'; // Show the protected content
        passwordInput.value = ''; // Clear the input field
        input.style.display = "none"//hides the input
                
    } else if (enteredPassword === "Rick_Astley")
    {
        redirects.rick_roll()
    }
    else
    {
        alert("Go Fuck Yourself")    
    }
});
//password stuff above