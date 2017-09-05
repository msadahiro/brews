import React, { Component } from 'react';

class Accordion extends Component {
    renderAcc() {
        return this.props.accordion.map((item) => {
            return (
                <div key={item.id}>
                    <div className="accordion-title">Food Pairing</div>

                </div>
            )
        })
    }
    render() {
        return (
            <div>
                {this.renderAcc()}
            </div>
        )
    }
}
export default Accordion;