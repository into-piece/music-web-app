import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import  './header.css';
import { SearchBar } from 'antd-mobile';
class Header extends Component {
    render() {
        let props = this.props;
        return (
            <header class="header" id="header">
                {/*
                <div class="search">
                    <img class="search_img" src="/static/resource/img/search.png" alt="搜索"/>
                    <form class="search_from">
                        <input type="text" placeholder="搜索 歌曲/专辑/歌手"/>
                    </form>
                </div>
                <div class="search_cancel">
                </div>
                */}
                <SearchBar placeholder="Search" maxLength={8} />
            </header>
        );
    }
}

export default Header