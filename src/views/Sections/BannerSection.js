import React from "react";

import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

import dataJson from 'service/data/dataJsonAnnonce.json';

import styles from "assets/jss/material-kit-react/views/componentsSections/bannerStyle.js";

const { Element } = BannerAnim;
const BgElement = Element.BgElement;
const useStyles = makeStyles(styles);

export default function BannerSection(props){
    const classes = useStyles();
    const classesBanner = classNames(
        classes.section,
        classes.container,
        classes.marginAuto
    )

return <BannerAnim
            className={classesBanner}
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
                        backgroundImage: "url(" + data.url + ")",
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
        </BannerAnim>;
}
