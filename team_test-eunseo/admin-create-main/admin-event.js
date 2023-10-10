// 1) 이벤트 수정 버튼 누르면
const eventUpdate =document.getElementsByClassName("event-update");

var click = null;
for(let i = 0; i <eventUpdate.length; i++){
    eventUpdate[i].addEventListener("click", function(){
            window.open("http://127.0.0.1:5556/admin-popup-event-update.html",
             "팝업 수정","width=900, height=570, top=200, left=540");

    });
}
