function tabs () {
    let tabGlazing = document.querySelectorAll('.glazing_block'),
        tabGlazingParent = document.querySelector('.glazing_slider'),
        glazingContent = document.querySelectorAll('.glazing_content');

        // console.log(glazingContent);
        // console.log('tabGlazing');
        // glazingContent[0].style.display = 'none';

    function hideGlazingContent(a) {
        glazingContent[a].style.display = 'none';
    }
    hideGlazingContent(0);

    function showGlazingContent(b) {
        if (glazingContent[b].style.display = 'none') {
            glazingContent[b].style.display = 'block';
        }
    }

    tabGlazingParent.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('glazing_block')) {
            for (let i = 0; i < tabGlazing.length; i++) {
                if (target == tabGlazing[i]) {
                    hideGlazingContent(0);
                    showGlazingContent(i);
                    break;
                }
            }
        }
    });
}
tabs ();
module.exports = tabs;