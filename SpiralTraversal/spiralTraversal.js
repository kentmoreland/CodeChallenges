// Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
// and prints out every value found, but in a spiral from the upper left in to the center.

// Input: 2d array
// Output: array of numbers
// Constraints/Complexity: None
// Examples:
// ex. 1
// Input:
// 01 02 03 04 05
// 06 07 08 09 10
// 11 12 13 14 15
// 16 17 18 19 20
// 21 22 23 24 25
// Output:
// 1 2 3 4 5 10 15 20 25 24 23 22 21 16 11 06 07 08 09 14 19 18 17 12 13

// ex 2.
// Input:
// 1 2 3 4
//
// Output:
// 1 2 3 4

//Helper Functions:
  //Check right:
    //if the number to the right exists
      //remove it and add it to the results array
      //continue removing numbers until this condition is no longer met
  //Check left:
    //if the number to the left of it exists
      //remove it and add it to the results array
      //continue removing numbers until condition is no longer met
  //Check down:
    //if the number below it exists
    //remove it and add it to the results array
    //continue removing numbers until condition is no longer met
  //Check up:
   //if the number above it exists
    //remove it and add it to the results array
    //continue removing numbers until the condition is no longer met

//Main Function:
// create a results array
//start at matrix point 0,0
//check if number to the right exists
  //if the number to the right exists
    //remove it and add it to the results array
    //continue removing numbers until this condition is no longer met
  //if no number to the right exists
    //next step
//check if a number below it exists
  //if the number below it exists
  //remove it and add it to the results array
  //continue removing numbers until condition is no longer met
  //if no number below it exists
    //next step
//check if a number to the left of it exists
  //if the number to the left of it exists
    //remove it and add it to the results array
    //continue removing numbers until the condition is no longer met
  //if no number to the left of it exists
    //next step
//check if a number above it exists
  //if a number above it exists
    //remove it and add it to the results array
    //continue removing numbers until the condition is no longer met
  //if no number above it exists
    //return results

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
