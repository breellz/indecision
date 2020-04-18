let visibilityT = false;


const handleClick= () => {
    visibilityT = !visibilityT
    visibility()
    

}

const visibility = ()=> {
    const template = (
    <div>
        <h1>Visibility Toggle</h1><br />
        <button onClick = {handleClick}>{visibilityT ? 'hide details':'show details'}</button>
        <p>{visibilityT && "hey ,these are yur details"}</p>
    </div>
    )
    ReactDOM.render(template, appRoot)
}
const appRoot = document.querySelector('#app')


visibility()