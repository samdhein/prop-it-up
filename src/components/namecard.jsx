import React, {Component} from 'react';

class NameCard extends Component {
    render() {
        const { firstName, lastName, age, hairColor} = this.props;
        return(
            <div>
                <h2> {lastName}, {firstName} </h2>
                <h3> Age: {age} </h3>
                <h3> Hair Color: {hairColor} </h3>
            </div>
        );
    }
}

export default NameCard