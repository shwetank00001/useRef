import React from 'react'

const UseRtest = () => {
    const refContainer = React.useRef(null)
    const hContainer = React.useRef(null)

    function handleSubmit(e){
        e.preventDefault()
        console.log(refContainer.current.value)
        console.log(hContainer.current)
    }

    React.useEffect(function(){
        refContainer.current.focus()
    })


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' ref={refContainer}/>
            <button>Add value</button>
            <h3 type='text' ref={hContainer}>
                WOrk
            </h3>
        </form>
    </div>
  )
}

export default UseRtest