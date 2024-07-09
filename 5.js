//5.Given an array of numbers, use the `reduce` method to find the maximum number of the array
const numbers = [12,34,35,34,100,5,67]
const Max = numbers.reduce((prev,curr)=>{
    return (prev>curr)?prev:curr
})
console.log(Max)