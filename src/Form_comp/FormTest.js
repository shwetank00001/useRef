import React from 'react'

const FormTest = () => {

    const [data, setData] = React.useState({
        name:"",
        age:"",
        phone:"",
        comments: ""
    })

    const [display, setDisplay] = React.useState([])

    const dispEle = display.map(function(data,item){
        const {name,age,phone,comments} = data
        return(
            <div key={item}>
                <h3>{name}</h3>
                <p>{age}</p>
                <p>{phone}</p>
                <p>{comments}</p>
            </div>
        )
    })

    function handleChange(event){
        const {name, value} = event.target
        setData(function(item){
            return({
                ...item,
                [name]: value
            })
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        if(data.name && data.age && data.phone && data.comments){
        const file = {...data}
        setDisplay([...display,file])
        console.log(data)
    }
    else{
        console.log('Error-> Add a value')
    }

    setData({
        name:"",
        age:"",
        phone:"",
        comments: ""
    }
    )

    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name: </label> <br/>
            <input placeholder='enter name..' id='name' type='text' name='name' value={data.name} onChange={handleChange}/> <br/><br/>

            <label htmlFor='age'>AGe: </label> <br/>
            <input placeholder='enter age..' id='age' type='text' name='age' value={data.age} onChange={handleChange} /><br/><br/>

            <label htmlFor='phone'>Phone: </label> <br/>
            <input placeholder='enter phone' id='phone' type='text' name='phone' value={data.phone} onChange={handleChange}/> <br/><br />

            <label htmlFor='comments'>Comments: </label> <br/>
            <textarea id='comments' name='comments' placeholder='Leave a feedback..' onChange={handleChange} /><br/><br />

            <button>Post</button>

        </form>

        {dispEle}
    </div>
  )
}

export default FormTest