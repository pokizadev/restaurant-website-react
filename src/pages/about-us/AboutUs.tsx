import styled from "styled-components";
import { Content } from "../components/Container";

import topImg from "../../assets/about-us/Picture.png";
import middleImg from "../../assets/about-us/picture2.png";
import bottomImg from "../../assets/about-us/chef.png";
import topImgSmall from "../../assets/about-us/picture3.png";
import middleImgSmall from "../../assets/about-us/picture4.png";

const AboutUsContent = styled(Content)`
    max-width: 144rem;
    margin: 0 auto;
`;
const Top = styled.div`
    display: flex;
    gap: var(--space-64);

    @media (max-width: 78em) {
        flex-direction: column;
        padding-left: var(--space-80);
        padding-right: var(--space-80);
        margin-bottom: var(--space-80);
    }

    @media (max-width: 35em) {
        padding-left: var(--space-20);
        padding-right: var(--space-20);
        margin-bottom: var(--space-40);
        gap: var(--space-40);
    }
`;

const TopImg = styled.img`
    @media (max-width: 78em) {
        content: url(${topImgSmall});
        order: 2;
    }
`;
const TopText = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: var(--space-80);

    @media (max-width: 78em) {
        order: 1;
        text-align: center;
        padding-right: 0;
    }
`;

const Heading = styled.h1`
    color: var(--dark-brown);
    padding-top: var(--space-80);
    margin-bottom: var(--space-60);
    width: 60%;

    @media (max-width: 78em) {
        width: 100%;
        padding-top: var(--space-40);
    }

    @media (max-width: 35em) {
        margin-bottom: var(--space-40);
    }
`;

const TopDescription = styled.p`
    color: var(--dark-brown);
`;

const Middle = styled.div`
    display: flex;
    padding-left: var(--space-80);

    @media (max-width: 78em) {
        flex-direction: column;
        text-align: center;
        padding-left: var(--space-80);
        padding-right: var(--space-80);
        margin-bottom: var(--space-80);
    }

    @media (max-width: 35em) {
        padding-left: var(--space-20);
        padding-right: var(--space-20);
        margin-bottom: var(--space-40);
    }
`;

const MiddleDescription = styled.p`
    display: flex;
    align-items: center;
    margin-right: 6rem;

    @media (max-width: 78em) {
        margin-right: 0;
        margin-bottom: var(--space-80);
    }

    @media (max-width: 35em) {
        margin-bottom: var(--space-40);

    }
`;
const MiddleImg = styled.img`
    margin-top: -8rem;

    @media (max-width: 78em) {
        margin-top: 0;
        content: url(${middleImgSmall});
        order: 2;
    }
`;

const Bottom = styled.div`
    padding-left: var(--space-80);
    padding-top: var(--space-80);
    display: flex;
    gap: var(--space-100);

    @media (max-width: 78em) {
        flex-direction: column;
        text-align: center;
        padding-top: 0;
        padding-left: var(--space-80);
        padding-right: var(--space-80);
    }

    @media (max-width: 35em) {
        padding-left: var(--space-20);
        padding-right: var(--space-20);
        margin-bottom: var(--space-40);
        gap: var(--space-40);
    }
`;

const ChefInfo = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 78em) {
        order: 1;
    }
`;

const Name = styled.h2`
    margin-bottom: var(--space-40);
`;

const ChefDescription = styled.p`
    width: 70%;
    font-style: italic;

    @media (max-width: 78em) {
        width: 100%;
    }
`;

const ChefImg = styled.img`
    @media (max-width: 78em) {
        width: 40rem;
        order: 2;
        margin: 0 auto;
        border-radius: 4rem;
    }

    @media (max-width: 35em) {
        width: 25rem;
    }
`;

const AboutUs = () => {
    return (
        <AboutUsContent>
            <Top>
                <TopImg src={topImg} alt="Working Chef" />
                <TopText>
                    <Heading className="heading-2">
                        <span>Our </span>
                        Restaurant
                    </Heading>
                    <TopDescription className="paragraph-lg">
                        EleGanzo Founded in 2010 by the visionary chef Ismail
                        Marzuki, Our Restaurant has become a beloved dining
                        destination in the heart of Milan. Over the years, we
                        have delighted thousands of happy clients with our
                        commitment to quality, tradition, and exceptional
                        service
                    </TopDescription>
                </TopText>
            </Top>
            <Middle>
                <MiddleDescription className="paragraph-lg">
                    Guests can easily reserve a table online to enjoy not only
                    our exquisite meals but also our delicious desserts and
                    refreshing cold drinks. Come and experience the flavors of
                    Italy at EleGanzo, where every meal is a celebration of
                    taste and passion.
                </MiddleDescription>
                <MiddleImg src={middleImg} alt="Meal" />
            </Middle>
            <Bottom>
                <ChefImg src={bottomImg} alt="Founder" />
                <ChefInfo>
                    <Heading className="heading-2">
                        <span>Owner</span> & <br /> Executive Chef
                    </Heading>
                    <Name className="subtitle-xl">Ismail Marzuki</Name>
                    <ChefDescription className="paragraph-lg">
                        With over 20 years of experience in the culinary arts,
                        Ismail Marzuki is a licensed chef whose passion for
                        cooking shines through in every dish. As the founder and
                        driving force behind EleGanzo, Ismail combines his
                        extensive expertise with a deep love for Italian cuisine
                        to create memorable dining experiences.
                    </ChefDescription>
                </ChefInfo>
            </Bottom>
        </AboutUsContent>
    );
};

export { AboutUs };
