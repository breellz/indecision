class Flipper extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options : [] ,
            shouldIdoButton : false
        }
    }
    componentDidMount(){
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
        
            if(options){
            this.setState(() =>({options}))
        }
        } catch(e) {

        }
        
        
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)    
        }
        
    }
    componentWillUnmount(){
        console.log('componentwillunmount')
    }
    handleDeleteOptions(){
        this.setState(()=>({options : []}))
        this.setState((prevState)=>({shouldIdoButton: prevState.shouldIdoButton = false}))
        
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState)=> ({
            options : prevState.options.filter((option)=>{
            return optionToRemove !== option
        })
    }))
}
    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const picked = this.state.options[randomNum]
        this.setState((prevState)=>{
            return {
                shouldIdoButton: prevState.shouldIdoButton = true
            }
        })
        alert(picked)
    }

    handleAddOption(option){
        if(!option){
            return 'Please, enter a valid item to continue'
        } else if(this.state.options.indexOf(option)> -1){
            return 'Item already exist'
        }

        this.setState((prevState)=> ({options: prevState.options.concat(option)}))
    }
    render(){
        const title = 'Flipper'
        const subtitle = 'Let me make the decision for you!'
        const subtitle2 = 'Once a decision has been made,click remove all and add options again'
        return(
                <div>
                <Header title={title} subtitle = {subtitle}  subtitle2 = {subtitle2}/>
                
                <Action 
                hasClickedShouldIdo = {this.state.shouldIdoButton}
                hasOptions = {this.state.options.length > 0}
                handlepick = {this.handlePick} 
                />

                <Options 
                options = {this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOptions
                handleAddOption = {this.handleAddOption}
                />
                </div>
        )
    }
}




const Header = (props) =>{
    return(
        <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
        {props.subtitle2 && <h2>{props.subtitle2}</h2>}
        </div>
    );
};



const Action =(props) =>{
      return(
        <div>
        <button 
            onClick = {props.handlepick}
            disabled = {!props.hasOptions || props.hasClickedShouldIdo }
            >What should I do?
        </button>
        </div>
    )
}


const Options = (props)=>{
    return(
       <div>
       {props.options.length === 0 && <p>Please add an option to continue</p>}
       <button onClick = {props.handleDeleteOptions}>Remove All</button> 
           {
             props.options.map((option)=> (
            <Option 
            key ={option} 
            optiontext = {option}
            handleDeleteOption ={props.handleDeleteOption}
                />
            ))
        }
       </div>
    )
}

const Option =(props)=>{
    return(
          <div>
          {props.optiontext}
          <button onClick = {(e)=>{
           props.handleDeleteOption(props.optiontext)
            }}>remove</button>
            </div>
    )
}
 

class AddOptions extends React.Component{
    
    constructor(props){
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)

        this.state ={
            error: undefined
        }
    }
    
     handleAddOption(e){
        e.preventDefault()

       const option = e.target.elements.option.value.trim();
       const error = this.props.handleAddOption(option)

       this.setState(()=>({error}))
        if(!error){
       e.target.elements.option.value = '';
    }
}
    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit = {this.handleAddOption} autoFocus>
                <input type = 'text' name= 'option'></input>
                <button>Add Option</button>
            </form>
            </div>
        )
    }
}



ReactDOM.render(<Flipper />, document.querySelector('#app'))