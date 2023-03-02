import React from 'react'
import Modal from './Modal'

const UseRed_multiStates = () => {

    // function reducer(state,action){
    //   if(action.type === 'TESTING'){
    //     return {
    //       ...state,
    //       people:["data" , "shwetank"],
    //       showModal: true,
    //       modalContent:"Item added in the list"    
    //     }
    //   }
    //   throw new Error('No item   found')
    // }

    function reducer(state,action){
      const newPeople= [...state.people, action.payload]

      if(action.type === 'ADD_ITEM'){
        return {
          ...state,
          people:newPeople,
          showModal: true,
          modalContent:"Item added in the list"    
        }
      }

      if(action.type==='NO_VALUE'){
        return {
          ...state,
          showModal: true,
          modalContent:"No new item added"    
        }
      }
      throw new Error('No item found')
    }
  
  
  const defaultState= {
    people: [],
    showModal: false,
    modalContent:"Hello"
  }

  const [name,setName] = React.useState('')
  const [state, dispatch] = React.useReducer(reducer, defaultState)



//   const [people, setPeople] = React.useState([])
//   const [showModal, setShowModal] = React.useState(false)

  const ele = state.people.map(function(item){
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
      const newPeople = [name]
        dispatch({type: "ADD_ITEM" , payload: newPeople})
        setName('')
    }
    else{
      dispatch({type:"NO_VALUE"})
    }
  }


  return (
    <div>
      { state.showModal && <Modal modal={state.modalContent} /> }

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