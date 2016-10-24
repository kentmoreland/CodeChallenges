spiralTraversal = (matrix) => {
  let result = [];
  let row = 0;
  let column = 0;

  let checkRight = () => {
     if(matrix[row][column] !== undefined && matrix[row][column] !== 'x'){
       result.push(matrix[row][column]);
       matrix[row][column] = 'x'
       column++;
       checkRight();
     };
   }
  let checkDown = () => {
     if(row < matrix.length && matrix[row][column] !== 'x'){
       result.push(matrix[row][column]);
       matrix[row][column] = 'x'
       row++;
       checkDown();
     }
   }
   let checkLeft = () => {
     if(matrix[row][column]!== undefined && matrix[row][column] !== 'x'){
       result.push(matrix[row][column]);
       matrix[row][column] = 'x'
       column--;
       checkLeft();
     }
   }
   let checkUp = () => {
      if(matrix[row] !== undefined && matrix[row][column] !== 'x'){
        result.push(matrix[row][column]);
        matrix[row][column] = 'x'
        row--;
        checkUp();
      };
    }
   while (matrix[row][column] && matrix[row][column] !== 'x'){
    checkRight()
    column --;
    row++;
    checkDown()
    row--;
    column--;
    checkLeft();
    column++;
    row--;
    checkUp();
    column++;
    row++;
  };
   return result;
 };



let case1 = [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ], [ 11, 12, 13, 14, 15 ], [ 16, 17, 18, 19, 20 ], [ 21, 22, 23, 24, 25 ] ]

let case2 = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11, 12 ], [ 13, 14, 15 ], [ 16, 17, 18 ], [ 19, 20, 21 ], [ 22, 23, 24 ] ]

let case3 = [ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]

let case4 = [ [ 1, 2, 3, 4, 5, 6, 7 ] ]

console.log(spiralTraversal(case1))
console.log(spiralTraversal(case2))
console.log(spiralTraversal(case3))
console.log(spiralTraversal(case4))
