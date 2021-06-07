var numberOfDrum=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrum;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var choice=this.innerHTML;
        switch(choice)
        {
            case "W":
                {
                    var audio1=new Audio("sounds/tom-1.mp3");
                    audio1.play();
                    break;
                }
            case "A":
                {
                    var audio2=new Audio("sounds/tom-2.mp3");
                    audio2.play();
                    break;
                }
            case "S":
            {
                var audio3=new Audio("sounds/tom-3.mp3");
                audio3.play();
                break;
            }  
            case "D":
            {
                var audio4=new Audio("sounds/tom-4.mp3");
                    audio4.play();
                    break;
            }  
            case "J":
            {
                var audio5=new Audio("sounds/crash.mp3");
                    audio5.play();
                    break;
            }   
             case "K":
            {
                var audio6=new Audio("sounds/kick-bass.mp3");
                    audio6.play();
                    break;
            }  
            case "L":
                {
                    var audio6=new Audio("sounds/snare.mp3");
                    audio6.play();
                    break;
                }  
        }

    });
}