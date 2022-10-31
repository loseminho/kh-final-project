package kr.or.board.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.lang.ProcessBuilder.Redirect;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;

import common.FileRename;
import kr.or.board.model.service.BoardService;
import kr.or.board.model.vo.QnaBoard;
import kr.or.board.model.vo.QnaFile;

@Controller
public class BoardController {
	@Autowired
	private BoardService service;
	
	//문의게시판 이동 
	@RequestMapping(value="/faqQnaBoardFrm.do")
	public String faqQnaBoardFrm() {
		return "board/faqQna";
	}
		
	
	//문의게시판 list ajax
	@ResponseBody
	@RequestMapping(value="/allQnaAjax.do", produces = "application/json;charset=utf-8")
	public String allQnaAjax() {
		ArrayList<QnaBoard> list = service.allQnaBoard();
		Gson gson = new Gson();
		String result = gson.toJson(list);
		return result;
	}
	

	//문의게시판 작성페이지 이동 
	@RequestMapping(value="/writeQnaFrm.do")
	public String writeQnaFrm() {
		return "board/writeQnaFrm";
	}
	
	//문의게시판 insert
	@RequestMapping(value="/writeQna.do")
	public String writeQna(QnaBoard q, MultipartFile[] boardFile, HttpServletRequest request) {
		System.out.println(q.getQnaWriter());
		ArrayList<QnaFile> fileList = new ArrayList<QnaFile>();
		if(!boardFile[0].isEmpty()) {
			String savePath = request.getSession().getServletContext().getRealPath("/resources/upload/board/");
			for(MultipartFile file : boardFile) {
				String filename = file.getOriginalFilename();
				String filepath = FileRename.fileRename(savePath,filename);
				try {
					FileOutputStream fos = new FileOutputStream(new File(savePath+filepath));
					BufferedOutputStream bos  = new BufferedOutputStream(fos);
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
				
				QnaFile qf = new QnaFile();
				qf.setFilename(filename);
				qf.setFilepath(filepath);
				fileList.add(qf);
			}
		}
		q.setFileList(fileList);
		System.out.println(q);
		int result = service.insertQnaBoard(q);
		return "board/faqQna";
	}
	/* 문의게시판 이동 */ 
	@RequestMapping(value="/qnaView.do")
	public String qnaView(int qnaNo, Model model) {
		System.out.println(qnaNo);
		QnaBoard qb = service.selectOneQna(qnaNo);
		model.addAttribute("qb",qb);
		System.out.println(qb);
		return "board/qnaView";
	}
}
