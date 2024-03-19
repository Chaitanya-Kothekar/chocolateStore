
gsap.from(".UpperBody .chocoFont",{
    y:-100,
    duration:1.6,
    delay:0.4,
    opacity:0,
    stagger:0.5
})
gsap.from(".chocoFont2",{
    y: 100,
    duration:1.6,
    delay:0.4,
    opacity:0,
    stagger:0.5
})
// gsap.to(".cocoBall", { 
//     rotation: 360,
//     duration: 2,
//     repeat: -1,
//     repeatDelay: 2,
//     ease: 'none'
//   });


gsap.from(".rightCont2 , .container2 ,.container3 , #cards",{
    y:-70,
    duration:2,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        // markers:true,
        start:"top 65%",
        trigger:".container2",
        scroller:"body",
                 // ( scrolling trigger for checking points , remove comments to check in website)
    },
})




