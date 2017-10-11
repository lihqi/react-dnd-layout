import React, { Component } from 'react';




// import ReactGridLayout from 'react-grid-layout'

class LayoutContainer extends Component {

    
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

    onBreakpointChange(breakpoint, cols) {
        this.setState({
            breakpoint: breakpoint,
            cols: cols
        });
    }

    onLayoutChange(layout) {
        this.props.onLayoutChange(layout);
        this.setState({ layout: layout });
    }

    
    render() {
        /*<div> {this.state.items.length ? <ReactGridLayout cols={12} rowHeight={30} width={1200} >
                       
                        {this.state.items.map(item=>(
                            <div key={item.i} data-grid={{x: item.x, y: item.y, w: item.w, h: item.h, static: item.static}} ><span onClick={()=>this.fixed(item.i)}>test</span></div>
                        ))}
                    </ReactGridLayout> : null}
                </div>
                    
                    */
        return (
            
        );
    }
}

export default LayoutContainer;