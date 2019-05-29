function images() {
    let imgMin = document.querySelectorAll('.img_min'),
        imgBig = document.querySelectorAll('.works a'),
        img = document.createElement('img');
        imgBlock = document.createElement ('div');
        
        imgBlock.classList.add('overlay');
        imgBlock.classList.add('imgModal');

        for (let i = 0; i < imgMin.length; i++) {
            imgMin[i].addEventListener('click', function (e) {
                e.preventDefault();
                let target = e.target;
                for (let a = 0; a < imgBig.length; a++) {
                    let imgUrl = imgBig[a].getAttribute('href');
                    if (target == imgBig[a]) {
                        body.appendChild(imgBlock);
                        imgBlock.style.display = 'block';
                        img.setAttribute('src', imgUrl);
                        let imgModal = document.querySelector('.imgModal');
                        imgModal.appendChild(img);
                        console.log(imgModal);
                    }
                }
            });
        }
}
module.exports = images;