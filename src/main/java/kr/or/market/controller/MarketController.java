package kr.or.market.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;

import common.FileRename;
import kr.or.market.model.service.MarketService;
import kr.or.market.model.vo.MarketDog;

@Controller
public class MarketController {
	@Autowired
	private MarketService service;
	@Autowired
	private FileRename fileRename;
	
	@RequestMapping(value="/success.do")
	public String seccess() {
		return "market/paySuccess";
	}
	
	@ResponseBody
	@RequestMapping(value="/searchOneInfo.do", produces="application/json;charset=utf-8")
	public String selectOneSaleDog(int marketNo) {
		MarketDog md = service.selectOne(marketNo);
		return new Gson().toJson(md);
	}
	
	@RequestMapping(value="/saleDogList.do")
	public String saleDogListView() {
		return "market/saleDog";
	}
	@ResponseBody
	@RequestMapping(value="/marketListCnt.do", produces="application/json;charset=utf-8")
	public String marketListCnt(MarketDog md) {
		int result = service.marketListCnt(md);
		return new Gson().toJson(result);
	}
	@ResponseBody
	@RequestMapping(value="/selectFilterList.do", produces="application/json;charset=utf-8")
	public String filterSelect(MarketDog md) {
		ArrayList<MarketDog> list = service.filterSelect(md);
		return new Gson().toJson(list);
	}
	@RequestMapping(value="/writeFrm.do")
	public String writeFrm() {
		return "market/writeFrm";
	}
	@RequestMapping(value="/inputMarket.do")
	public String inputMarket(int marketNo, MultipartFile[] photo,HttpServletRequest request) {
		String savePath = request.getSession().getServletContext().getRealPath("/resources/upload/market/");
		System.out.println(marketNo);
		System.out.println(photo.length);
		for(MultipartFile file : photo) {
			String filename = file.getOriginalFilename();
			String filepath = fileRename.fileRename(savePath, filename);
			
			File upFile = new File(savePath+filepath);
			try {
				FileOutputStream fos = new FileOutputStream(upFile);
				BufferedOutputStream bos = new BufferedOutputStream(fos);
				byte[] bytes = file.getBytes();
				bos.write(bytes);
				bos.close();
			} catch (FileNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return "market/saleDog";
	}
}
