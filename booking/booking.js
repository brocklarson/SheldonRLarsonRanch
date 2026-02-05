import { mainCabin, guestCabin, bothCabins } from "/cabins/cabin-class.js";

const  formatPhoneNumber = (phone) => { //This checks if the phone number is in the right format
    const cleaned = ('' + phone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/); //Splits up the numbers by first 3 numbers, next 3 numbers, and last 4 numbers
    if (match) phone = '(' + match[1] + ') ' + match[2] + '-' + match[3]; //Organizes format like: (123)456-7890
    else phone = false; //Error mesage
    return phone;
}

const buttonsModule = (() => {
    let STEP = 1;
    const nextButton = document.querySelector('#booking-next');
    const buttons = Array.from(document.querySelectorAll(".booking-steps-button"));

    nextButton.addEventListener('click', validateForm);
    buttons.forEach(button => button.addEventListener('click', determineStep));

    function validateStep1(){
        let invalid = false;
        if(document.getElementById('adults').value <= 0){
            document.getElementById('invalidPeople').classList.add('show');
            invalid = true;
        }
        
        return invalid;
    }

    function validateStep2(){
        let invalid = false;
        if(document.getElementById('first-name').value === ""){
            document.getElementById('invalidName').classList.add('show');
            invalid = true;
        }
        let email = document.getElementById('guest-email').value;
        if(!String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            document.getElementById('invalidEmail').classList.add('show');
            invalid = true;
        }
        const phoneNumber = formatPhoneNumber(document.getElementById("guest-phone").value);
        if(phoneNumber === false){
            document.getElementById('invalidPhone').classList.add('show');
            invalid = true;
        }
        if(document.getElementById("safety-checkbox").checked == false){
            document.getElementById('invalidCheckbox').classList.add('show');
            invalid = true;
        }

        return invalid;
    }

    function validateForm(event){
        let invalid = false;
        const invalidIndicator = document.querySelectorAll(`small`);
        for (let i = 0; i < invalidIndicator.length; i++) {
            invalidIndicator[i].classList.remove(`show`);
        }

        if(STEP === 1) invalid = validateStep1();
        if(STEP === 2) invalid = validateStep2();

        if(invalid === true) return;
        determineStep(event);
    }

    async function determineStep(event){
        //Check if this was called from next button or a specific step button
        if(event.target.id === nextButton.id){
            if(STEP === 4){
                nextButton.innerText = 'Submitting...';
                const waiting = await stateHandler.submitContactForm(event);
                nextButton.innerText = 'Submit';
            }
            else if(STEP < 4) STEP += 1;
        }else{
            const btn = buttons.find( button => event.target.id === button.id);
            if(btn.id == 'step1') STEP = 1; 
            if(btn.id == 'step2') STEP = 2;
            if(btn.id == 'step3') STEP = 3;
            if(btn.id == 'step4') STEP = 4;
        }

        if(STEP === 4) nextButton.innerText = 'Submit';
        else nextButton.innerText = 'Continue';
        stateHandler.setActiveState(STEP);
    }
    
    function setActiveButton(targetIndex){
        buttons.forEach((button, index) => {
            const icon = button.lastElementChild;

            if(index < targetIndex){
                button.classList = "booking-steps-button clickable";
                icon.classList = "fas fa-check-circle";
            }else if(index === targetIndex){
                button.classList = "booking-steps-button active clickable";
                icon.classList = "fas fa-check-circle";
            }else{
                button.classList = "booking-steps-button";
                icon.classList = "far fa-circle";
            }
        });
    }

    return {setActiveButton}
})();

