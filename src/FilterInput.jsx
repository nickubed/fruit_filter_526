import React from 'react'

class FilterInput extends React.Component {
    render(){
        return(
            <div className="filter-input">
                <h4>Filter these Fruits:</h4>
                <input type="text" value={this.props.value} onChange={this.props.onChange} />
            </div>
        )
    }
}


export default FilterInput