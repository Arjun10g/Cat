let paths = document.querySelectorAll('path');
console.log(paths);

paths.forEach(x => {
    x.getTotalLength();
    console.log(x.getTotalLength());
});

// gsap.to('.test', {
//     y: 200,
//     duration: 1,
//     opacity:0.3
// });

// gsap.fromTo('.test',{opacity:0, x:0, y:0},{opacity:1, x:200, y:200, duration:4});

const tl = gsap.timeline({defaults: {duration: 2}});

tl.fromTo('.cat', {scale:1}, {scale:3, duration: 4})
tl.to('#group-1 path', {x:50, y:50, duration: 4,rotate:'3deg' , ease: 'power2.inOut', stagger: 0.5,repeat: -1,yoyo:true}, "<50%")
tl.to('#group-2', {x:-200,y:200,duration: 4,rotate:'-15deg' , ease: 'Sine.easeOut', stagger: 0.5,repeat: -1,yoyo:true}, "<")