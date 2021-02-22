const person = {
    name: 'Bernardo',
    lastName: 'Salgueiro',
    fullName: function () {
      return `${this.name} ${this.lastName}`;
    }
  }
  function myFunction() {
    console.log(person.fullName());
  }
  myFunction();