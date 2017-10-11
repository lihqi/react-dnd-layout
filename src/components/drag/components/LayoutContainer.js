import React, { Component } from 'react';

import { Icon, Card } from 'antd';

import _ from 'lodash';
import { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);
// import ReactGridLayout from 'react-grid-layout'

class LayoutContainer extends Component {
    static defaultProps = {
        className: "layout",
        cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
        rowHeight: 100
    };
    state = {
        items: [],
        newCounter: 0
    };

    //创建一个新元素
    createElement(el) {
        console.log(el)
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
        let title = 'Card: ' + el.content.title;
        console.log(el)
        return (
            <Card title={title} key={i} data-grid={el}>
                <span style={fixedStyle} onClick={this.fixed.bind(this, i)}><Icon type={el.static ? "lock" : "unlock"} /></span>
                <span style={copyStyle} onClick={this.onAddItem.bind(this, el)}><Icon type="copy" /></span>
                <span style={removeStyle} onClick={this.onRemoveItem.bind(this, i)} ><Icon type="delete" /></span>
            </Card>
        );
    };
    // fixed(i) {
    //     console.log(this)
    //     let arr = [...this.state.items];
    //     let data = arr.find((data) => { return data.i === i });
    //     data.static = !data.static;
    //     this.setState({
    //         items: []
    //     })
    //     var self = this
    //     setTimeout(function(){
    //         self.setState({
    //             items: arr
    //         })
    //     })
    // }
    onAddItem(item) {
        let arr=[...this.state.items]
        this.setState({
            items: arr.concat({
                i: 'n' + this.state.newCounter,
                x: this.state.items.length * 2 % (this.state.cols || 12),
                // y: Infinity,
                //x: 0,
                y: Infinity,
                w: 2,
                h: 2,
                content: item.content,
                configOptions: item.configOptions
            }),
            newCounter: this.state.newCounter + 1
        });
    };

    onBreakpointChange(breakpoint, cols) {
        this.setState({
            breakpoint: breakpoint,
            cols: cols
        });
    }

    // onLayoutChange(layout) {
    //     this.props.onLayoutChange(layout);
    //     this.setState({ layout: layout });
    // }

    onRemoveItem(i) {
        //reject返回 过滤掉i 的一个新数组
        this.setState({ items: _.reject(this.state.items, { i: i }) });
    }
    fixed(i){
        const test = [...this.state.items]
        test.forEach(item=>{
            if(item.i == i){
                item.static = true
            }
        })
        this.setState({
            items: []
        })
        var self = this
        setTimeout(function(){
            self.setState({
                items: test
            })
        })
    }
    render() {
        console.log(this.state.items)
    /*<div> {this.state.items.length ? <ReactGridLayout cols={12} rowHeight={30} width={1200} >
                   
                    {this.state.items.map(item=>(
                        <div key={item.i} data-grid={{x: item.x, y: item.y, w: item.w, h: item.h, static: item.static}} ><span onClick={()=>this.fixed(item.i)}>test</span></div>
                    ))}
                </ReactGridLayout> : null}
            </div>
                
                */
        return (
           <div> 
               {this.state.items.length ?
               <ResponsiveReactGridLayout onBreakpointChange={this.onBreakpointChange.bind(this)}
                    {...this.props} >
                    {_.map(this.state.items, this.createElement.bind(this))}
                </ResponsiveReactGridLayout>
                :null
                }
            </div>
        );
    }
}

export default LayoutContainer;