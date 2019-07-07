class Keyboard {
  pressedKeys = []
  triggeredKeys = []
  actions = []

  onKeydown(key) {
    this.pressedKeys[key] = true
  
    if (this.actions[key] && !this.triggeredKeys[key]) {
      this.actions[key]()
    }
  
    this.triggeredKeys[key] = true
  }

  onKeyup(key) {
    this.pressedKeys[key] = false
    this.triggeredKeys[key] = false
  }
}