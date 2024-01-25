$(function(){
	let tabCheck=false;
	let searchCheck=false;
	let winw=0;
	let video=document.getElementById("mainVideo");
	mainVideo.muted=true;

	video.addEventListener("loadeddata", function(){
		mainVideo.play();

	});

	video.addEventListener("ended", function(){
		video.currentTime=0;
		mainVideo.play();
	});

	let subVideo=document.getElementById("bg_vd");
	subVideo.muted=true;

	subVideo.addEventListener("loadeddata", function(){
		subVideo.play();
	});

	subVideo.addEventListener("ended", function(){
		subVideo.currentTime=0;
		subVideo.play();
	});

	$("#gnb > ul > li").mouseenter(function(){
		$(this).addClass("active");
		$(".gnb_bg").show();
		$("#gnb").addClass("active");
	});

	$("#gnb > ul > li").mouseleave(function(){
		$(this).removeClass("active");
		$(".gnb_bg").hide();
		$("#gnb").removeClass("active");
	});

	$("#gnb > ul > li > a").focusin(function(){
		$("#gnb").addClass("active");
		$(this).parent().addClass("active");
		$(".gnb_bg").show();
	});

	$("#gnb li li:last-child").focusout(function(){
		$(this).parent().parent().removeClass("active");

		if($(this).parent().parent().index() === totalLi-1){
			$("#gnb").removeClass("active");
			$(".gnb_bg").hide();
		}
	});

	$("#mobile > ul > li").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active") === true){
			$(this).removeClass("active");
			$(this).find("ul").slideUp(300);
		}
		else{
			$("#mobile > ul > li").removeClass("active");
			$(this).addClass("active");
			$("#mobile ul ul").slideUp(300);
			$(this).find("ul").slideDown(300);
		}
	});

	$("header .tab").click(function(){
		if(searchCheck){
			$("header .search_area").removeClass("active");
			$(this).removeClass("active");
			searchCheck=false;
		}

		if(!tabCheck){
			$(this).addClass("active");
			$("#mobile").show();
			$("body").addClass("fixed");
			tabCheck=true;
		}
		else{
			$(this).removeClass("active");
			$("#mobile").hide();
			$("body").removeClass("fixed");
			tabCheck=false;
		}
	});

	$("header .search").click(function(e){
		e.preventDefault();

		if(tabCheck === true){
			$("header .tab").removeClass("active");
			$("#mobile").hide();
			$("body").removeClass("fixed");
			tabCheck=false;
		}

		if($("header .search_area").hasClass("active") === false){
			$("header .search_area").addClass("active");
			$(this).addClass("active");
			searchCheck=true;
		}
		else{
			$("header .search_area").removeClass("active");
			$(this).removeClass("active");
			searchCheck=false;
		}
	});

	$(window).resize(function(){
		winw=$(window).width();

		if(winw > 1340 && tabCheck){ // && = and ==> 데스크탑 사이즈인데 탭 메뉴가 열려있을 떄,
			$("header .tab").removeClass("active");
			$("#mobile").hide();
			$("body").removeClass("fixed");
			tabCheck=false;
		}
	});

	let subSwiper = new Swiper(".subSwiper", {
		loop: true,
		slidesPerView: 1.3,
		spaceBetween: 20,
		breakpoints: {
			1130: {
			slidesPerView: 3,
			spaceBetween: 70,
			grid: {
				rows: 1,
				},
			},
			750: {
				slidesPerView: 2,
				spaceBetween: 70,
				grid: {
					rows: 2,
					fill: "row",
					},
			},
		},
	});

	$(".slider .prev").click(function(e){
		e.preventDefault();
		subSwiper.slidePrev();
	});

	$(".slider .next").click(function(e){
		e.preventDefault();
		subSwiper.slideNext();
	});

	$(".slider .exhibit a").click(function(e){
		e.preventDefault();
		$(".slider .exhibit ul li").removeClass("active");
		$(this).parent().addClass("active");
	});

	$("footer .familly").click(function(e){
		e.preventDefault();

		$(this).toggleClass("active");
		$("footer .familly ul").toggle();
	});

	$("footer .agree_area").click(function(e){
		e.preventDefault();
		console.log("checked");

		if($("footer .check").hasClass("on")){
			$("footer .check").removeClass("on");
			$("input[name='hidden_agree']").prop({checked: false});
		}
		else{
			$("footer .check").addClass("on");
			$("input[name='hidden_agree']").prop({checked: true});
		}
	});
});