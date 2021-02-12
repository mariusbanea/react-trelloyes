import React from 'react';
import Card from './Card'
import './List.css';

export default function List(props) {
    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
            {/* send the onClickDelete callback prop to the Card componenent */}
                {props.cards.map((card) =>
                    <Card
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        content={card.content}
                        onClickDelete={props.onClickDelete}
                    />
                )}
                {/* send the onClickAdd callback prop to the button */}
                <button 
                    type="button" 
                    className="List-add-button"
                    onClick={() => props.onClickAdd(props.id)}
                >
                  + Add Random Card
                </button>
            </div>
        </section>
    )
}

//make sure that the defaultProps include the onClickAdd method
//defaultProps is used because the Card child is depending on it
List.defaultProps = {
    onClickAdd: () => {},
  }