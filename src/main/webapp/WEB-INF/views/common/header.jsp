<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.time.LocalDateTime, java.time.format.DateTimeFormatter" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<%
    // 현재 시간 가져오기
    LocalDateTime now = LocalDateTime.now();
    // 타임스탬프 포맷 (년월일시분초)
    String timestamp = now.format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
%>

<script src="https://code.jquery.com/jquery-3.7.1.js"></script>
<script src="resources/static/js/common/header.js?ver=<%= timestamp %>"></script>

<link rel="stylesheet" href="resources/css/header.css">

</head>

<body>
	<div id="header_body">
		<input type="button" value="Home" onClick="location.href='/test'">
		<input type="button" value="Map" onClick="location.href='/test/map'">
		<input type="button" value="MindMap" onClick="location.href='/test/mindMap'">
		<input type="button" value="Ellipsis" onClick="location.href='/test/ellipsis'">
		<input type="button" value="Search" onClick="location.href='/test/search'">
		<input type="button" value="Slide" onClick="location.href='/test/slide_splide'">
		<input type="button" value="FileDownload" onClick="location.href='/test/fileDownload'">
	</div>
</body>
</html>