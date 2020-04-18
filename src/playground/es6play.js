const multiplier = {
    numbers : [2,3,2,3],
    multiplyBy : 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}
    console.log(multiplier.multiply())

    const user = {
        name: 'Bassit',
        age: 23,
        location : 'Ibadan'
      }
      const getLocation = (location)=>{
      if(location){
        return <p>Location: {user.location}</p>
      }
      }
      const templateTwo = (
        <div>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
        </div>
      )

      
let count = 0;

const addOne = () => {
count++
renderCounterApp();
};

const minusone =() =>{
count--
renderCounterApp()
};

const reset = () => {
  count = 0;
  renderCounterApp()
};

const appRoot = document.getElementById('app')

const renderCounterApp = () => {
  const templateTwo = (
    <div>
    <h1>Count:{count}</h1>
    <button onClick = {addOne}>+1</button>
    <button onClick = {minusone}>-1</button>
    <button onClick = {reset}>Reset</button>
    </div>
  )
  ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();
