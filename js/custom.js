 // "use strict";
///////// jquery code start
$(document).ready(function(){
   
    $('.menu_toggler').click(function(){
        $(this).toggleClass('notice');
        $('.nav').toggleClass('notice');

    })
    $('.setting').click(function(){
        $(this).toggleClass('notice');
    })
    $('.dl_mode').click(function(){
        $(this).toggleClass('notice');
        $('#dashboard').toggleClass('dark');
    })
    

    var mixer = mixitup('.mix_container');
    
})




const color_pick = document.querySelectorAll('.color_btn');
const elem_color = document.querySelectorAll('.elem_color');
const bg_color = document.querySelectorAll('.bg_color');
const text_color = document.querySelectorAll('.text_color');
const border_color = document.querySelectorAll('.border_color');
const active = document.querySelectorAll('.active');

let theme = {color: "#A62D4D"}

console.log(color_pick);

for(var i=0;i<color_pick.length;i++){
    color_pick[i].addEventListener('click',function(){
        let elemColor = this.getAttribute('data-color');
        theme.color = elemColor;
        // theme_color[i]
        for(item of elem_color){
            item.style.color = elemColor;
            item.style.borderColor = elemColor;
        }
        for(item of bg_color){
            item.style.backgroundColor = elemColor;
        }
        for(item of text_color){
            item.style.color = elemColor;
        }
        for(item of border_color){
            item.style.boxShadow = `0px 0px 0px 2px ${elemColor}`;
        }
        for(item of active){
            // item.style.color = elemColor;
            item.style.borderColor = elemColor;
        }
        // console.log(theme_color[i])
       
    })
}

// parallax code start

// document.addEventListener('mousemove',parallax);
// function parallax(e){
//     this.querySelectorAll('.move').forEach(function(layer){
//         let speed = layer.getAttribute('data-speed');
        
//         let x = (window.innerWidth - e.pageX*speed)/100;
//         let y = (window.innerHeight - e.pageY*speed)/100;
//         layer.style.transform = `translate(${x}px,${y}px)`;

//         let page_x = window.outerWidth;
//         if(page_x <992 ){
//             layer.classList.remove('move');
//         }else{
//             layer.classList.remove('move');

//         }
//         console.log(window.innerWidth)
//     })
// }

var scene = document.querySelector('.parson_pic');
var parallaxInstance = new Parallax(scene);

var parson_imag = document.querySelector('.parson_imag');
var parallaxInstance = new Parallax(parson_imag);


// progress bar code start
const persentage = document.querySelectorAll('.num');
const progress_bar = document.querySelectorAll('.progress-bar');


for(var i=0;i<persentage.length;i++){
        
    let per = parseFloat(persentage[i].dataset.per);
    persentage[i].innerHTML = per+"%";
    persentage[i].style.left = per+"%";
    progress_bar[i].style.width = per+"%";

}






new Typewriter('.h_text2', {
    strings: ['Web Designer', 'UI/UX Designer','Freelacer'],
    autoStart: true,
    loop: true,
  });





///////// jquery code end