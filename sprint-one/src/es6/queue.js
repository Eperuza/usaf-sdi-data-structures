class Queue {
  constructor() {
    this.contents = {}
    this.numItems = 0
  }

  size () {
    return this.numItems
  }

  enqueue (value) {
    this.numItems++
    this.contents[this.numItems] = value
  }

  dequeue () {
    if (this.numItems > 0){
      var removedItem = this.contents[1]
       this.contents[this.numItems - 1] =this.contents[this.numItems]
      this.numItems--
      return removedItem
      // obj['New key'] = obj['old key'];

      /*
        top end of the line ----
        5: value
        4: value
        3
        2

        bottom start of the line ---
      */
    }
  }
}
