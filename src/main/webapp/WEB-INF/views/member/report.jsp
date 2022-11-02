<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="/resources/css/member/report.css">

<div class="report-wrap">
    <span class="material-icons close-icon" id="report-modal-close">close</span>

    <div class="report-content">
        <h1>신고하기</h1>
        
        <!-- 신고 내용 -->
        <form class="report-form" action="" method="post">
            <!-- 신고 유형 -->
            <div class="report-type">
                <p>신고 유형</p>
                <select name="reportType">
                    <option value=1>신고 유형1</option>
                    <option value=2>신고 유형2</option>
                    <option value=3>신고 유형3</option>
                </select>
            </div>
            
            <!-- 신고 상세 이유 -->
            <div class="report-reason">
                <p>신고 상세 이유</p>
                
                <!-- 신고 상세 이유 입력 -->
                <div class="report-input">
                    <textarea></textarea>
                </div>
            </div>
            
            <!-- 신고하기 버튼 -->
            <div class="report-btn-box">
                <button type="submit">신고 하기</button>
            </div>
        </form>
    </div>
</div>