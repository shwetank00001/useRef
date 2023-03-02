import React from 'react'

const Useres = () => {

    const refContainer = React.useRef(null)
    const hTagRef = React.useRef(null)

    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(refContainer.current.value)
        console.log(hTagRef.current)
    }

    React.useEffect(function(){
        console.log(refContainer)
        refContainer.current.focus()
    })
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" ref={refContainer} />
                <button>Submit</button>
                <h3 ref={hTagRef}>Hello</h3>
            </div>
        </form>
    </div>
  )
}

export default Useres