function myFunction18() {

    const donated = [{name: "Xavier", age: 19, city:"LA", donation: 20},
    {name: "David", age: 16, city:"georgia", donation: 20},
    {name: "Amanda", age: 18, city:"wahingon DC", donation: 20},
    {name: "Amy", age: 20, city:"chicago", donation: 20},
    {name: "Jesicca", age: 28 , city:"LA", donation: 20},
    {name: "Alex", age: 15, city:"LA", donation: 20}]

    const donate = donated.filter((donated) => donated.age >= 18);
console.log(" Donors above 18", donate);

const sum = donated.reduce((total, amount) => total + amount.donation, 0);
console.log("Total donations", sum);

}