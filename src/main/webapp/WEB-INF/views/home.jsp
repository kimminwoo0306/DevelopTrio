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
<div>���������� �Դϴ�</div>
<input type="button" value="map�����̵�" onclick="location.href='/test/map'">
<input type="button" value="search���̵�" onclick="location.href='/test/search'">
<input type="button" value="mindMap���̵�" onclick="location.href='/test/mindMap'">
<input type="button" value="excel���̵�" onclick="location.href='/test/excel'">
<input type="button" value="ellipsis���̵�" onclick="location.href='/test/ellipsis'">
</body>
</html>
