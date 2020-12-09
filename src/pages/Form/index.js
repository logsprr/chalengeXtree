import React, { useLayoutEffect, useState } from "react";
import { Container, Form, InputField, Logo, SaveButton, VideoBackground, ContainerTerms, LabelText, ToltipTerms, ToltipTextTerms } from './styles';
import Video from '../../assets/videos/background.mp4';
import ReCAPTCHA from "react-google-recaptcha";
import api from "../../services/Api";
const apiToken = 'cdda18af2bf5b539215e5abf7eed1b6c02520afd';
const App = () => {
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [recaptchaTerms, setRecaptchaTerms] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    useLayoutEffect(() => {
        function playVideo() {
            let video = document.getElementById("videoBck");
            video.play();
        };
        window.addEventListener("loadeddata", playVideo())
    }, []);

    const onChange = (value) => {
        setRecaptchaTerms(value)
    }
    const submitRegister = async (event) => {
        event.preventDefault();
        const data = {
            "org_id": null,
            "name": name,
            "phone": [
                {
                    "label": "work",
                    "value": phone,
                    "primary": true
                }
            ],
            "email": [
                {
                    "label": "work",
                    "value": email,
                    "primary": true
                }
            ],
        }
        if (acceptTerms && recaptchaTerms) {
            const response = await api.post(`persons?api_token=${apiToken}`, data)
            if (response.data.success) {
                const leadData = {
                    "title": `Lead ${name}`,
                    "person_id": response.data.data.id,
                }
                const leadResponse = await api.post(`leads?api_token=${apiToken}`, leadData)
                if (leadResponse.data.success) {
                    setName('');
                    setEmail('');
                    setPhone('')
                    setRecaptchaTerms(false);
                    setAcceptTerms(false);
                    alert("Seus dados foram salvo com sucesso")
                }
            } else {
                alert("Não foi possivel atender a sua solicitação")
            }
        } else {
            if (!acceptTerms) {
                alert("Verificar o campo de politicas ")
            } else {
                alert("Captcha não válido ")
            }
        }
    }
    return (
        <Container>
            <VideoBackground id="videoBck" muted loop>
                <source src={Video} type="video/mp4" />
            </VideoBackground>
            <Form onSubmit={submitRegister}>
                <Logo src="https://www.xtree.com.vc/wp-content/themes/neori/xtree/images/xtree_logo_header.png" />
                <InputField onChange={(text) => setName(text.target.value)} placeholder="Nome" value={name} />
                <InputField onChange={(text) => setEmail(text.target.value)} placeholder="Email" value={email} />
                <InputField onChange={(text) => setPhone(text.target.value)} placeholder="Telefone" value={phone} />
                <ContainerTerms>
                    <InputField onClick={() => setAcceptTerms(acceptTerms ? false : true)} style={{ width: '14px', height: '14px', padding: 0 }} type="checkbox" id="acceptTerms" />
                    <ToltipTerms>
                        <LabelText htmlFor="acceptTerms">Aceito os termos da politica de dados</LabelText>
                        <ToltipTextTerms>
                            Você concorda que a Xtree poderá usar seus dados a favor da Xtree para veiculos de noficações e analises do seu perfil
                        </ToltipTextTerms>
                    </ToltipTerms>
                </ContainerTerms>
                {acceptTerms &&
                    <ReCAPTCHA
                        style={{ margin: 10 }}
                        sitekey="6LdrmP8ZAAAAAGZ2PpfjXUbDQ7Ri__p6Tv2vlDTM"
                        onChange={onChange}
                    />}
                <SaveButton type='submit'>
                    Salvar
                </SaveButton>
            </Form>
        </Container>
    )
}

export default App;

