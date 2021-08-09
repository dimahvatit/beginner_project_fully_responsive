import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import Poster from "../../videos/poster.jpg";
import { Button } from "../Button";
import {
    ArrowForward,
    ArrowRight,
    IntroBg,
    IntroBtnWrapper,
    IntroContainer,
    IntroContent,
    IntroH1,
    IntroP,
    VideoBg,
} from "./IntroElements";

const Intro = () => {
    const [hover, setHover] = useState(false);

    const toggleHover = () => {
        setHover(!hover);
    };

    return (
        <IntroContainer id='home'>
            <IntroBg>
                <VideoBg
                    autoPlay
                    loop
                    muted
                    src={Video}
                    poster={Poster}
                    type='video/mp4'
                />
            </IntroBg>
            <IntroContent>
                <IntroH1>Virtual Banking Made Easy</IntroH1>
                <IntroP>
                    Sign up for a new account today and receive $250 in credit
                    towards your next payment
                </IntroP>
                <IntroBtnWrapper>
                    <Button
                        to='signup'
                        primary='true'
                        dark='true'
                        onMouseEnter={toggleHover}
                        onMouseLeave={toggleHover}
                        smooth={true}
                        spy={true}
                        exact='true'
                        offset={-80}
                        duration={500}>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </IntroBtnWrapper>
            </IntroContent>
        </IntroContainer>
    );
};

export default Intro;
