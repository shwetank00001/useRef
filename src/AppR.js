import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

const AppR = () => {

    const count = useSelector( (state) => state.count)
    const dispatch = useDispatch()

    function handleAdd(){
        dispatch({type:"Add"})
    }

    function handleSub(){
        dispatch({type:"Sub"})
    }

  return (
    <>
        <div>
            <h3>COunter App using redux</h3>
            <h5>Count : {count}</h5>
        </div>

        <div>
            <button onClick={handleAdd}> Add</button>
            <button onClick={handleSub}> Sub</button>
        </div>
    </>
  )
}

export default AppR