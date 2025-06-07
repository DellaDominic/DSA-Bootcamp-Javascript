//Write a function that searches for an element in 
//an array and returns the index, if the element is not present then just return -1


const search = (arr, num) => {
    let index = -1;
    for(let i=0; i< arr.length; i++) {
        if(arr[i] === num) {
            index = i;
            break;
        }
    }
    return index;
}

let arr = [12,45,2,7,5];
let result = search(arr, 7);
console.log(result);