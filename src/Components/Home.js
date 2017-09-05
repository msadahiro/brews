import React, { Component } from 'react';
import Accordion from './Accordion'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beer: [],
            requestFailed: false
        }
        this.nextBeer = this.nextBeer.bind(this)
    }
    fetchAPI(url) {
        fetch(url)
            .then((res) => res.json())
            .then(data => {
                this.setState({
                    beer: data
                })
            })

    }
    componentDidMount() {
        let url = `https://api.punkapi.com/v2/beers/random`
        this.fetchAPI(url)
    }
    nextBeer() {
        let url = `https://api.punkapi.com/v2/beers/random`
        this.fetchAPI(url)
    }
    renderItems() {
        return this.state.beer.map((item) => {
            return (
                <div
                    key={item.id}
                    className="home-container"
                >
                    <div className="home-content">
                        <h1>{item.name}</h1>
                        <h4>{item.tagline}</h4>
                        <img src={item.image_url} alt="" />
                        <p>ABV: {item.abv}</p>
                        <p className="beer-description">{item.description}</p>
                        <button onClick={() => { this.nextBeer() }}>Next Beer</button>
                    </div>
                </div>
            )
        })
    }
    render() {
        if (this.state.requestFailed) return <p>Failed</p>
        if (!this.state.beer) return <p>Loading...</p>
        return (
            <div>
                {this.renderItems()}
            </div>
        )
    }
}

export default Home;