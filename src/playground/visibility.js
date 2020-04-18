






class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)

        this.state = {
            visibility : false
        }
    }
    handleClick(){
        this.setState((prevState)=>{
           return{ visibility : !prevState.visibility
           }
        })

    }
    render(){
        return(
                <div>
                    <h1>Visibility Toggle</h1><br />
                    <button onClick = {this.handleClick}>{this.state.visibility ? 'hide details':'show details'}</button>
                    <p>{this.state.visibility && "Hey ,these are your details"}</p>
                </div>
                )
    }
}
const appRoot = document.querySelector('#app')

ReactDOM.render(<Visibility />, appRoot)