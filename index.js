const lengthEl=document.getElementById("length-element")
const volumeEl=document.getElementById("volume-element")
const massEl=document.getElementById("mass-element")

const inputBtn=document.getElementById("input-btn")
const inputEl=document.getElementById("input-element")


inputBtn.addEventListener("click",function(){


    lengthEl.textContent=`${inputEl.value} Meters=${(Number(inputEl.value)*3.281).toFixed(3)} | ${inputEl.value} Feet=${(Number(inputEl.value)/3.281).toFixed(3)}`

    volumeEl.textContent=`${inputEl.value} Liters=${(Number(inputEl.value)*0.264).toFixed(3)} | ${inputEl.value} Gallons=${(Number(inputEl.value)/0.264).toFixed(3)}`

    massEl.textContent=`${inputEl.value} Kilograms=${(Number(inputEl.value)*2.204).toFixed(3)} | ${inputEl.value} Pounds=${(Number(inputEl.value)/2.204).toFixed(3)}`

    

})
