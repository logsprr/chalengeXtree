import React, { useEffect, useLayoutEffect } from "react";
import { Container, Form, InputField, Logo, SaveButton, VideoBackground, ContainerTerms, LabelText } from './styles';
import Video from '../../assets/videos/background.mp4';
import ReCAPTCHA from "react-google-recaptcha";
const App = () => {
    useLayoutEffect(() => {
        function playVideo() {
            let video = document.getElementById("videoBck");
            video.play();
        };
        window.addEventListener("load", playVideo())
    }, []);

    const onChange = (value) => {
        console.log("Captcha value:", value);
    }
    return (
        <Container>
            <VideoBackground id="videoBck" muted loop>
                <source src={Video} type="video/mp4" />
            </VideoBackground>
            <Form>
                <Logo src="https://www.xtree.com.vc/wp-content/themes/neori/xtree/images/xtree_logo_header.png" />
                <InputField placeholder="Nome" />
                <InputField placeholder="Email" />
                <InputField placeholder="Telefone" />
                <ContainerTerms>
                    <InputField style={{ width: '14px', height: '14px', padding: 0 }} type="checkbox" id="acceptTerms" />
                    <LabelText for="acceptTerms">Aceito os termos</LabelText>
                </ContainerTerms>
                <ReCAPTCHA
                    sitekey="Your client site key"
                    onChange={onChange}
                />
                <SaveButton>
                    Salvar
                </SaveButton>
            </Form>
        </Container>
    )
}

export default App;

