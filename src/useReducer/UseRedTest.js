import React from 'react'

const UseRedTest = () => {



    const [data, setData] = React.useState([])

    function reducer(state,action){

        if(action.type === "ADD"){
            const newData = [...state.value, action.payload]
            return({
                ...state,
                value:newData
            })
        }

        if(action.type==="REMOVE"){
            const newData = state.value.filter((item) => item.id !== action.payload) 
            return{
                ...state,
                value:newData,
                showModal:true,
                modalContent:"Clicked item was removed"
            }
        }

    }

    const defaultState={
        value:[],
        showModal: false,
        modalContent:""
    }

    const [state, dispatch] = React.useReducer(reducer, defaultState)

    function handleRemove(item) {
        dispatch({type:"REMOVE", payload:item.id })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(data)
        if(data){
            const newData = {id: new Date().getTime(), data}
            dispatch({type:"ADD" , payload:newData})
            setData('')
        }
    }

    const ele = state.value.map(function(item){
        return(
            <div key={item.id}>
                <p>{item.data}</p>
                <button onClick={() => handleRemove(item)}>-</button>
            </div>
        )
    })

  return (
    <div>
        <h1>
            Use red
        </h1>

        <form onSubmit={handleSubmit}>
            <input value={data} onChange={(e) => setData(e.target.value)} />
            <button>+</button>
        </form>
        {ele}
    </div>
  )
}

export default UseRedTest