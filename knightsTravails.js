class Queue {
  constructor() {
    this.elements = [];
  }
  enqueue(e) {
    this.elements.push(e);
  }
  dequeue() {
    return this.elements.shift();
  }
}

function knightMoves(start, end) {
  const directions = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  // Initialize the queue with the start position and the path taken to reach it
  const queue = new Queue();
  queue.enqueue([start, [start]]);
}
