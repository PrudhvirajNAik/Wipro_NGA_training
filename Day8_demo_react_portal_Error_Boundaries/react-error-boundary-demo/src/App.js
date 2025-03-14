import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import FaultyComponent from "./FaultyComponent";


function App (){
  return(
    <div className ="APP">

      <h1> React Error Boundary Demo </h1>

      {/* This Component is wrapped inside Boundary*/}
      <ErrorBoundary> 
        < FaultyComponent />
      </ErrorBoundary>

      {/*Normal component that works fine*/}

      <ErrorBoundary>
        <div> 
          <h2> This is a safe component</h2>
        </div>
      </ErrorBoundary>


    </div>
  )
}

export default App;