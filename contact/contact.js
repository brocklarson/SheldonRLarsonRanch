const submitBtn = document.querySelector("#submitBtn");

async function handleFormSubmit(){
    if(invalidForm()) return

    submitBtn.innerText = 'Submitting...';
    const waiting = await submitContactForm();
    submitBtn.innerText = 'Submit';
}

function getInputs(){
    return {
        "name": document.querySelector("#name").value,
        "email": document.querySelector("#email").value,
        "phone": document.querySelector("#phone").value,
        "message": document.querySelector("#contactMessage").value
    }
}

async function submitContactForm(){
    const input = getInputs();
    
    await $.ajax({
        url: "https://formsubmit.co/ajax/c8d0ef4b1a60a35163750159cef47655",
        method: "POST",
        data: {
            "Name": `${input.name}`,
            email: input.email,
            "Phone": input.phone,
            "Message": input.message,
            _subject: `Contact Form Message from ${input.name}`,
            _template: "box",
            _replyto: input.email,
            _autoresponse: `Thank you for your query. We will respond as soon as possible`,
            _captcha: true
        },
        dataType: "json",
        success: (data) => confirmFormSubmission(true, data),
        error: (err) => confirmFormSubmission(false, err)
    });
}

async function confirmFormSubmission(successful, data){
    console.log(data);
    const snackbar = document.querySelector("#contactFormSnackbar");
    if(successful)snackbar.innerText = "Message Sent";
    else snackbar.innerText = "Error Sending Message";

    $(snackbar).addClass("show");
    setTimeout(function(){ 
        $(snackbar).removeClass("show"); 
        if(successful) window.location.href = '/SheldonRLarsonRanch/';
    }, 3000);
}

function invalidForm(){
    const invalidIndicator = document.querySelectorAll(`small`);
    for (let i = 0; i < invalidIndicator.length; i++) {
        invalidIndicator[i].classList.remove(`show`);
    }

    let invalid = false;
    if(document.getElementById('name').value === ""){
        document.getElementById('invalidName').classList.add('show');
        invalid = true;
    }
    let email = document.getElementById('email').value;
    if(!String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        document.getElementById('invalidEmail').classList.add('show');
        invalid = true;
    }
    const phoneNumber = formatPhoneNumber(document.getElementById("phone").value);
    if(phoneNumber === false){
        document.getElementById('invalidPhone').classList.add('show');
        invalid = true;
    }

    return invalid;
}

const  formatPhoneNumber = (phone) => { //This checks if the phone number is in the right format
    const cleaned = ('' + phone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/); //Splits up the numbers by first 3 numbers, next 3 numbers, and last 4 numbers
    if (match) phone = '(' + match[1] + ') ' + match[2] + '-' + match[3]; //Organizes format like: (123)456-7890
    else phone = false; //Error mesage
    return phone;
}