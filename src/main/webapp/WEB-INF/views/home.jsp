<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import="java.time.LocalDateTime, java.time.format.DateTimeFormatter" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>

<body>
<div>메인페이지 입니다</div>
<input type="button" value="map으로이동" onclick="location.href='/test/map'">
<input type="button" value="search로이동" onclick="location.href='/test/search'">
<input type="button" value="mindMap로이동" onclick="location.href='/test/mindMap'">
<input type="button" value="excel로이동" onclick="location.href='/test/excel'">
<input type="button" value="ellipsis로이동" onclick="location.href='/test/ellipsis'">
</body>
</html>
