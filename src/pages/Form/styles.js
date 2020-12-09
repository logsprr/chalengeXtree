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
    height:400px;
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
    border:none;
    border-radius:8px;
    margin-top:10px;
    font-weight: 600;
    font-family: 'Campton-Book';
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
    width:60%;
    margin-top:10px;
`;

const LabelText = styled.label`
    color: white;
    margin: 5px 0 0 5px;
`;
export { Container, Form, InputField, Logo, SaveButton, VideoBackground, InputFieldMessage, ContainerTerms, LabelText };