import Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import Events from "./events.js"
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
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

const controls = Controls({
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
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
})

const sounds = Sounds()

Events({controls, timer, sounds})