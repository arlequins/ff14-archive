<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="t" tagdir="/WEB-INF/tags"%>
<spring:url value="/resources/" var="RESOURCES" />
<t:layout_ng tab="${target}">
	<div ng-cloak ng-controller="DetailController">
		<div class="column row">
			<!-- Start Inner Search -->
			<form>
				<div class="row">
					<div class="large-10 columns">
						<input type="search" name="q" placeholder="${text['common.menu.search']}" ng-model="question" ng-init="question = ''">
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
			<script async
				src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
			<!-- Setine's Database ad1 -->
			<ins class="adsbygoogle" style="display: block"
				data-ad-client="ca-pub-8709525661102765" data-ad-slot="6802836535"
				data-ad-format="auto"></ins>
			<script>
				(adsbygoogle = window.adsbygoogle || []).push({});
			</script>
		</div>
		<!-- End Inner Ads -->
		<hr>
		<!-- Start Body Detail -->
		<div class="column row">
			<div class="large-12 columns">
				<table id="detailTable">
					<thead>
						<tr>
							<th width="10%">Key</th>
							<th width="50%">이름</th>
							<th width="20%">Link1</th>
							<th width="20%">Link2</th>
						</tr>
					</thead>
					<tbody>
						<tr ng-repeat="i in items">
							<td>{{i.key}}</td>
							<td ng-if="lang == 'kr'">{{i.index_kr}}</td>
							<td ng-if="lang == 'en'">{{i.index_en}}</td>
							<td ng-if="lang == 'ja'">{{i.index_ja}}</td>
							<td>
								<div class="row small-up-3 medium-up-4 large-up-5">
									<div class="column"><a ng-href="http://guide.ff14.co.kr/lodestone/db/{{i.path}}" target="_blank"><img src="${RESOURCES}images/favi2.png" class="thumbnail mgb00" alt="" title="한국 로드스톤"></a></div>
									<div class="column"><a ng-href="http://na.finalfantasyxiv.com/lodestone/playguide/db/{{i.path}}" target="_blank"><img src="${RESOURCES}images/favi2.png" class="thumbnail mgb00" alt="" title="English Lodestone"></a></div>
									<div class="column"><a ng-href="http://jp.finalfantasyxiv.com/lodestone/playguide/db/{{i.path}}" target="_blank"><img src="${RESOURCES}images/favi2.png" class="thumbnail mgb00" alt="" title="日本語 Lodestone"></a></div>
								</div>
							</td>
							<td>
								<div class="row small-up-3 medium-up-4 large-up-5">
									<div class="column" ng-if="i.type != 'achievement'"><a ng-href="http://ff14.inven.co.kr/dataninfo/{{i.type}}/detail.php?code={{i.key}}" target="_blank"><img src="${RESOURCES}images/favi1.png" class="thumbnail mgb00" alt="" title="INVEN"></a></div>
									<div class="column" ng-if="i.type != 'duty'"><a ng-href="https://xivdb.com/{{i.type}}/{{i.key}}" target="_blank"><img src="${RESOURCES}images/favi3.png" class="thumbnail mgb00" alt="" title="XIVDB"></a></div>
									<div class="column" ng-if="i.type == 'duty'"><a ng-href="https://xivdb.com/instance/{{i.key}}" target="_blank"><img src="${RESOURCES}images/favi3.png" class="thumbnail mgb00" alt="" title="XIVDB"></a></div>
									<div class="column" ng-if="i.type != 'duty'"><a ng-href="https://www.garlandtools.org/db/# {{i.type}}/{{i.key}}" target="_blank"><img src="${RESOURCES}images/favi4.png" class="thumbnail mgb00" alt="" title="Garland Tools Database"></a></div>
									<div class="column" ng-if="i.type == 'duty'"><a ng-href="https://www.garlandtools.org/db/# instance/{{i.key}}" target="_blank"><img src="${RESOURCES}images/favi4.png" class="thumbnail mgb00" alt="" title="Garland Tools Database"></a></div>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="large-12 columns large-centered div-centered">				
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
	</div>
	<!-- temp code -->
	<script>
	var language_code = "${language_code}";
	var requestUrl = "/ff14/db/${target}";
	
    app.controller('DetailController', function($scope, $http, $timeout, PagerService) {
    	$scope.items = {};
    	$scope.req = {};
    	$scope.lang = language_code;
        $scope.dummyItems = [];
        $scope.pager = {};
        $scope.setPage = setPage;
        $scope.question = getUrlParameter('q');
        $scope.category = getUrlParameter('category');
        
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

    	$scope.reload = function() {
    		postparam["q"] = $scope.question;
    		postparam["category"] = $scope.category;

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
</t:layout_ng>
