import React, { Component } from 'react'
import './banner.css';
import { Carousel} from 'antd-mobile';
class Banner extends Component {
    render() {
        let props = this.props;
        return (
            <Carousel class="space_carousel"
                      frameOverflow="visible"
                      cellSpacing={10}
                      slideWidth={0.8}
                      autoplay
                      infinite
                      beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                      afterChange={index => props.getBannerIndex(index)}
            >
                {props.bannerData.data.map((item, index) => (
                    <a
                        key={index}
                        href={'/songList/'+item.id}
                        style={{
                            position: 'relative',
                            top: props.bannerData.slideIndex === index ? -10 : 0
                         }}
                        class="style.bannerImg"
                    >
                        <img
                            src={item.pic}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                  //fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  props.getBannerHeight('auto')
                  }}
                        />
                    </a>
                ))}
            </Carousel>
        );
    }
}

export default Banner