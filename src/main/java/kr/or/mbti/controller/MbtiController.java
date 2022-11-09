package kr.or.mbti.controller;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;

import com.google.gson.Gson;

import kr.or.dog.controller.DogController;
import kr.or.dog.model.service.DogService;
import kr.or.dog.model.vo.Dog;
import kr.or.mbti.model.service.MbtiService;
import kr.or.mbti.model.vo.MbtiData;
import kr.or.mbti.model.vo.MbtiResult;
import kr.or.member.model.vo.Member;

@Controller
public class MbtiController {
	
	//드라이버 ID
    public static final String WEB_DRIVER_ID = "webdriver.chrome.driver"; 
    //드라이버 경로   
    public static final String WEB_DRIVER_PATH = "C:\\Users\\dahye\\Downloads\\chromedriver.exe";

	@Autowired
	private MbtiService service;
	@Autowired
	private DogService dogService;
	
	@RequestMapping(value="/mbtiMateMain.do")
	public String mbtiMateMain() {
		return "walkmate/mbtiMatePage/mbtiMateMain";
	}
	
	@ResponseBody
	@RequestMapping(value="/crawling.do")
	public String crawling(){
        String apiurl;
        
        try {
            System.setProperty(WEB_DRIVER_ID, WEB_DRIVER_PATH);
            
            // 웹 주소 넣기
            apiurl = "https://heydoggy.life/doggyschool.html";
            
            ChromeOptions options = new ChromeOptions();
            options.addArguments("--disable-popup-blocking");
            options.addArguments("--disable-default-apps");
            options.addArguments("--disable-notifications");
            
            // webdriver 객체생성
            ChromeDriver driver = new ChromeDriver(options);
            driver.manage().window().setSize(new Dimension(400, 850));
            
            // 빈 탭 생성
            driver.executeScript("window.open('about:blank','_blank');");

            // 탭목록 가져오기
            List<String> tabs = new ArrayList<String>(driver.getWindowHandles());

            // 첫번쨰 탭으로 전환
            driver.switchTo().window(tabs.get(0));

            // 웹페이지 요청
            driver.get(apiurl);
            
    		// 중복순열
            LinkedList<Integer> list = new LinkedList<>();
            System.out.println("****중복순열****");
            rePermutation(driver, list, 2, 12);
            System.out.println("****중복순열 끝****");
    		list.clear();
        	
            // 창 닫기
            driver.close();
            
            // chrome 종료
            driver.quit();
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        // ajax로 반환
        return "success"; 
    }
	
	//중복순열 : n개의 수 중에서 하나를 r번 선택
	private void rePermutation(ChromeDriver driver, LinkedList<Integer> list, int n, int r) {
		if(list.size() == r){ // 숫자가 12번까지 채워졌으면
			String answer = "";

			// 시작 버튼 클릭하기
			WebElement startBtn = driver.findElement(By.cssSelector("button.pb1"));
			startBtn.sendKeys(Keys.ENTER);
			
        	// input 값에 값 입력하기
			WebElement dogNameInput = driver.findElementById("dogname-input");
        	dogNameInput.sendKeys("개이름");
        	
        	// 시작 버튼 클릭하기
			WebElement startBtn2 = driver.findElement(By.cssSelector("button.pb2"));
			startBtn2.sendKeys(Keys.ENTER);
			
        	try {
				Thread.sleep(1000);
			} catch (InterruptedException e1) {
				e1.printStackTrace();
			}
			
			for(int i=0; i<r; i++){ // 0 ~ 11
				int num = list.get(i);
				
				List<WebElement> answerBtns = driver.findElements(By.cssSelector("div.current > .quteion_btns > button"));
				answerBtns.get(num).sendKeys(Keys.ENTER);
				
				// 선택한 답 다 더해줌
				answer += num;
				// System.out.println(answer);
				
				if(i != 11) {
					try {
						Thread.sleep(1000);
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
					answerBtns = driver.findElements(By.cssSelector("div.current > .quteion_btns > button"));
				} else { // 마지막 질문이면
					try {
						Thread.sleep(1000);
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
					
					// 결과값 가져오기
					WebElement resultImg = driver.findElement(By.className("title-image"));
					String resultVal = resultImg.getAttribute("class");
					String resultType = resultVal.replace("title-image c", "");	
					
					MbtiData md = new MbtiData(0, answer, resultType);
            		int result = service.insertMbtiType(md);
            		
            		if(result > 0) {
            			driver.get("https://heydoggy.life/doggyschool.html");
            			System.out.println("restart");
            		} else {
            			System.out.println("error");
            		}
				}
			}
			return;
		}
		
		for(int i=0; i<n; i++){ // 숫자가 12번까지 안 채워졌으면 0 ~ 1
			list.add(i);
			rePermutation(driver, list, n, r);
			list.removeLast();// 해당 넘버를 다시 제거 (즉,뽑지 않고 다음 번호 뽑기위함)
		}
		
	}
	
	@RequestMapping(value="/updateMbti.do")
	public String selectMbtiResult(MbtiResult mr, Model model, @SessionAttribute Member m, HttpSession session) {
		int memberNo = m.getMemberNo();
		mr.setMemberNo(memberNo);
		
		// 검사 결과, 친구 타입 리스트, 파트너 타입 리스트를 넣은 map 받기
		HashMap<String, Object> map = service.selectMbtiResult(mr);
		
		// 검사 결과 반영한 반려견 리스트를 session에 저장
		ArrayList<Dog> list = dogService.selectMyDogList(memberNo);
		m.setDogList(list);
		session.setAttribute("m", m);
		
		model.addAttribute("result", map.get("result"));
		model.addAttribute("friend", map.get("friend"));
		model.addAttribute("partner", map.get("partner"));
		return "walkmate/mbtiMatePage/mbtiMateResult";
	}
}
