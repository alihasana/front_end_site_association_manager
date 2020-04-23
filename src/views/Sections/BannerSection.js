import React from "react";

import classNames from "classnames";

// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

import styles from "assets/jss/material-kit-react/views/componentsSections/bannerStyle.js";


const { Element } = BannerAnim;
const BgElement = Element.BgElement;
const useStyles = makeStyles(styles);

export default function BannerSection(props) {
    const classes = useStyles();
    const classesBanner = classNames(
        classes.banner,
        classes.section,
        classes.container
    );
    const {elements} = props;
    const bannerAnim = (
        elements.map((prop, key) =>
            <Element key={key}
            prefixCls="banner-user-elem"
            >
                <BgElement
                    key="bg"
                    className="bg"
                    style={{
                        backgroundImage: `url('${prop.image}') !important`
                    }}
                />
                <QueueAnim name="QueueAnim">
                    <h1 key="h1">{prop.title}</h1>
                    <p key="p">{prop.description}</p>
                </QueueAnim>
                <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 200 }} name="TweenOne">
                    {prop.textAnimation}
                </TweenOne>
            </Element>
            )
        );
    return <BannerAnim
            className={classesBanner}
            autoPlay
            autoPlaySpeed={10000}
            autoPlayEffect={false}
        >
            {bannerAnim}
        </BannerAnim>
    }

BannerSection.propTypes = {
    elements: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        image: PropTypes.string,
        descritption: PropTypes.string,
        textAnimation: PropTypes.string
      })
    ).isRequired,
}