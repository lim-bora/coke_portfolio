
var SlideBtnOn = true;
var index = 0;
		function ShowMenu(){
            if($('.slide_bg' ).css( 'display') == 'none'){
                $('.slide_bg' ).css( { 'display' : 'block' } );
                $('.slide' ).css( { 'right' : '-100%' } );
                $('.slide' ).animate( { right: '0px' } );
            }
		}
		function HideMenu(){
           if($('.slide_bg' ).css( 'display') == 'block' && $('.slide' ).css('right') > '-20%')
            $('.slide' ).animate( { right: '-100%' }, { duration: 700, complete:function(){ $('.slide_bg' ).css( { 'display' : 'none' } ); } } );
        }

        const instaGrid = document.querySelectorAll('.insta_box ul li img');

        function  instaOver(){
            for (let i = 0; i < instaGrid.length; i++) {
                instaGrid[i].onmouseover = function(){
                    instaGrid[i].style.transform = 'scale(1.1)';
                    instaGrid[i].style.transition = 'all 0.6s';
                }
                instaGrid[i].onmouseout = function(){
                    instaGrid[i].style.transform = 'scale(1.0)';
                    instaGrid[i].style.transition = 'all 0.6s';
                }
            }
        }instaOver();


        var modal = document.getElementById('instaModal');
        var instaClose = document.getElementsByClassName("instaClose")[0];

        $('.insta_box ul li img').click(function(){
            $(modal).css('display','block');
        })

        $('.instaClose').click(function(){
            $('.modal').css('display',"none");
        })

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        const NextBtn = document.querySelector('#instaSlideNext_Btn');
        const PrevBtn = document.querySelector('#instaSlidePlev_Btn');
        const wrapper = document.querySelector('.post-wrapper');
        var x = 0;

                $(NextBtn).click(function(){
                    if(SlideBtnOn == true)
                    {
                        SlideBtnOn = false;
                        x++;
                        $(wrapper).animate({'margin-left':(-33.333 * x)+'%'})
                        setTimeout(() => {
                            if(x == 13)
                            {
                                x = 1;
                                $(wrapper).css( {'margin-left':(-33.333 * x)+'%'} );
                            }
                            SlideBtnOn = true;
                        }, 600);
                    }
                });
                $(PrevBtn).click(function(){
                    if(SlideBtnOn == true)
                    {
                        SlideBtnOn = false;
                        x--;
                        $(wrapper).stop().animate({'margin-left':(-33.333 * x)+'%'})
                        setTimeout(() => {
                            if(x == 0)
                            {
                                x = 12;
                                $(wrapper).css( {'margin-left':(-33.333 * x)+'%'} );
                            }
                            SlideBtnOn = true;
                        }, 600);
                    }
                });
        
                const instaBoxImg = document.querySelectorAll('.insta_box ul li img');
                for (let i = 0; i < instaBoxImg.length; i++) {
                    $(instaBoxImg[i]).click(function(){
                        if( i == 0)
                        {
                            x = i + 1;
                            $(wrapper).css({ 'margin-left' : '-33.333' * (i + 1) +'%' });
                        }
                        else{
                            x = i + 1;
                                $(wrapper).stop().animate({
                                    'margin-left':(-33.333 * (i + 1))+'%'
                                })
                        }
                    })
                }    


        var numIndex = 0;
        var k = null;

        function banner(){
            
		    setInterval(function(){
            numIndex++;
            if(numIndex==8){
                numIndex=0;
                $(".TxTBox ul li").eq(7).fadeOut();
                $(".bennerImg ul li img").eq(7).fadeOut();
            }	
            // $(".TxTBox ul li").removeClass('txtBoxOn');  
			$(".TxTBox ul li").eq(numIndex).fadeIn();
            $(".TxTBox ul li").eq(numIndex-1).fadeOut();
            $(".bennerImg ul li img").eq(numIndex).fadeIn();
            $(".bennerImg ul li img").eq(numIndex-1).fadeOut();
            // document.querySelector(".bennerImg ul li img.bannerOn").style.display = "none";
    
            $(".PagerBox ul").stop().animate({
                "margin-left":-numIndex*25+"%"
            });
            k=numIndex;
            if(k+1==9){
                k=0;
            }
            $(".a2btn .num1").text(k+1);	
            },3000);
        } 
        banner();

        function bannerPager(){
            var PagerLi = document.querySelectorAll('.PagerBox ul li'); 

            for(let pg = 0; pg < PagerLi.length; pg++){
                $(PagerLi[pg]).click(function(){
                    $(".TxTBox ul li").eq(pg).fadeIn();
                    $(".TxTBox ul li").eq(pg-1).fadeOut();
                    $(".bennerImg ul li img").eq(pg).fadeIn();
                    $(".bennerImg ul li img").eq(pg-1).fadeOut();
            
                    $(".PagerBox ul").animate({
                        "left":-pg*25+"%"
                    });
                })
            }
        }
        bannerPager();

        $(".a2Prev").click(function(){		
            
            if(numIndex==0){
                numIndex=8;
            }
            numIndex--;
            $(".TxTBox ul li").fadeOut();
            $(".bennerImg ul li img").fadeOut();
            $(".TxTBox ul li").eq(numIndex).fadeIn();
            $(".TxTBox ul li").eq(numIndex-7).fadeOut();
            $(".bennerImg ul li img").eq(numIndex).fadeIn();
            $(".bennerImg ul li img").eq(numIndex-7).fadeOut();
            
            $(".PagerBox ul").stop().animate({
                "margin-left":-numIndex*25+"%"
            });
            k=numIndex;
            if(k==9){
                k= 8;
            }
            $(".a2btn .num1").text(k+1);		
        });
        
        $(".a2Next").click(function(){
            numIndex++;
            $(".TxTBox ul li").fadeOut();
            if(numIndex==8){
                numIndex=0;
                $(".TxTBox ul li").eq(7).fadeOut();
                $(".bennerImg ul li img").eq(7).fadeOut();
            }	
    
            $(".TxTBox ul li").eq(numIndex).fadeIn();
            $(".TxTBox ul li").eq(numIndex-1).fadeOut();
            $(".bennerImg ul li img").eq(numIndex).fadeIn();
            $(".bennerImg ul li img").eq(numIndex-1).fadeOut();

    
            $(".PagerBox ul").stop().animate({
                "margin-left":-numIndex*25+"%"
            });
            k=numIndex;
            if(k+1==9){
                k=0;
            }
            $(".a2btn .num1").text(k+1);	
        });




        $(function(){
            
            $('.TVpagerVideo ul li').click(function(){
                var tvIndex = $(this).index();

                $('.TVcover ul li').removeClass('tvON');
                $('.TVcover ul li').eq(tvIndex).addClass("tvON");
                $('.TVpagerVideo ul li').css('opacity',0.5);
                $('.TVpagerVideo ul li').eq(tvIndex).css('opacity',1);

            })

        });

        $('.mb ul li img').click(function(){
            $(modal).css('display','none');
        })

    $(function(){
        $(".type01").typed({
            strings:["#코카콜라"],
            typeSpeed:60,
            startDelay:1300,
            backSpeed:40,
            backDelay:600,
            fadeOut: false,
            loop:true,
            showCursor:true,
            cursorChar:"",
        })
        $(".type02").typed({
            strings:["#이맛이느낌"],
            typeSpeed:60,
            startDelay:1300,
            backSpeed:50,
            backDelay:500,
            loop:true,
            showCursor:true,
            cursorChar:"",
        })
        $(".type03").typed({
            strings:["#너답게짜릿하게"],
            typeSpeed:50,
            startDelay:1300,
            backSpeed:50,
            backDelay:500,
            loop:true,
            showCursor:true,
            cursorChar:"",
        })
    })