buttonsModule = (() => {
    let STEP = 1;
    const nextButton = document.querySelector('#booking-next');
    const buttons = Array.from(document.querySelectorAll(".booking-steps-button"));

    nextButton.addEventListener('click', determineStep);
    buttons.forEach(button => button.addEventListener('click', determineStep));
    
    function determineStep(event){
        if(event.target.id === nextButton.id){
            if(STEP < 4) STEP += 1;

            if(STEP === 1) stepOne();
            if(STEP === 2) stepTwo();
            if(STEP === 3) stepThree();
            if(STEP === 4) stepFour();
        }else{
            const btn = buttons.find( button => event.target.id === button.id);
            if(btn.id == 'step1'){ STEP = 1; stepOne();}
            if(btn.id == 'step2'){ STEP = 2; stepTwo();}
            if(btn.id == 'step3'){ STEP = 3; stepThree();}
            if(btn.id == 'step4'){ STEP = 4; stepFour();}
        }

        if(STEP === 4) nextButton.innerText = 'Submit';
        else nextButton.innerText = 'Continue';
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

    function stepOne(){
        setActiveButton(0);
    }

    function stepTwo(){
        setActiveButton(1);
    }

    function stepThree(){
        setActiveButton(2);
    }

    function stepFour(){
        setActiveButton(3);
    }


    (function init(){
        stepOne();
    })();

})();

const createDOM = (() => {
    
})();