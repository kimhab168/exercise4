//1.Create a function that could take an argument which is an array of objects.
//Each object should contain property name and age.
//The function should return a new list which only contains the user who have higher than 18 years old

const person = [
    {
        name:"Kimhab",
        age: 20
    },
    {
        name:"sophorn",
        age: 20
    },
    {
        name:"sokha",
        age: 17
    },
    {
        name:"dona",
        age:24
    },
    {
        name:"YungBeen",
        age:14
    }
]
const fullNationAge = (arr, checkage)=>{
    const new_person = []
    for(let i=0;i<arr.length;i++){
        if(checkage(arr[i])){
            new_person.push(arr[i])
        }
    }
    return new_person
}
function checkage(arr){
    return arr.age > 18
}
console.log(fullNationAge(person, checkage))