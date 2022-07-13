import { setUpGround, updateGround } from "./ground.js";

const WORLD_WIDTH = 100
const WORLD_HEIGHT = 30


const worldElem = document.querySelector('[data-world')

setPixelToWorldScale()
window.addEventListener("resize", setPixelToWorldScale)
document.addEventListener("keydown", handleStart, { once: true })


let lastTime
function update(time) {
  if (lastTime == null) {
    lastTime = time
    window.requestAnimationFrame(update)
    return
  }
  const delta = time - lastTime

  updateGround(delta, 1)

  lastTime = time
  window.requestAnimationFrame(update)
}

function handleStart() {
  lastTime = null
  setUpGround()
  window.requestAnimationFrame(update)
}


function setPixelToWorldScale() {
  let worldPixelScale
  if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
    worldPixelScale = window.width / WORLD_WIDTH
  } else {
    worldPixelScale = window.innerHeight / WORLD_HEIGHT
  }
  worldElem.style.width = `${WORLD_WIDTH * worldPixelScale}px`
  worldElem.style.height = `${WORLD_HEIGHT * worldPixelScale}px`
}
