'use strict'

const users = [];

const userFormElement = document.forms[0];
userFormElement.addEventListener('submit', event => {
    event.preventDefault(); // заборонити відправку на сервер

    const { elements } = userFormElement;
    const userName = elements.firstName.value.trim();
    const messageInput = elements.message.value.trim();
    const phoneInput = elements.phoneNumber.value.trim();
    const emailInput = elements.email.value.trim();

    if (!userName) {
        alert('Name cannot be empty');
        return;
    }

    const messageRegExp = /^.{5,}$/;
    if (!messageRegExp.test(messageInput)) {
        alert('Message must be at least 5 characters long');
        return;
    }

    const phoneNumberRegExp = /^\+380\d{9}$/;
    if (!phoneNumberRegExp.test(phoneInput)) {
        alert('Phone number must start with +380 and contain 9 digits after it');
        return;
    }

    const emailRegExp = /^\S+@\S+\.\S+$/;
    if (!emailRegExp.test(emailInput)) {
        alert('Email address is not correct!');
        return;
    }

    console.log({
        name: userName,
        message: messageInput,
        phoneNumber: phoneInput,
        email: emailInput
    });

    users.push({
        name: userName,
        message: messageInput,
        phoneNumber: phoneInput,
        email: emailInput
    });

    alert('Message sent successfully!');
});

