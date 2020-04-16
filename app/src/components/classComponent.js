import React, {useEffect} from "react";
import { connect } from "react-redux";
// import Loader from 'react-loader-spinner';

import { fetchClasses } from "../store/actions/classAction"
import ClassNames from "./classes"



const Class = (props) => {
    // console.log(props.className)
    return (
        <div>
            <h1>Classes:</h1>
            <button onClick={props.fetchClasses}>Show available classes</button>
            <div>
                <ClassNames/>
            </div>
            
        
        </div>
    )
}

const mapStateToProps = state => {
    return {
        className: state.classes.className
    }
}

export default connect(mapStateToProps, {fetchClasses})(Class)