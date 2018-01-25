import React from 'react';
import  './rank.css';
import { Flex } from 'antd-mobile';
import { Link } from 'react-router-dom';
const Rank = (props) => (
    <div class="rank">
            {
                props.rank.map((item,index)=>{
                    return(
                        <li key={index} class="rankList">
                            <div ><img src={item.picUrl} alt={item.topTitle}/></div>
                            <div>
                                <div class="topTitle">{item.topTitle}</div>
                                <div class="rankTxt">
                                    {
                                        item.songList.map((item,index)=>{
                                            return(
                                                <p key={index}>
                                                    {index+1}  {item.songname} - {item.singername}
                                                </p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </li>
                    )
                })
            }
    </div>
);

export default Rank