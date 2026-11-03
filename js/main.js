/* 메인 페이지: data-modal 값과 같은 id의 팝업을 엽니다. */
document.querySelectorAll('[data-modal]').forEach(button => {
  button.addEventListener('click', () => {
    const popup = document.getElementById(button.dataset.modal);
    if (popup) popup.showModal();
  });
});

/* 팝업의 닫기 버튼을 누르면 해당 팝업을 닫습니다. */
document.querySelectorAll('.close-modal').forEach(button => {
  button.addEventListener('click', () => button.closest('dialog').close());
});

/* 팝업 바깥의 어두운 배경을 클릭해도 닫힙니다. */
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
});

/* 사전등록 페이지: 실제 서버 전송 없이 성공 메시지만 보여줍니다. */
const form = document.getElementById('registrationForm');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault(); // 새로고침 및 서버 전송 방지
    if (!form.reportValidity()) return; // 필수 항목과 이메일 형식 확인
    const name = document.getElementById('guestName').value.trim();
    if (!name) return;
    const result = document.getElementById('formResult');
    // 사용자 입력은 HTML로 삽입하지 않고 textContent로 안전하게 출력합니다.
    result.textContent = `${name}님, 시연용 사전등록이 완료되었습니다! 🎉 실제 접수나 정보 저장은 이루어지지 않았습니다.`;
    result.hidden = false;
    form.reset();
    result.scrollIntoView({behavior:'smooth',block:'nearest'});
  });
}
