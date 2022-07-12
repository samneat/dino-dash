const WORLD_WIDTH = 100
const WORLD_HEIGHT = 30


const worldElem = document.querySelector('[data-world')

setPixelTOWorldScale()
window.addEventListener("resize", setPixelWorldScale)

function setPixelTOWorldScale() {
  let worldPixelScale
  if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
    worldPixelScale = window.innerHeight / WORLD_WIDTH
  } else {
    worldPixelScale = window.innerHeight / WORLD_HEIGHT
  }
  worldElem.style.width = `${WORLD_WIDTH * worldPixelScale}px`
  worldElem.style.height = `${WORLD_HEIGHT * worldPixelScale}px`
}
