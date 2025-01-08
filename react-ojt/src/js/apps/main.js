document.addEventListener('DOMContentLoaded', () => {
  const activateTab = (tabList, tabContentList, activeTab) => {
    // 현재 클릭된 탭버튼 외에 나머지 활성화 클래스 제거/접근성 속성 해제
    tabList.forEach((button) => {
      button.classList.remove('is_active');
      button.setAttribute('aria-selected', 'false');
    })
    tabContentList.forEach((content) => {
      content.classList.remove('is_show');
      content.setAttribute('tabindex', '-1');
    })

    // 현재 클릭한 탭버튼/탭영역 활성화 클래스 추가/접근성 속성 추가
    const contentId = activeTab.getAttribute('aria-controls');
    const getValue = document.getElementById(contentId);
    activeTab.classList.add('is_active');
    activeTab.setAttribute('aria-selected', 'true');
    getValue.classList.add('is_show');
    getValue.setAttribute('tabindex', '0');
  }

  // 메인탭
  const mainTabBtn = document.querySelectorAll('.tab_btn_main .btn_tab');
  const mainTabCont = document.querySelectorAll('.tab_container_main > .tab_content_area');
  mainTabBtn.forEach((mainTab) => {
    mainTab.addEventListener('click', () => {
      activateTab(mainTabBtn, mainTabCont, mainTab)
    })
  })

  // 두번째탭
  const subTabBtn = document.querySelectorAll('.tab_btn_sub .btn_tab');
  const subTabCont = document.querySelectorAll('.tab_container_sub > .tab_content_area');
  subTabBtn.forEach((subTab) => {
    subTab.addEventListener('click', () => {
      activateTab(subTabBtn, subTabCont, subTab)
    })
  })

  // 세번째탭
  const thirdTabBtn = document.querySelectorAll('.tab_btn_third .btn_tab');
  const thirdTabCont = document.querySelectorAll('.tab_container_third > .tab_content_area');
  const tooltip = document.querySelectorAll('.tooltip_box');
  const btnClose = document.querySelectorAll('.btn_close');
  thirdTabBtn.forEach((thirdTab) => {
    thirdTab.addEventListener('click', () => {
      const target = event.currentTarget;
      const contentId = target.getAttribute('aria-controls');
      activateTab(thirdTabBtn, thirdTabCont, thirdTab);

      // 팁 활성화 클래스 해당영역만 추가
      tooltip.forEach((item) => {
        item.classList.remove('is_show');
        if (contentId === item.dataset.content) {
          item.classList.add('is_show')
        }
      })
    })
  })

  // 툴팁박스 닫기
  btnClose.forEach(btnClose => {
    btnClose.addEventListener('click', (event) => {
      const target = event.target;
      const tooltipCont = target.parentElement;
      tooltipCont.classList.remove('is_show')
    })
  })
})
