import React from 'react'
import Modal from './Modal'

//using Reducer

const Index = () => {

    function reducer(state,action){
      console.log(state,action)
      if(action.type ==='ADD_ITEM'){ 
        return {
          ...state,
          people: [],
          isModal:true,
          modalContent:"Item Added"
        }
      }  //always return state
      return(state)
    }

    const defaultState = {
        people: [],
        isModal: false,
        modalContent:'hello world'
    }
  const [name,setName] = React.useState('')
  const [state, dispatch] = React.useReducer(reducer,defaultState)
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
      const file = []
      dispatch({type:"ADD_ITEM"})
    }
    else{
        dispatch({type:"RANDOM"})
    }
  }


  return (
    <div>
      { state.isModal && <Modal modalContent={state.modalContent} /> }

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

export default Index