import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    dispatch_func
} from '../../modules/home'
import './index.css';
import Header from './header/header';
import Banner from './banner/banner';
import Content from './content/content';
import $ from 'n-zepto'
class Home extends Component {
    componentWillMount(){
        const self = this
        $.ajax({
            url: "https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?format=jsonp&g_tk=5381&uin=0&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1515731130002&jsonpCallback=_jsonpvkr02ixhp4",
            dataType: "jsonp",
            jsonpCallback: "_jsonpvkr02ixhp4",
            success: (result) => {
                console.log(result.data.topList)
                self.props.getRank(result.data.topList)
            }
        })
        $.ajax({
            url: "https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg?format=jsonp&tpl=v12&page=other&rnd=0&g_tk=1515580132918&loginUin=0&hostUin",
            dataType: "jsonp",
            jsonpCallback: "MusicJsonCallback",
            success: (result) => {
                let bannerData = [
                    {
                        url:'',
                        id:''
                    }
                ]
                self.props.getBannerData(result.data.focus);
                //banner ID
                let id = []
                // console.log(result.data.focus)
                for(let i=0;i<result.data.focus.length;i++){
                    id[i] = result.data.focus[i].id
                }
                //songList
                let songList = []
                for(let i=0;i<result.data.hotdiss.list.length;i++){
                    songList[i] = result.data.hotdiss.list[i]
                }
                console.log(songList)
                self.props.getSongList(songList)
            }
        })

    }

    render() {
        let props = this.props;
        window.props = props
        return (
            <div class="wrapper">
                <div class="main">
                    <Header />
                </div>
                <Banner
                    bannerData = {props.bannerData}
                    getBannerData={props.getBannerData}
                    getBannerHeight={props.getBannerHeight}
                    getBannerIndex = {props.getBannerIndex}
                    bannerId = {props.id}
                />
                <Content
                    songList={props.songList}
                    rank={props.rank}
                />
            </div>
        );
    }
}

const mapStateToProps = state => (state.home);

const mapDispatchToProps = dispatch => bindActionCreators(dispatch_func, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);