import React from 'react';
import emailjs from 'emailjs-com';


const email = async (serviceId, template, userId, form) => {
    await emailjs.sendForm(serviceId, template, form, 'YOUR_USER_ID')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
}

export default email;