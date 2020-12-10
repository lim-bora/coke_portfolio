$(function(){
		
		
		
		var scrolling = false;
		var i = 0;

        var moveTop = null;   
			
			$("#wrap section").on("mousewheel DOMMouseScroll", function (e) {
				e.preventDefault();
				
				if(scrolling) return;
				
				var delta = 0;
				
				if (!event) event = window.event;
				
				if (event.wheelDelta) {
					
					delta = event.wheelDelta / 120;
					
					if (window.opera) delta = -delta;
					
				} else if (event.detail) delta = -event.detail / 3;
				
				
				if (delta < 0) {
					if ($(this).next() != undefined  && scrolling ==false) {
						var i = $(this).index();

						moveTop = $(this).next("section").index();
					//	if(moveTop > 4 || moveTop == -1) {moveTop = 4;	return;}
						
						if(i==3){
							$(this).animate({
								"top":"0px"/*150*/ 
							},600);
						}
						else{
							$(this).css("top","0").stop().animate({
								"top":"-100%"
							},400);
							$("#wrap section").eq(moveTop).css("top","100%").stop().animate({
								"top":"0"
							},400);
						}

						if(i == 0)
						{
							$('.TxTBox').css("bottom","-100%");
							$('.Banner').css("top","-130%");

							$('.TxTBox').stop().animate({
								'bottom':"50%"
							},1000).css("bottom","14%");

							$('.Banner').stop().animate({
								'top':"0%"
							},1000).css("top","12%");

						}

						$("header ul li").removeClass("on").eq(moveTop).addClass("on");
					}
				} else {
					if ($(this).prev() != undefined && scrolling ==false) {
						
						moveTop = $(this).prev("section").index();
						
						if(moveTop <  0) { moveTop = 0; return;}
						  
						if($(this).css("top")=="-355px"){
							$(this).animate({
								"top":"0"
							},600);
							$("header ul li").removeClass("on").eq(3).addClass("on");/*4*/
							moveTop=3;/*4*/
						}else{
							$(this).css("top","0").stop().animate({
								"top":"100%"
							},400);
							$("#wrap section").eq(moveTop).css("top","-100%").stop().animate({
								"top":"0"
							},400);  
							$("header ul li").removeClass("on").eq(moveTop).addClass("on");
						}
						if(i == 1)
						{
							$('.slide').css('backgroundColor','#eee');
						}
						else{
							$('.slide').css('backgroundColor','#252525');
						}
					}
				}
				
				scrolling = true;
				
				
				
				
				setTimeout(function() {
					scrolling = false;
				}, 1000);	
				
		});
		
		
	
		
		 $("header ul li").click(function(){
			var i = $(this).index();
			var t = $("section").eq(moveTop);
			var off = $("section").eq(i);
			
			var scr = $("header ul .scrollLine").height();
			
			if(i == moveTop) return;
			
			if(i>moveTop){
				
				t.css("top","0").stop().animate({
					"top":"-100%"
				},400);
				off.css("top","100%").stop().animate({
					"top":"0"
				},400);
								
			}else if(i < moveTop){
				
				t.css("top","0").stop().animate({
					"top":"100%"
				},400);
				off.css("top","-100%").stop().animate({
					"top":"0"
				},400);
				
			}
			$("header ul li").removeClass("on");
			$("header ul li").eq(i).addClass("on");
			
			moveTop = i;
			return false;
		});
			
	});

	

	
	
	
	
	
	
	
	