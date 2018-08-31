function changeColor()
{
    if (document.getElementById("colorList").value=="red")
    {
        document.getElementById("myText").style.color="red";
    }
   
    else if (document.getElementById("colorList").value=="green")
    {
        document.getElementById("myText").style.color="green";
    }

    else if (document.getElementById("colorList").value=="yellow")
    {
        document.getElementById("myText").style.color="yellow";
    }
    
    else if(document.getElementById("colorList").value=="gray")
    {
        document.getElementById("myText").style.color="gray";
    }
    

}

function changeSize()
{
    if (document.getElementById("Size").value=="10")
    {
        document.getElementById("myText").style.fontSize="10px";
    }
    else if (document.getElementById("Size").value=="20")
    {
        document.getElementById("myText").style.fontSize="20px";
    }
    else if (document.getElementById("Size").value="40")
    {
        document.getElementById("myText").style.fontSize="40px";
    }
    else if (document.getElementById("Size").value=="60")
    {
        document.getElementById("myText").style.fontSize="60px";
    }
}

function makeItBold()
{
    document.getElementById("myText").style.fontWeight="bold";
}


function makeItItalic()
{
    document.getElementById("myText").style.fontStyle="italic";
}
function underlined()
{
    document.getElementById("myText").style.textDecoration="underline";
}