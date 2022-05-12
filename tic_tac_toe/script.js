var chance="Player 1"
var player= chance+"'s chance"
var disabledBtn = 0
document.getElementById("chance").innerHTML = player
function check(){
    var btn1=document.getElementById("btn1").innerHTML
    var btn2=document.getElementById("btn2").innerHTML
    var btn3=document.getElementById("btn3").innerHTML
    var btn4=document.getElementById("btn4").innerHTML
    var btn5=document.getElementById("btn5").innerHTML
    var btn6=document.getElementById("btn6").innerHTML
    var btn7=document.getElementById("btn7").innerHTML
    var btn8=document.getElementById("btn8").innerHTML
    var btn9=document.getElementById("btn9").innerHTML
    var result = document.getElementById("resultText")
    var reset=document.getElementById("reser-btn")
    if(btn1 === "X" && btn2 ==="X" && btn3 ==="X"){
        disable()
        result = "Player 1 Won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }
    else if (btn4 === "X" && btn5 === "X" && btn6 === "X") {
        disable()
        result.innerHTML = "Player 1 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn7 === "X" && btn8 === "X" && btn9 === "X") {
        disable()
        result.innerHTML = "Player 1 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn1 === "X" && btn4 === "X" && btn7 === "X") {
        disable()
        result.innerHTML = "Player 1 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn2 === "X" && btn5 == "X" && btn8 === "X") {
        disable()
        result.innerHTML = "Player 1 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn3 === "X" && btn6 === "X" && btn9 === "X") {
        disable()
        result.innerHTML = "Player 1 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn1 === "X" && btn5 === "X" && btn9 === "X") {
        disable()
        result.innerHTML = "Player 1 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn3 === "X" && btn5 === "X" && btn7 === "X") {
        disable()
        result.innerHTML = "Player 1 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn1 === "O" && btn2 === "O" && btn3 === "O") {
        disable()
        result.innerHTML = "Player 2 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn4 === "O" && btn5 === "O" && btn6 === "O") {
        disable()
        result.innerHTML = "Player 2 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn7 === "O" && btn8 === "O" && btn9 === "O") {
        disable()
        result.innerHTML = "Player 2 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn1 === "O" && btn4 === "O" && btn7 === "O") {
        disable()
        result.innerHTML = "Player 2 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn2 === "O" && btn5 == "O" && btn8 === "O") {
        disable()
        result.innerHTML = "Player 2 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn3 === "O" && btn6 === "O" && btn9 === "O") {
        disable()
        result.innerHTML = "Player 2 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn1 === "O" && btn5 === "O" && btn9 === "O") {
        disable()
        result.innerHTML = "Player 2 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn3 === "O" && btn5 === "O" && btn7 === "O") {
        disable()
        result.innerHTML = "Player 2 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (disabledBtn === 9) {
        disable()
        result.innerHTML = "Match Draw !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

}
function disableBtn(id){
    if(chance==="Player 1"){
        document.getElementById(id).disabled = true
        document.getElementById(id).innerHTML= "X"
        chance = "Player 2"
        var player= chance+"'s chance"
        document.getElementById("chance").innerHTML = player
        disabledBtn= disabledBtn+1
        check()
    }
    else if(chance==="Player 2"){
        document.getElementById(id).disabled = true
        document.getElementById(id).innerHTML= "O"
        chance = "Player 1"
        var player= chance+"'s chance"
        document.getElementById("chance").innerHTML = player
        disabledBtn= disabledBtn+1
        check()
}
}
function disable(){
    for (var i=1;i<10;i++){
        var id = "btn" + i
        document.getElementById(id).disabled= true

    }
    document.getElementById("reset-btn").style.visibility="visible"
    document.getElementById("result-text").style.visibility="visible"
}
function reset(){
    for (var i=1;i<10;i++){
        var id = "btn" + i
        document.getElementById(id).disabled= false
        document.getElementById(id).innerHTML=""
    }
    chance="Player 1"
    player= chamce + "'s chance"
    document.getElementById("chance").innerHTML= player
    document.getElementById("reset-btn").style.visibility="hidden"
    document.getElementById("resultText").style.visibility="hidden"
    disabledBtn =0
}
