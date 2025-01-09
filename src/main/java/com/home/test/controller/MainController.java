package com.home.test.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MainController {

	@GetMapping("main")
	public String mainPage() {
		System.out.println("test");
		return "home";
	}

	@GetMapping("map")
	public String mapPage() {
		System.out.println("test");
		return "page/map";
	}

	@GetMapping("excel")
	public String excelPage() {
		System.out.println("test");
		return "page/excel";
	}

	@GetMapping("excelDownload")
	public void excelDownload(HttpServletResponse res) {
	}

	@GetMapping("mindMap")
	public String mindMap() {

		return "page/mindMap";
	}

	@GetMapping("test")
	@ResponseBody
	public List<String> test() {
		List<String> list = new ArrayList<String>();
		System.out.println("tes ����");

		list.add("test");

		return list;
	}

	@GetMapping("ellipsis")
	public String ellipsis() {

		return "page/ellipsis";
	}

	@GetMapping("search")
	public String search() {

		return "page/search";
	}

	@GetMapping("searchList")
	@ResponseBody
	public List<String> searchList() {
		List<String> list = new ArrayList<String>();

		list.add("텔레그램");
		list.add("카카오톡");
		list.add("트위터");
		list.add("인스타그램");
		list.add("페이스북");
		list.add("라인");

		return list;

	}
}