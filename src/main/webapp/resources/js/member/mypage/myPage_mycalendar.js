function mycalendar(){
	var calendarEl = document.getElementById('calendar');
	var calendar = new FullCalendar.Calendar(calendarEl, {
		initialView : 'dayGridMonth', // 초기 로드 될때 보이는 캘린더 화면(기본 설정: 달)
		headerToolbar : { // 헤더에 표시할 툴 바
			start : 'prev next today',
			center : 'title',
			end : 'dayGridMonth,dayGridWeek,dayGridDay'
		},
		titleFormat : function(date) {
			return date.date.year + '년 ' + (parseInt(date.date.month) + 1) + '월';
		},
		dayMaxEventRows: true, // 달력에 셀 크기보다 많은 이벤트가 등록된 경우 more로 표시
        editable: false,
        droppable: false,
		nowIndicator: true, // 현재 시간 마크
		locale: 'ko', // 한국어 설정
		events:function(info, successCallback, failureCallback){
            $.ajax({
               url: '/selectMyCalendar.do',
               type : 'post',
               success: function(result) {
                   var events = [];
                   if(result != "null"){
	                   for(let i=0; i<result.length; i++) {
	                        events.push({
	                           title: result[i].wmTitle,
	                           start: result[i].wmMeetTime,
	                           end: result[i].wmMeetTime,
	                           url: '/walkMatePage.do?wmNo='+result[i].wmNo,
	                           description: result[i].wmAddr,
	                           color : '#' + Math.round(Math.random() * 0xffffff).toString(16)                                           
	                        }); // push() 끝
	                   } // for문 끝
	                   
                       // console.log(events);
                   }// if문 끝              
                               
                   successCallback(events);                               
               }// success 끝      
                                  
        	}); // ajax 끝
        	
        }, // events 끝
		eventDidMount: function(info) {
            tippy(info.el, {
                content: info.event.title +"<br>장소 : "+ info.event.extendedProps.description, //이벤트 타이틀을 툴팁으로 가져오기 
                allowHTML: true
           });
        },
        eventClick: function(event) { // 달력 일정 클릭하면 모임 정보 페이지로 넘어가도록
		    if (event.url) {
		        window.open(event.url, "_blank");
		        return false;
		    }
		}
	});
	
	calendar.render(); // 달력 불러옴
}

