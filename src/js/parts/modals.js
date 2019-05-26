function modals() {
    let btnEngineer = document.querySelector('.popup_engineer_btn'),
        popupEngineer = document.querySelector('.popup_engineer'),
        close = document.querySelectorAll('.popup_close'),
        allModal = document.querySelectorAll('.popup_engineer, .popup'),
        popup = document.querySelector('.popup'),
        btnPopup = document.querySelectorAll('.phone_link');


    btnEngineer.addEventListener('click', function () {
        popupEngineer.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    for (let i = 0; i < btnPopup.length; i++) {
        btnPopup[i].addEventListener('click', function () {
            popup.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }
    function closeModal() {
        for (let i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function () {
                for (let c = 0; c < allModal.length; c++) {
                    allModal[c].style.display = 'none';
                    document.body.style.overflow = '';
                }
            })
        }

    }
    closeModal();

    function closeModalWindow(e) {
        for (let i = 0; i < allModal.length; i++){
            if (e.target == allModal[i]) {
                allModal[i].style.display = 'none';
                document.body.style.overflow = '';
            }
        }
    }
    window.addEventListener('click', closeModalWindow);

    function modalDelay () {
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    setTimeout (modalDelay, 61000);
}
modals();
module.exports = modals;