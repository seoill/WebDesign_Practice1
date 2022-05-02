(function($){

//메뉴 이벤트
  
  $('.main-btn').on({
    mouseenter:function(){
      $('.main-btn').removeClass('on');
      $(this).addClass('on');
      $('.main-btn').next().stop().slideUp(0);
      $(this).next().stop().slideDown(300);
    },
    focusin:function(){
      $('.main-btn').removeClass('on');
      $(this).addClass('on');
      $('.main-btn').next().stop().slideUp(0);
      $(this).next().stop().slideDown(300);
    }
  });

  $('#nav').on({
    mouseleave:function(){
      $('.main-btn').next().stop().slideUp(500);
      $('.main-btn').removeClass('on');
    }
  });

//메인 슬라이드 

  let cnt=0;

  // 1. 메인슬라이드 함수
  function mainSlide(){
    $('.slide').css({zIndex:1}).animate({opacity:1},0) //초기화 
    $('.slide').eq(cnt).css({zIndex:2}).animate({opacity:1},0) // 두번째 장 ( 보이는 이미지 뒷면)
    $('.slide').eq(cnt==0?2:cnt-1).css({zIndex:3}).animate({opacity:1},0).animate({opacity:0},2000); //사라지는 이미지
  }

  // 2. 다음카운트함수
  function nextCount(){
    cnt++;
    cnt>2?cnt=0:cnt;
    mainSlide();
  }

  // 3. 자동 타이머 함수
  function autoTimer(){
    setInterval(nextCount,3000);
  }

  autoTimer();





  // 섹션 2 좌측

  const sec2Btn = $('.sec2-btn');
  const sec2Box = $('.sec2-box');

  $('.notice-btn').on({
    click:function(){
      $(sec2Btn).removeClass('on');
      $('.notice-btn').addClass('on');
      $('.notice-box').removeClass('on');
      $('.gallery-box').removeClass('on');
    },
    focusin:function(){
      $(sec2Btn).removeClass('on');
      $('.notice-btn').addClass('on');
      $('.notice-box').removeClass('on');
      $('.gallery-box').removeClass('on');
    }
  });

  $('.gallery-btn').on({
    click:function(){
      $(sec2Btn).removeClass('on');
      $('.gallery-btn').addClass('on');
      $('.notice-box').addClass('on');
      $('.gallery-box').addClass('on');
    },
    focusin:function(){
      $(sec2Btn).removeClass('on');
    $('.gallery-btn').addClass('on');
    $('.notice-box').addClass('on');
    $('.gallery-box').addClass('on');
    }
  });
  
  //popup
  $('#popup').hide();
  $('.link-btn').on({
    click:function(){
      $('#popup').stop().fadeIn(300);
    }
  });

  $('.close-btn').on({
    click:function(){
      $('#popup').stop().fadeOut(100);
    }
  });
  
})(jQuery);