const stateHandler = (() => {

    function setActiveState(STEP){
        const index = STEP - 1;
        const completedStep = Array.from(document.querySelectorAll('.completed-step'));
        const fillingStep = Array.from(document.querySelectorAll('.step-filling'));

        completedStep.forEach(step => {
            if(!step.classList.contains('hide')) step.classList.add('hide');
        });
        fillingStep.forEach(step =>{
            if(!step.classList.contains('hide')) step.classList.add('hide');
        });

        buttonsModule.setActiveButton(index);
        fillingStep[index].classList.remove('hide');
        for(let i = 1; i < STEP; i++){
            completedStep[i - 1].classList.remove('hide');
        }
        if(STEP > 1) stepOneDone();
        if(STEP > 2) stepTwoDone(); 
        if(STEP > 3) confirmBooking();       
    }

    function stepOneDone(){
        const startDate = document.getElementById('date-select').value.slice(0,10); //Declares variable for start date
        const endDate = document.getElementById('date-select').value.slice(13,23); //Declares variable for end date
        const startDateFormatted = new Date(Date.parse(startDate)); //Formats the starting date
        const endDateFormatted = new Date(Date.parse(endDate)); //Formats the end date
        const startDateParse = startDateFormatted.toString().slice(0,15); //Parses for the starting date
        const endDateParse = endDateFormatted.toString().slice(0,15); //Parses for the end date
        const nights = Math.round((endDateFormatted-startDateFormatted)/(1000*60*60*24)); //Formula to calculate how many nights
        const stayDates = startDateParse.slice(0,3) + ", " + startDateParse.slice(8,11) + startDateParse.slice(4,8) + startDateParse.slice(11,15) + " - " + endDateParse.slice(0,3) + ", " + endDateParse.slice(8,11) + endDateParse.slice(4,8) + endDateParse.slice(11,15); //Variable to format the dates like Jan 01, 2019
        document.getElementById("step-one-done-date-range").innerText = stayDates; //Puts the stay dates in the step one done section
        document.getElementById("step-one-done-nights").innerText = nights + " nights"; //Puts nuber of nights in step one done section
        const cabinSelect = document.getElementById('cabin-selection'); //Determines which cabin was selected
        const cabinSelected = cabinSelect.options[cabinSelect.selectedIndex].text;
        document.getElementById("step-one-done-cabin").innerText = cabinSelected; //Puts which cabin in the step one done section
         
        document.getElementById("step-one-done").classList.remove('hide');
    }

    function stepTwoDone(){
        const guestName = document.getElementById('first-name').value  + " " + document.getElementById('last-name').value; 
        document.getElementById("step-two-done-name").innerText = guestName;
        const guestEmail = document.getElementById("guest-email").value;
        document.getElementById("step-two-done-email").innerText = guestEmail; 
        const phoneNumber = formatPhoneNumber(document.getElementById("guest-phone").value);
        document.getElementById("step-two-done-phone").innerText = phoneNumber;
    }

    function getDates(){
        //Gets the dates, parses the date, makes it look in the format of "Jan 01, 2019" (like above)
        const startDate = document.getElementById('date-select').value.slice(0,10); 
        const endDate = document.getElementById('date-select').value.slice(13,23); 
        const startDateFormatted = new Date(Date.parse(startDate));
        const endDateFormatted = new Date(Date.parse(endDate));
        const startDateParse = startDateFormatted.toString().slice(0,15);
        const endDateParse = endDateFormatted.toString().slice(0,15);
        const totalNights = Math.round((endDateFormatted-startDateFormatted)/(1000*60*60*24));
        const confirmStartDate = startDateParse.slice(0,3) + ", " + startDateParse.slice(8,11) + startDateParse.slice(4,8) + startDateParse.slice(11,15); 
        const confirmEndDate = endDateParse.slice(0,3) + ", " + endDateParse.slice(8,11) + endDateParse.slice(4,8) + endDateParse.slice(11,15);

        return [confirmStartDate, confirmEndDate, totalNights]
    }

    const calcNightlyCost = (cabinSelection, nights, guests, pets) => {
        let cabinCost;
        let cabin;

        if(cabinSelection === "Main Cabin") cabin = mainCabin;
        else if(cabinSelection === "Guest Cabin") cabin = guestCabin;
        else cabin = bothCabins;

        if(nights >= 7) cabinCost = cabin.week_price / 7 * nights;
        else cabinCost = cabin.night_price * nights;

        let guestCharge = 0;
        let petCharge = 0;
        let totalCharge = cabinCost;
        if(guests > 10){
            guestCharge = 5 * (guests - 10);
            totalCharge += guestCharge;
        }
        if(pets >= 1){
            petCharge = 20 * pets;
            totalCharge += petCharge;
        }
        const totalCost = totalCharge.toFixed(2).toString();
        document.getElementById("cost-calculator").innerHTML = `Subtotal: $${cabinCost.toFixed(2)}<br>Extra Guests: $${guestCharge}<br>Pet Charge: $${petCharge}`;
        document.getElementById("confirm-cost").innerText = totalCost;

    }

    function getInputs(){
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('guest-email').value;
        const phone = formatPhoneNumber(document.getElementById('guest-phone').value);
        const totalGuests = Number(document.getElementById('adults').value) + Number(document.getElementById('children').value);
        const totalAdults = document.getElementById('adults').value;
        const totalChildren = document.getElementById('children').value;
        const totalPets = Number(document.getElementById('pets').value);
        const cabinSelection = document.getElementById('cabin-selection');
        const cabin = cabinSelection.options[cabinSelection.selectedIndex].text;
        const [startDate, endDate, totalNights] = getDates();
        const comments = document.getElementById('add-comment').value;

        return{
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "phone": phone,
            "totalGuests": totalGuests,
            "totalAdults": totalAdults,
            "totalChildren": totalChildren,
            "totalPets": totalPets,
            "cabin": cabin,
            "startDate": startDate,
            "endDate": endDate,
            "totalNights": totalNights,
            "comments": comments
        }
    }

    //Function for displaying all the information neatly
    function confirmBooking(){         
        const input = getInputs();

        document.getElementById("confirm-name").innerText = input.firstName  + " " + input.lastName;
        document.getElementById("confirm-email").innerText = input.email;
        document.getElementById("confirm-phone").innerText = input.phone;
        document.getElementById("confirm-totalNumber").innerText = input.totalGuests;
        document.getElementById("confirm-adults").innerText = input.totalAdults;
        document.getElementById("confirm-children").innerText = input.totalChildren;        
        document.getElementById("confirm-pets").innerText = input.totalPets;
        document.getElementById("confirm-cabin").innerText = input.cabin;
        document.getElementById("confirm-startDate").innerText = input.startDate;
        document.getElementById("confirm-endDate").innerText = input.endDate;
        document.getElementById("confirm-nights").innerText = input.totalNights;
        document.getElementById("confirm-message").innerText = input.comments;

        calcNightlyCost(input.cabin, input.totalNights, input.totalGuests, input.totalPets);
    }

    async function submitContactForm(event){
        event.preventDefault();
        const input = getInputs();

        await $.ajax({
            url: "https://formsubmit.co/ajax/c8d0ef4b1a60a35163750159cef47655",
            method: "POST",
            data: {
                "Cabin": input.cabin,
                "Dates": `${input.startDate} - ${input.endDate} (${input.totalNights} Nights)`,
                "Name": `${input.firstName} ${input.lastName}`,
                email: input.email,
                "Phone": input.phone,
                "Guest": `${input.totalGuests} Guest(s): ${input.totalAdults} Adult(s), ${input.totalChildren} Child(ren)`,
                "Pets": input.totalPets,
                "Price": `${document.getElementById("cost-calculator").innerText}\nTotal Cost: $${document.getElementById("confirm-cost").innerText}`,
                "Additional Comments": input.comments,
                _subject: `${input.cabin} Reservation Request - ${input.firstName} ${input.lastName} - ${input.startDate} - ${input.endDate}`,
                _template: "box",
                _replyto: input.email,
                _autoresponse: `Thank you for your reservation request for ${input.cabin}. We will get back to you shortly  to confirm the availability`,
                _captcha: true
            },
            dataType: "json",
            success: (data) => confirmFormSubmission(true, data),
            error: (err) => confirmFormSubmission(false, err)
        });
    }

    async function confirmFormSubmission(successful, data){
        console.log(data);
        const snackbar = document.querySelector("#snackbar");
        if(successful)snackbar.innerText = "Request Sent";
        else snackbar.innerText = "Error Sending Request";

        $(snackbar).addClass("show");
        setTimeout(function(){ 
            $(snackbar).removeClass("show"); 
            if(successful) window.location.href = '/SheldonRLarsonRanch/';
        }, 3000);
    }

    (function init(){
        setActiveState(1);
    })();

    return {setActiveState, submitContactForm}
})();

