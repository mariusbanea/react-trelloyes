import React, {
  Component
} from 'react'
import List from './List'
import './App.css'
import STORE from './STORE'

const newRandomCard = () => {
  //generate random id for the new card
  const id = Math.random().toString(36).substring(2, 4)
  Math.random().toString(36).substring(2, 4);
  //use the random id in order to create a new card object
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum'
  }
}

function omit(obj, keyToOmit) {
  //search the object for the relevant key we need to delete and remove it
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
    key === keyToOmit ? newObj : {
      ...newObj,
      [key]: value
    }, {}
  );
}

class App extends Component {
  state = {
    store: STORE,
  };

  handleDeleteCard = (cardId) => {
    //get the list and all the cards from the state
    const {
      lists,
      allCards
    } = this.state.store;
    //create a new list object which will map through all the existing lists
    //and select the cards corresponding to each list
    const newLists = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));
    //exclude the card id from the new list object above
    const newCards = omit(allCards, cardId);
    //add the new list card object with the excluded card to the state object to 
    //replace the previous list
    this.setState({
      store: {
        lists: newLists,
        allCards: newCards
      }
    })
  };

  handleAddCard = (listId) => {
    //create a new random id for the card
    const newCard = newRandomCard()
    //create a new list object which will map through all the existing lists
    //and select the cards corresponding to each list
    const newLists = this.state.store.lists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    })
    //add the new list card object with the created card to the state object to 
    //replace the previous list
    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard
        }
      }
    })
  };



  render() {
    const { store } = this.state
    return (
      <main className='App'>
        <header className='App-header'>

      <h1> Trelloyes! </h1> 
      </header> 
      <div className = "App-list"> {
        store.lists.map(list => ( 
          <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              onClickDelete={this.handleDeleteCard}
              onClickAdd={this.handleAddCard}
            />
        ))
      } 
      </div>     
      </main>
    );
  }
}

export default App;