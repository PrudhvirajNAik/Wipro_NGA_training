import React from "react";

const FaultyComponent = () => {
    Const[throwError, setThrowError] = useState(false);
    if (throwError) {
        throw new Error ("oops, An Error Occurred");
        
    }
    return(
        <div>
            <h3>Click the button to rigger the Error.!!</h3>
            <button onClick={()=> setThrowError(true)}>Trigger Error</button>
        </div>
    );
};
export default FaultyComponent;