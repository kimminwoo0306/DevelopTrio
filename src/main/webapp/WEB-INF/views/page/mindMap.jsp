<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import="java.time.LocalDateTime, java.time.format.DateTimeFormatter" %>

<!DOCTYPE html>
<html>
<script src="resources/static/lib/d3.js"></script>  
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="resources/static/js/common/color.js"></script>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
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
<%
    // 현재 시간 가져오기
    LocalDateTime now = LocalDateTime.now();
    // 타임스탬프 포맷 (년월일시분초)
    String timestamp = now.format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
%>
<body>
	<input type="text" value="넘칠경우 표시됩니다." title="넘칠경우 표시됩니다." class="texttest">
	<div class="svg-container">	
		<svg id="svg" width="800" height="1000"></svg>
	</div>
	<input type="button" value="ajax요청" onclick="test()">
	<input type="button" value="Home" onClick="location.href='/test'">
	<script src="resources/static/js/mindMap.js?ver=<%= timestamp %>"></script>
	
</body>
</html>