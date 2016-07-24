$(function(){
	var list=$(".list");
	var lis=$(".list li");
	var box=$(".nav-box");
	var max=$(".max-nav");
	var min=$('.min-nav')
	var btn=$('.btn')
	var imgs=$('.box img')

	// alert(cw);
$(window).resize(function(){
		var cw=document.documentElement.clientWidth;
	var ch=document.documentElement.clientHeight;
	// alert(cw);
	if (cw>768) {

		min.css("display","none");
		max.css("display","block");
		list.css("height","0");
		lis.css({"opacity":0});
		box.css("opacity",0.8);
		btn.removeAttr("id");
		$(imgs[0]).attr("src","./images/ban-2.jpg");
		$(imgs[1]).attr("src","./images/ban-3.jpg");
		$(imgs[2]).attr("src","./images/ban-1.jpg");
		$(imgs[3]).attr("src","./images/ban-4.jpg");
	}else if(cw<=768){
		min.css("display","block");
		max.css("display","none");
		// console.log(imgs[0].src);
		$(imgs[0]).attr("src","./images/1.jpg");
		$(imgs[1]).attr("src","./images/2.jpg");
		$(imgs[2]).attr("src","./images/3.jpg");
		$(imgs[3]).attr("src","./images/4.jpg");
		console.log(imgs[0].src);
		// alert(ch);
	};

});
		btn.click(function(){
		// alert(1)
		var ch=document.documentElement.clientHeight;
		var id=btn.attr("id");
		if (id=="active") {
			btn.removeAttr("id");
			box.css("opacity",0.8);
			list.css("height","0");
			lis.css({"opacity":0});
		}else{
			btn.attr("id","active");
			box.css("opacity",1);
			list.css({"height":(ch-44)});
			lis.css({"opacity":1});
		};
	})

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
    $('h3 span').click(function(){
	if ($(this).parent().next().attr("id")=="active4") {
		$(this).parent().next().attr("id","");
		$(this).attr("id","");
	}else{
		$(this).parent().next().attr("id","active4");
		$(this).parent().next().children().css({'height':'30px','line-height':"30px"});
		$(this).attr("id","active5");
	};
    

    })
    //轮播
           $out=$(".banner");
          $as=$(".banner .box");
          $lis=$(".btns li");
          var ow=$(".banner").width();
          var index=0;
          var next=0;
          var flag=true;

          // $btnL=$(".btn .zuo");
          // $btnR=$(".btn .you");

          //初始状态
          $as.css('left',ow).eq(0).css("left",0);
          $lis.eq(0).css("background","red");

          var t=setInterval(move,5000);
          function move(){
            next++;
            if (next>=$as.length) {
                  next=0;
            };
            $as.eq(next).css('left',ow);
            $as.eq(index).animate({left:-ow});
            $as.eq(next).animate({left:0},function(){
              flag=true;
            });
            $lis.eq(index).css("background","#ccc");
            $lis.eq(next).css("background","red");
            index=next;
          }
           function moveL(){
            next--;
            if (next<0) {
                  next=$as.length-1;
            };
            $as.eq(next).css('left',-ow);
            $as.eq(index).animate({left:ow});
            $as.eq(next).animate({left:0},function(){
                flag=true;
            });
            $lis.eq(index).css("background","#ccc");
            $lis.eq(next).css("background","red");
            index=next;
          }

          $out.hover(function(){
             clearInterval(t);
          },function(){
               t=setInterval(move,5000);  
          });

          $lis.click(function(){
            var m=$(this).index();
            if (m==index) {return};
            $as.stop(true,true)
            $as.eq(m).css('left',-ow);
            $as.eq(index).animate({left:ow});
            $as.eq(m).animate({left:0},function(){
              flag=true;
            });
            $lis.eq(index).css("background","#ccc");
            $lis.eq(m).css("background","red");
            next=m;
            index=m;
          });
           // $btnL.click(function(){
           //  if (!flag) {return};
           //       moveL();
           //       flag=false;
           // })
           // $btnR.click(function(){
           //  if (!flag) {return};
           //       move();
           //     flag=false;
           // })
})