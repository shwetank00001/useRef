import React from 'react'


const FormControlled = () => {

    const [file, setFile] = React.useState({
        fName: "",
        email: "",
        phone: ""
    }) 

    const [person, setPerson] = React.useState([])

    const ele = person.map(function(file, item){
        return(
            <div key={item}>
                <h3>Name: {file.fName}</h3>
                <h3>Email: {file.email}</h3> 
                <h3>Phone: {file.phone}</h3> 
                <hr/>
            </div>
        )
    })



    function handleChange(event){
        const {name , value} = event.target
        setFile(function(item){
            return(
                {
                    ...item,
                    [name] : value
                }
            )
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        if(file.fName && file.email && file.phone ){
            const newFile = {...file}
            setPerson([...person,newFile])
            console.log(file)
        }

        else{
            console.log('Error')
        }
        setFile({        
            fName: "",
            email: "",
            phone: ""
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='fName'>Name : </label>
            <br/>     
            <input placeholder='enter fname' id='fName' type='text' name='fName' value={file.fName} onChange={handleChange}/>
            <br/>         
            <label htmlFor='email'>Email : </label> <br/>     
            <input placeholder='enter email' type='text' name='email' value={file.email} onChange={handleChange} /> 
            <br/>
            <label htmlFor='phone'>Phone : </label> <br/>     
            <input placeholder='enter phone' type='text' name='phone' value={file.phone} onChange={handleChange} />
             <br/>
            <button>Submit</button>
        </form>
        <div>
            {ele}
        </div>

    </div>
  )
}

export default FormControlled