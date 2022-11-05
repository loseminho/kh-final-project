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
        String path = "C:/Users/dahye/Downloads/mbti/mbti.xlsx";

        // 엑셀 파일 생성
        Workbook workbook = new XSSFWorkbook();
        
        // 엑셀 파일의 sheet 생성
        Sheet sheet = workbook.createSheet("sheet name");
        
        // 첫번째 row 생성
        Row titleRow = sheet.createRow(0);
        
        for(int i=0; i<13; i++) {
        	//  cell 추가
        	Cell titleCell = titleRow.createCell(i);
        	System.out.println(i+"번째 칸 만들었음");
        	String val = "";
        	
        	if(i != 12) {
        		// cell에 값을 입력
        		val = (i+1) + "번 문제";
        	} else { // 첫번째 row의 마지막 cell에는
        		val = "결과 유형";
        	}
        	
        	titleCell.setCellValue(val);
    		System.out.println(val+"을 입력함");
        }
		
        
        
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
            rePermutation(driver, list, 2, 12, sheet);
    		list.clear();
        	
            // 창 닫기
            driver.close();
            
            // chrome 종료
            driver.quit();
        } catch (Exception e) {
            e.printStackTrace();
        }

		try {
	        // 파일 생성
			FileOutputStream fileOutputStream  = new FileOutputStream(path);
            // 엑셀파일로 작성
			workbook.write(fileOutputStream);
			fileOutputStream.close();
			workbook.close();
			System.out.println("종료!");
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
        
        // ajax로 반환
        return "success"; 
    }
	
	//중복순열 : n개의 수 중에서 하나를 r번 선택
	private void rePermutation(ChromeDriver driver, LinkedList<Integer> list, int n, int r, Sheet sheet) {
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

			// row 추가
			int rows = sheet.getPhysicalNumberOfRows();
			Row titleRow = sheet.createRow(rows);
			System.out.println(rows+"번째 줄 만들었음");
			
        	try {
				Thread.sleep(1000);
			} catch (InterruptedException e1) {
				e1.printStackTrace();
			}
			
			for(int i=0; i<r; i++){ // 0 ~ 11
				int num = list.get(i);
				
				List<WebElement> answerBtns = driver.findElements(By.cssSelector("div.current > .quteion_btns > button"));
				answerBtns.get(num).sendKeys(Keys.ENTER);
				
				// cell 추가
				Cell titleCell = titleRow.createCell(i);
				System.out.println(i+"번째 칸 만들었음");
				
				// cell에 값을 입력
				titleCell.setCellValue(num);
				System.out.println(num+"을 입력함");
				
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
					String resultType = resultVal.replace("title-image c", "");	
					int result = Integer.parseInt(resultType);
					
					// cell 추가
					Cell resultCell = titleRow.createCell(i+1);
					System.out.println("결과넣을 "+(i+1)+"번째 칸 만들었음");
					
					// cell에 값을 입력
					resultCell.setCellValue(result);
					System.out.println(result+"을 입력함");
					
                    driver.get("https://heydoggy.life/doggyschool.html");
        			System.out.println("restart");
				}
			}
			return;
		}
		
		for(int i=0; i<n; i++){ // 숫자가 12번까지 안 채워졌으면 0 ~ 1
			list.add(i);
			rePermutation(driver, list, n, r, sheet);
			list.removeLast();// 해당 넘버를 다시 제거 (즉,뽑지 않고 다음 번호 뽑기위함)
		}
		
	}
}
