import React, { Component } from 'react';

import Drag from './components/drag'

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class App extends Component {

    render() {
        return (
            <div >
                <Drag />
            </div>
        )
    }
}
export default DragDropContext(HTML5Backend)(App);