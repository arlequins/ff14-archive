<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="t" tagdir="/WEB-INF/tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<spring:url value="/resources/" var="RESOURCES" />
<t:layout_ng tab="${target}">
<div ng-cloak ng-controller="IndexController">
	<div class="column row">	
		<!-- Start Inner Search -->
		<form>
			<div class="row">
				<div class="large-10 columns">
					<input type="search" name="q" placeholder="추천 10회 이상 게시물 ${text['common.menu.search']}" ng-model="question" ng-init="question = ''">
				</div>
				<div class="large-2 columns">
						<input type="submit" value="Search" class="expanded button" ng-click="reload()"></input>
				</div>
			</div>
		</form>
		<!-- End Inner Search -->
	</div>
	<!-- Start Inner Ads -->
	<div class="hg100">
		<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
		<!-- Setine's Database ad1 -->
		<ins class="adsbygoogle" style="display: block" data-ad-client="ca-pub-8709525661102765" data-ad-slot="6802836535" data-ad-format="auto"></ins>
		<script>
			(adsbygoogle = window.adsbygoogle || []).push({});
		</script>
	</div>
	<!-- End Inner Ads -->
	<hr>
	<!-- Start Body Detail -->
	<div class="column row" id="content">
		<div class="large-12 columns" ng-show="switcher.status == 1">
			<div ng-html="items[switcher.detail].content" ng-if="switcher.detail != -1 && switcher.status != -1"></div>
		</div>
		<div class="large-12 columns" ng-if="switcher.detail != -1 && switcher.status != -1">
			<button class="expanded button" ng-click="switcher.status = -1">목록으로 가기</button>
		</div>		
		<div class="large-12 columns" ng-show="switcher.status == -1">
			<h3>FF14 KOREA 자유 게시판 베스트 10</h3>
			<table class="outerboard">
				<thead>
					<tr>
						<th width="10%">key</th>
						<th width="15%">date</th>
						<th width="50%">title</th>
						<th width="15%">writer</th>
						<th width="5%">Hit</th>
						<th width="5%">BestHit</th>
					</tr>
				</thead>
				<tbody>
					<tr ng-repeat="i in items" ng-if="items.length > 0">
						<td>{{i.key}}</td>
						<td>{{i.date_c}}</td>
						<td><a href ng-click="openDetailInfo($index)">{{i.title}}</a></td>
						<td>{{i.nickName}}</td>
						<td>{{i.hit}}</td>
						<td>{{i.besthit}}</td>
					</tr>
					<tr ng-if="items.length == 0"><td colspan="6">검색 결과가 없습니다.</td></tr>
				</tbody>
			</table>
		</div>
		<div class="large-12 columns large-centered div-centered" ng-show="switcher.status == -1">				
            <!-- pager -->
            <ul ng-if="pager.pages.length" class="pagination text-center" role="navigation" aria-label="Pagination">
                <li ng-class="{disabled:pager.currentPage === 1}">
                    <a ng-click="setPage(1)">First</a>
                </li>
                <li ng-class="{disabled:pager.currentPage === 1}">
                    <a ng-click="setPage(pager.currentPage - 1)">Previous</a>
                </li>
                <li ng-repeat="page in pager.pages" ng-class="{current:pager.currentPage === page}">
                    <p ng-if="pager.currentPage === page"><span class="show-for-sr" >You're on {{page}}</span>{{page}}</p>
                    <a ng-if="pager.currentPage !== page" ng-click="setPage(page)" href ng-attr-aria-label="{{'Page' + page}}">{{page}}</a>	                    
                </li>                
                <li ng-class="{disabled:pager.currentPage === pager.totalPages}">
                    <a ng-click="setPage(pager.currentPage + 1)">Next</a>
                </li>
                <li ng-class="{disabled:pager.currentPage === pager.totalPages}">
                    <a ng-click="setPage(pager.totalPages)">Last</a>
                </li>
            </ul>
        </div>		
	</div>
	<!-- temp code -->
	<script>
	var language_code = "${language_code}";
	var requestUrl = ".";
	
    app.controller('IndexController', function($scope, $http, $timeout, PagerService) {
    	$scope.items = {};
    	$scope.req = {};
    	$scope.lang = language_code;
        $scope.dummyItems = [];
        $scope.pager = {};
        $scope.setPage = setPage;
        $scope.question = getUrlParameter('q');
        $scope.switcher = {
        		detail : -1,
        		status : -1
        };
        
    	var postparam = {"_csrf" : csrfToken};
    	
    	var postAjax = function (requestUrl, postparam, csrfToken) {
    		$http({method: 'POST', url: requestUrl, data: postparam, headers: {'X-CSRF-Token': csrfToken}}).then(responseAjax);
    	}    	

    	var responseAjax = function (response) {
    		var code = response.data.code;
    		var msg = response.data.msg;
    		if (code == 0) {
    			$scope.dummyItems = response.data.result;
        		$scope.req = response.data.request;
                $scope.setPage(1);
    		}
	    }

    	$scope.openDetailInfo = function(key) {
    		if ($scope.switcher.status == -1) {
    			$scope.switcher.status = 1;
    			$scope.switcher.detail = key;
    		} else {
    			$scope.switcher.status = -1;
    			$scope.switcher.detail = -1;    			
    		}
			$(window).scrollTop( $("#content") );    		
    	}
    	
    	$scope.reload = function() {
    		postparam["q"] = $scope.question;

        	postAjax(requestUrl, postparam, csrfToken);
    	}
		
    	$scope.setPagingNum = function(page, currentPage) {
    		var returnValue = "";
    		
    		if (page == currentPage) {
    			returnValue = page;	
    		}
    		
			return returnValue;	
    	}
    	
        function initController() {
        	$scope.reload();
        }

        function setPage(page) {
			if (page < 1 || page > $scope.pager.totalPages) {
				return;
			}

			$scope.pager = PagerService.GetPager($scope.dummyItems.length, page);
			$scope.items = $scope.dummyItems.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
        }
         
        function getUrlParameter(sParam) {
            var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;

            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');

                if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : sParameterName[1];
                }
            }
        };
        
    	initController();    	
	});
	</script>
</div>
</t:layout_ng>
