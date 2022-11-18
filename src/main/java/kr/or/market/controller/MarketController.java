package kr.or.market.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

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
	public String inputMarket(MarketDog md, MultipartFile[] photo,HttpServletRequest request, Integer[] procedure) {
		System.out.println("사진길이"+photo.length);
		System.out.println("procedure길이"+procedure.length);
		for(Integer i : procedure) {
			System.out.println("사진순서"+i);
		}
		String savePath = request.getSession().getServletContext().getRealPath("/resources/upload/market/");
		ArrayList<MarketDogFile> list = new ArrayList<MarketDogFile>();
		if(photo[0].isEmpty()) {
		}else{
			for(int i=0;i<photo.length;i++) {
				if(photo[i].isEmpty()) {
					continue;
				}
				String fileName = photo[i].getOriginalFilename();
				String filePath = fileRename.fileRename(savePath, fileName);
				
				File upFile = new File(savePath+filePath);
				try {
					FileOutputStream fos = new FileOutputStream(upFile);
					BufferedOutputStream bos = new BufferedOutputStream(fos);
					byte[] bytes = photo[i].getBytes();
					bos.write(bytes);
					bos.close();
					MarketDogFile mdf = new MarketDogFile();
					mdf.setFilePath(filePath);
					mdf.setFileName(fileName);
					mdf.setFileProcedure(procedure[i]);
					System.out.println("mdf컨트롤러"+mdf);
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
		int result = service.inputMarket(md,procedure);
		return "redirect:saleDogList.do";
	}
	@ResponseBody
	@RequestMapping(value="/selectTypeList.do", produces="application/json;charset=utf-8")
	public String selectTypeList(Integer userInput) {
		ArrayList<DogType> list = service.selectTypeList(userInput);
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
		md.setMarketNo(marketNo);
		model.addAttribute("md", md);
		return "market/updateFrm";
	}
	
	@RequestMapping(value="/updateMarket.do")
	public String updateMarket(MarketDog md,Integer[] procedure, MultipartFile[] photo,HttpServletRequest request, String[] pastFilePath, String[] pastFileName, Integer[] pastFileNo) {
		if(pastFilePath != null) {
			System.out.println("과거파일(지우는거)"+pastFilePath.length);
			for(String str:pastFilePath) {
				System.out.println("과거파일(지우는거)"+str);
			}
		}
		/*
		if(pastFileNo==null && pastFilePath==null) {
			
		}else {
			for(int i=0;i<pastFilePath.length;i++) {
				MarketDogFile mdf1 = new MarketDogFile();
				mdf1.setMarketNo(md.getMarketNo());
				mdf1.setFilePath(pastFilePath[i]);
				pastList.add(mdf1);
			}
		}
		*/
		String savePath = request.getSession().getServletContext().getRealPath("/resources/upload/market/");
		ArrayList<MarketDogFile> list = new ArrayList<MarketDogFile>();
			for(int i=0;i<photo.length;i++) {
				if(photo[0].isEmpty()) {
					continue;
				}
				String fileName = photo[i].getOriginalFilename();
				String filePath = fileRename.fileRename(savePath, fileName);
				File upFile = new File(savePath+filePath);
				try {
					FileOutputStream fos = new FileOutputStream(upFile);
					BufferedOutputStream bos = new BufferedOutputStream(fos);
					byte[] bytes = photo[i].getBytes();
					bos.write(bytes);
					bos.close();
					MarketDogFile mdf = new MarketDogFile();
					mdf.setMarketNo(md.getMarketNo());
					mdf.setFilePath(filePath);
					mdf.setFileName(fileName);
					mdf.setFileProcedure(procedure[i]);
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
		int result = service.updateMarket(md,pastFileNo,photo);
		/*
		if(pastFilePath != null) {
			for(String filePath : pastFilePath) {
				File delFile = new File(savePath+filePath);
				delFile.delete();
			}
		}
		*/
		return "redirect:saleDogList.do";
	}
	
	@RequestMapping(value="/deleteMarket.do")
	public String deleteMarket(int marketNo) {
		int result = service.deleteMarket(marketNo);
		return "redirect:saleDogList.do";
	}
}
