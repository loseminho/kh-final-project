package kr.or.mbti.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

import org.openqa.selenium.By;
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
            
            //웹 주소 넣기
            apiurl = "https://www.dogcare-mbti.com/";
            
            ChromeOptions options = new ChromeOptions();
            options.addArguments("--disable-popup-blocking");
            options.addArguments("--disable-default-apps");
            options.addArguments("--disable-notifications");

            //webdriver 객체생성
            ChromeDriver driver = new ChromeDriver(options);

            //빈탭생성
            driver.executeScript("window.open('about:blank','_blank');");

            //탭목록 가져오기
            List<String> tabs = new ArrayList<String>(driver.getWindowHandles());

            //첫번쨰 탭으로 전환
            driver.switchTo().window(tabs.get(0));

            //웹페이지 요청
            driver.get(apiurl);
            
    		LinkedList<Integer> list = new LinkedList<>();
    		
    		//중복순열
    		System.out.println("****중복순열****");
    		rePermutation(driver, list, 3, 10);
    		list.clear();
        	
            //창 닫기
            driver.close();
            
            //chrome 종료
            driver.quit();
        } catch (Exception e) {
            e.printStackTrace();
        }

        // ajax로 반환
        return "success"; 
    }
	
	//중복순열
	private void rePermutation(ChromeDriver driver, LinkedList<Integer> list, int n, int r) {
		if(list.size() == r){ // 숫자가 10번까지 채워졌으면

        	// input 값에 값 입력하기
        	WebElement humanNameInput = driver.findElementById("name");
        	humanNameInput.sendKeys("사람이름");
        	WebElement dogNameInput = driver.findElementById("dog");
        	dogNameInput.sendKeys("강아지이름");
        	
        	// 시작 버튼 클릭하기
        	WebElement startBtn = driver.findElement(By.cssSelector(".input-field + button"));
        	startBtn.click();
        	try {
				Thread.sleep(1000);
			} catch (InterruptedException e1) {
				e1.printStackTrace();
			}
        	
        	List<WebElement> btns = driver.findElements(By.cssSelector(".q-title ~ .answer-btn"));
			
			for(int i=0; i<r; i++){
				int num = list.get(i);
				// System.out.print(num+" ");
				btns.get(num).click();
				if(i != 9) {
					try {
						Thread.sleep(1000);
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
					btns = driver.findElements(By.cssSelector(".q-title ~ .answer-btn"));
				} else { // 마지막 질문이면
					try {
						Thread.sleep(9000);
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
					WebElement img = driver.findElement(By.cssSelector(".container > img"));
            		String imgSrc = img.getAttribute("src");
            		//System.out.println("imgSrc : " + imgSrc);
            		
            		MbtiData md = new MbtiData(0, list.get(0), list.get(1), list.get(2), list.get(3), list.get(4), list.get(5), list.get(6), list.get(7), list.get(8), list.get(9), imgSrc);
            		int result = service.insertMbtiType(md);
            		//System.out.println("result : " + result);
            		
            		if(result > 0) {
            			WebElement restartBtn = driver.findElement(By.cssSelector(".modal-container + button.invert"));
            			restartBtn.click();
            			System.out.println("restart");
            		}
				}
			}
			//System.out.println();
			return;
		}
		
		for(int i=0; i<n; i++){ // 숫자가 10번까지 안 채워졌으면
			list.add(i);
			rePermutation(driver, list, n, r);
			list.removeLast();//해당 넘버를 다시 제거 (즉,뽑지 않고 다음 번호 뽑기위함)
		}
		
	}
}
