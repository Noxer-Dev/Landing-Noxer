(function() {
    const buttonsGroup = document.querySelector('.buttons-group');
    const leftSide = document.querySelector('.left-side');
    const rightSide = document.querySelector('.right-side');
    
    if (!buttonsGroup || !leftSide || !rightSide) return;
    
    let isMobile = false;

    function handleResize() {
        const width = window.innerWidth;
        const shouldBeMobile = width <= 1024;
        
        if (shouldBeMobile === isMobile) return;
        
        isMobile = shouldBeMobile;
        
        if (isMobile) {
            rightSide.appendChild(buttonsGroup);
        } else {
            leftSide.appendChild(buttonsGroup);
        }
    }
    
    handleResize();
    
    window.addEventListener('resize', handleResize);
})();

