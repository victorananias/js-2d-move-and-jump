const ARROW_RIGHT = 39
const ARROW_LEFT = 37

const DIRECTION_RIGHT = 1
const DIRECTION_LEFT = 2

let currentDirection = DIRECTION_RIGHT

const spriteSrc = 'img/sonic.png'
const interval = 60

const imgRowsCount = 3
const imgColumnsCount = 8

let spriteWidth
let spriteHeight

const y = 250
let x = 0

let actions = []
let triggeredKeys = []
let pressedKeys = []

let currentColumn = 0
let currentRow = 0

let isMoving = true

let lastFrameChange = new Date().getTime()

const speed = 5

window.onload = () => {
  const canvas = document.getElementById('canvas')
  const context = canvas.getContext('2d')

  const image = new Image()
  image.src = spriteSrc

  image.onload = () => {
    draw(image)
    run()
  }

  function run() {
    nextFrame()
    clearContext(context)
    updatePosition()
    draw(image)
    requestAnimationFrame(run)
  }

  function nextFrame() {
    const now = new Date().getTime()

    if (now - lastFrameChange < interval) {
      return
    }

    currentColumn++

    if (currentColumn === imgColumnsCount) {
      currentColumn = 0
    }

  }

  function updatePosition() {
    if (triggeredKeys[ARROW_RIGHT]) {
      return actions[ARROW_RIGHT]()
    }

    if (triggeredKeys[ARROW_LEFT]) {
      return actions[ARROW_LEFT]()
    }

    isMoving = true

    // if (currentDirection == DIRECTION_RIGHT) {
    //   currentRow = 0
    //   currentColumn = 0
    // }

    // if (currentDirection == DIRECTION_LEFT) {
    //   currentRow = 1
    //   currentColumn = 0
    // }

    currentRow = 0

    if (currentDirection == DIRECTION_RIGHT) {
      currentColumn = 0
    }

    if (currentDirection == DIRECTION_LEFT) {
      currentColumn = 1
    }
  }

  function clearContext(context) {
    const x = 0
    const y = 0
    const canvasWidth = context.canvas.width
    const canvasHeight = context.canvas.height

    context.clearRect(x, y, canvasWidth, canvasHeight)
  }

  function draw(image) {
    spriteWidth = image.width / imgColumnsCount
    spriteHeight = image.height / imgRowsCount

    context.drawImage(
      image,
      spriteWidth * currentColumn,
      spriteHeight * currentRow,
      spriteWidth,
      spriteHeight,
      x,
      y,
      spriteWidth,
      spriteHeight
    )
  }

  actions[ARROW_RIGHT] = () => {
    if (isMoving || currentDirection != DIRECTION_RIGHT) {
      console.log('if')
      currentRow = 1
      currentColumn = 0
    }

    isMoving = false
    currentDirection = DIRECTION_RIGHT

    if (x + spriteWidth + speed >= canvas.width) return
    nextFrame()

    x += speed
  }

  actions[ARROW_LEFT] = () => {
    if (isMoving || currentDirection != DIRECTION_LEFT) {
      currentRow = 2
      currentColumn = 0
    }

    isMoving = false
    currentDirection = DIRECTION_LEFT

    if (x - speed < 0) return
    nextFrame()

    x -= speed
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

