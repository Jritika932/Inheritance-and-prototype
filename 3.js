// Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

let array =[2,4,6,7,8];
let arr = {
    sum : function(){
        let result = array.reduce((acc,cur)=>acc = acc + cur,0);
        console.log(result);
    }
}
arr.sum();