class Stack {
  constructor() {
    this.contents = {}
    this.numItems = 0
  }
size () {
  return this.numItems
}

push (value) {
  this.numItems++
  this.contents[this.numItems] = value
}

pop () {
  if (this.numItems > 0){
  var removedItem = this.contents[this.numItems]
  delete this.contents[this.numItems]
  this.numItems--
  return removedItem
  }
}

}