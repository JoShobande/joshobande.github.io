function getHistory(){
    return document.getElementById("history-value").innerText
}

function printHistory(num){
    return document.getElementById("history-value").innerText = num
}

function getOutput(){
    return document.getElementById("output-value").innerText
}



function printOutput(num){
    if (num === ""){
        document.getElementById("output-value").innerText = num
    }else {
        return document.getElementById("output-value").innerText = getFormatedNumber(num)
    }
    
}
function getFormatedNumber(num){
    let n = Number(num)
    let value  = n.toLocaleString("en")
    return value;
}

var operator = document.getElementsByClassName("operator")
    for(let i = 0; i < operator.length; i++){
        operator[i].addEventListener("click", function(){
            if(this.id == "clear"){
                printHistory("")
                printOutput("")
            }
        })
        operator[i].addEventListener("click", function(){
            if(this.id == "back-space"){
                let history = document.getElementById("history-value").innerText.toString()
                if(history){
                    history = history.substr(0, history.length - 1)
                }
                printHistory(history)
                printOutput("")    
            }
        })
        operator[i].addEventListener("click", function(){
            let history = getHistory()
            let output = getOutput()
            if(this.id == "="){
                
                let result = eval(history)
                printOutput(result)
            }
        })
       
    }

var evaluate = document.getElementsByClassName("evaluate")
for(let i = 0; i < evaluate.length; i++){
    evaluate[i].addEventListener("click", function(){
        let history = document.getElementById("history-value").innerText
        history = history + this.id
        printHistory(history)

    })

} 

var number = document.getElementsByClassName("number")
for(let i = 0; i < number.length; i++){
    number[i].addEventListener("click", function(){
        let history = document.getElementById("history-value").innerText
        if(history != NaN){
            history = history + this.id
            printOutput("")
            printHistory(history)
            let result = eval(history)
            printOutput(result)
        }
    })
}







