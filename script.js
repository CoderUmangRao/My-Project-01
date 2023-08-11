const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var tl=gsap.timeline();

    tl.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut
    })
        .to(".boundingelem",{
            y:0,
            ease: Expo.easeInOut,
            duration:1,
            delay:-.5,
            stagger: .3
        })
        .from("#herofooter",{
            x:-50,
            opacity:0,
            duration:1,
            ease:Expo.easeInOut
        })
}

// for circle skew in every x and y axies

    var timeout;

function circleChaptaKaro(){
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove",function(dets){
        clearTimeout(timeout);

        // var xdiff = dets.clientX - xprev;
        // var ydiff = dets.clientY - yprev;

        xscale= gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale= gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFlower(xscale,yscale);

        timeout= setTimeout(function(){
            document.querySelectorAll("#minicircle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        },100)
        // console.log(xdiff,ydiff);

    });
}

circleChaptaKaro();

function circleMouseFlower(xscale, yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}
circleMouseFlower();
firstPageAnim();

document.querySelectorAll(".elem").forEach(function (elem){
    var rotate= 0;
    var diffroot = 0;

    elem.addEventListener("mouseleave",function(dets){
 
         gsap.to(elem.querySelector("img"),{
             opacity: 0,
            //  ease : power3,
             rotate: gsap.utils.clamp(-40,40,diffroot),
         })
         
         console.log("Rao Sahb ji")
     })

    elem.addEventListener("mousemove",function(dets){
       var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffroot = rotate - dets.clientX ;
        rotate = dets.clientX;
        gsap.utils.clamp

        gsap.to(elem.querySelectorAll("img"),{
            opacity: 1,
            // ease : power3,
            top : diff,
            left : dets.clientX,
            rotate: gsap.utils.clamp(-20,20,diffroot),
        })
        
        console.log("Rao Sahb ji")
    })
});