
import React, { Component } from 'react';
import '../App.css';
import ProductDetail from '../product-detail/ProductDetail';

class SearchItem extends Component {
    constructor() {
        super();
        this.state = {
            search: null
        }
    }
    searchSpace = (event) => {
        let keyword = event.target.value;
        this.setState({ search: keyword })
    }
    render() {
        const styleInfo = {
            paddingRight: '10px'
        }
        const elementStyle = {
            border: 'solid',
            borderRadius: '10px',
            position: 'relative',
            left: '10vh',
            height: '3vh',
            width: '200px',
            marginTop: '5vh',
            marginBottom: '10vh'
        }
        const items=ProductDetail.filter((data)=>{
            if(this.state.search==null)
            return data
            else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.name.toLowerCase().includes(this.state.search.toLowerCase())){
                return data
            }
        }).map(data => {
            return (
                <div>
                    <ul>
                        <li style={{ position: 'relative', left: '10vh' }}>
                            <span style={styleInfo}>{data.name}</span>
                            <img src={data.image} width="30px" height="30px"></img>
                            <span style={styleInfo}>{data.price}</span>
                        </li>
                    </ul>
                </div>
            )
        })

        return (
            <div>
                <input type="text" placeholder="Enter item to be searched" style={elementStyle} onChange={(e) => this.searchSpace(e)} />
                {items}
            </div>
        )
    }
}

export default SearchItem;