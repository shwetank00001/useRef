import React from 'react'

const Pract = () => {

    const [data, setData] = React.useState([]) 


    function reducer(state,action){
        if(action.type === "ADD"){
            const newValue = [...state.value, action.payload] 
            return{
                ...state,
                value:newValue
            }
        }

        if(action.type === "DEL"){
            const newValue = state.value.filter( (item) => item.id!==action.payload)
            return{
                ...state,
                value: newValue
            }
        }
    }

    const defaultState ={
        value:[]
    }

    const [state, dispatch] = React.useReducer(reducer, defaultState)

    const ele = state.value.map(function(item){
        return(
            <div key={item.id}>
                <h4>{item.data}</h4>
                <button onClick={(e) => {
                    e.preventDefault()
                    handleDelete(item.id)
                    }}>-</button>
            </div>
        )
    })

    function handleAdd(e){
        e.preventDefault()
        if(data){
            const newData = { id: new Date().getTime(), data}
            dispatch({type:"ADD", payload: newData})
        }
    }

    function handleDelete(id){
        dispatch({type:"DEL", payload:id})
    }


    return (
    <div>
        <form>
            <h3>Add a value</h3>
            <input value={data} name='value' onChange={(e) => setData(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
            {ele}
        </form>
    </div>
  )
}

export default Pract