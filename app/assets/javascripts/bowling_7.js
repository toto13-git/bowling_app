$(document).on('turbolinks:load', ()=>{


  var pin_a    ='.pin-7';
  var ball     = '.ball-7';
  var svg      = '.pin-7-svg img';
  var svg_ball = '.pin-7-svg img , .ball-7';
  var btn      = '.btn-ok';
  var pin_all  = '.pin-1, .pin-2, .pin-3, .pin-4, .pin-5, .pin-6,.pin-7, .pin-8, .pin-9, .pin-10';
  
  $(()=>{
    $(pin_a).on('click',()=>{ //クリックでpinを隠す
      $(pin_a).hide();
      $( svg_ball).show();
      $(pin_all).css({'pointer-events':'none'});
      $(btn).css({'pointer-events':'auto'});
      $('.message-dot-7').css({'opacity':'1'});
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
    if($(svg).length){  /*svgが存在していた場合の処理内容を記述*/
      $(btn).on('click',()=>{
        $('.lane-container').show();
        
        $(btn).hide();
        $('.top').hide();
        $(pin_all).hide();
        $(svg).css({'pointer-events':'none'})
          });
    } else if($(svg).css('display') != 'none'){
        /*id、sampleのCSSが"display:none"以外の場合の処理内容を記述*/
    } else {
        /*上記条件にあわなかった時の処理内容を記述*/
    }
  });
  
  $(() => {
    $(ball).on('click', () => {     //functionの記述を省略 () =>
      $(svg).css({'pointer-events':'none'}),   //クリックできなくする
      setTimeout(()=>{
      $(ball).animate({
        margin: "20rem",
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
      $('.message-dot-7').css({'opacity':'0'});
      setTimeout(()=>{
        $.when(
      $(svg).animate({
        marginLeft: '-9rem',
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
      },2820);  //時間差をつける(btnをclickした時にの待機時間)
    })
  });

  $(()=>{
    $(ball).hover(()=> {
      $('.message-dot-7').hide();
    },()=>{
      $('.message-dot-7').show();
  });
  });

});