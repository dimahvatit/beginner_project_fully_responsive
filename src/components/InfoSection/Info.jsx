import React from "react";
import { Button } from "../Button";
import {
    BtnWrap,
    Column1,
    Column2,
    Heading,
    Img,
    ImgWrap,
    InfoContainer,
    InfoRow,
    InfoWrapper,
    Subtitle,
    TextWrapper,
    TopLine,
} from "./InfoElements";

const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    headline,
    description,
    lightText,
    lightTextDesc,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2,
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>
                                    {headline}
                                </Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>
                                    {description}
                                </Subtitle>
                                <BtnWrap>
                                    <Button
                                        to='home'
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact='true'
                                        offcet={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSection;
