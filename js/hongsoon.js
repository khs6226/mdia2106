(function () {
    const stageElem = document.querySelector('.stage');
    const houseElem = document.querySelector('.house');
    const barElem = document.querySelector('.progress-bar');
    const mousePos = { x: 0, y: 0 };
    const worldElem = document.querySelector('.world');
    let maxScrollValue;

    function resizeHandler() {
        // To calculate scrolling height
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    }

    window.addEventListener('scroll', function () {
        //pageYOffset - How much user scroll
        // To calculate the percentage of amount of user's scrolling (-1 ~ +1)
        const scrollPer = window.pageYOffset / maxScrollValue;

        // To set the first location (-490)
        const zMove = scrollPer * 980 - 490;

        // Controlling Z-axis
        houseElem.style.transform = 'translateZ(' + zMove + 'vw)';
        // progress bar 
        barElem.style.width = scrollPer * 100 + '%';

    });

    window.addEventListener('mousemove', function (e) {
        //e.clientX,Y ->The pixel of mouse's postion like window.pageYOffset
        //Formula to set 0 when mouse point is in the middle
        mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
        mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
        // Rotating to give 3D effect, 
        stageElem.style.transform = 'rotateX(' + (mousePos.y * 4) + 'deg) rotateY(' + (mousePos.x * 4) + 'deg)';
    });

    // Resizing listener
    window.addEventListener('resize', resizeHandler);

    resizeHandler();

})();
