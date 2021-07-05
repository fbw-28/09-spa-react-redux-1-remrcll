import React from 'react'
import { connect } from "react-redux"

function Counter(props) {

    return (
        <div>
            <h2>B, x = {props.x}</h2>
            <button onClick={()=>props.dispatch({type:"incrementY",payload:1}) }>increment Y</button>
            <h2>C, y = {props.y}</h2>
            <button onClick={()=>props.dispatch({type:"incrementX",payload:1}) }>increment X</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
      x: state.x,
      y: state.y
    };
  }

  export default connect(mapStateToProps)(Counter);