import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import '../App.css'
export default function Header() {
    return (
        <div>
            <ul className="list">
                <Link className="inner-list" tag="a" to="./">Home</Link>
                <Link className="inner-list" tag="a" to="./about">About</Link>
                <Link className="inner-list" tag="a" to="./news">News</Link>
                <Link className="inner-list" tag="a" to="./contact">Contact</Link>
                <Link className="inner-list" tag="a" to="./contact">Contact</Link>
                <Link className="inner-list" tag="a" to="./contact">Contact</Link>
                <Search type="search" placeholder="search item"/>
                   <SearchIcon className="search-icon" style={{fontSize:"50px"}}></SearchIcon>
            </ul>

        </div>
    )
}

const Search=styled.input`
width:263px;
margin-left:293px;
height:33px;
margin-top:5px
`;

