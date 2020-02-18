import React, { Component } from 'react';
import './App.css';
import List from './List.js';
// import Card from './Card.js';
// import STORE from './Store.js';

// const store = {lists, allCards};
// const title = {STORE.allCards.item.title};
// const content = {STORE.allCards.item.content};

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  render() {
    const { store } = this.props
    return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {store.lists.map(list => (
          <List 
            key={list.id}
            header={list.header}
            cards={list.cardIds.map(id => store.allCards[id])}
          />
          ))}
      </div>
    </main>
    );
  }
}



export default App;
