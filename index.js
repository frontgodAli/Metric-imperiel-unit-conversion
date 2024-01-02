const lengthEl=document.getElementById("length-element")
const volumeEl=document.getElementById("volume-element")
const massEl=document.getElementById("mass-element")

const inputBtn=document.getElementById("input-btn")
const inputEl=document.getElementById("input-element")


inputBtn.addEventListener("click",function(){

    const inputVal=inputEl.value
    Number(inputVal)

    lengthEl.textContent=`${inputVal} Meters=${(inputVal*3.281).toFixed(3)} | ${inputVal} Feet=${(inputVal/3.281).toFixed(3)}`

    volumeEl.textContent=`${inputVal} Liters=${(inputVal*0.264).toFixed(3)} | ${inputVal} Gallons=${(inputVal/0.264).toFixed(3)}`

    massEl.textContent=`${inputVal} Kilograms=${(inputVal*2.204).toFixed(3)} | ${inputVal} Pounds=${(inputVal/2.204).toFixed(3)}`

})
