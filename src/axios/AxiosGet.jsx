import axios from 'axios';
import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink,Row,Col } from 'reactstrap';
export default class AxiosGet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: []
        }
    }
    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/meilisearch/MeiliSearch/main/datasets/movies/movies.json')
            .then(res => {
                const person = res.data;
                console.log(person)
                this.setState({ person })
            })
    }
    render() {
        return (
            <div>
                {this.state.person.map((value, index) =>
                    <img src={value.poster} alt="Card image cap" style={{width:"300px",height:"300px"}} key={index}/>
                )}
            </div>
        )
    }
}
