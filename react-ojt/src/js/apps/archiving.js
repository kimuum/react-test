document.addEventListener('DOMContentLoaded', () => {
  // 메인탭
  const mainTabBtn = document.querySelectorAll('.tab_btn_main .btn_tab');
  const mainTabCont = document.querySelectorAll('.tab_container_main > .tab_content_area');

  mainTabBtn.forEach(mainTab => {
    mainTab.addEventListener('click', (event) => {
      const target = event.currentTarget;
      const targetAttr = target.getAttribute('aria-controls');
      const targetCont = document.getElementById(targetAttr);

      mainTabBtn.forEach((button) => {
        // 현재 클릭 된 탭버튼 외외 나머지 활성화 클래스 제거/접근성 속성 해제
        button.classList.remove('is_active');
        button.setAttribute('aria-selected', 'false');
      })
      mainTabCont.forEach((content) => {
        // 현재 클릭 된 탭영역 외 나머지 활성화 클래스 제거/접근성 속성 해제
        content.classList.remove('is_show');
        content.setAttribute('tabindex', '-1');
      })

      // 현재 클릭한 탭버튼/탭영역 활성화 클래스 추가/접근성 속성 추가
      target.classList.add('is_active');
      target.setAttribute('aria-selected', 'true');
      targetCont.classList.add('is_show');
      targetCont.setAttribute('tabindex', '0');
    })
  })

  // 두번째탭
  const subTabBtn = document.querySelectorAll('.tab_btn_sub .btn_tab');
  const subTabCont = document.querySelectorAll('.tab_container_sub > .tab_content_area');

  subTabBtn.forEach(subTab => {
    subTab.addEventListener('click', (event) => {
      const target = event.currentTarget;
      const targetAttr = target.getAttribute('aria-controls');
      const targetCont = document.getElementById(targetAttr);

      subTabBtn.forEach((button) => {
        // 현재 클릭 된 탭버튼 외외 나머지 활성화 클래스 제거/접근성 속성 해제
        button.classList.remove('is_active');
        button.setAttribute('aria-selected', 'false');
      })
      subTabCont.forEach((content) => {
        // 현재 클릭 된 탭영역 외 나머지 활성화 클래스 제거/접근성 속성 해제
        content.classList.remove('is_show');
        content.setAttribute('tabindex', '-1');
      })

      // 현재 클릭한 탭버튼/탭영역 활성화 클래스 추가/접근성 속성 추가
      target.classList.add('is_active');
      target.setAttribute('aria-selected', 'true');
      targetCont.classList.add('is_show');
      targetCont.setAttribute('tabindex', '0');
    })
  })

  // 세번째째탭
  const thirdTabBtn = document.querySelectorAll('.tab_btn_third .btn_tab');
  const thirdTabCont = document.querySelectorAll('.tab_container_third > .tab_content_area');
  const tooltip = document.querySelectorAll('.tooltip_box');
  const btnClose = document.querySelectorAll('.btn_close');

  thirdTabBtn.forEach(thirdTab => {
    thirdTab.addEventListener('click', (event) => {
      const target = event.currentTarget;
      const targetVal = target.getAttribute('aria-controls');
      const targetCont = document.getElementById(targetVal);

      // 현재 클릭 된 탭버튼 외외 나머지 활성화 클래스 제거/접근성 속성 해제
      thirdTabBtn.forEach((button) => {
        button.classList.remove('is_active');
        button.setAttribute('aria-selected', 'false');
      })
      // 현재 클릭 된 탭영역 외 나머지 활성화 클래스 제거/접근성 속성 해제
      thirdTabCont.forEach((content) => {
        content.classList.remove('is_show');
        content.setAttribute('tabindex', '-1');
      })
      // 현재 클릭 된 탭영역 툴팁 활성화 클래스 제거 후 해당툴팁에만 추가
      tooltip.forEach((item) => {
        item.classList.remove('is_show');
        if (targetVal === item.dataset.content) {
          item.classList.add('is_show')
        }
      })

      // 현재 클릭한 탭버튼/탭영역 활성화 클래스 추가/접근성 속성 추가
      target.classList.add('is_active');
      target.setAttribute('aria-selected', 'true');
      targetCont.classList.add('is_show');
      targetCont.setAttribute('tabindex', '0');
    })
  })
})
