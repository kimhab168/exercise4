//6.You have an array of objects where each object has properties `name` and `category`.
//Use the `reduce` method to group these objects by category.
//Input: [ {name: “Bread”, category: “Grocery”}, {name: “Butter”, category: “Grocery”}, {name: “Shampoo”, category: “Personal Care”}]
//Output: { “Grocery”: [“Bread”, “Butter”], “Personal Care”: [“Shampoo”]}

const objects = [
    {name: "Bread", category: "Grocery"},
    {name: "Butter", category: "Grocery"},
    {name: "Shampoo", category: "Personal Care"}
];

const Category = objects.reduce((newobj, currObj) => {
    if (newobj[currObj.category]) {
        newobj[currObj.category].push(currObj.name);
    } else {
        newobj[currObj.category] = [currObj.name];
    }

    return newobj; //return newobj to {} called accumulator
}, {});
//


console.log(Category);