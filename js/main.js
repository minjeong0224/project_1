document.addEventListener("DOMContentLoaded", function() {
	let tabCheck = false;
	let searchCheck = false;
	let winw = 0;
	let video = document.getElementById("mainVideo");
	video.muted = true;

	video.addEventListener("loadeddata", function() {
		video.play();
	});

	video.addEventListener("ended", function() {
		video.currentTime = 0;
		video.play();
	});

	let subVideo = document.getElementById("bg_vd");
	subVideo.muted = true;

	subVideo.addEventListener("loadeddata", function() {
		subVideo.play();
	});

	subVideo.addEventListener("ended", function() {
		subVideo.currentTime = 0;
		subVideo.play();
	});

	let gnbItems = document.querySelectorAll("#gnb > ul > li");
	let totalLi = gnbItems.length;

	gnbItems.forEach(function(item) {
		item.addEventListener("mouseenter", function() {
		this.classList.add("active");
		document.querySelector(".gnb_bg").style.display = "block";
		document.querySelector("#gnb").classList.add("active");
		});

		item.addEventListener("mouseleave", function() {
		this.classList.remove("active");
		document.querySelector(".gnb_bg").style.display = "none";
		document.querySelector("#gnb").classList.remove("active");
		});
	});

	let gnbLinks = document.querySelectorAll("#gnb > ul > li > a");

	gnbLinks.forEach(function(link) {
		link.addEventListener("focusin", function() {
		document.querySelector("#gnb").classList.add("active");
		this.parentNode.classList.add("active");
		document.querySelector(".gnb_bg").style.display = "block";
		});
	});

	let lastChild = document.querySelector("#gnb li li:last-child");

	lastChild.addEventListener("focusout", function() {
		this.parentNode.parentNode.classList.remove("active");

		if (this.parentNode.parentNode.index === totalLi - 1) {
		document.querySelector("#gnb").classList.remove("active");
		document.querySelector(".gnb_bg").style.display = "none";
		}
	});

	let mobileItems = document.querySelectorAll("#mobile > ul > li");

	mobileItems.forEach(function(item) {
		item.addEventListener("click", function(e) {
		e.preventDefault();

		if (this.classList.contains("active")) {
			this.classList.remove("active");
			this.querySelector("ul").style.display = "none";
		} else {
			document.querySelectorAll("#mobile > ul > li").forEach(function(el) {
			el.classList.remove("active");
			el.querySelector("ul").style.display = "none";
			});

			this.classList.add("active");
			this.querySelector("ul").style.display = "block";
		}
		});
	});

	let headerTab = document.querySelector("header .tab");

	headerTab.addEventListener("click", function() {
		if (searchCheck) {
		document.querySelector("header .search_area").classList.remove("active");
		this.classList.remove("active");
		searchCheck = false;
		}

		if (!tabCheck) {
		this.classList.add("active");
		document.querySelector("#mobile").style.display = "block";
		document.body.classList.add("fixed");
		tabCheck = true;
		} else {
		this.classList.remove("active");
		document.querySelector("#mobile").style.display = "none";
		document.body.classList.remove("fixed");
		tabCheck = false;
		}
	});

	let headerSearch = document.querySelector("header .search");

	headerSearch.addEventListener("click", function(e) {
		e.preventDefault();

		if (tabCheck === true) {
		document.querySelector("header .tab").classList.remove("active");
		document.querySelector("#mobile").style.display = "none";
		document.body.classList.remove("fixed");
		tabCheck = false;
		}

		let searchArea = document.querySelector("header .search_area");

		if (!searchArea.classList.contains("active")) {
		searchArea.classList.add("active");
		this.classList.add("active");
		searchCheck = true;
		} else {
		searchArea.classList.remove("active");
		this.classList.remove("active");
		searchCheck = false;
		}
	});

	window.addEventListener("resize", function() {
		winw = window.innerWidth;

		if (winw > 1340 && tabCheck) {
		document.querySelector("header .tab").classList.remove("active");
		document.querySelector("#mobile").style.display = "none";
		document.body.classList.remove("fixed");
		tabCheck = false;
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

	let prevBtn = document.querySelector(".slider .prev");
	let nextBtn = document.querySelector(".slider .next");

	prevBtn.addEventListener("click", function(e) {
		e.preventDefault();
		subSwiper.slidePrev();
	});

	nextBtn.addEventListener("click", function(e) {
		e.preventDefault();
		subSwiper.slideNext();
	});

	let exhibitLinks = document.querySelectorAll(".slider .exhibit a");

	exhibitLinks.forEach(function(link) {
		link.addEventListener("click", function(e) {
		e.preventDefault();
		document.querySelectorAll(".slider .exhibit ul li").forEach(function(li) {
			li.classList.remove("active");
		});
		this.parentNode.classList.add("active");
		});
	});

	let famillyLink = document.querySelector("footer .familly");
	let famillyList = document.querySelector("footer .familly ul");

	famillyLink.addEventListener("click", function(e) {
		e.preventDefault();
		this.classList.toggle("active");
		famillyList.style.display = famillyList.style.display === "none" ? "block" : "none";
	});

	let agreeArea = document.querySelector("footer .agree_area");

	agreeArea.addEventListener("click", function(e) {
		e.preventDefault();

		let check = document.querySelector("footer .check");

		if (check.classList.contains("on")) {
		check.classList.remove("on");
		document.querySelector("input[name='hidden_agree']").checked = false;
		} else {
		check.classList.add("on");
		document.querySelector("input[name='hidden_agree']").checked = true;
		}
	});
});
