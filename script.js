const WORLD_WIDTH = 100
const WORLD_HEIGHT = 30


const worldElem = document.querySelector('[data-world')

setPixelToWorldScale()
window.addEventListener("resize", setPixelToWorldScale)

let lastTime
function update(time) {
  if (lasTime == null) {
    lastTime = time
    window.requestAnimationFrame(update)
    return
  }
  const delta = time - lastTime

  lastTime = time
  window.requestAnimationFrame(update)
}
window.requestAnimationFrame(update)


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
