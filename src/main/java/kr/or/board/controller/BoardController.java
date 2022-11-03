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
import kr.or.board.model.vo.QnaComment;
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
		int result = service.insertQnaBoard(q);
		return "redirect:/faqQnaBoardFrm.do";
	}
	/* 문의게시판 이동 */ 
	@RequestMapping(value="/qnaView.do")
	public String qnaView(int qnaNo, Model model) {
		QnaBoard qb = service.selectOneQna(qnaNo);
		model.addAttribute("qb",qb);
		//해당 게시물 댓글 리스트 조회  
		ArrayList<QnaComment>list = service.commentListView(qnaNo);
		model.addAttribute("list",list);
		System.out.println(list);
		return "board/qnaView";
	}
	
	/* 문의게시판 삭제  */
	@RequestMapping(value="/qnaBoardDelete.do")
	public String qnaBoardDelete(int qnaNo, HttpServletRequest request) {
		System.out.println(qnaNo);
		//qnaBoard 삭제
		ArrayList<QnaFile> list = service.qnaBoardDelete(qnaNo);
		//파일삭제 
		if(list != null) {
			String path = request.getSession().getServletContext().getRealPath("/resources/upload/board/");
			for(QnaFile file : list) {
				File delFile = new File(path+file.getFilepath());
				delFile.delete();
			}
		}
		return "redirect:/faqQnaBoardFrm.do";
	}
	
	//문의게시판 댓글 insert 
	@RequestMapping(value="/insertQnaComment.do")
	public String insertQnaComment(QnaComment qc,Model model) {
		int result = service.insertQnaComment(qc);
		if(result >0) {
			model.addAttribute("qc",qc);
			return "redirect:/qnaView.do?qnaNo="+qc.getQnaNo();
		} else {
			return "null";
		}
	}
	//문의게시판 댓글 수정 
	@RequestMapping(value="/updateQnaComment.do")
	public String updateQnaComment(QnaComment qc, Model model) {
		int result = service.updateQnaComment(qc);
		if(result>0) {
			model.addAttribute("qc",qc);
			return "redirect:/qnaView.do?qnaNo="+qc.getQnaNo();
		} else {
			return "null";
		}
	}
	//문의게시판 댓글 삭제 
	@RequestMapping(value="/deleteQnaComment.do")
	public String deleteQnaComment(QnaComment qc, Model model) {
		System.out.println(qc);
		int result = service.deleteQnaComment(qc);
		if(result>0) {
			model.addAttribute("qc",qc);
			return "redirect:/qnaView.do?qnaNo="+qc.getQnaNo();
		} else {
			return "null";
		}
	}
	//문의게시판 수정 페이지 이동 
	@RequestMapping(value="/qnaBoardUpdateFrm.do")
	public String qnaBoardUpdateFrm(int qnaNo, Model model) {
		QnaBoard qb = service.selectOneQna(qnaNo);
		model.addAttribute("qb",qb);
		return "board/qnaUpdate";
	}
	
	//문의게시판 수정  
	@RequestMapping(value="/qnaUpdate.do")
	public String qnaUpdate(QnaBoard q,int[]fileNoList,String[]filepathList, MultipartFile[] boardFile, HttpServletRequest request) {
		ArrayList<QnaFile> fileList = new ArrayList<QnaFile>();
		String savepath = request.getSession().getServletContext().getRealPath("/resources/upload/board/");
		
		//게시물 수정시 추가로 첨부한 파일 업로드 
		if(!boardFile[0].isEmpty()) {
			for(MultipartFile file : boardFile) {
				String filename = file.getOriginalFilename();
				String filepath = FileRename.fileRename(savepath,filename);
				File upFile = new File(savepath+filepath);
				try {
					FileOutputStream fos = new FileOutputStream(upFile);
					BufferedOutputStream bos  = new BufferedOutputStream(fos);
					byte[] bytes = file.getBytes();
					bos.write(bytes);
					bos.close();
					QnaFile qf = new QnaFile();
					qf.setFilename(filename);
					qf.setFilepath(filepath);
					fileList.add(qf);
				} catch (FileNotFoundException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
			}// forEach end
		}
		q.setFileList(fileList);
		int result = service.updateQnaBoard(q, fileNoList);
		if(fileNoList != null &&(result == (fileList.size()+fileNoList.length+1))) {
			// fileList.size() = 추가로 첨부한 파일 개수
			// fileNoList.length = 삭제할 파일 개수
			// 1 = board 테이블 수정한 결과값
			
			if(filepathList != null) {
				//서버에 업로드 되어있는 파일 삭제
				for(String filepath : filepathList) {
					File delFile = new File(savepath+filepath);
					delFile.delete();
				}
			}
		}
		return "redirect:/qnaView.do?qnaNo="+q.getQnaNo();
	}
	
}
