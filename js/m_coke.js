if ((matchMedia("screen and (max-width: 800px)").matches)) {
    var numIndex = 8;
        var k = null;

        function banner(){
            
		    setInterval(function(){
            numIndex++;
            if(numIndex==16){
                numIndex=9;
                $(".TxTBox ul li").eq(15).fadeOut();
                $(".bennerImg ul li img").eq(15).fadeOut();
            }	
            $(".TxTBox ul li").fadeOut();
            $(".TxTBox ul li").eq(numIndex).fadeIn();
            $(".bennerImg ul li img").fadeOut();
            $(".bennerImg ul li img").eq(numIndex).fadeIn();
    
            $(".a2btn .num1").text(k+1);	
            },3000);
        } 
        banner();



        $('.TVpagerVideo span').click(function(){
            var tvPagerIndex = $(this).index();

            $('.TVcover ul li').removeClass('tvON');
            $('.TVcover ul li').eq(tvPagerIndex).addClass("tvON");
            $('.TVpagerVideo span').removeClass('tvPagerON');
            $('.TVpagerVideo span').eq(tvPagerIndex).addClass("tvPagerON");
        })

        // function tvOn(){
        //     var tvPagerIndex = $(this).index();

        //     $('.TVcover ul li').eq(tvPagerIndex).show();
        //     $('.TVcover ul li').hide();
        //     $('.TVpagerVideo span').removeClass('tvPagerON');
        //     $('.TVpagerVideo span').eq(tvPagerIndex).addClass("tvPagerON");
        // }

}