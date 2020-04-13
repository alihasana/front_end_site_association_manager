import React from "react";

//import classNames from "classnames";

import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

import dataJson from 'service/data/dataJsonAnnonce.json';

const { Element } = BannerAnim;
const BgElement = Element.BgElement;

export default function BannerSection(props) {

return(
<BannerAnim
    autoPlay
    autoPlaySpeed={3000}
    autoPlayEffect={false}
>
    {dataJson.data.map(data => 
    <Element key={data.id.toString()}
        prefixCls="banner-user-elem"
    >
        <BgElement
            key="bg"
            className="bg"
            style={{
                backgroundImage: 'url(' + data.url + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        />
        <QueueAnim name="QueueAnim">
            <h1 key="h1">{data.title}</h1>
            <p key="p">{data.description}</p>
        </QueueAnim>
        <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 200 }} name="TweenOne">
            {data.textAnimation}
        </TweenOne>
    </Element>
    )}
</BannerAnim>
);
}