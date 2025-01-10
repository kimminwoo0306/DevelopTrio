<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.time.LocalDateTime, java.time.format.DateTimeFormatter" %>

<!DOCTYPE html>
<html>
<script src="resources/static/lib/d3.js"></script>  
<script src="resources/static/js/common/color.js"></script>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<jsp:include page="../common/header.jsp" />
<style>
	.svg-container {
		width : 1000px;
		height : 800px;
		overflow: auto;
	}
	svg {
		overflow: scroll;
	}
	.node {
      fill: #69b3a2;
    }
    .link {
      fill: none;
      stroke: #ccc;
      stroke-width: 2px;
    }
    .texttest{
    	overflow: hidden;
    	text-overflow: ellipsis;
    	width: 100px;
    }
  </style>
</head>
<body>
	<input type="text" value="넘칠경우 표시됩니다." title="넘칠경우 표시됩니다." class="texttest">
	<div class="svg-container">	
		<svg id="svg" width="800" height="1000"></svg>
	</div>
	<input type="button" value="ajax요청" onclick="test()">
	<input type="button" value="Home" onClick="location.href='/test'">
	<script src="resources/static/js/mindMap.js"></script>
	
</body>
</html>