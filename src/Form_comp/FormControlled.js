import React from 'react'


const FormControlled = () => {

    const [file, setFile] = React.useState({
        fName: "",
        email: "",
        phone: ""
    }) 



    function handleChange(event){
        setFile(function(item){
            return(
                {
                    ...item,
                    [event.target.name] : event.target.value
                }
            )
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        if(file.fName && file.email && file.phone ){
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
            <input placeholder='enter fname' id='fName' type='text' name='fName' value={file.fName} onChange={handleChange}/> <br/>
            <input placeholder='enter email' type='text' name='email' value={file.email} onChange={handleChange} /> <br/>
            <input placeholder='enter phone' type='text' name='phone' value={file.phone} onChange={handleChange} /> <br/>
            <button>Submit</button>
        </form>
        <div>

        </div>

    </div>
  )
}

export default FormControlled