import React from 'react'

const Pract = () => {

    const [data, setData ] = React.useState([])

    function reducer(state,action){

        if(action.type === "ADD"){
            const newData = [...state.value, action.payload]
            return{
                ...state,
                value: newData
            }
        }

        if(action.type === "Del"){
            const deletedData = state.value.filter((item) => item.id!== action.payload)

            return{
                ...state,
                value: deletedData
            }
        }

    }

    const defaultState = {
        value: []
    }

    const [state, dispatch ] = React.useReducer(reducer, defaultState)

        const ele = state.value.map(function (item) {
            return (
                <div key={item.id}>
                    <p>{item.data}</p>
                    <span>
                        <button onClick={() => handleDelete(item.id)}>
                            Delete
                        </button>
                    </span>
                </div>
            );
        });


    const handleAdd = (e) => {
        e.preventDefault()
        if(data){
            const newData = {id: new Date().getTime(), data}
            dispatch({type: "ADD", payload: newData})
        }
    }

    function handleDelete(id){
        dispatch({type:"Del", payload: id})
    }


  return (
    <div>
        <form>
            <h4>Please add to the list</h4>
            <input type='text' value={data} name='data' onChange = {(e) => setData(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>
        </form>
        {ele}
    </div>
  )
}

export default Pract