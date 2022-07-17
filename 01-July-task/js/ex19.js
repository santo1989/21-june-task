function myFunction19() {
  let persons = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 32 },
    { name: 'James', age: 34 },
  ]

  let haveBirthday = persons.map((person) => person.name)

  console.log(haveBirthday)
}
