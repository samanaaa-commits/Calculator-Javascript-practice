let display=document.getElementById("display");
function append(value){
    display.value +=value;
}
function clearDisplay(){
    display.value="";
}
function deleteLast(){
    display.value=display.value.slice(0,-1)//-1 is considered as a last character,slice cuts a piece from a text
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch{
        display.value="Error";
    }
}
