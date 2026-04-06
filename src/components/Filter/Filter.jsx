import React, {Component} from "react";

export default class Filter extends Component {
    render() {
        const {filter, onChange} = this.props
        return(
            <input
            className="phonebook__filter"
            type="text"
            name="filter"
            value={filter}
            placeholder="Find contacts by name"
            onChange={onChange}
          />
        )
    }
}