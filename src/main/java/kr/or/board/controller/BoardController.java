package kr.or.board.controller;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.lang.ProcessBuilder.Redirect;
import java.util.ArrayList;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;
import com.sun.xml.internal.org.jvnet.fastinfoset.FastInfosetSerializer;

import common.FileRename;
import kr.or.board.model.service.BoardService;
import kr.or.board.model.vo.QnaBoard;
import kr.or.board.model.vo.QnaComment;
import kr.or.board.model.vo.QnaFile;
import kr.or.notice.model.vo.Notice;

@Controller
public class BoardController {
	@Autowired
	private BoardService service;
	
	//문의게시판 이동 
	@RequestMapping(value="/faqQnaBoardFrm.do")
	public String faqQnaBoardFrm(Model model) {
		int totalCount = service.selectQnaCount();
		model.addAttribute("totalCount",totalCount);
		System.out.println(totalCount);
		return "board/faqQna";
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
		System.out.println(qb);
		model.addAttribute("qb",qb);
		//해당 게시물 댓글 리스트 조회  
		ArrayList<QnaComment>list = service.commentListView(qnaNo);
		model.addAttribute("list",list);
		return "board/qnaView";
	}
	
	/* 문의게시판 삭제  */
	@RequestMapping(value="/qnaBoardDelete.do")
	public String qnaBoardDelete(int qnaNo, HttpServletRequest request, Model model) {
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
			model.addAttribute("title", "게시글 삭제 완료");
			model.addAttribute("msg", "삭제가 완료되었습니다.");
			model.addAttribute("icon", "success");
			model.addAttribute("loc", "/faqQnaBoardFrm.do");
			return "common/msg";
		} else {
			return null;
			
		}
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
	public String qnaBoardUpdateFrm(int qnaNo,Model model) {
		QnaBoard qb = service.selectOneQna(qnaNo);
		model.addAttribute("qb",qb);
		System.out.println("수정게시판이동 ::::"+qb);
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
	
	//문의게시판 검색하기 
	@ResponseBody
	@RequestMapping (value="/searchQnaAjax.do",produces = "application/json;charset=utf-8")
	public String searchQnaboard(QnaBoard q) {
		ArrayList<QnaBoard> list = service.searchQnaBoard(q);
		Gson gson = new Gson();
		String result = gson.toJson(list);
		return result;
	}
	//더보기 버튼 
	@ResponseBody
	@RequestMapping(value="/moreQna.do", produces = "application/json;charset=utf-8")
	public String moreQnaAjax(int start, int amount) {
		int totalCount = service.selectQnaCount();
		ArrayList<QnaBoard> list = service.moreQna(start,amount);
		Gson gson = new Gson();
		String result = gson.toJson(list);
		System.out.println(result);
		return result;
	}

	
	//문의게시판 파일다운 
	@RequestMapping(value="/qnaFileDown.do")
	public void qnaFileDown(int fileNo, HttpServletRequest request, HttpServletResponse response) throws IOException {
		//fileNo : filename,filepath db 조회
		//request : 파일 위치하는 경로
		//response : 사용자에게 파일 보내주기 위해 필요
		//클릭한 파일은 하나이므로 QnaFile 로 가져옴 
		QnaFile file = service.qnaFileDown(fileNo);
		String savePath = request.getSession().getServletContext().getRealPath("/resources/upload/board/");
		String downFile = savePath+file.getFilepath();
		
		FileInputStream fis = new FileInputStream(downFile);
		BufferedInputStream bis = new BufferedInputStream(fis);
		ServletOutputStream sos = response.getOutputStream();
		BufferedOutputStream bos = new BufferedOutputStream(sos);
		
		String resFilename = new String (file.getFilename().getBytes("UTF-8"),"ISO-8859-1");
		response.setContentType("application/octet-stream");
		response.setHeader("Content-Disposition", "attachment;filename="+resFilename );
		while(true) {
			int read = bis.read();
			if(read != -1) {
				bos.write(read);
			}else {
				break;
			}
		}
		
		bos.close();
		bis.close();
		
	}
	
}
