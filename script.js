$("#rulesbutton").click(showrules)
$("#closerules").click(hiderules)
$(".gamebutton").click(buttonclick)
$("#playagain").click(playagain)

const options=["paper","scissors","rock"]
const bcolors=["#516EF7","#ECA41C","#DE3B57"]
var score=0
var user,comp,win

function buttonclick()
{
    $(".gamebox").css("display","none")
    $(".processingpart").css("display","flex")
    user=$(this).attr("id")
    $(".selected").css("border-color",bcolors[options.indexOf(user)])
    $(".selected").find("img").attr("src","images/icon-"+user+".svg")
    setTimeout(computersturn,1000)
}
function computersturn()
{
    genindex=Math.floor(Math.random()*3)
    comp=options[genindex]
    $(".notselected").css("border-color",bcolors[options.indexOf(comp)])
    $(".notselected").css("background","#E4E4E4")
    $(".notselected").find("img").attr("src","images/icon-"+comp+".svg")
    setTimeout(checkresult,1000)
}
function checkresult()
{
    if(user==comp)
    win="draw"
    else if(user=="paper"&&comp=="rock" || user=="scissors"&&comp=="paper" || user=="rock"&&comp=="scissors")
    win="user"
    else
    win="comp"
    if(win=="user")
    {
        $("#result button").css("color",bcolors[options.indexOf(user)])
        $("#resulttext").text("YOU WIN")
        $(".user .placeholder").addClass("winner")
        score+=1
    }
    else if(win=="comp")
    {
        $("#result button").css("color",bcolors[options.indexOf(comp)])
        $("#resulttext").text("YOU LOSE")
        $(".comp .placeholder").addClass("winner")
        score-=1;
    }
    else
    {
        $("#result button").css("color",bcolors[options.indexOf(user)])
        $(".user .placeholder").addClass("winner")
        $(".comp .placeholder").addClass("winner")
        $("#resulttext").text("DRAW!!")
    }
    $("#score").text(score)
    $("#result").css("display","flex")
}
function playagain()
{
    $("#result").css("display","none")
    $(".placeholder").removeClass("winner")
    $(".notselected").attr("style","")
    $(".notselected").find("img").attr("src","")
    $(".processingpart").attr("style","")
    $(".gamebox").attr("style","")
}
function showrules()
{
    $(".popupouterbox").css("display","flex")
    $(".rulesbox").css("display","block")
}
function hiderules()
{
    $(".popupouterbox").css("display","none")
    $(".rulesbox").css("display","none")
}
