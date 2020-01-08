

// $(()=>{
//   $('.pin-10').on('click',()=>{ //クリックで.pin-10を隠す
//     $('.pin-10').hide();
//   });
// });

// $(()=>{
//   $('.pin-10').on('click',()=>{ //.pin-10-svg img , .ok-10-btn , .ball-10を表示
//     $('.pin-10-svg img , .ok-10-btn , .ball-10').show();
//   });
// });

// $(()=>{
//   $('.pin-10-svg img').on('click',()=>{ //クリックで.pin-10を表示
//     $('.pin-10').show();
//   });
// });

// $(()=>{
//   $('.pin-10-svg img').on('click',()=>{
//     $('.pin-10-svg img, .ok-10-btn , .ball-10').hide();
//   });
// });

// $(()=>{
//   $('.ok-10-btn').on('click',()=>{
//     $('.ok-10-btn, .pin-1, .pin-2,.pin-3, .pin-4,.pin-5,.pin-6,.pin-7,.pin-8,.pin-9,.pin-10').animate({'opacity':'0'});
// });
// });

// $(() => {
//   $('.ok-10-btn').on('click', () => {     //functionの記述を省略 () =>
//     $('.pin-10-svg img').css({'pointer-events':'none'}),   //pin-10-svgをクリックできなくする
//     setTimeout(()=>{
//     $('.ball-10').animate({
//       margin: "-20rem",
//       marginTop: "-78rem",
//     },
//     {
//       duration:3000,
//       easing:"easeInBack"
//     })
//     .fadeOut(800)});
//   });
// });

// $(() => {
//   $('.ok-10-btn').on('click', ()=>{
//     setTimeout(()=>{
//       $.when(
//     $('.pin-10-svg img').animate({
//       marginLeft: '9rem',
//       margin: '10rem'
//     },
//     {
//       duration:1000,
//       easing:"linear"
//     }) 
//     .fadeOut(500).css({transform: 'rotate(0deg)'})
//       ).done(()=>{
//       location.reload(true);  //ページをリロードさせる
//   });
//     },2900);  //時間差をつける(.ok-10-btnをclickした時にの待機時間)
//   })
// });
 
// // この下9ピン

// $(()=>{
//   $('.pin-9').on('click',()=>{ //クリックで.pin-9を隠す
//     $('.pin-9').hide();
//   });
// });

// $(()=>{
//   $('.pin-9').on('click',()=>{
//     $('.pin-9-svg img , .ok-9-btn , .ball-9').show();
//   });
// });

// $(()=>{
//   $('.pin-9-svg img').on('click',()=>{ //クリックで.pin-10を表示
//     $('.pin-9').show();
//   });
// });

// $(()=>{
//   $('.pin-9-svg img').on('click',()=>{
//     $('.pin-9-svg img, .ok-9-btn , .ball-9').hide();
//   });
// });

