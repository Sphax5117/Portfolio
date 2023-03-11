PaceOptions = {
    ajax: true,  //Checks AJAX requests
    document: true //Document is ready
};
Pace.on('done', () => {
    gsap.timeline()
    .to('.pace', {
        transform: 'scale(10, 1)',
        duration: 3,
    }, "+=.2")
    .to('header', {
        opacity: 1,
        ease: "BezierEasing(0.19,1,0.22,1)"
    },)
    .to('section', {
        opacity: 1,
        ease: "BezierEasing(0.19,1,0.22,1)"
    },)
    .to('.circleLeft', {
        opacity:1,
        ease: "BezierEasing(0.19,1,0.22,1)"
    },)
    .to('.circleRight', {
        opacity:1,
        ease: "BezierEasing(0.19,1,0.22,1)"
    },)
    .to('.pace', {
        duration: 1, 
        height: "100%"
    }, "-=2.5"  )
    .to('.loading_text', {
        delay: .2,
        duration: 3,
        opacity: 0,
        yPercent: -400,
        ease: "BezierEasing(0.19,1,0.22,1)"
    }, 'p')
});