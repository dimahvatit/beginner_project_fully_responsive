import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";
import {
    ServCard,
    ServH2,
    ServH3,
    ServicesContainer,
    ServIcon,
    ServP,
    ServWrapper,
} from "./ServiceElements";

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServH2>Our Services</ServH2>
            <ServWrapper>
                <ServCard>
                    <ServIcon src={Icon1} />
                    <ServH3>Reduce Expenses</ServH3>
                    <ServP>
                        We help reduce your fees and increase your overall
                        revenue.
                    </ServP>
                </ServCard>
                <ServCard>
                    <ServIcon src={Icon2} />
                    <ServH3>Virtual Offices</ServH3>
                    <ServP>
                        You can access our platform online anywhere in the
                        world.
                    </ServP>
                </ServCard>
                <ServCard>
                    <ServIcon src={Icon3} />
                    <ServH3>Premium Benefits</ServH3>
                    <ServP>
                        Unlock our special membership card that returns 5% cash
                        back.
                    </ServP>
                </ServCard>
            </ServWrapper>
        </ServicesContainer>
    );
};

export default Services;
