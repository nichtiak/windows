function tabs () {
    let tabGlazing = document.querySelectorAll('.glazing_block'),
        glazingContent = document.querySelectorAll('.glazing_content'),

        tabDecoration = document.querySelectorAll('.decoration_item'),
        decorationInfo = document.querySelectorAll('.decoration_info');

        // console.log(decorationInfo);
        // console.log(tabGlazing);
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

    // tabGlazingParent.addEventListener('click', function (event) {
    //     let target = event.target;
    //     // this.target = target;
    //     if (target && target.classList.contains('glazing_block')) {
    //         for (let i = 0; i < tabGlazing.length; i++) {
    //             if (target == tabGlazing[i]) {
    //                 hideGlazingContent(0);
    //                 showGlazingContent(i);
    //                 break;
                                  
    //             }
    //         }
    //     }
    // });
    function toggleTabs (tabsClasses, tabsBtn, tabsContent) {
        document.body.addEventListener('click', e => {
            let tabs = e.target.closest(tabsClasses);
    
            if (tabs) {
                for (let i = 0; i < tabsBtn.length; i++) {
                    if (tabs == tabsBtn[i]) {
                        hideGlazingContent(0, tabsContent);
                        showGlazingContent(i, tabsContent);
                        break;    
                    }
                }
            }
        });
    }
    toggleTabs ('.decoration_item', tabDecoration, decorationInfo);
    toggleTabs ('.glazing_block', tabGlazing, glazingContent);
}
module.exports = tabs;