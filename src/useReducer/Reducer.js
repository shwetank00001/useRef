import React from 'react'

const Reducer = () => {

    const [data, setData] = React.useState('')

    function reducer(state, action){
        if(action.type === "Add"){
            const newData  = [...state.value, action.payload]
            return({
                ...state,
                value : newData
            })
        }

        if(action.type === "Del"){
            const newData  = state.value.filter((item) => item.id!== action.payload)
            return({
                ...state,
                value : newData
            })
        }
    }

    const defaultState = {
        value: []
    }

    const [state, dispatch ] = React.useReducer( reducer, defaultState)

    function handleSubmit(e){
        e.preventDefault()
        console.log(data)

        if(data){
            const newData = {id : new Date().getTime(), data}
            dispatch({type: "Add", payload: newData})
        }
    }

    const ele = state.value.map(function(item){
        return(
            <div key={item.id}>
                <h4>{item.data}</h4>
                <button onClick={() => handleDelete(item)}>Delete</button>
            </div>
        )
    })

    function handleDelete(item){
        dispatch({type :"Del", payload: item.id})
    }
  return (
    <div>Reducer

        <h2>test</h2>

        <form onSubmit={handleSubmit}>
            <h4>Add a todo</h4>

            <input type='text' value={data} onChange={ (e) => setData(e.target.value)}/>
            <button>Submit</button>
        </form>

        {ele}
    </div>
  )
}

export default Reducer