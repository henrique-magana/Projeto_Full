import MyComponent from "./MyComponent"

const TemplateExpressions =() =>{


    const name = 'Henrique'

    return(
        <div>
            <h1>Ola {console.log(name)}</h1>
            <MyComponent/>
        </div>
    )

}

export default TemplateExpressions