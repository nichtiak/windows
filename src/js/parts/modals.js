function modals() {
    let btnEngineer = document.querySelector('.popup_engineer_btn'),
        popupEngineer = document.querySelector('.popup_engineer'),
        close = document.querySelectorAll('.popup_close'),
        allModal = document.querySelectorAll('.popup_engineer, .popup'),
        popup = document.querySelector('.popup'),
        btnPopup = document.querySelectorAll('.phone_link');
    popupContent = document.querySelector('.popup_content');
    // console.log(popupContent);


    btnEngineer.addEventListener('click', () => {
        popupEngineer.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    for (let i = 0; i < btnPopup.length; i++) {
        btnPopup[i].addEventListener('click', (e) => {
            e.preventDefault();
            popup.style.display = 'block';
            if (popupContent.classList.contains('zoomOutRight')) {
                popupContent.classList.remove('zoomOutRight');
            }
            popupContent.classList.add('zoomInRight');
            popupContent.style.animationDuration = ('.7s');
            document.body.style.overflow = 'hidden';
        });
    }
    function closeModal() {
        for (let i = 0; i < close.length; i++) {
            close[i].addEventListener('click', (e) => {
                e.preventDefault();
                for (let c = 0; c < allModal.length; c++) {
                    popupContent.classList.remove('zoomInRight');
                    popupContent.classList.add('zoomOutRight');
                    setTimeout(function () {
                        allModal[c].style.display = 'none';
                        popupContent.classList.remove('zoomOutRight')
                    }, 700);
                    document.body.style.overflow = '';
                }
            })
        }

    }
    closeModal();

    function closeModalWindow(e) {
        for (let i = 0; i < allModal.length; i++) {
            if (e.target == allModal[i]) {
                popupContent.classList.remove('zoomInRight');
                popupContent.classList.add('zoomOutRight');
                setTimeout(function () { 
                    allModal[i].style.display = 'none'; 
                    popupContent.classList.remove('zoomOutRight');
                }, 700);
                // allModal[i].style.display = 'none';
                document.body.style.overflow = '';
            }
        }
    }
    window.addEventListener('click', closeModalWindow);

    function modalDelay() {
        popup.style.display = 'block';
        popupContent.classList.add('zoomIn');
        popupContent.style.animationDuration = ('.7s');
        document.body.style.overflow = 'hidden';
    }
    setTimeout(modalDelay, 15000);
}
module.exports = modals;