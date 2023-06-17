/*	###################################################################################	*/
/*	###################################################################################	*/
/*										 												*/
/*			COPYRIGHT (c) pranx.com 												*/
/*			Do not copy this code or other parts of this website						*/
/*										 												*/
/*	###################################################################################	*/
/*	###################################################################################	*/
var loc = window.location.href+'';
if (loc.indexOf('http://')==0){
	window.location.href = loc.replace('http://','https://');	// https redirect
}
function fullScreenIframebenOpen(url) {
	document.getElementById("redirectIframe").style.display = "block";
	document.getElementById("redirectIframe").innerHTML = '<iframe id="fullScreenIframe" style="width: 100%; height: 100%; overflow: hidden;" src="' + url + '" width="100" height="100" scrolling="no">Iframes not supported</iframe>';
	document.getElementById("fullScreenIframe").contentWindow.focus()
}
$(document).ready(function () {
    $("#button").click(function(event) {
        $("#box").show();
    });
    $("#main_icons a").click(function(event) {
		$("#main_icons a").removeClass('szel');
		$(this).addClass('szel');
    });
    $("#taskbar, .bg").click(function(event) {
		$("#main_icons a").removeClass('szel');
    });	
    $("#welcomeBubleWrap").click(function(event) {
		$(this).hide();
		$("#welcomeWindow .close").trigger( "click" );
    });	
    $("#welcomeWindow .close").click(function(event) {
		var elem = document.body;	//going full screen
		requestFullScreen(elem);
    });		
    $(".right h3").click(function(event) {
		var elem = document.body;
		requestFullScreen(elem);
    });	
    $("#close").click(function(event) {
		fullScreenIframebenOpen("https://pranx.com/boot-device-not-found/");
    });	
	$('#webAddressInput').keypress(function(e) {
		if(e.which == 13) {
			goToWebAddress($('#webAddressInput').val(), 1);
		}
	});
	$(".wrapAddressInput").click(function(event) {
        $("#webAddressInput").select();
    });
	$("#goToWebAddress").click(function(event) {
        goToWebAddress($('#webAddressInput').val(), 1);
    });
    $("li.max a").click(function(event) {
		$("#main_icons a").removeClass('szel');
        $(this).parent().parent().parent().toggleClass('fullScreen');
		adjustIeIframeHeight();
    });
	
    $("li.close a").click(function(event) {
		$("#main_icons a").removeClass('szel');
        $(this).parent().parent().parent().addClass('closedWind');
        var seg = $(this).parent().parent().parent().attr('title');
		seg = "#open" + seg;
		$(seg).removeClass('openTab');
		$(seg).addClass('closedTab');
    });
    $("#winampWindow li.close a").click(function(event) {
		$("#winampWindow #Stop").trigger( "click" );
    });
	$("li.min a").click(function(event) {
		$("#main_icons a").removeClass('szel');
        $(this).parent().parent().parent().toggleClass('minimized');
        var seg = $(this).parent().parent().parent().attr('title');
		seg = "#open" + seg;
		$(seg).toggleClass('openTab');
    });
	$("#openprograms li").click(function(event) {
		var seg = $(this).attr('title');
		seg = '#' + seg + 'Window';
		$(this).toggleClass('openTab');
		if ($(seg).hasClass('minimized')) {
			$(seg).removeClass('minimized');
		} else {
			$(seg).addClass('minimized');
		}
		
		$(".window").each(function() {
			$(this).css('z-index', ($(this).css('z-index')-1));
		});
		$(seg).css('z-index', (2000));
    });
	$(".window").mousedown(function(event) {
		$("#main_icons a").removeClass('szel');
		$(".window").each(function() {
			$(this).css('z-index', ($(this).css('z-index')-1));		//ha egy ablakot mozgatnak akkor azt rakja felul
		});
		$(this).css('z-index', (2000));
    });	
	
	
	/*Winamp*/
    $("#winampWindow #Pause").click(function(event) {
        $("#winampWindow").removeClass('playing');
		audio.pause();
    });
    $("#winampWindow #Previous").click(function(event) {
		if (nth > 1) {
			$("#winampPlaylist li:nth-child(" + (nth-1) + ")").trigger( "click" );
		}
	});
    $("#winampWindow #Next").click(function(event) {
		$("#winampPlaylist li:nth-child(" + (nth+1) + ")").trigger( "click" );
	});
	
    $("#winampWindow #Play").click(function(event) {
		if ($("#winampWindow").hasClass('neverStarted')) {
			$("#winampPlaylist li.selected").trigger( "click" );
			//console.log('trigger');
		} else {
			//console.log('notrigger');
			$("#winampWindow").addClass('playing');
			audio.play();
			updateTrail();
		}
    });
    $("#winampWindow #Stop").click(function(event) {
		$('#winampTrack').css( "left", 0 );
        $("#winampWindow").removeClass('playing');
		audio.pause();
		audio.currentTime = 0;
		$('#winampVisualition').html("0:00");
    });
    $('#winampTrackWrap').mousedown(function(e) {
        var posX = $(this).offset().left, posY = $(this).offset().top;
		posX = (e.pageX - posX);
		audio.currentTime = Math.round(0.00408 * posX * songLength);
		updateUI();
    });
    $("#winampPlaylist li").click(function(event) {
		audio.pause();	audio.currentTime = 0;		//zenet leallit
		
		$("#winampWindow").addClass('playing');
        $("#winampPlaylist li").removeClass('selected');
		$(this).addClass('selected');
		$("#winampSongTitle").html($(this).html());
		
		playSound($(this).attr( "title" ));
		updateSongLength($(this).find('span').html());
		nth = $(this).index() + 1;
		updateTrail();
    });
    $(".gugliButts").click(function(event) {
		googliSearch($('#gSearchInput').val());
    });
	$('#gSearchInput').keypress(function(e) {
		if(e.which == 13) {
			googliSearch($('#gSearchInput').val());
		}
	});
    $("#ieBack").click(function(event) {	//IE Back
		siteindex--;
		goToWebAddress(sites[siteindex], 0);
    });	
    $("#ieForward").click(function(event) {	//IE Forward
		siteindex++;
		goToWebAddress(sites[siteindex], 0);
    });		
    $("#ieHome, #ieSearch").click(function(event) {
		goToWebAddress('google.com', 1);
    });		
    $(".blueScreen").mousedown(function(event) {		//.blueScreen
		blueScreen();
    });
    $("#ie_icon").dblclick(function(event) {
		openWindow('internet');
    });
    $("#internetbrowser, #quick_ie").click(function(event) {
		openWindow('internet');
    });
    $("#startMS").click(function(event) {
		openWindow('minesweeper');
    });
    $("#startTetris").click(function(event) {
		openWindow('tetris');
    });
    $("#startWinamp, #quick_winamp, #winamp").click(function(event) {
		openWindow('winamp');
    });
    $("#quick_cmd, #startCP, #runCmdOk").click(function(event) {
		fullScreenIframebenOpen("https://pranx.com/fake-dos/");
    });
    $("#startNC").click(function(event) {
		fullScreenIframebenOpen("https://pranx.com/norton-commander/");
    });
    $("#lan").click(function(event) {
		openWindow('welcome');
    });
    $("#quick_desktop").click(function(event) {
		$('.window').addClass('minimized');
		$('#openprograms li').removeClass('openTab');
    });
	$('#run_open').keypress(function(e) {
		if(e.which == 13) {
			fullScreenIframebenOpen("https://pranx.com/fake-dos/");
		}
	});	
	
	/*
	goToWebAddress('google.com', 0);
	*/
	goToWebAddress('google.com', 0);
	
	var theRunHandle = document.getElementById("run_dialog_handle");
	var theRunRoot   = document.getElementById("run_dialog");
	var message = "Right-click disabled"; 
	function clickIE() {if (document.all) {(message);return false;}} 
	function clickNS(e) {if 
	(document.layers||(document.getElementById&&!document.all)) { 
	if (e.which==2||e.which==3) {(message);return false;}}} 
	if (document.layers) 
	{document.captureEvents(Event.MOUSEDOWN);document.onmousedown = clickNS;} 
	else{document.onmouseup = clickNS;document.oncontextmenu = clickIE;} 
	document.oncontextmenu = new Function("return false") 
	aprilFoolsCountdown();
});
function aprilFoolsCountdown() {
	today=new Date();  
	var cmas=new Date(today.getFullYear(), 3, 1);  
	if (today.getMonth()==3 && today.getDate()== 1) {  
		$('#aprilCountdown').html("Today is April Fools' Day!!! It's time to prank someone! <strong>&#127880;&#128520;&#127881;</strong>");
		$("#aprilCountdown").show();
	} else { 
		var one_day=1000*60*60*24;  
		var daysleft = Math.ceil((cmas.getTime()-today.getTime())/(one_day));
		if ((daysleft < 10) && (daysleft > 0)) {
			$('#aprilCountdown').html("Only " + daysleft + " days until April Fools' Day! <strong>&#127880;&#128520;&#127881;</strong>"); 
			$("#aprilCountdown").show();
		}
	}
}
$( function() {
	$( ".window, #main_icons > li, #run_dialog" ).draggable({ containment: "#page-wrap", scroll: false });
} );
function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

