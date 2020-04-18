
class person  {
  constructor(name = 'anonymous', age = 0){
      this.name = name;
      this.age = age;
  }
  getDescription(){
      return `${this.name} is ${this.age} years old`
  }
  getGreeting(){
      return `Hi. I am ${this.name}`
  }
}

class student extends person{
    constructor(name, age, major){
        super(name,age)
        this.major = major

    }
} 

class traveler extends person{
    constructor(name,age,major,location){
        super(name,age,major)
        this.location = location;
    }
    hasLocation(){
        return !!this.location
    }
    getGreeting(){
        let greeting = super.getGreeting()

        if(this.hasLocation()){
            greeting += ` I am  visiting from ${this.location}`
        }
        return greeting;
    }
}

const Bassit = new traveler('bassit',10, 'statistics','Ibadan')
console.log(Bassit.getGreeting())

const Breellz = new traveler('Breellz',10, 'statistics')
console.log(Breellz.getGreeting())