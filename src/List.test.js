import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';
import renderer from 'react-test-renderer';

describe('List component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it ('renders UI as expected', () => {
        const tree = renderer
        .create(<List name="List" />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
})