import throttle from "lodash.throttle";

const form = document.querySelector('form');
const email = document.querySelector('input');
const message = document.querySelector('textArea');
let feedbackFormState = {};


inputData();

const formInput = (event) => {
    feedbackFormState[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState))
}

const handleSubmit = (event) => {
    event.preventDefault();
    const elements = {email: email.value, message: message.value}
    console.log(elements);
    email.value = "";
    message.value = "";
    feedbackFormState = {};
    localStorage.removeItem('feedback-form-state');
}

form.addEventListener('input', throttle((formInput), 500));
form.addEventListener('submit', handleSubmit);

function inputData() {
    let data = localStorage.getItem('feedback-form-state');
    console.log(data);
    if (data) {
        data = JSON.parse(data);
        Object.entries(data).forEach(([name, value]) => {
            feedbackFormState[name] = value;
            form.elements[name].value = value;
        })
    } else {
        email.value = "",
        message.value = "";
    };
}