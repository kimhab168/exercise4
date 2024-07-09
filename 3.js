//3.Given an array of user objects which include property name and age, use the `map` method to create a new array that contains just the names of the users
const userDetail = [
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
const users = userDetail.map((user, userDetail)=>{
    return user.name
})
console.log(users)
