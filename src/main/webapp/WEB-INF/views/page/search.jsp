<%@page import="java.time.format.DateTimeFormatter"%>
<%@page import="java.time.LocalDateTime"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <title>검색 폼</title>
<style>
#autocomplete-list {
  border: 1px solid #ccc;
  border-top: none;
  max-height: 150px;
  overflow-y: auto;
  position: absolute;
  z-index: 140;
  background: white;
  width: 100%;
}

.autocomplete-item {
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
}

.autocomplete-item mark {
  background-color: yellow;
  font-weight: bold;
}

.autocomplete-item:hover {
  background-color: #f0f0f0;
}

.input-wrapper {
   display: inline-block;
   width: 150px; /* 필요한 너비로 설정 */
   overflow: hidden;
}

.input-wrapper input {
   width: 100%; /* 부모 너비에 맞게 설정 */
   white-space: nowrap; /* 텍스트가 한 줄로 표시되도록 설정 */
   overflow: hidden; /* 넘친 내용을 숨김 */
   text-overflow: ellipsis; /* 잘린 부분에 '...' 표시 */
   border: 1px solid #ccc; /* 기본 스타일 */
   padding: 5px;
   box-sizing: border-box;
   cursor: pointer; /* 마우스 포인터 변경 */
}
</style>
</head>
<body>
    <h2>검색어 자동완성</h2>
      <div style="position: relative; width: 300px;">
        <input type="text" id="search-input" placeholder="검색어 입력" style="width: 100%; padding: 10px;">
        <div id="autocomplete-list"></div>
      </div>
      <br><br><br><br>
      <div id="inputContainer"></div>
    
    <script src="resources/static/js/search.js"></script>
</body>
</html>