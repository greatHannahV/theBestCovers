gsap.registerPlugin(ScrollTrigger)
if (ScrollTrigger.isTouch !== 1) {

    ScrollSmoother.create({
        content: '.content',
        wrapper: '.wrapper',
        smooth: 1.5,
        effects: true,
    })

    gsap.fromTo('.hero-section', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'center',
            end: '820',
            scrub: true

        }
    })

    let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')
    itemsL.forEach(item => {
        gsap.fromTo(item, {
            x: -100,
            opacity: 0
        }, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-850',
                end: '-100',
                scrub: true

            }
        })
    })

    let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')
    itemsR.forEach(item => {
        gsap.fromTo(item, {
            x: 100,
            opacity: 0
        }, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-850',
                end: '-100',
                scrub: true

            }
        })
    })
}
//phone
if (ScrollTrigger.isTouch) {
    ScrollSmoother.create({
        content: '.content',
        wrapper: '.wrapper',
        smooth: 1.2,
        effects: true,
    })
    gsap.fromTo('.hero-section', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'center',
            end: '820',
            scrub: true

        }
    })
    let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')
    itemsL.forEach(item => {
        gsap.fromTo(item, {
            x: -100,
            opacity: 0
        }, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-950',
                end: 'center'


            }
        })
    })

    let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')
    itemsR.forEach(item => {
        gsap.fromTo(item, {
            x: 100,
            opacity: 0
        }, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-950',
                end: 'center'


            }
        })
    })
    document.querySelector('.main-title').textContent = 'test'



}