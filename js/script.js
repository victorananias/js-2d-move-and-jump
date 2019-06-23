const ARROW_RIGHT = 39
const ARROW_LEFT = 37

const DIRECTION_RIGHT = 1
const DIRECTION_LEFT = 2

let direction = DIRECTION_RIGHT

const spriteSrc = 'img/spritesheet.png'
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

let isMoving = false

let lastFrameChange = new Date().getTime()

const speed = 5

window.onload = () => {
  const canvas = document.getElementById('canvas')
  const context = canvas.getContext('2d')

  actions[ARROW_RIGHT] = () => {
    if (x + speed > canvas.width) return
    
    // currentRow = 1
    // currentColumn = 0

    // nextFrame()

    // x += speed
  }

  actions[ARROW_LEFT] = () => {
    console.log(x - speed);
    if (x - speed < 0) {
      return
    }
    // console.log('menor');

    // currentRow = 2
    // currentColumn = 0

    // nextFrame()

    // x -= speed
  }

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
      if (!isMoving || direction != DIRECTION_RIGHT) {
        currentRow = 1
        currentColumn = 0
      }

      isMoving = true
      direction = DIRECTION_RIGHT

      if (x + speed >= canvas.width) return
      nextFrame()

      x += speed
      return
    }

    if (triggeredKeys[ARROW_LEFT]) {
      if (!isMoving || direction != DIRECTION_LEFT) {
        currentRow = 2
        currentColumn = 0
      }

      isMoving = true
      direction = DIRECTION_LEFT
      
      if (x - speed < 0) return
      nextFrame()

      x -= speed
      return
    }

    currentRow = 0
    isMoving = false

    if (direction == DIRECTION_RIGHT) {
      currentColumn = 0
    }

    if (direction == DIRECTION_LEFT) {
      currentColumn = 1
    }
  }

  function clearContext(context) {
    console.log('clear')
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

