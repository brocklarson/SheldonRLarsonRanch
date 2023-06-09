buttonsModule = (() => {
    const buttons = Array.from(document.querySelectorAll(".booking-steps-button"));
    buttons.forEach(button => button.addEventListener('click', handleButtonClick));

    function handleButtonClick(event){
        const btn = buttons.find( button => event.target.id == button.id);
        if(btn.id == 'step1') stepOne();
        if(btn.id == 'step2') stepTwo();
        if(btn.id == 'step3') stepThree();
        if(btn.id == 'step4') stepFour();
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