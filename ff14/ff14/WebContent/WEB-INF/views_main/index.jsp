<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="t" tagdir="/WEB-INF/tags"%>
<spring:url value="/resources/css/" var="CSS" />
<spring:url value="/resources/images/" var="IMAGES" />
<spring:url value="/resources/js/" var="JS" />
<spring:url value="/resources/media/" var="MEDIA" />
<t:layout_ng tab="${target}">
	<div ng-cloak ng-controller="HomeController">
		<div class="medium-10 medium-centered large-7 large-uncentered columns">
			<ul class="bxslider-list" style="display: none">
				<li ng-repeat="i in items.ffge.banner" ng-if="lang != 'jp'"><a ng-href="{{i.link}}" target="_blank"><img ng-src="{{i.link_content}}"></a></li>
				<li ng-repeat="i in items.ffgj.banner" ng-if="lang == 'jp'"><a ng-href="{{i.link}}" target="_blank"><img ng-src="{{i.link_content}}"></a></li>
			</ul>
			<ul class="bxslider-list" style="display: none">
				<li ng-repeat="i in items.kbanner"><a ng-href="https://www.ff14.co.kr{{i.ACTIONSCRIPT}}" target="_blank"><img ng-src="{{'https://static.ff14.co.kr/' + i.THUMBNAIL}}" ng-attr-title="{{i.SUMMARY}}"></a></li>
			</ul>
			<div class="hg100" style="width: 100%; margin-bottom: 20px;">
				<!-- Setine's Database ad1 -->
				<ins class="adsbygoogle" style="display: block" data-ad-client="ca-pub-8709525661102765" data-ad-slot="6802836535" data-ad-format="auto" ></ins>
				<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
			</div>
		</div>
		<div class="medium-12 large-5 columns">
			<div class="row">
				<div class="large-12 columns">
					<ul class="tabs text-center" data-tabs id="notice-tabs">
						<li class="tabs-title is-active"><a href="#panel1" class="pdt7 pdb7" aria-selected="true"> <c:choose><c:when test="${language_code eq 'en'}">NA</c:when><c:when test="${language_code eq 'jp'}">日本</c:when><c:otherwise>한국</c:otherwise></c:choose>
						</a></li>
						<li class="tabs-title"><a href="#panel2" class="pdt7 pdb7"><c:choose><c:when test="${language_code eq 'en'}">日本</c:when><c:when test="${language_code eq 'jp'}">NA</c:when><c:otherwise>NA</c:otherwise></c:choose></a></li>
						<li class="tabs-title"><a href="#panel3" class="pdt7 pdb7"><c:choose><c:when test="${language_code eq 'en'}">한국</c:when><c:when test="${language_code eq 'jp'}">한국</c:when><c:otherwise>日本</c:otherwise></c:choose></a></li>
					</ul>
					<div class="tabs-content" data-tabs-content="notice-tabs">
						<div class="tabs-panel <c:choose><c:when test="${language_code eq 'en'}"></c:when><c:when test="${language_code eq 'jp'}"></c:when><c:otherwise>is-active</c:otherwise></c:choose>" id="panel<c:choose><c:when test="${language_code eq 'en'}">3</c:when><c:when test="${language_code eq 'jp'}">3</c:when><c:otherwise>1</c:otherwise></c:choose>">
							<table>
								<tbody>
									<tr ng-repeat="i in items.noticeList|limitTo:4">
										<td><a ng-href="https://www.ff14.co.kr{{i.link}}" target="_blank">{{i.link_content}}</a></td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="tabs-panel <c:choose><c:when test="${language_code eq 'en'}">is-active</c:when><c:when test="${language_code eq 'jp'}"></c:when><c:otherwise></c:otherwise></c:choose>" id="panel<c:choose><c:when test="${language_code eq 'en'}">1</c:when><c:when test="${language_code eq 'jp'}">2</c:when><c:otherwise>2</c:otherwise></c:choose>">
							<table>
								<tbody>
									<tr ng-repeat="i in items.ffge.article|limitTo:4">
										<td><a ng-href="http://na.finalfantasyxiv.com{{i.link}}" target="_blank">{{i.link_content}}</a></td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="tabs-panel <c:choose><c:when test="${language_code eq 'en'}"></c:when><c:when test="${language_code eq 'jp'}">is-active</c:when><c:otherwise></c:otherwise></c:choose>" id="panel<c:choose><c:when test="${language_code eq 'en'}">2</c:when><c:when test="${language_code eq 'jp'}">1</c:when><c:otherwise>3</c:otherwise></c:choose>">
							<table>
								<tbody>
									<tr ng-repeat="i in items.ffgj.article|limitTo:4">
										<td><a ng-href="http://jp.finalfantasyxiv.com{{i.link}}" target="_blank">{{i.link_content}}</a></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div class="large-12 columns" style="margin-top: 32px;">
					<ul class="tabs text-center" data-tabs id="gal-tabs">
						<li class="tabs-title is-active"><a href="#galpanel1" class="pdt7 pdb7" aria-selected="true"><c:choose><c:when test="${language_code eq 'en'}">English Banner</c:when><c:when test="${language_code eq 'jp'}">日本語 BANNER</c:when><c:otherwise>한국어 배너</c:otherwise></c:choose></a></li>
						<li class="tabs-title"><a class="pdt7 pdb7" href="#galpanel2"><c:choose><c:when test="${language_code eq 'en'}">日本語 BANNER</c:when><c:when test="${language_code eq 'jp'}">English Banner</c:when><c:otherwise>English Banner</c:otherwise></c:choose></a></li>
						<li class="tabs-title"><a class="pdt7 pdb7" href="#galpanel3"><c:choose><c:when test="${language_code eq 'en'}">한국어 배너</c:when><c:when test="${language_code eq 'jp'}">한국어 배너</c:when><c:otherwise>日本語 BANNER</c:otherwise></c:choose></a></li>
					</ul>
					<div class="tabs-content" data-tabs-content="gal-tabs">
						<div class="tabs-panel <c:choose><c:when test="${language_code eq 'en'}"></c:when><c:when test="${language_code eq 'jp'}"></c:when><c:otherwise>is-active</c:otherwise></c:choose>" id="galpanel<c:choose><c:when test="${language_code eq 'en'}">3</c:when><c:when test="${language_code eq 'jp'}">3</c:when><c:otherwise>1</c:otherwise></c:choose>">
							<div class="row large-12 columns small-up-2 medium-up-2 large-up-2">
								<div class="column padding0" ng-repeat="i in items.kImage">
									<a href ng-click="setBannerLink(i.ACTIONSCRIPT)" target="_blank">								
										<img ng-src="{{'https://static.ff14.co.kr/' + i.THUMBNAIL}}" class="thumbnail margin0" alt="">
									</a>
								</div>
							</div>
						</div>
						<div class="tabs-panel <c:choose><c:when test="${language_code eq 'en'}">is-active</c:when><c:when test="${language_code eq 'jp'}"></c:when><c:otherwise></c:otherwise></c:choose>" id="galpanel<c:choose><c:when test="${language_code eq 'en'}">1</c:when><c:when test="${language_code eq 'jp'}">2</c:when><c:otherwise>2</c:otherwise></c:choose>">
							<div class="row large-12 columns small-up-1 medium-up-1 large-up-1" style="height: 416.67px; overflow-y: scroll;">
								<div class="column padding0" ng-repeat="i in items.ffge.topic">
									<a ng-href="http://na.finalfantasyxiv.com{{i.link}}" target="_blank"><img ng-src="{{i.link_content}}" class="thumbnail margin0" alt=""><br>{{i.link_text}}</a>
								</div>
							</div>
						</div>
						<div class="tabs-panel <c:choose><c:when test="${language_code eq 'en'}"></c:when><c:when test="${language_code eq 'jp'}">is-active</c:when><c:otherwise></c:otherwise></c:choose>" id="galpanel<c:choose><c:when test="${language_code eq 'en'}">2</c:when><c:when test="${language_code eq 'jp'}">1</c:when><c:otherwise>3</c:otherwise></c:choose>">
							<div class="row large-12 columns small-up-1 medium-up-1 large-up-1" style="height: 416.67px; overflow-y: scroll;">
								<div class="column padding0" ng-repeat="i in items.ffgj.topic">
									<a ng-href="http://jp.finalfantasyxiv.com{{i.link}}" target="_blank"><img ng-src="{{i.link_content}}" class="thumbnail margin0" alt=""><br>{{i.link_text}}</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- temp code -->	
	<script>
	var language_code = "${language_code}";
	var requestUrl = "./home";
	
    app.controller('HomeController', function($scope, $http, $timeout, PagerService) {
    	$scope.items = {};
    	$scope.lang = language_code;
    	
    	var postparam = {"_csrf" : csrfToken};

    	var postAjax = function (requestUrl, postparam, csrfToken) {
    		$http({method: 'POST', url: requestUrl, data: postparam, headers: {'X-CSRF-Token': csrfToken}}).then(responseAjax);
    	}    	

    	var responseAjax = function (response) {
    		var code = response.data.code;
    		var msg = response.data.msg;
    		if (code == 0) {
        		$scope.items = response.data.result;
        		$timeout(bxslider_init, 1000);
    		}
	    }
    	
		// bxslider loader
		var bxslider_init = function() {
			$('.bxslider-list').show();
			$('.bxslider-list').bxSlider({
				mode : 'fade',
				auto : true,
				autoControls : true,
				captions : true,
				pause : 10000
			});
		}
		
		$scope.setBannerLink = function (actionscript) {
			var returnValue = "";
			if (actionscript.indexOf("http") == -1) {
				returnValue = "https://www.ff14.co.kr" + actionscript;
			} else {
				returnValue = actionscript.replace("%3A", ":");
			}
			window.open(returnValue);
		}
		
    	postAjax(requestUrl, postparam, csrfToken);

	});
	</script>
</t:layout_ng>
