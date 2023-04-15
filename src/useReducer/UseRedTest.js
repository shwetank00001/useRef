import React from 'react'
import Modal from './Modal'

const UseRedTest = () => {

    const [data, setData] = React.useState('')

    function reducer(state,action){
        if(action.type === "ADD"){
            const newData = [...state.value, action.payload]
            return({
                ...state,
                value:newData,
                showModal:true,
                modalContent:"ITEM ADDED"
            })
        }

        if(action.type ==="NO_ITEM"){
            return({
                ...state,
                showModal:true,
                modalContent:"NO NEW ITEM ADDED"
            })
        }

        if(action.type==="REMOVE"){
            const newData = state.value.filter((item)=> item.id !== action.payload)
                return{
                    ...state,
                    value:newData,
                    showModal:true,
                    modalContent:"Removed"
                }
        }
      

    }

    const defaultState ={
        value:[],
        showModal:false,
        modalContent:""
    }

    const [state, dispatch] = React.useReducer(reducer, defaultState)

    function handleSubmit(e){
        e.preventDefault()
        console.log(data)

        if(data){
            const newData = {id: new Date().getTime(), data}
            dispatch({type: "ADD" , payload: newData})
            setData('')
        }

        else{
            dispatch({type:"NO_ITEM"})
        }
    }

    const ele = state.value.map(function(item){      
        return(
            <div key={item.id}>
                <h4>{item.data}</h4>
                <button onClick={() => handleDelete(item)}>del</button>
            </div>
        )
    })

    function handleDelete(item){
        dispatch({type: "REMOVE" , payload:item.id})
    }
  return (
    <div>
        <h1>Practise for use Reducer todo app</h1>
        {state.showModal && <Modal modal={state.modalContent} />}

        <form onSubmit={handleSubmit}>
            <input value={data} onChange={(e) => setData(e.target.value)}/>
            <button>Add</button>
        </form>
        {ele}
    </div>
  )
}

export default UseRedTest