//-----------------------------------------------------------------------------------------------------------
$(document).on('turbolinks:load', ()=>{

//   $(function(){
//     if ($('.pin-1, .pin-2,.pin-3, .pin-4,.pin-5,.pin-6,.pin-7,.pin-8,.pin-9,.pin-10').length){
//       $('.btn-ok').on('click',()=>{
//         if(!confirm('残っているピンをクリックして下さい')){
//           /* キャンセルの時の処理 */
//           location.href = '/bowlings/lane';
//       }else{
//           /*　OKの時の処理 */
//           return false;
//       }
//   });
//     }
// });



var pin_a    ='.pin-10';
var ball     = '.ball-10';
var svg      = '.pin-10-svg img';
var svg_ball = '.pin-10-svg img , .ball-10';
var btn      = '.btn-ok';
var pin_all  = '.pin-1, .pin-2, .pin-3, .pin-4, .pin-5, .pin-6,.pin-7, .pin-8, .pin-9, .pin-10';

$(()=>{
  $('.lane-container').hide();// ページ読み込み時に実行したい処理
  $(btn).css({'pointer-events':'none'});//btn押せなくする
  
  });

$(()=>{
    $('.btn-ok-a').hover(()=> {
      $('.btn-ok-a').text('OK !');
    },()=>{
      $('.btn-ok-a').text('OK ?');
  });
});

$(()=>{
  $(pin_a).on('click',()=>{ //クリックでpinを隠す
    $(pin_a).hide();
    $( svg_ball).show();
    $(pin_all).css({'pointer-events':'none'});
    $(btn).css({'pointer-events':'auto'});
    // $('.spat_center').css({'border-bottom': '1.5rem solid red'});
    $('.message-dot-10').css({'opacity':'1'});
  });
});

$(()=>{
  $(svg).on('click',()=>{ //クリックでpinを表示
    $(pin_a).show();
    $(svg_ball).hide();
    $(pin_all).css({'pointer-events':'auto'});
    $(btn).css({'pointer-events':'none'});
  });
});

$(()=>{
  if($(svg).length){  /*.pin-10-svg imgが存在していた場合の処理内容を記述*/
    $(btn).on('click',()=>{
      $('.lane-container').css({'transform' : 'translateY(-200%)'});
      
      

  //  setTimeout(()=>{
  //     $('.lane-container').css({'zoom' : '101%'});
  //    },3000)

      $('.container-shadow').css({ 
        'box-shadow': '0 0.8rem 2rem 0 rgba(0,0,0,0.24), 0 0.8rem 2rem 0 rgba(0,0,0,0.12), 0 0.8rem 0.6rem -0.2rem rgba(0,0,0,0.2)'});
      
      $('fas fa-angle-left icon').hide();
      $('.top_s').css({'background-color': '#4169E1'});
      $(btn).hide();
      $('.top').hide();
      $('.top_a').show();
      
      $(pin_all).hide();
      $(svg).css({'pointer-events':'none'});
        });
  } else if($(svg).css('display') != 'none'){
      /*id、sampleのCSSが"display:none"以外の場合の処理内容を記述*/
  } else {
      /*上記条件にあわなかった時の処理内容を記述*/
  }
});

$(() => {
  $(ball).on('click', () => {     //functionの記述を省略 () =>
     
    setTimeout(()=>{
    $(ball).animate({
      margin: "-20rem",
      marginTop: "-55.5rem",
    },
    {
      duration:3000,
      easing:"easeInBack"
    })
    .fadeOut(800)});
  });
});

$(() => {
  $(ball).on('click', ()=>{
    $('.message-dot-10').css({'opacity':'0'});
    setTimeout(()=>{
      $.when(
      $(svg).animate({
      marginLeft: '9rem',
      margin: '10rem'
    },
    {
      duration:1000,
      easing:"linear"
    }) 
    .fadeOut(500).css({transform: 'rotate(0deg)'})
      ).done(()=>{
      location.reload(true);  //ページをリロードさせる
  });
    },2820);  //時間差をつける(.ok-10-btnをclickした時にの待機時間)
  })
});

$(()=>{
  $(ball).hover(()=> {
    $('.message-dot-10').hide();
  },()=>{
    $('.message-dot-10').show();
});
});









// $(()=>{
//   if($('.pin-9-svg , .pin-10-svg ').length){  /*.pin-10-svg imgが存在していた場合の処理内容を記述*/
//     $('.btn-ok').on('click',()=>{
//       $('.lane-container').show();
//       $('.ball-3').show();
//       $('.ball-9, .ball-10').hide();
//       $('.btn-ok').hide();
//       $('.top').hide();
//       $('.pin-1, .pin-2,.pin-3, .pin-4,.pin-5,.pin-6,.pin-7,.pin-8,.pin-9,.pin-10').hide();

//         });
//   } else if($('.pin-9-svg img,.pin-10-svg').css('display') != 'none'){
//       /*id、sampleのCSSが"display:none"以外の場合の処理内容を記述*/
//   } else {
//       /*上記条件にあわなかった時の処理内容を記述*/
//   }
// });














});