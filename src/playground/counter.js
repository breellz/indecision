class Counter extends React.Component{
    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        const count = localStorage.getItem('count')
        const newCount = parseInt(count,10)
        if(isNaN(newCount) == false){
            this.setState(()=>({count:newCount}))
        }
        
    }
        

    componentDidUpdate(prevProps, prevState){

        const currentCount = this.state.count;
        if(prevState.count !== currentCount){
        localStorage.setItem('count', currentCount)
    }
}

    addOne(){
        this.setState((prevState)=> {
            return {
                count: prevState.count + 1
            }
        })

    }
    minusOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count - 1
            }
        })
    }
    reset(){
        this.setState(()=>{
            return{
                count: 0
            }
        })
    }
    render(){
        return(
            <div>
    <h1>Count:{this.state.count} </h1>
    <button onClick = {this.addOne}>+1</button>
    <button onClick = {this.minusOne}>-1</button>
    <button onClick = {this.reset}>Reset</button>
    </div>
        )
    }
}


ReactDOM.render( <Counter />,  document.getElementById('app'))

// let count = 0;

// const addOne = () => {
// count++
// renderCounterApp();
// };

// const minusone =() =>{
// count--
// renderCounterApp()
// };

// const reset = () => {
//   count = 0;
//   renderCounterApp()
// };

// const appRoot = document.getElementById('app')

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//     <h1>Count:{count}</h1>
//     <button onClick = {addOne}>+1</button>
//     <button onClick = {minusone}>-1</button>
//     <button onClick = {reset}>Reset</button>
//     </div>
//   )
//   ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();

