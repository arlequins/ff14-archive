<%@ tag description="Layout Template" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ attribute name="tab" required="false" type="java.lang.String"%>
<spring:url value="/resources/" var="RESOURCES" />
<!doctype html>
<html class="no-js" lang="${language_code}">
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="keywords" content="파이널판타지14,MMORPG,파이널판타지14 온라인,파이널 판타지 14,파이널 판타지,파판14,Final Fantasy XIV: A Realm Reborn,Final Fantasy XIV: ARR,FF14,SETINE, HEAVENSWARD">
<meta name="description" content="파판14,데이터베이스">
<title>${title}</title>
<link rel="stylesheet" href="${RESOURCES}css/vender/foundation.css">
<link rel="stylesheet" href="${RESOURCES}css/setine.css">
<link href="${RESOURCES}css/vender/jquery.bxslider.css" rel="stylesheet" />
<link rel="shortcut icon" type="image/x-icon" href="${RESOURCES}images/favi2.png">
<script src="${RESOURCES}js/vendor/jquery.js"></script>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.2/angular.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/lodash.js/0.10.0/lodash.min.js"></script>
<script src="${RESOURCES}js/angular/angularutil.js"></script>
<script src="${RESOURCES}js/angular/angularapp.js"></script>
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create','UA-68990331-2','auto');ga('send','pageview');
var csrfToken = "${_csrf.token}";
</script>
</head>
<c:url value="/db/item/" var="item" />
<c:url value="/db/quest/" var="quest" />
<c:url value="/db/duty/" var="duty" />
<c:url value="/db/npc/" var="npc" />
<c:url value="/db/achievement/" var="achi" />
<c:url value="/db/note/" var="note" />
<c:url value="/board/" var="board" />
<c:choose><c:when test="${language_code eq 'en'}"><spring:eval expression="@text_en" var="text" scope="request" /></c:when><c:when test="${language_code eq 'jp'}"><spring:eval expression="@text_jp" var="text" scope="request" /></c:when><c:otherwise><spring:eval expression="@text_kr" var="text" scope="request" /></c:otherwise></c:choose>
<!-- Start Body -->
<body ng-app="SetineApp">
	<!-- Start off Canvas -->
	<div class="off-canvas-wrapper">
		<div class="off-canvas-wrapper-inner" data-off-canvas-wrapper>
			<div class="off-canvas position-left" id="offCanvas" data-off-canvas>

				<!-- Close button -->
				<button class="close-button" aria-label="Close menu" type="button" data-close>
					<span aria-hidden="true">&times;</span>
				</button>

				<!-- Menu -->
				<ul class="mobile-ofc vertical menu">
					<li class="has-submenu title">${text['common.menu.database']}
						<ul class="submenu menu vertical" data-submenu>
							<li><a href="${item}">${text['common.menu.item']}</a></li>
							<li><a href="${quest}">${text['common.menu.quest']}</a></li>
							<li><a href="${duty}">${text['common.menu.duty']}</a></li>
							<li><a href="${npc}">${text['common.menu.npc']}</a></li>
							<li><a href="${achi}">${text['common.menu.achi']}</a></li>
						</ul>
					</li>
					<li class="has-submenu title">${text['common.menu.board']}
						<ul class="submenu menu vertical" data-submenu>
							<li><a href="${board}">${text['common.menu.board.total']}</a></li>
							<li><a href="${board}ff14kboard/">${text['common.menu.board.ff14k']}</a></li>
						</ul>
					</li>
					<li class="has-submenu">${text['common.menu.garlandbell']}
						<ul class="submenu menu vertical" data-submenu>
							<li><a href="//setine.net/bell_expand/" target="_blank">${text['common.menu.garlandbell.pre250']}</a></li>
							<li><a href="//setine.net/bell/" target="_blank">${text['common.menu.garlandbell.new300']}</a></li>
						</ul>
					</li>
					<li class="has-submenu">${text['common.menu.lodestone']}
						<ul class="submenu menu vertical" data-submenu>
							<li><a href="http://guide.ff14.co.kr/lodestone/playguide/1/" target="_blank">한국어</a></li>
							<li><a href="http://na.finalfantasyxiv.com/lodestone/playguide/db/" target="_blank">English</a></li>
							<li><a href="http://jp.finalfantasyxiv.com/lodestone/playguide/db/" target="_blank">日本語</a></li>
						</ul>
					</li>
					<li class="has-submenu">${text['common.menu.fansite']}
						<ul class="submenu menu vertical" data-submenu>
							<li><a href="//xivdb.com/" target="_blank">XIVDB</a></li>
							<li><a href="//www.garlandtools.org/" target="_blank">Garland Tools</a></li>
							<li><a href="//ffxiv.consolegameswiki.com/wiki/FF14_Wiki/" target="_blank">FFXIV WIKI</a></li>
							<li><a href="//ffxiv.gamerescape.com/" target="_blank">Gamerescape(WIKI)</a></li>
							<li><a href="//ffxiv.ariyala.com/" target="_blank">Ariyala's FFXIV Toolkit</a></li>
						</ul>
					</li>
					<li><label>${text['common.menu.language']} <select name="language" class="language-code-selector" ONCHANGE="location = this.options[this.selectedIndex].value;">
								<option value="//kr.setine.net/ff14/" <c:if test="${language_code eq 'kr'}">selected</c:if>>한국어</option>
								<option value="//en.setine.net/ff14/" <c:if test="${language_code eq 'en'}">selected</c:if>>English</option>
								<option value="//jp.setine.net/ff14/" <c:if test="${language_code eq 'jp'}">selected</c:if>>日本語</option>
						</select>
					</label></li>
					<li><label>${text['common.menu.version']} <select name="version" class="version-code-selector" disabled>
								<option value="1">3.00</option>
								<option value="2">3.01</option>
								<option value="3">3.07</option>
								<option value="4">3.10</option>
								<option value="5">3.15</option>
								<option value="6">3.20</option>
								<option value="7">3.30</option>								
								<option value="8" selected>3.40</option>								
						</select>
					</label></li>
				</ul>
			</div>
			<!-- End off Canvas -->
			<!-- Start Content -->
			<div class="off-canvas-content" data-off-canvas-content>

				<div class="title-bar hide-for-large" data-toggle="offCanvas" data-hide-for="medium">
					<button class="menu-icon" type="button" data-toggle></button>
					<div class="title-bar-title" onClick="location.href='<c:url value="/" />'" style="cursor: pointer;">${text['common.site.name']}</div>
				</div>
				<!-- Start Top Bar -->
				<div class="top-bar show-for-large">
					<div class="row">
						<div class="medium-12 large-4 columns show-for-large">
							<div class="large-6 columns">
								<label>${text['common.menu.language']} <select name="language" class="language-code-selector" ONCHANGE="location = this.options[this.selectedIndex].value;">
										<option value="//kr.setine.net/ff14/" <c:if test="${language_code eq 'kr'}">selected</c:if>>한국어</option>
										<option value="//en.setine.net/ff14/" <c:if test="${language_code eq 'en'}">selected</c:if>>English</option>
										<option value="//jp.setine.net/ff14/" <c:if test="${language_code eq 'jp'}">selected</c:if>>日本語</option>
								</select>
								</label>
							</div>
							<div class="large-6 columns">
								<label>${text['common.menu.version']} <select name="version" class="version-code-selector" disabled>
										<option value="1">3.00</option>
										<option value="2">3.01</option>
										<option value="3">3.07</option>
										<option value="4">3.10</option>
										<option value="5">3.15</option>
										<option value="6">3.20</option>
										<option value="7">3.30</option>
										<option value="8" selected>3.40</option>
								</select>
								</label>
							</div>
						</div>
						<div class="medium-12 large-8 columns">
							<c:if test="${language_code eq 'en' or language_code eq 'kr'}"><a href="http://na.finalfantasyxiv.com/${TB_list.get(0).link_content}" target="_blank"><div class="top-banner" style="background-image: url('${TB_list.get(0).link}');"></div></a></c:if>
							<c:if test="${language_code eq 'jp'}"><a href="http://jp.finalfantasyxiv.com/${TB_list.get(1).link_content}" target="_blank"><div class="top-banner" style="background-image: url('${TB_list.get(1).link}');"></div></a></c:if>
						</div>
						<div class="large-8 columns">
							<ul class="dropdown menu" data-dropdown-menu>
								<li class="menu-text" onClick="location.href='<c:url value="/" />'" style="cursor: pointer;">${text['common.site.name']}</li>
								<li class="has-submenu"><a href="${item}">${text['common.menu.database']}</a>
									<ul class="submenu menu vertical" data-submenu>
										<li><a href="${item}">${text['common.menu.item']}</a></li>
										<li><a href="${quest}">${text['common.menu.quest']}</a></li>
										<li><a href="${duty}">${text['common.menu.duty']}</a></li>
										<li><a href="${npc}">${text['common.menu.npc']}</a></li>
										<li><a href="${achi}">${text['common.menu.achi']}</a></li>
									</ul></li>
								<li class="has-submenu"><a href="${board}">${text['common.menu.board']}</a>
									<ul class="submenu menu vertical" data-submenu>
										<li><a href="${board}ff14kboard/">${text['common.menu.board.ff14k']}</a></li>
									</ul>
								</li>
								<li class="has-submenu"><a href="//setine.net/bell/">${text['common.menu.garlandbell']}</a>
									<ul class="submenu menu vertical" data-submenu>
										<li><a href="//setine.net/bell_expand/" target="_blank">${text['common.menu.garlandbell.pre250']}</a></li>
										<li><a href="//setine.net/bell/" target="_blank">${text['common.menu.garlandbell.new300']}</a></li>
									</ul></li>
								<li class="has-submenu"><a href="<c:choose><c:when test="${language_code eq 'en'}">//na.finalfantasyxiv.com/lodestone/playguide/db/</c:when><c:when test="${language_code eq 'jp'}">//jp.finalfantasyxiv.com/lodestone/playguide/db/</c:when><c:otherwise>//guide.ff14.co.kr/lodestone/playguide/1/</c:otherwise></c:choose>">${text['common.menu.lodestone']}</a>
									<ul class="submenu menu vertical" data-submenu>
										<li><a href="http://guide.ff14.co.kr/lodestone/playguide/1/" target="_blank">한국어</a></li>
										<li><a href="http://na.finalfantasyxiv.com/lodestone/playguide/db/" target="_blank">English</a></li>
										<li><a href="http://jp.finalfantasyxiv.com/lodestone/playguide/db/" target="_blank">日本語</a></li>
									</ul></li>
								<li class="has-submenu"><a href="http://xivdb.com/">${text['common.menu.fansite']}</a>
									<ul class="submenu menu vertical" data-submenu>
										<li><a href="http://xivdb.com/" target="_blank">XIVDB</a></li>
										<li><a href="http://www.garlandtools.org/" target="_blank">Garland Tools</a></li>
										<li><a href="http://ffxiv.consolegameswiki.com/wiki/FF14_Wiki/" target="_blank">FFXIV WIKI</a></li>
										<li><a href="http://ffxiv.gamerescape.com/" target="_blank">Gamerescape(WIKI)</a></li>
										<li><a href="http://ffxiv.ariyala.com/" target="_blank">Ariyala's FFXIV Toolkit</a></li>
									</ul></li>
							</ul>
						</div>
						<div class="large-4 columns">
							<div class="row">
								<form action="<c:url value="/total/" />" method="get">
									<div class="large-8 columns">
										<input class="wd100p" style="max-width: 100%; margin-bottom: 0px" type="search" placeholder="${text['common.menu.totalsearch']}" name="q" <c:if test="${target eq 'total'}">value="${question}"</c:if>>
									</div>
									<div class="large-4 columns">
										<button type="sumbit" class="button expanded" style="margin-bottom: 0px">${text['common.menu.search']}</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<!-- End Top Bar -->
				<br>
				<!-- Start Tab -->
				<div class="row columns">
					<nav aria-label="You are here:" role="navigation">
						<ul class="breadcrumbs">
							<c:forEach items="${navlist}" var="i" varStatus="loop">
								<c:if test="${!loop.last}">
									<li><a href="<c:url value="${i.navLink}" />">${i.navText}</a></li>
								</c:if>
								<c:if test="${loop.last}">
									<li><span class="show-for-sr">Current: </span>${i.navText}</li>
								</c:if>
							</c:forEach>
						</ul>
					</nav>
				</div>
				<!-- End Tab -->
				<!-- Start Inner Content -->
				<div class="row">
					<jsp:doBody />
					<!-- Start Footer -->
					<hr>
					<!-- Start Ads -->
					<div class="hg100" style="width: 100%; margin-bottom: 20px;">
						<!-- Setine's Database ad2 -->
						<ins class="adsbygoogle" style="display: block" data-ad-client="ca-pub-8709525661102765" data-ad-slot="8279569737" data-ad-format="auto"></ins>
					</div>
					<!-- End Ads -->
					<ul class="menu">
						<li><p>
								${text['common.menu.webmaster']}: <a href="mailto:clandestin@me.com">clandestin@me.com</a>
							</p></li>
						<li class="float-right">${text['common.menu.footer']}</li>
					</ul>
					<!-- End Footer -->
				</div>
				<!-- End Inner Content -->
			</div>
			<!-- End Content -->
		</div>
	</div>
	<!-- End Body -->
</body>
	<script src="${RESOURCES}js/vendor/foundation.js"></script>
	<script src="${RESOURCES}js/vendor/jquery.bxslider.min.js"></script>
	<script src="${RESOURCES}js/setineapp.js"></script>
</html>