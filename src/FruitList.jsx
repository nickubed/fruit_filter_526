import React from 'react'

class FruitList extends React.Component {
    render() {
        return (
            <div className="fruitList">
                <ul>
                    {this.props.fruits.map((fruit, key) => <li key={key}>{fruit}</li>)}
                </ul>
            </div>
        )
    }
}

export default FruitList