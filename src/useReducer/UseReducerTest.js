import React from 'react'

const useReducerTest = () => {

    const [thing, setThing] = React.useState('')

    function reducer(state, action){
        const newThing = [...state.value,action.payload]
        if(action.type === "ADD_ITEM"){
            return{
                ...state,
                value:newThing
            }
        }
        if(action.type === "NO_ITEM"){
            return{
                value:newThing
            }
        }
    }

    const defaultState={
        value:[]
    }

    const [state, dispatch] = React.useReducer(reducer, defaultState)

    const ele = state.value.map(function(item){
        return(
            <div>
                <p>{item}</p>
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
        // else{
        //     dispatch({type:"NO_ITEM"})
        // }
        throw new Error('No item found')
    }

  return (
    <div>
        <h3>
            Todo app
        </h3>
        <form onSubmit={handleSubmit}>
            <input type='text' value={thing} onChange={(e)=> setThing([e.target.value])} />
            <button>Add Item</button>
        </form>
        {ele}
    </div>
  )
}

export default useReducerTest