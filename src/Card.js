
import React from 'react';
import './Card.css'

export default function Card(props) {
    return (
        <div className="Card">
        {/* send the onClickDelete callback prop to the button */}
            <button 
                type="button"
                onClick={() => props.onClickDelete(props.id)}
            >
                delete
            </button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
          </div>
    )
}

//make sure that the propTypes include the onClickDelete method
//propTypes is used because this is the last component in the chain
Card.propTypes = {
    onClickDelete: () => {}
  }