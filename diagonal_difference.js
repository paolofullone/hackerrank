const arr = [[1, 2, 3],[ 4, 5, 6], [7, 8, 9]];

function diagonalDifference(arr) {
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    for (let i = 0; i < arr.length; i++) {
        leftDiagonal += arr[i][i];
        rightDiagonal += arr[i][arr.length - 1 - i];
    }
    return Math.abs(leftDiagonal - rightDiagonal);
}

console.log(diagonalDifference(arr));

//  leftDiagonal
// 1 - [0, 0] para pegar o primeiro elemento do primeiro array
// 5 - [1, 1] para pegar o seundo elemento do segundo array
// 9 - [2, 2] para pegar o terceiro elemento do terceiro array

// rightdiagonal
// 3 - [0, 2] para pegar o ultimo elemento do primeiro array (arr.length - 1 - i = 3 - 1 - 0 = 2)
// 5 - [1, 1] para pegar o segundo elemento do segundo array (arr.length -1 - i = 3 - 1 - 1 = 1)
// 9 - [2, 0] para pegar o terceiro elemento do terceiro array (arr.length - 1 - i = 3 - 1 - 2 = 0)

// arr.length é o array de fora, que envolve os 3 arrays.
