setInterval(setTime,1000)

const hourData = document.querySelector('[hour-hand]')
const minuteData = document.querySelector('[minute-hand]')
const secondData = document.querySelector('[second-hand]')



function setTime(){
    const currentDate = new Date()
    const second = currentDate.getSeconds()/60
    const minute =(second + currentDate.getMinutes())/60
    const hour =(minute + currentDate.getHours())/12
  setRotation(secondData,second)
  setRotation(minuteData,minute)
  setRotation(hourData,hour)
}
function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio * 360)
}
setTime()