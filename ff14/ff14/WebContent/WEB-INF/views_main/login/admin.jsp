<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="sec"
	uri="http://www.springframework.org/security/tags"%>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>Admin page</title>
	<link href="<c:url value='/static/css/bootstrap.css' />" rel="stylesheet"></link>
	<link href="<c:url value='/static/css/app.css' />" rel="stylesheet"></link>
</head>
<body>
	<div class="success">
		Dear <strong>${user}</strong>, Welcome to Admin Page.
		<br/>
		Would you like to <a href="<c:url value='/newUser' />">Add Some Users</a> to keep yourself busy?
		<br/>
		<a href="<c:url value="/logout" />">Logout</a>
		
			<sec:authorize access="isRememberMe()">
		<h2># This user is login by "Remember Me Cookies".</h2>
	</sec:authorize>

	<sec:authorize access="isFullyAuthenticated()">
		<h2># This user is login by username / password.</h2>
	</sec:authorize>
	</div>
</body>
</html>