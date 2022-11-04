package kr.or.mbti.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import kr.or.mbti.model.service.MbtiService;
import kr.or.mbti.model.vo.MbtiData;

@Controller
public class MbtiController {
	
	//드라이버 ID
    public static final String WEB_DRIVER_ID = "webdriver.chrome.driver"; 
    //드라이버 경로   
    public static final String WEB_DRIVER_PATH = "C:\\Users\\dahye\\Downloads\\chromedriver.exe";

	@Autowired
	private MbtiService service;
	
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
    		rePermutation(driver, list, 2, 12);
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
	
	//중복순열
	private void rePermutation(ChromeDriver driver, LinkedList<Integer> list, int n, int r) {
		if(list.size() == r){ // 숫자가 12번까지 채워졌으면

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
					
					// 결과 이미지 가져오기
					WebElement resultImg = driver.findElement(By.className("title-image"));
					String resultVal = resultImg.getAttribute("class");
					
					String str1 = resultVal.replace("title-image c", "");
					int resultType = Integer.parseInt(str1);
					
					// 친구 이미지 가져오기
					WebElement friendImg = driver.findElement(By.cssSelector("div#left > .pair-img-container"));
					String friendVal = friendImg.getAttribute("class");
					
					String str2 = friendVal.replace("pair-img-container c", "");
					int friendType = Integer.parseInt(str2);
					
					// 파트너 이미지 가져오기
					WebElement partnerImg = driver.findElement(By.cssSelector("div#right > .pair-img-container"));
					String partnerVal = partnerImg.getAttribute("class");
					
					String str3 = partnerVal.replace("pair-img-container c", "");
					int partnerType = Integer.parseInt(str3);
					
            		MbtiData md = new MbtiData(0, list.get(0), list.get(1), list.get(2), list.get(3), list.get(4), list.get(5), list.get(6), list.get(7), list.get(8), list.get(9), list.get(10), list.get(11), resultType, friendType, partnerType);
            		int result = service.insertMbtiType(md);
            		
            		if(result > 0) {
            			// 페이지 요청
                        driver.get("https://heydoggy.life/doggyschool.html");
            			// System.out.println("restart");
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
}
