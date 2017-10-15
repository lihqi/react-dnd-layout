import React, { Component } from 'react';
import { Icon, Card } from 'antd';

import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';
import { Responsive, WidthProvider } from 'react-grid-layout';
import ComponentContainer from './ComponentContainer'
import ComponentAttribute from './ComponentAttribute';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const areaTarget = {
    drop(props, monitor, component) {
        let item = monitor.getItem();
        component.onAddItem(item)
        item = null;
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
    };
}

// const tmpArr = getFromLS('items') || [];
//console.log(tmpArr[0])
let oneCol = 24
let tmpArr = []
// for (let i = 0; i < 20; i++) {
//     tmpArr.push({
//         h: 1,
//         w: 1,
//         i: Math.random() + 'nn',
//         x: i % oneCol,
//         y: 0
//     })
// }
tmpArr.forEach(function (item) {
    if (item.y === null) {
        item.y = Infinity
    }
    item.key = item.i
})
function getFromLS(key) {
    let ls = {};
    if (localStorage) {
        try {
            ls = JSON.parse(localStorage.getItem('rgl-7')) || {};
        } catch (e) {/*Ignore*/ }
    }
    return ls[key];
};
function saveToLS(key, value) {
    // if (localStorage) {
    //     localStorage.setItem('rgl-7', JSON.stringify({
    //         [key]: value
    //     }));
    // }
}

class ContentBoard extends Component {
    static defaultProps = {
        className: "layout",
        // cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
        cols: { lg: oneCol, md: oneCol, sm: oneCol, xs: oneCol, xxs: oneCol },
        containerPadding: [10, 10],
        rowHeight: 32,
        margin: [10, 10]
    };
    state = {
        items: [...tmpArr],
    };
    onBreakpointChange(breakpoint, cols) {

        this.setState({
            breakpoint: breakpoint,
            cols: cols
        });
    }

    onLayoutChange(layout) {
        let stateItems = [...this.state.items]
        //解决这里的this.state.items不是最新的items
        let arr = [...layout]
        stateItems.forEach(function (stateItem) {
            arr.forEach(function (layoutItem) {
                if (stateItem.i === layoutItem.i) {
                    stateItem.x = layoutItem.x;
                    stateItem.y = layoutItem.y;
                    stateItem.w = layoutItem.w;
                    stateItem.h = layoutItem.h;
                    stateItem.maxH = layoutItem.maxH;
                    stateItem.minH = layoutItem.minH;
                    stateItem.moved = layoutItem.moved;
                    stateItem.static = layoutItem.static;
                }
            })
        })
        saveToLS('items', stateItems);
    }
    createElement(el) {
        let removeStyle = {
            position: 'absolute',
            right: '3px',
            top: '2px',
            cursor: 'pointer',
            zIndex: 10
        };
        let copyStyle = {
            position: 'absolute',
            right: '20px',
            top: '2px',
            cursor: 'pointer',
            zIndex: 10
        };
        let fixedStyle = {
            position: 'absolute',
            right: '37px',
            top: '2px',
            cursor: 'pointer',
            zIndex: 10
        }
        let i = el.i;
        // let title = 'Card: ' + el.content.title;
        // return (
        //     <Card title={title} key={i} data-grid={el}>
        //         <span style={fixedStyle} onClick={this.fixed.bind(this, i)}><Icon type={el.isDraggable ? "lock" : "unlock"} /></span>
        //         <span style={copyStyle} onClick={this.onAddItem.bind(this, el)}><Icon type="copy" /></span>
        //         <span style={removeStyle} onClick={this.onRemoveItem.bind(this, i)} ><Icon type="delete" /></span>
        //     </Card>
        // );
        // return (<ComponentContainer data-grid={el} key={i} el={el} i={i} removeStyle={removeStyle} onRemoveItem={this.onRemoveItem.bind(this, i)}/>)
        return (
            <div key={i} data-grid={el} className="component-container" onClick={this.ComponentContainerClick.bind(this, el)}>
                <ComponentContainer key={i} el={el} i={i} removeStyle={removeStyle} onRemoveItem={this.onRemoveItem.bind(this, i)} />
            </div>
        )
    };
    ComponentContainerClick(el) {
        this.props.selectComponent(el)
    }
    onAddItem(item) {
        let arr = [...this.state.items]
        this.setState({
            items: arr.concat({
                i: Math.random() + 'n',
                x: this.state.items.length * 2 % (this.state.cols || 24),
                y: Infinity,
                ...item
                // content: item.content,
                // ...item.configOptions
            }),
        });
    };
    onRemoveItem(i) {
        //reject返回 过滤掉i 的一个新数组
        let newArr = [...this.state.items].filter((item) => {
            return item.i !== i
        })
        this.setState({
            items: newArr
        })
        // this.setState({ items: _.reject(this.state.items, { i: i }) }, () => { saveToLS('items', this.state.items) });
    }
    fixed(i) {
        const test = [...this.state.items]
        test.forEach(item => {
            if (item.i === i) {
                item.isDraggable = item.isDraggable ? !item.isDraggable : true
            }
        })
        var self = this;
        setTimeout(function () {
            self.setState({
                items: test
            })
        })
    }
    render() {
        const { connectDropTarget } = this.props;
        return connectDropTarget(
            <div style={{
                width: '100%',
                minHeight: 280
            }}
                className="group">
                <div>
                    {this.state.items.length ?
                        <ResponsiveReactGridLayout
                            onBreakpointChange={this.onBreakpointChange.bind(this)}
                            onLayoutChange={this.onLayoutChange.bind(this)}
                            {...this.props} >
                            {this.state.items.map(this.createElement.bind(this))
                            }
                        </ResponsiveReactGridLayout>
                        : null
                    }
                </div>
                <ComponentAttribute {...this.props}/>

            </div>
        );
    }

}

export default DropTarget(ItemTypes.DragMenuItem, areaTarget, collect)(ContentBoard);