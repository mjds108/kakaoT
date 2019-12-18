       //배너 섹션 크기 조절

       $(function(){
        var current=$('.banner_img01')

        var current = $('.banner_img01');
        current.addClass('active');
        setInterval(function() {
            current.removeClass('active');
            if(current.hasClass('banner_img01'))
                current = $('.banner_img02');
            else if(current.hasClass('banner_img02'))
                current = $('.banner_img03');
            else if(current.hasClass('banner_img03'))
                current = $('.banner_img04');
            else if(current.hasClass('banner_img04'))
                current = $('.banner_img05');
            else if(current.hasClass('banner_img05'))
                current = $('.banner_img01');
            current.addClass('active');
        }, 7000);

        //베너 크기 조절 끝
        //모달창 열기
        $('.video01').on('click',function(){
            $('.modal01').fadeIn(300); 
            
        })
        $('.video02').on('click',function(){
            $('.modal02').fadeIn(300); 
        })

        // == 모달창 닫기 ==
         $('.close_btn').on('click',function(){
            $('.modal').fadeOut(0);
            $('#iframe01').attr('src', $('#iframe01').attr('src'));
            $('#iframe02').attr('src', $('#iframe02').attr('src'));
        })
        //모달창 닫기 유튜브 종료 끝

        //스와이퍼
        var swiper = new Swiper('.swiper-container', {
            effect: 'flip',
            grabCursor: true,
            loop:true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        });
       
        //네비게이터 정보확인
        var naviInfo=navigator.userAgent.toLowerCase();
        if(naviInfo.indexOf('window')>0){
            $('#google').show();
            $('#apple').show();
        }else if(naviInfo.indexOf('iphone')>0){
            $('#google').hide();
            $('#apple').show();
        }else{
            $('#google').show();
            $('#apple').hide();
        }
    })