import React from 'react'
import Modal from './Modal'
// import data from '../data.js'

const UseRed_multiStates = () => {

  const [name,setName] = React.useState('')
  const [people, setPeople] = React.useState([])
  const [showModal, setShowModal] = React.useState(false)

  const ele = people.map(function(item){
    return(
      <div>
        <h4>
          {item}
        </h4>
      </div>
    )
  })

  function handleSubmit(event){
    event.preventDefault()
    if(name){
      setShowModal(true)
      const newFile = [...name]
      setPeople([...people, newFile])
      console.log(name)
      setName('')
    }
    else{
      setShowModal(true)
      console.log("Error- add a value")
    }
  }


  return (
    <div>
      { showModal && <Modal /> }

      <form onSubmit={handleSubmit}>
        <div>
          <input type='text' value={name} onChange={(e) => setName(e.target.value) } />
        </div>
      <button>Add</button>
      </form>
      {ele}
    </div>
  )
}

export default UseRed_multiStates