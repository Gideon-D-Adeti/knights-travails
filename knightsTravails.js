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
  isEmpty() {
    return this.elements.length === 0;
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

  // Set to track visited positions
  const visited = new Set();
  visited.add(start.toString());

  // Perform BFS
  while (!queue.isEmpty()) {
    const [currentPosition, path] = queue.dequeue();

    // If the current position is the target, return the path
    if (currentPosition[0] === end[0] && currentPosition[1] === end[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach((pos) => console.log(pos));
      return path;
    }

    // Explore all possible knight moves from the current position
    for (let direction of directions) {
      const nextPosition = [
        currentPosition[0] + direction[0],
        currentPosition[1] + direction[1],
      ];

      // Check if the next position is within the bounds of the chessboard
      if (
        nextPosition[0] >= 0 &&
        nextPosition[0] < 8 &&
        nextPosition[1] >= 0 &&
        nextPosition[1] < 8
      ) {
        // If the next position has not been visited, add it to the queue
        if (!visited.has(nextPosition.toString())) {
          visited.add(nextPosition.toString());
          queue.enqueue([nextPosition, [...path, nextPosition]]);
        }
      }
    }
  }
}

// Example usage
knightMoves([0, 0], [1, 2]); // [[0, 0], [1, 2]]
knightMoves([0, 0], [3, 3]); // Possible solutions: [[0, 0], [2, 1], [3, 3]] or [[0, 0], [1, 2], [3, 3]]
knightMoves([3, 3], [0, 0]); // Possible solutions: [[3, 3], [2, 1], [0, 0]] or [[3, 3], [1, 2], [0, 0]]
knightMoves([0, 0], [7, 7]); // [[0, 0], ..., [7, 7]] (shortest path)
