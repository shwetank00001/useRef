import React from 'react'
import Modal from './Modal'

const useReducerTest = () => {

    const [thing, setThing] = React.useState('')

    function reducer(state, action){
        if(action.type === "ADD_ITEM"){
            const newThing = [...state.value,action.payload]
            return{
                ...state,
                value:newThing,
                showModal:true,
                modalContent:"ITEM ADDED"
                
            }
        }
        if(action.type === "NO_ITEM"){
            return{
                showModal:true,
                modalContent:"NO NEW ITEM ADDED"
            }
        }

        if(action.type=== "CLOSE_MODAL"){
            return({
                ...state,
                showModal:false
            })
        }

        if(action.type === "REMOVE_ITEM"){
            const newThing = state.value.filter((value) => value.id !== action.payload)
            return({    
                    ...state,
                    value:newThing
            })

        }
    }

    const defaultState={
        value:[],
        showModal:false,
        modalContent:" "
    }

    const [state, dispatch] = React.useReducer(reducer, defaultState)

    const ele = state.value.map(function(item){
        return(
            <div key={item.id} className='content'>
                <p>{item}</p>
                <button onClick={() => dispatch({type:"REMOVE_ITEM", payload:item.id})}>remove</button>
            </div>
        )
    })

    function handleSubmit(e){
        e.preventDefault()
        if(thing){
            const newThing = [thing]
            dispatch({type:"ADD_ITEM", payload:newThing})
            setThing('')
        }
        
        else{
            dispatch({type:"NO_ITEM"})
        }

    }

    function closeModal(){
        dispatch({type:"CLOSE_MODAL"})
    }

    // function removeData(){
    //     const newThing = {id: new Date().getTime().toString() , thing}
    //     dispatch({type:"REMOVE_ITEM" , payload:newThing.id})
    //     console.log("CLicked")
    // }


  return (
    <div>
        <h3>
            Todo app
        </h3>
        <form onSubmit={handleSubmit}>
            {state.showModal && <Modal closeModal={closeModal} modal={state.modalContent} />}
            <input type='text' value={thing} onChange={(e)=> setThing([e.target.value])} />
            <button>Add Item</button>
        </form>
        {ele}

    </div>
  )
}

export default useReducerTest