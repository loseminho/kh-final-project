package kr.or.notice.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;

import common.FileRename;
import kr.or.notice.model.service.NoticeService;
import kr.or.notice.model.vo.Notice;
import kr.or.notice.model.vo.NoticeFile;
import kr.or.notice.model.vo.NoticePageData;

@Controller
public class NoticeController {
	@Autowired
	private NoticeService service;
	
	//공지사항 이동
	@RequestMapping (value="/notice.do")
	public String notice(int reqPage ,Model model) {
		NoticePageData npd = service.noticeList(reqPage);
		model.addAttribute("n",npd);
		/*
		model.addAttribute("list",npd.getPageNavi());
		model.addAttribute("list",npd.getReqPage());
		model.addAttribute("list",npd.getNumPerPage());
		*/
		System.out.println(npd);
		return "board/notice";
	}
	
	//공지사항 글쓰기 이동
	@RequestMapping(value="/writeNoticeFrm.do")
	public String writeNoticeFrm() {
		return "board/writeNotice";
	}
	
	//공지사항 insert
	@RequestMapping(value="/writeNotice.do")
	public String writeNotice(Notice n, MultipartFile[] noticeFile, HttpServletRequest request) {
		ArrayList<NoticeFile> fileList = new ArrayList<NoticeFile>();
		if(!noticeFile[0].isEmpty()) {
			String savePath = request.getSession().getServletContext().getRealPath("/resources/upload/notice/");
			for(MultipartFile file : noticeFile ) {
				String filename = file.getOriginalFilename();
				String filepath = FileRename.fileRename(savePath, filename);
				try {
					FileOutputStream fos = new FileOutputStream(new File(savePath+filepath));
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
				NoticeFile nf = new NoticeFile();
				nf.setFilename(filename);
				nf.setFilepath(filepath);
				fileList.add(nf);
			}
		}
		n.setFileList(fileList);
		int result = service.insertNotice(n);
		return "redirect:/notice.do";
	}
	
	//공지사항 상세보기 
	@RequestMapping(value="/noticeView.do")
	public String noticeView(int noticeNo, Model model) {
		Notice n = service.selectOneNotice(noticeNo);
		model.addAttribute("n",n);
		return "board/noticeView";
	}
	
	//공지사항 삭제 
	@RequestMapping(value="/noticeDelete.do")
	public String noticeDelete(int noticeNo, HttpServletRequest request) {
		System.out.println(noticeNo);
		ArrayList<NoticeFile>list = service.deleteNotice(noticeNo);
		//파일삭제
		if(list != null) {
			String path = request.getSession().getServletContext().getRealPath("/resources/upload/notice/");
			for(NoticeFile file : list) {
				File delFile = new File(path+file.getFilepath());
				delFile.delete();
			}
		}
		return "redirect:/notice.do";
	}
}
