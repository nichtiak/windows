function calc() {


    //------------------Calc-----------------------------------------------------------------------------

    //----------------------Modal-Calc------------------------------------------------

    let glazingSection = document.querySelector(".glazing"),
        popupCalc = document.querySelector(".popup_calc"),
        closeCalc = document.querySelectorAll('.popup_calc_close, .popup_calc_profile_close, .popup_calc_end_close'),
        allModalCalc = document.querySelectorAll('.popup_calc, .popup_calc_profile, .popup_calc_end'),
        forma = document.querySelector('.end_form'),
        popupCalcInputs = popupCalc.getElementsByTagName("input");
       
    // console.log(forma);
    glazingSection.addEventListener("click", (event) => {
        if (event.target && event.target.classList.contains("popup_calc_btn")) {
            popupCalc.style.display = "block";
            document.body.style.overflow = "hidden";
        }
    });

    function setValidationCalc(inputs) {
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener("input", () => {
                inputs[i].value = inputs[i].value.replace(/[^0-9]/ig, "");
            });
        }
    }
    setValidationCalc(popupCalcInputs);

    //----------------------Tabs-Calc------------------------------------------------

    let popupCalcBalconIcons = popupCalc.querySelector(".balcon_icons"), // родитель картинок
        smallPictures = popupCalc.querySelectorAll(".picture"), // маленькие картинки добавить класс do_image_more
        bigPictures = popupCalc.querySelectorAll(".big_img img"); // больше картинки

    function hidePictures(a) {
        for (let i = a; i < bigPictures.length; i++) {
            bigPictures[i].style.display = "none";
            smallPictures[i].classList.remove("do_image_more");
        }
    }

    function showPictures(b) {
        if (bigPictures[b].style.display = "none") {
            bigPictures[b].style.display = "inline-block";
            smallPictures[b].classList.add("do_image_more");
        }
    }

    popupCalcBalconIcons.addEventListener("click", (event) => {
        let target = event.target;
        event.preventDefault();
        if (target && target.classList.contains("picture")) {
            for (let i = 0; i < smallPictures.length; i++) {
                if (target == smallPictures[i]) {
                    hidePictures(0);
                    showPictures(i);
                    break;
                }
            }
        }
    });

    //----------------------Modal-Calc-Profile------------------------------------------------

    let popupCalcButton = popupCalc.querySelector(".popup_calc_button"),
        popupCalcProfile = document.querySelector(".popup_calc_profile"),
        popupCalcContent = document.querySelector(".popup_calc_content"),
        popupCalcProfileButton = document.querySelector(".popup_calc_profile_button"),
        popupCalcEnd = document.querySelector(".popup_calc_end");


    popupCalcButton.addEventListener("click", () => {

        let statusMessageInput = document.createElement("div");
        statusMessageInput.classList.add("status");

        if (popupCalcInputs[0].value == "" && popupCalcInputs[1].value == "") {
            popupCalc.style.display = "block";
            popupCalcContent.appendChild(statusMessageInput);
            statusMessageInput.textContent = "Заполните все поля!";
        } else {
            popupCalcProfile.style.display = "block";
            document.body.style.overflow = "hidden";
            popupCalc.style.display = "none";
        }

    });

    document.getElementById('Check2').addEventListener('change', () => {
        document.getElementById('Check1').checked = !document.getElementById('Check2').checked;
    });

    document.getElementById('Check1').addEventListener('change', () => {
        document.getElementById('Check2').checked = !document.getElementById('Check1').checked;
    });

    popupCalcProfileButton.addEventListener("click", () => {
        popupCalcProfile.style.display = "none";
        popupCalcEnd.style.display = "block";
    });

    function closeModalCalc() {
        for (let i = 0; i < closeCalc.length; i++) {
            closeCalc[i].addEventListener('click', () => {
                for (let c = 0; c < allModalCalc.length; c++) {
                    allModalCalc[c].style.display = 'none';
                    document.body.style.overflow = '';
                }
            })
        }

    }
    closeModalCalc();

    // Send

    let obj = {},
        message = {
        loading: 'Идёт отправка',
        success: 'Отправлено',
        failure: 'Ошибка'
    },
    statusMessage = document.createElement('div');
    statusMessage.classList.add('status');

        //write type window in obj
        for (let i = 0; i < smallPictures.length; i++) {
            smallPictures[i].addEventListener('click', (e) => {
                let target = e.target;
                if (target == smallPictures[i]) {
                    obj.type = smallPictures[i].getAttribute('alt');
                }
            })
        }
  
        //write data about window in obj
        popupCalcButton.addEventListener('click', () => {
            obj.width_window = document.getElementById('width').value;
            obj.height_window = document.getElementById('height').value;
        });

        //write chekbox in obj
        document.querySelector('.popup_calc_profile_button').addEventListener('click', () => {
            if (document.getElementById('Check1').checked) {
                obj.weather = 'Холодное';
            } else {
                obj.weather = 'Тёплое';
            }
        });

    

    function sendFormCalc() {
        
        forma.addEventListener('submit', (event) => {
            event.preventDefault();
            forma.appendChild(statusMessage);
            input = forma.querySelectorAll('.form-control');

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

            let formData = new FormData(forma);

            formData.forEach(function (value, key) {
                obj[key] = value;
            });


            let json = JSON.stringify(obj);

            request.send(json);

            request.addEventListener('readystatechange', () => {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        });
        }
        sendFormCalc();
    }

module.exports = calc;