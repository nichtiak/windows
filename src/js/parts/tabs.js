function tabs() {
    let tabGlazing = document.querySelectorAll('.glazing_block'),
        tabGlazingUrl = document.querySelectorAll('.glazing_block a'),
        glazingContent = document.querySelectorAll('.glazing_content'),

        tabDecoration = document.querySelectorAll('.decoration_item'),
        tabDecorationUrl = document.querySelectorAll('.decoration_item div'),
        decorationInfo = document.querySelectorAll('.decoration_info');

    // console.log(decorationInfo);
    // console.log(tabGlazingUrl);
    // glazingContent[0].style.display = 'none';

    function hideGlazingContent(a, tabContent) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].style.display = 'none';

        }
    }
    // hideGlazingContent(1);

    function showGlazingContent(b, tabContent) {
        if (tabContent[b].style.display = 'none') {
            tabContent[b].style.display = 'block';
        }
    }


    function linkdesactive(c, tabsUrl, activeClass) {
        for (let i = c; i < tabsUrl.length; i++) {
            tabsUrl[i].classList.remove(activeClass);
            // tabsUrl[i].classList.add(noActive);
        }
    }
    // linkdesactive(1);

    function linkactive(d, tabsUrl, activeClass) {
        // if (tabsUrl[d].classList.contains(noActive)) {
            // tabsUrl[d].classList.remove(noActive);
            tabsUrl[d].classList.add(activeClass);
        // }
    }

    

    function toggleTabs(tabsClasses, tabsBtn, tabsContent, tabsUrl, activeClass) {
        console.log(tabsBtn.style);
        document.body.addEventListener('click', (e) => {
            let tabs = e.target.closest(tabsClasses);

            if (tabs) {
                for (let i = 0; i < tabsBtn.length; i++) {
                    if (tabs == tabsBtn[i]) {
                        linkdesactive(0, tabsUrl, activeClass);
                        linkactive(i, tabsUrl, activeClass);
                        hideGlazingContent(0, tabsContent);
                        showGlazingContent(i, tabsContent);
                        break;
                    }
                }
            }
        });
    }
    toggleTabs('.glazing_block', tabGlazing, glazingContent, tabGlazingUrl, 'active');
    toggleTabs('.decoration_item', tabDecoration, decorationInfo, tabDecorationUrl, 'after_click');
}
module.exports = tabs;