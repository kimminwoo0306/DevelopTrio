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
    // ���� �ð� ��������
    LocalDateTime now = LocalDateTime.now();
    // Ÿ�ӽ����� ���� (����Ͻú���)
    String timestamp = now.format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
%>
<body>
	<input type="text" value="��ĥ��� ǥ�õ˴ϴ�." title="��ĥ��� ǥ�õ˴ϴ�." class="texttest">
	<div class="svg-container">	
		<svg id="svg" width="800" height="1000"></svg>
	</div>
	<input type="button" value="ajax��û" onclick="test()">
	<input type="button" value="Home" onClick="location.href='/test'">
	<script src="resources/static/js/mindMap.js?ver=<%= timestamp %>"></script>
	
</body>
</html>