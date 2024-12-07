// 다크모드 토글
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// 다크모드 상태를 로컬스토리지에 저장하여 페이지 새로 고침 후에도 유지
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
}

// 다크모드 토글 클릭 이벤트
darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');

    // 다크모드 상태 저장
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// 대화하기 버튼 클릭 시 채팅 화면으로 이동
document.getElementById('chatButton').addEventListener('click', function() {
    window.location.href = "/chat";  // Flask에서 정의한 '/chat' URL로 이동
});
