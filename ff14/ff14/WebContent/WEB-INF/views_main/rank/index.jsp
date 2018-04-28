<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="t" tagdir="/WEB-INF/tags"%>
<spring:url value="/resources/" var="RESOURCES" />
<t:layout_ng_boot tab="${target}">
<div ng-cloak ng-controller="IndexController">
	<!-- Start Body Detail -->
		change all things. It will be done.
</div>
</t:layout_ng_boot>
