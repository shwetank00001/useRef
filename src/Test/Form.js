import React from 'react'
import axios from 'axios'

const Form = () => {
    

    const [ data , setData ] = React.useState({
        title : "",
        message : "",
        creator : "" ,
        tags : "",
        selectedFile : ""

    })

    function handleChange(e){
        const { name, value } = e.target
        setData(function(item){
            return{
                ...item,
                [ name ] : value
            }
        })
    }

    async function handleSubmit(e){
        e.preventDefault()
        console.log(data)

        try{
            const res = await axios.post( 'http://localhost:5000/posts', data )
            console.log("Data has been sent", res.data)

        } catch(err){
            console.log("Error sending data to DB" , err)
        }

    }
  return (
    <div>
        <h1>Add a data</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' name='title' placeholder='title' value={data.title} onChange={handleChange} />

            <label htmlFor='msg'>MESSAGE</label>
            <input type='text' id='msg' name='message' placeholder='message' value={data.message} onChange={handleChange} />

            <label htmlFor='creator'>Creator</label>
            <input type='text' id='creator' name='creator' placeholder='creator' value={data.creator} onChange={handleChange} />
            
            <label htmlFor='tags'>Tags</label>
            <input type='text' id='tags' name='tags' placeholder='tags' value={data.tags} onChange={handleChange} />

            <label htmlFor='selectedFile'>File</label>
            <input type='text' id='selectedFile' name='selectedFile' placeholder='selectedFile' value={data.selectedFile} onChange={handleChange} />

            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form