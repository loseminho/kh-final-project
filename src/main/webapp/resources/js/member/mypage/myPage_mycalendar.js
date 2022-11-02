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
		//initialDate: '2021-07-15', // 초기 날짜 설정 (설정하지 않으면 오늘 날짜가 보인다.)
		selectable : true, // 달력 일자 드래그 설정가능
		droppable : true,
		editable : true,
		nowIndicator: true, // 현재 시간 마크
		locale: 'ko', // 한국어 설정
		
		//eventContent: {
		//  html: "<div><img src='/resources/img/dogfoot.png' class='event-icon' /> 모임 일정</div>",
		//},
		
		//eventDidMount: function(info) {
        //    tippy(info.el, {
        //        content:  info.event.extendedProps.title,//이벤트 디스크립션을 툴팁으로 가져옵니다. 
        //   });
        //},
        
        eventDidMount: function(info) {
            tippy(info.el, {
                content: "왜 안 떠..." //이벤트 디스크립션을 툴팁으로 가져옵니다. 
           });
        },
		
		events:function(info, successCallback, failureCallback){
            $.ajax({
               url: '/selectMyCalendar.do',
               type : 'post',
               success: function(result) {
                   var events = [];
                   if(result != "null"){
	                   for(let i=0; i<result.length; i++) {
	                       var enddate = result[i].enddate;
	                       
	                        if(enddate == null){
	                            enddate = result[i].startdate;
	                        }
	                        
	                        events.push({
	                           title: result[i].wmTitle,
	                           start: result[i].startdate,
	                           end: enddate,
	                           color : '#' + Math.round(Math.random() * 0xffffff).toString(16)                                           
	                        }); // push() 끝
	                        
	                   } // for문 끝
                       console.log(events);
                   }//if문 끝                          
                   successCallback(events);                               
               }//success 끝                         
        	}); //ajax 끝
        } //events 끝
	});
	
	calendar.render(); // 달력 불러옴
}

