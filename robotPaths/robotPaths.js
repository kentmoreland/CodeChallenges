// Robot Paths
// A robot located at the top left corner of an n x n grid is trying to reach the bottom right corner. The robot can move either up, down, left, or right, but cannot visit the same spot twice. How many possible unique paths are there to the bottom right corner?
//
// Make your solution work for a grid of any size.
//
// Parameters:
//
// n (required) - amount of rows/columns (max 6)

//O: number representing all possible paths
//I: number representing the max number of rows and columns
//C: max number of rows/columns is 6
//E: 1 => 1
//   2 => 2
//   3 => 12

function makeBoard(n) {
  var board = []
  for (var i = 0; i < n; i++) {
    board.push([])
    for (var j = 0; j < n; j++) {
      board[i].push(false)
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j]
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j]
  }

  return board
}

//**pseudocode**
//check if end
  //check if spot to right is the end
    //if this spot is the end do this:
      //validate path
      //add path to the paths list
  //check if spot below is the end
    //if spot below is the end do this:
      //add path to the paths list
//check if open
  //check if spot to the right exists and is open
    //if spot to the right is open
      //toggle piece to the right
  //check if spot below is open
    //if spot below is open
      //toggle spot below
  //check if spot to the left exists and is open
    //if spot to the left is open
      //toggle spot to the left
  //check if spot above exists and is open
    //if spot above is open toggle spot above

  //create empty array for paths
  //create a variable for row
  //create a variable for column





   robotPaths = (n) =>  {
    let total = 0;
    let board = makeBoard(n);
    let hasEnded = (board, x, y) => {
      if (x === n - 1 && y === n - 1 && !board.hasBeenVisited(x, y)) {
        total += 1;
        return;
      }
      board.onBoard = (i, j) => {
      return (i >= 0 && i < n && j >= 0 && j < n);
      };
      if (board.onBoard(x, y) && !board.hasBeenVisited(x, y)) {
        board.togglePiece(x, y);
        hasEnded(board, x - 1, y);
        hasEnded(board, x + 1, y);
        hasEnded(board, x, y - 1);
        hasEnded(board, x, y + 1);
        board.togglePiece(x, y);
      }
    };
    hasEnded(board, 0, 0);
    return total;
  };


console.log(robotPaths(3));
