console.log("app.js is running")

const app ={
    title: "Flipper",
    subtitle : "Let's make the decision for you",
    options: [],

}

const handleSubmit = (e) =>{
  e.preventDefault()
  const valueInput = e.target.elements.option.value;
  if(valueInput && valueInput !==''){
  app.options.push(valueInput)
  e.target.elements.option.value = ' ';
  }else{
    alert('please input a value')
  }
  flipper()
  console.log(app.options)
}


const handleRemove =()=>{
  app.options = []
  flipper()
}

const handleDecision =()=>{
  const randomNum = Math.floor(Math.random() * app.options.length)
  const selectedOption = app.options[randomNum]
  alert(selectedOption)
}

const flipper = () =>{
const template =(
 <div>
   <h1>{app.title}</h1>
   {app.subtitle && <p>{app.subtitle}</p>}
   <p>{app.options.length > 0 ? "Here are your options":"No options"}</p>
  
   <button disabled={app.options.length === 0} onClick = {handleDecision}>What should I do?</button>
  <button onClick = {handleRemove}>Remove All</button>
   <ol>
        {app.options.map((option)=> <li key = {option}>{option}</li>
          )}
   </ol>
   <form onSubmit= {handleSubmit}>
   <input type="text" name="option"/>
   <button>Add Option</button>
   </form>
</div>
)
ReactDOM.render(template, appRoot)
}
const appRoot = document.getElementById('app')

flipper()

