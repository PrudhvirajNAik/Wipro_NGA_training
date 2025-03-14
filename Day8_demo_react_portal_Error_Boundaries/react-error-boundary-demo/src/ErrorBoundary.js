import React, { Children } from "react";

class ErrorBoundary  extends Components{
    constructor(props){
        super(props);
        this.state = {hasError : false}
    }
    static getDrivedStateFromError(error){
        // updating state to render fallback UI
        return{hasError : true};
    }
     static componentDidCatch(error, info){
        console.error("Error caught in Error Boundary:", error, info);

     }
     render(){
        if(this.state.hasError){
            return<h2> Something went wrong !! please try later</h2>

        }
        return this.props,Children;
     }


}

export default ErrorBoundary;