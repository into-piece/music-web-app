import React, { Component } from 'react'
import { Tabs } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import SongList from './songList/songList'
import Rank from './rank/rank'
import  './content.css'
function renderTabBar(props) {
    return (<Sticky>
        {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
}

const tabs = [
    { title: '推荐' },
    { title: '排行榜' }
];


class Content extends Component {
    componentWillMount(){
    }
    render() {
        let props = this.props;
        return (
            <div>
                <StickyContainer>
                    <Tabs tabs={tabs}
                          initalPage={'t2'}
                          renderTabBar={renderTabBar}
                    >
                        <div class="box">
                            <SongList
                                songList = {props.songList}
                            />
                        </div>
                        <div class="box">
                            <Rank
                                rank={props.rank}
                            />
                        </div>
                    </Tabs>
                </StickyContainer>

            </div>

        );
    }
}

export default Content