import React from 'react'

const UseRefPract = () => {

    const refContainer = React.useRef(null)
    const hContainer = React.useRef(null)
    // const [test,setTest] = React.useState('')

    function handleSubmit(event){
        event.preventDefault()
        console.log(refContainer.current.value)
        // console.log(test)
        console.log(hContainer.current)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' ref={refContainer} />
            {/* <input type='text' value={test} onChange={(e) => setTest(e.target.value)} /> */}
            <button>Submit</button>
            <h3 ref={hContainer}>
                Ref is Targeting this DOM Node
            </h3>
        </form>
    </div>
  )
}

export default UseRefPract