package kr.or.market.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.xml.ws.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.context.annotation.RequestScope;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;

import common.FileRename;
import kr.or.market.model.service.MarketService;
import kr.or.market.model.vo.DogType;
import kr.or.market.model.vo.MarketDog;
import kr.or.market.model.vo.MarketDogFile;
import kr.or.member.model.vo.Member;

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
	public String inputMarket(MarketDog md, MultipartFile[] photo,HttpServletRequest request) {
		String savePath = request.getSession().getServletContext().getRealPath("/resources/upload/market/");
		ArrayList<MarketDogFile> list = new ArrayList<MarketDogFile>();
		if(photo[0].isEmpty()) {
		}else{
			for(MultipartFile file : photo) {
				if(file.isEmpty()) {
					continue;
				}
				String fileName = file.getOriginalFilename();
				String filePath = fileRename.fileRename(savePath, fileName);
				
				File upFile = new File(savePath+filePath);
				try {
					FileOutputStream fos = new FileOutputStream(upFile);
					BufferedOutputStream bos = new BufferedOutputStream(fos);
					byte[] bytes = file.getBytes();
					bos.write(bytes);
					bos.close();
					MarketDogFile mdf = new MarketDogFile();
					mdf.setFilePath(filePath);
					mdf.setFileName(fileName);
					list.add(mdf);
					md.setFileList(list);
				} catch (FileNotFoundException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
		int result = service.inputMarket(md);
		return "redirect:saleDogList.do";
	}
	@ResponseBody
	@RequestMapping(value="/selectTypeList.do", produces="application/json;charset=utf-8")
	public String selectTypeList() {
		ArrayList<DogType> list = service.selectTypeList();
		return new Gson().toJson(list);
	}
	@RequestMapping(value="/myMarketList.do")
	public String myMarketList(Model model, @SessionAttribute Member m) {
		ArrayList<MarketDog> list = service.myMarketList(m);
		model.addAttribute("list",list);
		return "market/myMarketList";
	}
	
	@RequestMapping(value="/updateMarketFrm.do")
	public String updateMarketFrm(Model model, int marketNo) {
		MarketDog md = service.selectOne(marketNo);
		System.out.println("업데이트폼으로 가는 데이터"+md);
		md.setMarketNo(marketNo);
		model.addAttribute("md", md);
		return "market/updateFrm";
	}
	
	@RequestMapping(value="/updateMarket.do")
	public String updateMarket(MarketDog md, MultipartFile[] photo,HttpServletRequest request) {
		String savePath = request.getSession().getServletContext().getRealPath("/resources/upload/market/");
		ArrayList<MarketDogFile> list = new ArrayList<MarketDogFile>();
		System.out.println("컨트롤러에서 어떨까.?"+md);
		if(photo[0].isEmpty()) {
		}else{
			for(MultipartFile file : photo) {
				if(file.isEmpty()) {
					continue;
				}
				String fileName = file.getOriginalFilename();
				String filePath = fileRename.fileRename(savePath, fileName);
				
				File upFile = new File(savePath+filePath);
				try {
					FileOutputStream fos = new FileOutputStream(upFile);
					BufferedOutputStream bos = new BufferedOutputStream(fos);
					byte[] bytes = file.getBytes();
					bos.write(bytes);
					bos.close();
					MarketDogFile mdf = new MarketDogFile();
					mdf.setMarketNo(md.getMarketNo());
					mdf.setFilePath(filePath);
					mdf.setFileName(fileName);
					list.add(mdf);
					md.setFileList(list);
				} catch (FileNotFoundException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
		int result = service.updateMarket(md);
		return "redirect:saleDogList.do";
	}
}