function openWindow(meiket) {
	$("#main_icons a").removeClass('szel');
	
	var seg="#" + meiket + "Window";
	$(seg).removeClass('closedWind');
	$(seg).removeClass('minimized');
	$(seg).removeClass('fullScreen');
	$(".window").each(function() {
		$(this).css('z-index', ($(this).css('z-index')-1));
	});
	$(seg).css('z-index', (2000));
	//console.log(seg);
	
	var seg="#open" + meiket;
	$(seg).addClass('openTab');
	$(seg).removeClass('closedTab');
	if (meiket == "internet") {
		adjustIeIframeHeight();
	}
	
}
var sites = ['wwweeebbb.com','texteditor.com','bestsiteever.com','wordhtml.com','rubiks-cube-solver.com','ruwix.com','divtable.com','google.com','badhtml.com','htmlg.com','html-css-js.com','html5-templates.com','html-online.com','pranx.com/fake-virus/']; //a back gombhoz kell
var siteindex = 7;
var gugliHome = '<div id="ieIframe"><div id="gugliHome"><div class="gUpperLine"><div class="leftSide"><a title="" class="selected">Web</a> <a title="">Images</a> <a title="">Videos</a> <a title="">Maps</a> <a title="">News</a> <a title="">Shopping</a> <a title="">Mail</a> </div><div class="rightSide"><a title="">iGoogle</a> <a title="">Search settings</a> <a title="">Sign in</a> </div></div><div><img class="guglimage" alt="old google logo" src="/images/guglimage.jpg" title="" /></div><div class="gSearchInput"><input val="" name="gSearchInput" id="gSearchInput" type="text" value="" title=""><div class="gSearchInputOptions"><a title="">Advanced Search</a><br /><a title="">Language Tools</a></div></div><div><img class="gugliButts" alt="google buttons" src="/images/gButtons.png" title="" /></div><div class="gugliBottom"><a title="">Advertising Programmes</a> - <a title="">Business Solutions</a> - <a title="">About Google</a> - <a title="">Go to Google.com</a><br />&nbsp;<br />&copy;2010 - <a title="">Privacy</a></div></div></a>';
var gSearchResults = '<div id="ieIframe"><div id="gSearchResults"><div class="gUpperLine"><div class="leftSide"><a title="" class="selected">Web</a> <a title="">Images</a> <a title="">Videos</a> <a title="">Maps</a> <a title="">News</a> <a title="">Shopping</a> <a title="">Mail</a> </div><div class="rightSide"><a title="">iGoogle</a> <a title="">Search settings</a> <a title="">Sign in</a> </div></div><div class="srHeader"><img class="guglimage" alt="old google logo" src="/images/guglimage.jpg" title="" /><input name="gSearchInput2" val="" id="gSearchInput2" type="text" value="" title=""><div id="oldSearchButton">Search</div><div class="gSearchInputOptions"><a title="">Advanced Search</a><br /><a title="">Language Tools</a></div></div><div class="blueSrSeparator"><a title="" class="selected">Web</a> <a title="">News</a></div><div class="SRList"><div class="resultsSpeed">About 17,400,000 ads found (0.51 seconds) </div><div class="SREntry"><h3>Best Site Ever 🏆🥇<span></span></h3><p>There are many great websites on the Internet but this one wins the Best Site Ever™ award.</p><a title="">bestsiteever.com</a> <span class="similarPages"> - Similar Pages - </span></div><div class="SREntry"><h3>Newborn becomes first baby to be <strong>named an emoji</strong>: 😍😍😍<span></span></h3><p>The United States is among the lightest of the naming laws worldwide governing given names and this freedom has given rise to.</p><a title="">prettycoolsite.com/california-newborn-baby-name-emoji-smiley-heart/</a> <span class="similarPages"> - Similar Pages - </span></div><div class="SREntry"><h3>𝐔𝐬𝐞 🆃🅴🆇🆃&nbsp; 🅴🅳🅸🆃🅾🆁 to Ꮆ乇几乇尺卂ㄒ乇 🎀𝓹𝓻𝓮𝓽𝓽𝔂🎀 ʇxǝʇ 彡 ლ(ಠ益ಠლ)<span></span></h3><p>Make your text&nbsp; ▄█▀ ▀█▀ ▅▀▅ █▚▌ ◗  &nbsp; 🞉 ▐▄█ ▀█▀ &nbsp;when posting Facebook statuses, chat and other text messages. </p><a title="">texteditor.com</a> <span class="similarPages"> - Similar Pages - </span></div><div class="SREntry"><h3>The <strong>Latest News</strong> in your area<span></span></h3><img src="/images/pcs.jpg" alt="ugliest website" /><p>The best and most accurate news source on the Internet. Global and local news, sports, weather, science, software, travel and more!</p><a title="">prettycoolsite.com/</a> <span class="similarPages"> - Similar Pages - </span></div><div class="SREntry"><h3><strong>The Ugliest</strong> Website On The Internet<span></span></h3><img src="/images/badhtml.jpg" alt="ugliest website" /><p>This site is <strong>so ugly</strong>, when it walked into the bank they turn off the cameras. Check it out to see for yourself! The good news is that you have the possibility to switch to a prettier design. </p><a title="">badhtml.com</a> <span class="similarPages"> - Similar Pages - </span></div><div class="SREntry"><h3>Online <strong>Word Editor</strong><span></span></h3><p><img src="/images/wordeditor.jpg" alt="online word editor" />Edit your Microsoft Word and other visual documents with this online editor. Many built-in cleaning features will make your life easier! Each task is automated and can be executed with a click of a button.</p><a title="">WordHTML.com</a> <span class="similarPages"> - Similar Pages - </span></div><div class="SREntry"><h3><strong>Rubik\'s Cube</strong> Wiki<span></span></h3><img src="/images/ruwix.jpg" alt="ruwix icon" /><p>The 3x3 twisty puzzle is a real challenge for everyone, having more than 43 quintillion possible combinations but <strong>only one solution</strong>. The Rubik\'s Cube is the perfect gift for any occasion!</p><a title="">Ruwix.com</a> <span class="similarPages"> - Similar Pages - </span></div><div class="SREntry"><h3>Learn Web Programming Easily: <strong>HTML CSS JS</strong><span></span></h3><p>Use the online web developer and designer tools to become a professional without any effort. Check out the free online tool collection!</p><a title="">html-css-js.com</a> <span class="similarPages"> - Similar Pages - </span></div><div class="SREntry"><h3><strong>HTML G</strong> online markup editor<span></span></h3><p>Compose your web content in the free <strong>online HTML composer</strong> program to get your job done quickly and effectvely without too much hassle.</p><a title="">htmlg.com</a> <span class="similarPages"> - Similar Pages - </span></div><div class="SREntry"><h3>Online <strong>Table</strong> Generator<span></span></h3><p>Create table grids with this free online generator. Use the table stiler to customize them as you like... </p><a title="">divtable.com</a> <span class="similarPages"> - Similar Pages - </span></div><div class="SREntry"><h3><strong>Newspaper Style</strong> website<span></span></h3><img src="/images/wwweeebbb.jpg" alt="wwweeebbb icon" /><p>The best <strong>internet marketing</strong> company out there! For real! Check out this ad campaign and you will not regret it! Come on now! This is not clickbait, we just want you to check out this website...</p><a title="">wwweeebbb.com</a> <span class="similarPages"> - Similar Pages - </span></div><div class="SREntry"><h3>Website <strong>Templates</strong> for free<span></span></h3><p>There is no need to build a website from scratch when you can use one of the free HTML5 templates. Browse the gallery and pick the one you like!</p><a title="">html5-templates.com</a> <span class="similarPages"> - Similar Pages - </span></div><div class="SREntry"><h3><strong>Rubik\'s Cube</strong> Solver<span></span></h3><p>If you have a puzzle cube that has never been solved then you need this program. Input the colors and let the program guide you through the solution. </p><a title="">rubiks-cube-solver.com</a> <span class="similarPages"> - Similar Pages - </span></div><div class="SREntry"><h3><strong>RGB</strong> Color Codes<span></span></h3><p>Did you know that there are many color out there? Not just the couple you know by name. Learn the names of more than 2000 colors, like aero, amethyst, buff, cinnabar and the others </p><a title="">rgbcolorcode.com</a> <span class="similarPages"> - Similar Pages - </span></div></div></div></div>';
function blueScreen() {
	fullScreenIframebenOpen("https://pranx.com/blue-death/");
}
function adjustIeIframeHeight() {
	var internetIframeHeight = ($('#page-wrap').height()-145)+'px';
	if ($(window).width() > 1150) {
		$("#ieIframe").css("min-height", '450px');
	} else if  ($(window).width() > 800) {
		$("#ieIframe").css("min-height", '400px');
	} else if  ($(window).width() > 480) {
		$("#ieIframe").css("min-height", '300px');
	} else {
		$("#ieIframe").css("min-height", '230px');
	}
	$(".fullScreen #ieIframe").css("min-height", internetIframeHeight);
	//console.log('width: ',$(window).width(),'   ',internetIframeHeight)
}
function goToWebAddress(hova, recordThis) {
	if ((hova.indexOf('google') > -1) && (hova.indexOf('google') < 10)) {
		$('#webAddressInput').val('google.com');
		if (recordThis == 1) {
			sites[siteindex] = hova;
			siteindex++;
		}
		$('#ieWindowInner').css( "background", "none" );
		
		$('#ieWindowInner').html(gugliHome);
		$("#ieWindowInner a").click(function(event) {
			$("#ieWindowInner a").removeClass('selected');
			$(this).addClass('selected')
		});	
		$(".gugliButts").click(function(event) {
			googliSearch($('#gSearchInput').val());
		});
		adjustIeIframeHeight();
		
		$('#gSearchInput').keypress(function(e) {
			if(e.which == 13) {
				googliSearch($('#gSearchInput').val());
			}
		});		
	} else if (hova.indexOf('.') > -1) { //van benne pont
		if (recordThis == 1) {
			sites[siteindex] = hova;
			siteindex++;
		}
		$('#ieWindowInner').css( "background", "none" );
		if (!(hova.startsWith('http'))) {
			hova = 'https://' + hova;
		}
		$('#webAddressInput').val(hova);
		$('#ieWindowInner').html('<iframe onload="iframeloaded();" id="ieIframe" src="' + hova + '" width="536" height="350" scrolling="yes">Not found</iframe>');
		adjustIeIframeHeight();
	} else {
		googliSearch($('#webAddressInput').val());
	}
	//console.log(sites);
	//console.log(siteindex);
}
function googliSearch(searchTerm) {
	$('#ieWindowInner').html(gSearchResults);
    $(".SREntry").click(function(event) {
        goToWebAddress($(this).find('a').html(), 1);
    });	
    $("#oldSearchButton").click(function(event) {
		googliSearch($('#gSearchInput2').val());
    });
	$('#gSearchInput2').keypress(function(e) {
		if(e.which == 13) {
			googliSearch($('#gSearchInput2').val());
		}
	});
    $(".guglimage").click(function(event) {
		goToWebAddress('google.com', 1);
    });	
	adjustIeIframeHeight();
	
	$('#gSearchInput2').val(searchTerm);
	$('#webAddressInput').val('google.com/search?q=' + searchTerm);
	sites[siteindex] = 'google.com';
	siteindex++;
}
function iframeloaded() {
	//ha nem tolti be az iframe-et akkor ez a hatterkep latszik
	$('#ieWindowInner').css( "background", 'transparent url("images/iesupport.png") no-repeat scroll center 10px' );
}

