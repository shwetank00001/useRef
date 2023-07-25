import axios from 'axios'
import React from 'react'

const Post = () => {

  const [ allPost, setAllPost ] = React.useState([])

  async function getAllPosts(){

    try {
      const response = await axios.get('http://localhost:5000/posts')
      setAllPost( response.data )
    } catch (error) {
      console("Server is OFF", error)
    }

  }

  React.useEffect(()=> {
    getAllPosts()
  }, [])

  const ele = allPost.map(function(item){
    return(
      <div key={item._id}>
        
        <h3>{item.title}</h3>
        <h3>{item.message}</h3>
        <h3>{item.tags}</h3>
        <img src={item.selectedFile} />
        

        <br></br>
      </div>
    )
  })

  return (
    <div>{ele}</div>
  )
}

export default Post