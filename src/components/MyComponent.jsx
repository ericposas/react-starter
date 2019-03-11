import React from 'react';

export class MyComponent extends React.Component {
  render(){
    let style = {
      color: '#ffffff',
      padding: '10px',
      backgroundColor: 'black'
    }
    let child_style = {
      paddingTop: '5px',
      paddingLeft: '10px'
    }
    return (
      <div style={style}>
        <div>
          {this.props.title}
        </div>
        <div style={child_style}>
          {this.props.children}
        </div>
        <div style={child_style}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
