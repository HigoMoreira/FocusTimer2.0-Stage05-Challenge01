export default function Controls({
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
}) {

  function resetControls() {
    buttonPlay.classList.remove("btnClicked")
    buttonPause.classList.remove("btnClicked")
    buttonStop.classList.add("btnClicked")
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("hide")
  }

  function onButtonFlorest() {
    buttonFlorest.classList.add("btnClicked")
    buttonRain.classList.remove("btnClicked")
    buttonCoffeeShop.classList.remove("btnClicked")
    buttonFireplace.classList.remove("btnClicked")
    buttonSoundOff.classList.add("soundClicked")
  }

  function onButtonRain() {
    buttonFlorest.classList.remove("btnClicked")
    buttonRain.classList.add("btnClicked")
    buttonCoffeeShop.classList.remove("btnClicked")
    buttonFireplace.classList.remove("btnClicked")
    buttonSoundOff.classList.add("soundClicked")
  }

  function onButtonCoffeeShop() {
    buttonFlorest.classList.remove("btnClicked")
    buttonRain.classList.remove("btnClicked")
    buttonCoffeeShop.classList.add("btnClicked")
    buttonFireplace.classList.remove("btnClicked")
    buttonSoundOff.classList.add("soundClicked")
  }

  function onButtonFireplace() {
    buttonFlorest.classList.remove("btnClicked")
    buttonRain.classList.remove("btnClicked")
    buttonCoffeeShop.classList.remove("btnClicked")
    buttonFireplace.classList.add("btnClicked")
    buttonSoundOff.classList.add("soundClicked")
  }

  function onButtonSoundOff() {
    buttonFlorest.classList.remove("btnClicked")
    buttonRain.classList.remove("btnClicked")
    buttonCoffeeShop.classList.remove("btnClicked")
    buttonFireplace.classList.remove("btnClicked")
    buttonSoundOff.classList.remove("soundClicked")
  }

  function playOn() {
    buttonPlay.classList.add("btnClicked")
    buttonStop.classList.remove("btnClicked")
  }

  function playOff() {
    setTimeout(function() {
      buttonPlay.classList.remove("btnClicked")
      buttonPause.classList.remove("btnClicked")
      buttonPlay.classList.add("hide")
      buttonPause.classList.remove("hide")
    }, 500)
  }

  function pauseOn() {
    buttonPause.classList.add("btnClicked")
    buttonStop.classList.remove("btnClicked")
  }

  function pauseOff() {
    setTimeout(function() {
      buttonPlay.classList.remove("btnClicked")
      buttonPause.classList.remove("btnClicked")
      buttonPlay.classList.remove("hide")
      buttonPause.classList.add("hide")
    }, 500)
  }

  function stopOff() {
    setTimeout(function() {
      buttonStop.classList.remove("btnClicked")
    }, 500)
  }

  function addFiveOn() {
    buttonMoreFive.classList.add("btnClicked")
  }

  function addFiveOff() {
    setTimeout(function() {
      buttonMoreFive.classList.remove("btnClicked")
    }, 200)
  }

  function removeFiveOn() {
    buttonMinusFive.classList.add("btnClicked")
  }

  function removeFiveOff() {
    setTimeout(function() {
      buttonMinusFive.classList.remove("btnClicked")
    }, 200)
  }

  function endTimeOn() {
    buttonPlay.classList.add("btnClicked")
    buttonStop.classList.add("btnClicked")
    buttonMoreFive.classList.add("btnClicked")
    buttonMinusFive.classList.add("btnClicked")
  }

  function endTimeOff() {
    setTimeout(function() {
      buttonPlay.classList.remove("btnClicked")
      buttonStop.classList.remove("btnClicked")
      buttonMoreFive.classList.remove("btnClicked")
      buttonMinusFive.classList.remove("btnClicked")
    }, 1000)
  }

  return {
    resetControls,
    onButtonFlorest,
    onButtonRain,
    onButtonCoffeeShop,
    onButtonFireplace,
    onButtonSoundOff,
    playOn,
    playOff,
    pauseOn,
    pauseOff,
    stopOff,
    addFiveOn,
    addFiveOff,
    removeFiveOn,
    removeFiveOff,
    endTimeOn,
    endTimeOff
  }
}