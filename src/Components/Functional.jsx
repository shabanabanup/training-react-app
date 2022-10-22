import React from "react";
//import the Functional.css
import '../Styles/Functional.css';
//we can create many components
//we can export only one component

//Functional component -> return( embed HTML )
//export default function FunctionalComponent()
//Components - must start with an Uppercase
function FunctionalComponent()
{
 return(
    <h4><FunctionalComponent4></FunctionalComponent4>ADVICE ON HOW TO MAKE WISE INVESTMENTS<FunctionalComponent1></FunctionalComponent1></h4>
 )
}
function FunctionalComponent1()
{
 return(
    <h5>PRIVATE BANKING <FunctionalComponent3></FunctionalComponent3><FunctionalComponent2></FunctionalComponent2></h5>
 )
}
//arrow function
const FunctionalComponent2=()=>{
    return(
        <h6>TIME SAVING TIPS<FunctionalComponent3></FunctionalComponent3></h6>
    )
}
//arrow function
const FunctionalComponent3=()=>{
    return(
        <div>
        <p>OUR FOCUS IS OUR CLIENTS SUCCESS</p>
        <p>ADVICE ON HOW TO MAKE WISE INVESTMENTS</p>
        </div>
    )
}

//arrow function 
//React Fragments
const FunctionalComponent4=()=>{
    return(
        <table style={{width:'100'}}>
            <thead>
                <tr>
                    <FunctionalComponent5></FunctionalComponent5>
                </tr>
            </thead>
        </table>
    )
}
//React Fragemnts - <> </> or <React.Fragment>
//React Fragemnts - Which are used for displaying the set of child elements without a parent element
//To avoid unnecceary elements to be rendered
const FunctionalComponent5=()=>{
    return(
        <React.Fragment>
        <td>SNO</td>
        <td>NAME</td>
        <td>AGE</td>
        <td>REQUIREMENTS</td>
        </React.Fragment>
    )
}

//only one export
export default FunctionalComponent;
