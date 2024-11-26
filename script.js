const display = document.getElementById("display")


document.addEventListener("keydown", function(e){
const key = e.key;

if(!isNaN(key) || key === '.'){
    appendToDisplay(key)
}else if(key === "Backspace"){
delLast()
}else if(key=== "Enter" || key === "="){
e.preventDefault()
evalResults()
}else if(key === "Escape"){
    clearDisplay()
}else if(["+","-", "*","/"].includes(key)){
    appendToDisplay(key)
}else if(key === "%"){
    percentage()
}
})

const appendToDisplay = (value)=>{
    display.value+=value
}
const evalResults=()=>{
    try {
        display.value =eval(display.value)
    } catch (error) {
        display.value="error"
    }
}
const clearDisplay = ()=>{
    display.value =""
}
const delLast =()=>{
    display.value = display.value.slice(0,-1)
}
const percentage=()=>{
    try {
        display.value = eval(display.value) / 100
        
    } catch (error) {
        display.value="error"
    }
}