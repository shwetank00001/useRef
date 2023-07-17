import React from 'react'

const Red = () => {

    const [data, setData] = React.useState([])

    function reducer(state,action){

        if(action.type === "ADD"){
            const newData = [...state.value, action.payload]

            return({
                ...state,
                value:newData
            })
        }

        if(action.type === "REMOVE"){
            const newData = state.value.filter((item) => item.id!== action.payload)
            return(
                {
                    ...state,
                    value: newData
                }
            )
        }

    }

    const defaultState = {
        value:[]
    }

    const [state, dispatch] = React.useReducer(reducer,defaultState)

    function handleSubmit(e){
        e.preventDefault()
        console.log(data)

        if(data){
            const newData = {id: new Date().getTime(), data}
            dispatch({type:"ADD", payload:newData})
        }

    }

    const ele = state.value.map(function(item){
        return(
            <div key={item.id}>
                <p>{item.data}</p>
                <button onClick={() => handleRemove(item)}>Delete</button>
            </div>
        )
    })

    function handleRemove(item){
        dispatch({type:"REMOVE", payload:item.id})
    }

  return (
    <div>
        <h1>Todo app</h1>
        
        <form onSubmit={handleSubmit}>
            <input value={data} type='text' placeholder='add aa todo' onChange={(e) => setData(e.target.value)} />
            <button>Add</button>
        </form>

        {ele}
    </div>
  )
}

export default Red