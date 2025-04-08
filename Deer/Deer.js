var input = ""
var opacity = 1.0
function opaquee()
{
    input = deer_box.value
    if(input === "Turn that opaque deer clear")
    {
        document.getElementById("deer").style.opacity = opacity - 0.10
        opacity = opacity - 0.10
        deer_box.value = ""
    }
}
document.getElementById("buttoon").addEventListener("click", opaquee)