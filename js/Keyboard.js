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
    pressedKeys[key] = false
    triggeredKeys[key] = false
  }
}