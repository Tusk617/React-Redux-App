import React from "react";
import { connect } from "react-redux";
import "./classes.css"

const ClassNames = props => {
    console.log(props.className[0])
    return (
        <div className="classList">
            {props.className.map((item) => {
                    // console.log(item)
                    return <p>{item.name}</p>
                })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        className: state.classes.className
    }
}

export default connect(mapStateToProps, {})(ClassNames)