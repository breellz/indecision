import React from 'react'
import AddOptions from './AddOptions';
import Header from './Header';
import Action from './Action';
import Options from './Options'
import OptionModal from './OptionModal'

class Flipper extends React.Component{
    state = {
            options : [] ,
            shouldIdoButton : false,
            selectedOption : undefined
        }
    handleDeleteOptions = () => {
        this.setState(()=>({options : []}))
        this.setState((prevState)=>({shouldIdoButton: prevState.shouldIdoButton = false}))        
        }

    handleDeleteOption=(optionToRemove)=> {
        this.setState((prevState)=> ({
                options : prevState.options.filter((option)=>{
                return optionToRemove !== option
            })
        }))
        this.setState((prevState)=>({shouldIdoButton: prevState.shouldIdoButton = false}))
    }
    handlePick =() =>{
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const picked = this.state.options[randomNum]
        this.setState((prevState)=>({shouldIdoButton: prevState.shouldIdoButton = true}))
        this.setState(()=>({selectedOption: picked })
        )
    }
    
    handleAddOption =(option)=> {
        if(!option){
           return 'Please, enter a valid item to continue'
            }
            else if(this.state.options.indexOf(option)> -1){
                return 'Item already exist'
            }
            this.setState((prevState)=> ({options: prevState.options.concat(option)}));
    }
    handleCloseModal =()=>{
        this.setState(()=>({selectedOption : undefined}))
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
    
    render(){
        const title = 'Flipper'
        const subtitle = 'Leave it to chance'
        return(
                <div>
                <Header title={title} subtitle = {subtitle} />
                <div className="container">
                <Action 
                hasClickedShouldIdo = {this.state.shouldIdoButton}
                hasOptions = {this.state.options.length > 0}
                handlepick = {this.handlePick} 
                />
                <div className="widget">
                <Options 
                options = {this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOptions
                handleAddOption = {this.handleAddOption}
                />
                </div>
                
                </div>
                <OptionModal 
                selectedOption = {this.state.selectedOption}
                handleCloseModal = {this.handleCloseModal}
                />
                </div>
        )
    }
}
export default Flipper