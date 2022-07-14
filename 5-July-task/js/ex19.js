function myFunction19() {
    var persons = [
        { name: "John", age: 30 },
        { name: "Jane", age: 32 },
        { name: "James", age: 34 }
     ];

     var haveBirthday = persons.map( person => person.name );

console.log( haveBirthday );


}