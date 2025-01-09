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
    <title>�˻� ��</title>
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
   width: 150px; /* �ʿ��� �ʺ�� ���� */
   overflow: hidden;
}

.input-wrapper input {
   width: 100%; /* �θ� �ʺ� �°� ���� */
   white-space: nowrap; /* �ؽ�Ʈ�� �� �ٷ� ǥ�õǵ��� ���� */
   overflow: hidden; /* ��ģ ������ ���� */
   text-overflow: ellipsis; /* �߸� �κп� '...' ǥ�� */
   border: 1px solid #ccc; /* �⺻ ��Ÿ�� */
   padding: 5px;
   box-sizing: border-box;
   cursor: pointer; /* ���콺 ������ ���� */
}
</style>
</head>
<body>
    <h2>�˻��� �ڵ��ϼ�</h2>
      <div style="position: relative; width: 300px;">
        <input type="text" id="search-input" placeholder="�˻��� �Է�" style="width: 100%; padding: 10px;">
        <div id="autocomplete-list"></div>
      </div>
      <br><br><br><br>
      <div id="inputContainer"></div>
    
    <script src="resources/static/js/search.js"></script>
</body>
</html>