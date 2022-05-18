
// 상속기능
// ES5
// Object.create(프로토타입)
let parents = {
  name: 'Kim',
  age: 50
}

let child = Object.create(parents)
child.age = 20

// ES6
class Parent {
  constructor(){
    this.name = 'Park'
    // this.sayHi = function(){console.log('hello')}
  }
  sayHi(){
    console.log('hello');
  }
}

let childs = new Parent()

// extends / super
class grand {
  constructor(name) {
    this.first = 'Kim'
    this.last = name
  }
}
let grand1 = new grand('만덕')

class father extends grand {
  constructor(name){
    super(name)
    this.age = 50
  }
}

let father1 = new father('민수')

// getter setter
const man = {
  name : 'Kim',
  age : 30,
  get nextAge(){
    return this.age + 1
  }, //get은 return을 꼭 써야함
  set nextAge(a){
    this.age = parseInt(a)
  } //set은 파라미터 한개를 꼭 입력 해야 함
}

class people {
  constructor(){
    this.name = 'Park',
    this.age = 20
  }
  get nextAge(){
    return this.age + 1
  }
  set setAge(b){
    this.age = b + 1
  }
}

let people1 = new people()

let user = {
  get name() {
    return this._name
  }
}

// 연습문제

// 1.
class puppy {
  constructor(type, color){
    this.type = type
    this.color = color
  }
  // 3.
  addAge(){
    if (this instanceof cat) {
      this.age++
    }
  }
}

const puppy1 = new puppy('말티즈', 'white')
const puppy2 = new puppy('진돗개', 'brown')

// 2.
class cat extends puppy {
  constructor(type, color, age){
    super(type, color)
    this.age = age
  }
}

const cat1 = new cat('코숏', 'white', 5)
const cat2 = new cat('러시안블루', 'brown', 2)


// 4.
class game {
  constructor(){
    this.power = 5
    this.healty = 100
  }
  get battlePoint(){
    return this.power + this.healty
  }
  set heal(a){
    this.healty = this.healty + a
  }
}

let game1 = new game()

// 5.
let data = {
  odd : [],
  even : [],
  setper : function(...num){
    num.forEach((a) => {
      if (a % 2 == 1) {
        this.odd.push(a)
      } else {
        this.even.push(a)
      }
    })
  },
  get setperr(){
    return [...this.odd, ...this.even].sort(function(a,b){
      if(a > b) return 1;
      if(a === b) return 0;
      if(a < b) return -1;
    })
  }
}