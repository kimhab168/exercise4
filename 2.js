//2.Given an array of numbers which includes duplicates, use `filter` method to create a new array that contains only unique values
const numbers = [1,23,3,4,4,45,5,55,5,56,5,6,32,23,23,33,33,3,3,5,7,7,8,8,9,9]
const new_numbers =numbers.filter((num,index,numbers)=>{ // num = element , index = index of current element(num) , numbers = self array
    return numbers.indexOf(num) === index
})
console.log(new_numbers)