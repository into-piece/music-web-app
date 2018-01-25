import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
} from '../../modules/home'
import style from './detail.css';
import $ from 'n-zepto'
class Detail extends Component {
    componentWillMount(){
        const self = this
        let location = this.props.location.pathname.slice(10)
        $.ajax({
            url: "https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg?albummid=0011IxDo1YaQvW&g_tk=5381&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0",
            dataType: "jsonp",
            jsonpCallback: "_jsonpe02bgdpgwcu",
            success: (result) => {
                console.log(result)
            }
        })
    }
    render() {
        let props = this.props;
        return (
            <div className={style.wrapper}>
                haha
            </div>
        );
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail);