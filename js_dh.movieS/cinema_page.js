// 폼 요소와 이벤트 리스너 추가
document.addEventListener("DOMContentLoaded", function () {
    const menuForm = document.getElementById("menuForm");

    menuForm.addEventListener("submit", function (event) {
        event.preventDefault(); // 기본 폼 제출 동작을 막음

        // 선택한 메뉴 및 평점 가져오기
        const menu = document.getElementById("menu").value;
        const rating = document.getElementById("rating").value;

        // 데이터베이스로 데이터 전송 (여기서는 가정)
        sendDataToDatabase(menu, rating);

        // 성공 메시지 표시
        alert("평점이 등록되었습니다.");

        // 폼 재설정
        menuForm.reset();
    });
});

// 데이터베이스로 데이터 전송하는 함수 (가정)
function sendDataToDatabase(menu, rating) {
    // 여기서는 데이터베이스로의 전송을 시뮬레이션하며 실제 데이터베이스와 연동하는 코드는 필요에 따라 작성해야 합니다.
    console.log("메뉴:", menu);
    console.log("평점:", rating);

    // 여기에서 실제 데이터베이스로 데이터를 보내는 코드를 작성합니다.
}
