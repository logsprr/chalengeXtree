import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:0;
`;
const Form = styled.form`
    background-color: #021E19;
    width: 400px;
    height:auto;
    min-height:400px;
    display: flex;
    flex-direction:column;
    align-items:center;
    padding:10px;
`;

const InputField = styled.input`
    background-color: #ddd;
    color: black;
    border:none;
    border-radius: 8px;
    width:80%;
    height: 40px;
    margin-top: 10px;
    padding:2px 10px;
`;

const InputFieldMessage = styled.textarea`
    background-color: #ddd;
    color: black;
    border:none;
    border-radius: 8px;
    width:80%;
    height: 40px;
    margin-top: 10px;
    padding:2px 10px;
`;
const Logo = styled.img`
    height: 100px;
    width: 100px;
`;

const SaveButton = styled.button`
    width: 40%;
    height: 40px;
    background-color:#0FDC62;
    color: #000;
    font-size:18px;
    border:none;
    border-radius:8px;
    margin-top:10px;
    font-weight: 600;
`;

const VideoBackground = styled.video`
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index:-1;
`;

const ContainerTerms = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:70%;
    margin-top:10px;
`;

const LabelText = styled.label`
    color: white;
    margin: 5px 0 0 5px;
`;

const ToltipTerms = styled.div`
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
    margin-top:5px;

    &:hover {
        span{
            visibility: visible;
            opacity: 1;
        }
    }
`;

const ToltipTextTerms = styled.span`
    visibility: hidden;
    width: 220px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;

    &:after{
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
    }
`;
export { Container, Form, InputField, Logo, SaveButton, VideoBackground, InputFieldMessage, ContainerTerms, LabelText, ToltipTerms, ToltipTextTerms };