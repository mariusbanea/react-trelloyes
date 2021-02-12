import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

describe('List component', () => {

    it('renders without crashing', () => {
    const section = document.createElement('section');
    ReactDOM.render(<List header="test" cards={["1", "2"]} />, section);
    ReactDOM.unmountComponentAtNode(section);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<List name="List" header="test" cards={["1", "2"]} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});