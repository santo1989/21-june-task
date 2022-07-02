function myFunction16() {
    function User() {
        (this.name = "John Doe"),
          (this.score = 20),
          (this.sayUser = function () {
            console.log(this.name);
      
            let innerFunction = () => {
              console.log(this.name);
            };
      
            innerFunction();
          });
      }
      let name = new User();
      name.sayUser();



}