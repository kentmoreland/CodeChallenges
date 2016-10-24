//////////////////////////////////////////////////////////////////////////////////                                                                            //
//                              Helpers                                       //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////                                                                            //
//                              Function                                      //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

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
