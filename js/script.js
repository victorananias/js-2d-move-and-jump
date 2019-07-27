const ARROW_RIGHT = 39
const ARROW_LEFT = 37
const SPACE = 32

const DIRECTION_RIGHT = 1
const DIRECTION_LEFT = 2

let currentDirection = DIRECTION_RIGHT

const spriteSrc = 'img/adventurer.png'

const imgColumnsCount = 6
const floorHeight = 100

const sprites = [
  { frames: 4, interval: 120 },
  { frames: 4, interval: 120 },
  { frames: 6, interval: 60 },
  { frames: 6, interval: 60 },
  { frames: 2, interval: 200 },
  { frames: 2, interval: 200 }
]

const imgRowsCount = sprites.length

let spriteWidth
let spriteHeight

let actions = []
let triggeredKeys = []
let pressedKeys = []

let currentFrame = 0
let currentRow = 0

let lastFrameChange = new Date().getTime()
let jumpFrameChange = new Date().getTime()

const defaultSpeed = 5
let speed = defaultSpeed

const adventurer = {
  velocityX: 4,
  velocityY: 0,
  positionX: 0,
  positionY: null,
  jumping: false
}

window.onload = () => {
  const canvas = document.getElementById('canvas')
  const context = canvas.getContext('2d')

  const image = new Image()
  image.src = spriteSrc

  image.onload = () => {
    spriteWidth = image.width / imgColumnsCount
    spriteHeight = image.height / imgRowsCount

    adventurer.positionY = canvas.height - floorHeight - spriteHeight

    draw(image)
    execute()
  }

  function execute() {
    clearContext()
    drawFloor()

    updatePosition()
    nextFrame()
    draw(image)

    requestAnimationFrame(execute)
  }

  function nextFrame() {
    if (currentFrame + 1 >= sprites[currentRow].frames) {
      currentFrame = 0
    }

    const now = new Date().getTime()

    if (now - lastFrameChange < sprites[currentRow].interval) {
      return
    }

    lastFrameChange = now

    currentFrame++
  }

  function updatePosition() {
    adventurer.velocityY += 1.5 //gravity
    adventurer.positionY += adventurer.velocityY
    adventurer.velocityY *= 0.9 // friction

    const maxJump = canvas.height - spriteHeight - floorHeight

    if (adventurer.positionY > maxJump) {
      adventurer.jumping = false
      adventurer.positionY = maxJump
    }

    const jumping = adventurer.jumping;

    if (triggeredKeys[ARROW_RIGHT]) {
      return actions[ARROW_RIGHT]()
    }

    if (triggeredKeys[ARROW_LEFT]) {
      return actions[ARROW_LEFT]()
    }

    if (!jumping && currentDirection == DIRECTION_RIGHT) {
      currentRow = 0
    }

    if (!jumping && currentDirection == DIRECTION_LEFT) {
      currentRow = 1
    }

    if (jumping && currentDirection == DIRECTION_RIGHT) {
      currentRow = 4
    }

    if (jumping && currentDirection == DIRECTION_LEFT) {
      currentRow = 5
    }
  }

  function clearContext() {
    context.clearRect(0, 0, canvas.width, canvas.height)
  }

  function draw(image) {
    spriteWidth = image.width / imgColumnsCount
    spriteHeight = image.height / imgRowsCount

    context.drawImage(
      image,
      spriteWidth * currentFrame,
      spriteHeight * currentRow,
      spriteWidth,
      spriteHeight,
      adventurer.positionX,
      adventurer.positionY,
      spriteWidth * 1.2,
      spriteHeight * 1.2
    )
  }

  function drawFloor() {
    context.beginPath()
    context.moveTo(0, context.canvas.height - floorHeight + 6.5)
    context.lineTo(500, context.canvas.height - floorHeight + 6.5)
    context.stroke()
  }

  actions[ARROW_RIGHT] = () => {
    currentDirection = DIRECTION_RIGHT

    if (currentRow != 2) {
      currentFrame = 0
    }

    currentRow = 2

    adventurer.positionX += adventurer.velocityX

    if (adventurer.positionX > canvas.width) {
      adventurer.positionX = -spriteWidth
    }
  }

  actions[ARROW_LEFT] = () => {
    currentDirection = DIRECTION_LEFT
    currentRow = 3

    if (currentRow != 3) {
      currentFrame = 0
    }

    currentRow = 3

    adventurer.positionX -= adventurer.velocityX

    if (adventurer.positionX < - spriteWidth) {
      adventurer.positionX = canvas.width
    }
  }

  actions[SPACE] = () => {
    if (!adventurer.jumping) {
      adventurer.velocityY -= 30
      adventurer.jumping = true
    }
  }
}

document.addEventListener('keydown', onKeydown)
document.addEventListener('keyup', onKeyup)

function onKeydown(e) {
  pressedKeys[e.keyCode] = true

  if (actions[e.keyCode] && !triggeredKeys[e.keyCode]) {
    actions[e.keyCode]()
  }

  triggeredKeys[e.keyCode] = true
}

function onKeyup(e) {
  pressedKeys[e.keyCode] = false
  triggeredKeys[e.keyCode] = false
}

