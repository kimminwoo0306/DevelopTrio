<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.time.LocalDateTime, java.time.format.DateTimeFormatter" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<jsp:include page="../common/header.jsp" />
<script src="resources/static/js/fileDownload.js"></script>
<link href="resources/css/fileDownload.css" rel="stylesheet" type="text/css">
</head>
<body>
	<div id="drop-area">파일을 여기에 드래그 앤 드랍하세요</div>
    <input type="file" multiple="multiple" id="fileList" style="display: none;"/>
   	<input type="button" value="갱신">
    <div id="showList">
    </div>
</body>
</html>