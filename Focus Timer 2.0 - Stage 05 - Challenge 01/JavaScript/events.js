import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonMoreFive,
  buttonMinusFive,
  buttonFlorest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace,
  buttonSoundOff
} from "./elements.js"

export default function Events({controls, timer, sounds}) {

  timer.resetTimer()

  buttonPlay.addEventListener("click", function() {
    controls.playOn()
    controls.playOff()
    timer.countdown()
    sounds.buttonPressSound()
  })

  buttonPause.addEventListener("click", function() {
    controls.pauseOn()
    controls.pauseOff()
    timer.hold()
    sounds.buttonPressSound()
  })

  buttonStop.addEventListener("click", function() {
    controls.resetControls()
    controls.stopOff()
    timer.resetTimer()
    sounds.buttonPressSound()
  })

  buttonMoreFive.addEventListener("click", function() {
    timer.addFiveTime()
    controls.addFiveOn()
    controls.addFiveOff()
    sounds.buttonPressSound()
  })

  buttonMinusFive.addEventListener("click", function() {
    timer.removeFiveTime()
    controls.removeFiveOn()
    controls.removeFiveOff()
    sounds.buttonPressSound()
  })

  buttonFlorest.addEventListener("click", function() {
    controls.onButtonFlorest()
    sounds.onSoundFlorest()
    sounds.buttonPressSound()
  })

  buttonRain.addEventListener("click", function() {
    controls.onButtonRain()
    sounds.onSoundRain()
    sounds.buttonPressSound()
  })

  buttonCoffeeShop.addEventListener("click", function() {
    controls.onButtonCoffeeShop()
    sounds.onSoundCoffeeShop()
    sounds.buttonPressSound()
  })

  buttonFireplace.addEventListener("click", function() {
    controls.onButtonFireplace()
    sounds.onSoundFireplace()
    sounds.buttonPressSound()
  })

  buttonSoundOff.addEventListener("click", function() {
    controls.onButtonSoundOff()
    sounds.offSound()
    sounds.buttonPressSound()
  })
}