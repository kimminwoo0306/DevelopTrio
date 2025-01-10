<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.time.LocalDateTime, java.time.format.DateTimeFormatter" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<jsp:include page="../common/header.jsp" />

<style>
    .texttest{
   		width : 200px;
   		height : 40px;
   		font-size : 16px;
    	text-overflow: ellipsis;
    }
    
    
    #text_popup {
    	position: ;
    	border : 1px solid black;
    	min-width: 100px;
    	height : 40px;
    	text-align: center;
    	line-height: 40px;
    	font-weight: bold;
    	z-index: 9999;
    	background-color : white;
    	display: none;
    }
  </style>
</head>
<body>
	<input type="text" value="넘칠경우 표시됩니다아아아아아." class="texttest">
	<br>
	<div id="text_popup">
		<label></label>
	</div>
	<input type="button" value="Home" onClick="location.href='/test'">
	
</body>
<script src="resources/static/js/ellipsis.js"></script>
</html>