import { Container } from "react-bootstrap";
import {SRLWrapper, useLightbox} from "simple-react-lightbox";

const SingleImages = () => {
    const {openLightbox, closeLightbox} = useLightbox()
    return (
        <Container>
                <SRLWrapper>
            <a href={"/img/rah2.png"}>
                        <img src={"/img/rah2.png"} alt="Umbrella"/>
                    </a>
                   
                    <a href={"/img/rah2.png"}>
                        <img src={"/img/rah2.png"} alt="Umbrella"/>
                    </a>
                   
                    <a href={"/img/rah2.png"}>
                        <img src={"/img/rah2.png"} alt="Umbrella"/>
                    </a>
                   
                    <a href={"/img/rah2.png"}>
                        <img src={"/img/rah2.png"} alt="Umbrella"/>
                    </a>
                   
                    <a href={"/img/rah2.png"}>
                        <img src={"/img/rah2.png"} alt="Umbrella"/>
                    </a>
                   
                    <a href={"/img/rah2.png"}>
                        <img src={"/img/rah2.png"} alt="Umbrella"/>
                    </a>
                   
                    <a href={"/img/rah2.png"}>
                        <img src={"/img/rah2.png"} alt="Umbrella"/>
                    </a>
                   
                </SRLWrapper>
        </Container>
    );
};

export default SingleImages;