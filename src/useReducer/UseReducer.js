import React from 'react'
import Modal from './Modal'

const UseReducer = () => {

    const [data, setData] = React.useState('')

    function reducer(state,action){
        if(action.type === "ADD"){
            const newData= [...state.value,action.payload]
            return{
                ...state,
                value:newData,
                showModal:true,
                modalContent:"Item Added !"
            }
        }
        if(action.type==="NONE"){
            return{
                ...state,
                showModal:true,
                modalContent:"No new was item added !"
            }
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


    function handleSubmit(e){
        e.preventDefault()
        if(data){
            const newData= {id: new Date().getTime(), data}
            dispatch({type:"ADD", payload:newData})
            setData('')
        }

        else{
            dispatch({type:"NONE"})
        }
    }

    function handleRemove(item) {
        dispatch({type: "REMOVE", payload: item.id})
      }
    
  return (
    <div>
        <h3>
            Todo App
        </h3>
        {state.showModal && <Modal modal={state.modalContent} />}
        <form onSubmit={handleSubmit}>
            <input 
                placeholder='add a todo...' 
                value={data} 
                onChange={(e) => setData(e.target.value)} 
            />

            <button >Add</button>
        </form>

        {state.value.map(function(item){
        return(
            <div className='content' key={item.id}>
                <p>{item.data}</p>
                <button onClick={() => handleRemove(item)}>X</button>
            </div>
        )
    })}

    </div>
  )
}

export default UseReducer

