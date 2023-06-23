import { mainCabin, guestCabin, bothCabins } from "/cabins/cabin-class.js";

const buttonsModule = (() => {
    let STEP = 1;
    const nextButton = document.querySelector('#booking-next');
    const buttons = Array.from(document.querySelectorAll(".booking-steps-button"));

    nextButton.addEventListener('click', validateForm);
    buttons.forEach(button => button.addEventListener('click', determineStep));
    
    function formatPhoneNumber(guestPhone){ //This checks if the phone number is in the right format
        const cleaned = ('' + guestPhone).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/); //Splits up the numbers by first 3 numbers, next 3 numbers, and last 4 numbers
        if (match) guestPhone = '(' + match[1] + ') ' + match[2] + '-' + match[3]; //Organizes format like: (123)456-7890
        else guestPhone = false; //Error mesage
        
        return guestPhone;
    }

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

    function determineStep(event){
        if(event.target.id === nextButton.id){
            if(STEP < 4) STEP += 1;
        }else{
            const btn = buttons.find( button => event.target.id === button.id);
            if(btn.id == 'step1') STEP = 1; 
            if(btn.id == 'step2') STEP = 2;
            if(btn.id == 'step3') STEP = 3;
            if(btn.id == 'step4') STEP = 4;
        }

        if(STEP === 4) nextButton.innerText = 'Submit';
        else nextButton.innerText = 'Continue';
        setActiveState(STEP);
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

        setActiveButton(index);
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
        if(guests > 10){
            guestCharge = 5 * (guests - 10);
            cabinCost += guestCharge;
        }
        if(pets >= 1){
            petCharge = 20 * pets;
            cabinCost += petCharge;
        }
        const totalCost = cabinCost.toFixed(2).toString();
        document.getElementById("confirm-cost").innerText = totalCost;
        document.getElementById("confirm-cost0").value = totalCost;

        // document.getElementById("cost-calculator").innerHTML = cabinSelection + ": $" + cabinCost.toFixed(2) +"<br>Extra Guests: $" + guestCharge + "<br>Pet Charge: $" + petCharge;
        // document.getElementById("cost-calculator0").value = cabinSelection + ": $" + cabinCost.toFixed(2) +"<br>Extra Guests: $" + guestCharge + "<br>Pet Charge: $" + petCharge;
      }

    //Function for displaying all the information neatly (The variables ending in "0" are not displayed but are the variables sent to the email in the <form> section of bookNow.html)
    function confirmBooking(){         
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
        const [startDate, EndDate, totalNights] = getDates();
        const comments = document.getElementById('add-comment').value;

        //First and last names
        document.getElementById("confirm-name").innerText = firstName  + " " + lastName;
        document.getElementById("confirm-name0").value = firstName  + " " + lastName;
        //Email
        document.getElementById("confirm-email").innerText = email;
        document.getElementById("confirm-email0").value = email;
        //Phone number
        document.getElementById("confirm-phone").innerText = phone;
        document.getElementById("confirm-phone0").value = phone;
        //Number of guests
        document.getElementById("confirm-totalNumber").innerText = totalGuests;
        document.getElementById("confirm-totalNumber0").value = totalGuests;
        //Number of adultes
        document.getElementById("confirm-adults").innerText = totalAdults;
        document.getElementById("confirm-adults0").value = totalAdults;
        //Number of children
        document.getElementById("confirm-children").innerText = totalChildren;
        document.getElementById("confirm-children0").value = totalChildren;
        //Number of pets
        
        document.getElementById("confirm-pets").innerText = totalPets;
        document.getElementById("confirm-pets0").value = totalPets;
        //Cabin selection
        document.getElementById("confirm-cabin").innerText = cabin;
        document.getElementById("confirm-cabin0").value = cabin;
        //Gets the dates, parses the date, makes it look in the format of "Jan 01, 2019"
        document.getElementById("confirm-startDate").innerText = startDate;
        document.getElementById("confirm-startDate0").value = startDate;
        document.getElementById("confirm-endDate").innerText = EndDate;
        document.getElementById("confirm-endDate0").value = EndDate;
        document.getElementById("confirm-daterange0").value = document.getElementById("date-select").value;
        //Number of nights
        document.getElementById("confirm-nights").innerText = totalNights;
        document.getElementById("confirm-nights0").value = totalNights;
        //Adds their person coments
        document.getElementById("confirm-message").innerText = comments;
        document.getElementById("confirm-message0").value = comments;

        calcNightlyCost(cabin, totalNights, totalGuests, totalPets);
    }

    (function init(){
        setActiveState(1);
    })();

})();