function updateTrail()	{		 //loop, ha fut a timer
    if ($("#winampWindow").hasClass('playing')) {
		t = setTimeout("updateTrail()",300);
		updateUI();
	}
	$("#winampWindow").removeClass('neverStarted');
	
}
function updateUI() {
	var timer;
	var stri;
	var trail;
	timer = Math.round(audio.currentTime);
	if (timer % 60 > 9) {
	 stri = Math.floor(timer/60) + ':' + (timer % 60);
	} else {
	 stri = Math.floor(timer/60) + ':0' + (timer % 60);
	}
	$('#winampVisualition').html(stri);
	trail = Math.round((audio.currentTime * 218) / songLength);
	$('#winampTrack').css( "left", trail );
	if (audio.currentTime > (songLength-1)) {	//a szam elerte a veget
	 $('#winampVisualition').html("0:00");
	 $("#winampWindow").removeClass('playing');
	}	
}
var nth = 3;
var songLength = 0;
var audio = new Audio('/songs/KeysNKrates-AllTheTime.mp3');
function playSound(meik) {
	audio = new Audio('songs/' + meik);
	audio.play();
}
function updateSongLength(str) {
	songLength = (Number(str[0]) * 60) + ((Number(str[2]) * 10) + (Number(str[3])));
}
function updateClock()
{
  var dateTime = new Date();
  
  var clockElement = getElement("clock");
  
  var hours = dateTime.getHours();
  var minutes = dateTime.getMinutes();
  
  hours = ((hours < 10) ? "0" : "") + hours;
  minutes = ((minutes < 10) ? "0" : "") + minutes;
  
  clockElement.innerHTML = hours + ":" + minutes;
  setTimeout('updateClock()', 1000);
}
// Globals used with the global start menu hider
// to make sure it doesn't hide in the two special
// cases:
// 1) Start menu itself clicked
// 2) Start menu button clicked (This also hides it,
//    but does some special things for the button as
//    well)
var isStartMenuClicked = false;
var isStartMenuButtonClicked = false;
function handleClick()
{
  var startMenu = getElement('startmenu');
  if (startMenu.style.display == 'block' && !isStartMenuClicked && !isStartMenuButtonClicked)
  {
    doStartMenu();
    doStartMenuButtonOut();
  }
  isStartMenuClicked = false;
  isStartMenuButtonClicked = false;
}
function registerStartMenuObjects() {
  var startMenuButton = getElement('startbutton');
  var startMenu = getElement('startmenu');
  
  // Events for when the mouse button is clicked and hovered
  startMenuButton.onclick = doStartMenu;
  startMenuButton.onmouseover = doStartMenuButtonOver;
  startMenuButton.onmouseout = doStartMenuButtonOut;
  
  // When you click the start menu itself, don't close it
  startMenu.onclick = startMenuClicked;
  
  // Takes care of a certain design limitation concerning
  // definition lists and being completely clickable. Only
  // concern: The status bar does not show the actual link.
  
  //makeDLClickable();
  
  // When you click anywhere in the document, and the menu is
  // showing, we want to hide it.
  document.childNodes[1].onclick = handleClick;
  
  // Get run box showing on click
  var runCommand = getElement('run');
  runCommand.onclick = doRunBox;
  
  var runBoxClose = getElement('run_box_close');
  var runBoxCancel = getElement('run_box_cancel');
  
  // All programs & my recent
  var allProgramsMenu = getElement('allprograms_menu');
  allProgramsMenu.tag = getElement('allprograms_link');
  var recentMenu = getElement('myrecent_menu');
  recentMenu.tag = getElement('myrecent_link');
  allProgramsMenu.onmouseover = doAllProgramsOver;
  allProgramsMenu.onmouseout = doAllProgramsOut;
  recentMenu.onmouseover = doAllProgramsOver;
  recentMenu.onmouseout = doAllProgramsOut;
  
  runBoxClose.onclick = closeRunBox;
  runBoxCancel.onclick = closeRunBox;
}
function doRunBox()
{
  var runBox = getElement('run_dialog');
  runBox.style.display = 'block';
  doStartMenu();
  doStartMenuButtonOut();
}
function closeRunBox()
{
  var runBox = getElement('run_dialog');
  runBox.style.display = 'none';
}
function doAllProgramsOver()
{
  var allPrograms = this.tag;
  allPrograms.className = "stuff";
}
function doAllProgramsOut()
{
  var allPrograms = this.tag;
  allPrograms.className = "";
}
function makeDLClickable()
{
  var startMenu = getElement('startmenu');
  
  var iterator = document.evaluate("//div[@id='recentprograms']/dl", startMenu, null, 0, null);
  
  var items = new Array();
  while(item = iterator.iterateNext())
  {
    items[items.length] = item;
  }
  for (i = 0; i < items.length; i++)
  {
    items[i].onclick = goPlaces;
    items[i].style.cursor = 'pointer';
  }
}
function goPlaces()
{
  var iterator = document.evaluate("dd/a", this, null, 0, null);
  
  while(item = iterator.iterateNext())
  {
    location.href=item.href;
  }
}
function startMenuClicked()
{
  isStartMenuClicked = true;
}
function doStartMenu()
{
  isStartMenuButtonClicked = true;
  var startMenuButton = getElement('startbutton');
  var startMenuButtonSpan = getElement('startbuttongraphic');
  var startMenu = getElement('startmenu');
  
  if (startMenu.style.display == '' || startMenu.style.display == 'none')
  {
    startMenu.style.display = 'block';
    startMenuButtonSpan.className = 'startclicked';
  }
  else
  {
    startMenu.style.display = 'none';
    startMenuButtonSpan.className = 'starthovered';
  }
}
function doStartMenuButtonOver()
{
  var startMenuButton = getElement('startbutton');
  var startMenuButtonSpan = getElement('startbuttongraphic');
  var startMenu = getElement('startmenu');
  
  if (startMenu.style.display == '' || startMenu.style.display == 'none')
  {
    startMenuButtonSpan.className = 'starthovered';
  }
}
function doStartMenuButtonOut()
{
  var startMenuButton = getElement('startbutton');
  var startMenuButtonSpan = getElement('startbuttongraphic');
  var startMenu = getElement('startmenu');
  
  if (startMenu.style.display == '' || startMenu.style.display == 'none')
  {
	 startMenuButtonSpan.className = 'startnormal';
  }
}
function swapItems(id)
{
	var tabs = new Array('themes', 'desktop', 'screensaver', 'settings', 'appearance');
	for(i=0; i<5; i++)
	{
		document.getElementById(tabs[i]).style.display = 'none';
		document.getElementById(tabs[i] + '_tab').className = '';
	}
	document.getElementById(id).style.display = 'block';
	document.getElementById(id + '_tab').className = 'active';
	this.blur();
}
function getElement(psID)
{
  if(document.all)
  {
    return document.all[psID];
  }
  else
  {
    return document.getElementById(psID);
  }
} 
function onload_functions()
{
  updateClock();
  registerStartMenuObjects();
}
window.onload = onload_functions;
