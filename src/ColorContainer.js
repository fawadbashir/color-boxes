import React, { Component } from 'react'
import ColorBox from './ColorBox'


class ColorContainer extends Component {
    static defaultProps = {
        colors: ['black', 'blue', 'pink', 'red', 'yellow', 'purple', 'brown',],
        boxes: 20

    }
    state = {
        color: ''
    }
    randomColor = this.props.colors[Math.floor(Math.random() * this.props.colors.length)]
    onColorChange = () => {
        const newColor = this.props.colors[Math.floor(Math.random() * this.props.colors.length)]
    
        this.setState(() => ({ color: this.props.colors.includes(this.randomColor) ? newColor : '' }))

    }
    render() {
        const style = {
            backgroundColor: this.state.color ? this.state.color : this.randomColor,
            width: '100px',
            height: '100px',
            display: 'square'
        }

        const boxes = Array.from({ length: this.props.boxes }).map(() => (
            <ColorBox colorChange={this.onColorChange} style={style} />
        ))
        return (
            <div>
                {boxes}


            </div>
        )
    }
}

export default ColorContainer