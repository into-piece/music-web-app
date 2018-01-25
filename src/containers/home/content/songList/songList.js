import React from 'react';
import  './songList.css';
import { Flex } from 'antd-mobile';
import { Link } from 'react-router-dom';
const SongList = (props) => (
    <div class="flex_container">
        <div class="wrap">
            {
                props.songList.map((item,index)=>{
                    return(
                        <div class="box_in" key={index}>
                            <Link to={'/songList/'+ item.id} class="box_router">
                                <img src={item.imgurl} alt=""/>
                                <div class="text">
                                    <div class="listName" >{item.dissname}</div>
                                    <p>{item.author}</p>
                                </div>
                            </Link>
                        </div>
                        )
                })
            }
        </div>
    </div>
);

export default SongList