//4.Given an array of date string in the format “YYYY-MM-DD”.
//Use the ‘map’ method to transform the array [“2024-01-01”, “2024-02-02”, “2024-04-04”]
//into an array of date strings in the format “DD/MM/YYYY”
const date = ["2024-01-01","2024-02-02","2024-04-04"]
const dateSlash = date.map((date)=>{
    const [yyyy, mm, dd] = date.split("-")
    return `${dd}/${mm}/${yyyy}`
})
console.log(dateSlash)
