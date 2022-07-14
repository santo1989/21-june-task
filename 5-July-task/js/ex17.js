function myFunction17() {
  let animals = {
    // add property
    domesticAnimals: [
      'cat',
      'dog',
      'cow',
      'goat',
      'sheep',
      'donkey',
      'pig',
      'horse',
    ],
    // add method
    printdomesticAnimals: function () {
      // print after 3 seconds
      setTimeout(() => console.log(this.domesticAnimals.join(' - ')), 1000)
    },
  }
  animals.printdomesticAnimals()
}
