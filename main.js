// //EX0 
// 1// option1
// // let array1 = [`yellow`, `green`, `blue`]
// // let array2 = [`mango`, `melon`, `berry`]
// // let array3 = [`monkey`, `bear`, `pig`]

// // let matrix = [array1, array2, array3]

// // console.log(matrix);

//Option2
let matrix = [
    [`yellow`, `green`, `blue`], 
    [`mango`, `melon`, `berry`], 
    [`monkey`, `bear`, `pig`], 
];
console.log(matrix);

// //2
    let matrix1 = [
        [`apple`, `banana`, `cherry`], //i = 0, j=1,2,3  
        [`dog`, `cat`, `bird`], //i = 1, j=1,2,3 
        [`red`, `green`, `blue`], //i = 2, j=1,2,3 
    ]
    function printMatrix () {
    for(let i = 0; i < 1; i++) {
        // for(let j = 0; j < matrix1 [i].length; j++) {
           console.log(matrix1);
    }
    
    // console.log();
// }
}
printMatrix ()

// // //EX1
    let matrix2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//     function sumOfColumns (arr = []) {
//         let columnSums = []
//         let sum = 0
//         for(let i = 0; i < matrix2.length; i++) {
//             columnSums.push(sum);
//             for(let j = 0; j < matrix2 [i].length; j++) {
//                 sum+= matrix2[j][i]
//             }
//         }
//     console.log(columnSums(matrix2));
// }
// sumOfColumns ()


//EX2
function smallestInRow(arr = []) {
    let smallestInRow = []
    for(let i = 0; i < arr.length;i++){
        smallestInRow[i] = arr[i][0];
        for(let j = 0; j < arr.length;j++){
                console.log(arr[i][j]);
            }
        }        
    }
    return smallestInRow

console.log(smallestInRow(matrix2)); 

//ex4
function sortTheArray(array1 = []){
    let newArr =  [...array1.sort()]
    return newArr
}
console.log(sortTheArray(["b", 6, "a", "q", 7, 2]));

//EX5
function shuffle(x){
    let list = [];
    while (x.length > 0) {
        let randomIndex = Math.floor(Math.random() * (x.length));
        list.push();
    }
    console.log(list);
}
shuffle([1,5,8]);

//EX6 - יופיע לאחר שנייה מרגע ההפעלה
//index: 0, element: 1
//index: 1, element: 2
//index: 2, element: 3
//index: 3, element: 4
//index: 4, element: 5


// // //EX7
// function number7(){
//     let symbol = ["***"];
//     for(let i = 1; i<=5; i++){

//     }
// }
// number7();
