// header header
document.addEventListener('DOMContentLoaded', function () {
    const headerHTML = `
    <header class="main-header">
    <div class="header-inner">
        <div class="left-header">
            <a href="javascript:void(0);" class="menu">
                <img src="../assets/images/menu.svg" alt="메뉴 버튼">
            </a>
            <a href="../sale_management/sale_management_current.html" class="header-logo">
                <img src="../assets/images/logo.png" alt="" style="filter: brightness(0) invert(1);">
            </a>
            <div class="pos-info">
                <p>POS</p>
                <p class="store-name">살로몬 성수 직영점(플래그십 스토어)</p>
            </div>
        </div>
        <div class="right-header">
            <div class="header-date">
                <span class="header-date-text"></span>
            </div>
            <div class="header-search">
                <div class="input-group search">
                    <input type="text" class="input-md" placeholder="화면이름 검색하기">
                </div>
            </div>
            <div class="header-setting">
                <ul>
                    <li>
                        <a href="javascript:void(0);">
                            <img src="../assets/images/note.svg" alt="">
                            <span>쪽지</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <img src="../assets/images/helpdesk.svg" alt="">
                            <span>헬프데스크</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <img src="../assets/images/setting.svg" alt="">
                            <span>셋팅</span>
                        </a>
                    </li>
                    <li>
                        <a href="../login.html">
                            <img src="../assets/images/ico_logout.svg" alt="">
                            <span>로그아웃</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="gnb-overlay"></div>
    <nav class="gnb">
        <div class="gnb-inner">
            <ul class="depth1">
                <li><a href="../sale_register/sale_register.html">판매등록</a></li>
                <li>
                    <a href="javascript:void(0);">
                        <span>판매관리</span>
                        <img src="../assets/images/depth_arrow.svg" alt="">
                    </a>
                    <ul class="depth2">
                        <li>
                            <a href="../sale_management/sale_management_current.html">판매현황</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">판매관리2</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0);">
                        <span>고객관리</span>
                        <img src="../assets/images/depth_arrow.svg" alt="">
                    </a>
                    <ul class="depth2">
                        <li>
                            <a href="../customer_management/customer_management_register01.html">고객 등록</a>
                        </li>
                        <li>
                            <a href="../customer_management/customer_management_search.html">고객 조회</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">관리매장변경요청</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">관리매장변경현황</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0);">
                        <span>RT관리</span>
                        <img src="../assets/images/depth_arrow.svg" alt="">
                    </a>
                    <ul class="depth2">
                        <li>
                            <a href="../rt_management/rt_management_register.html">RT등록</a>
                        </li>
                        <li>
                            <a href="../rt_management/rt_management_current.html">RT현황</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0);">
                        <span>상품관리</span>
                        <img src="../assets/images/depth_arrow.svg" alt="">
                    </a>
                    <ul class="depth2">
                        <li>
                            <a href="../product_management/order_register.html">
                                주문등록(매장)
                            </a>
                        </li>
                        <li>
                            <a href="../product_management/material_order.html">
                                부자재주문
                            </a>
                        </li>
                        <li>
                            <a href="../product_management/product_num_history.html">
                                품번 히스토리
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0);">
                        <span>반품관리</span>
                        <img src="../assets/images/depth_arrow.svg" alt="">
                    </a>
                    <ul class="depth2">
                        <li>
                            <a href="../return_management/return_register.html">
                                반품등록
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                반품관리2
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0);">
                        <span>재고관리</span>
                        <img src="../assets/images/depth_arrow.svg" alt="">
                    </a>
                    <ul class="depth2">
                        <li>
                            <a href="../stock_management/stock_current.html">
                                매장재고현황
                            </a>
                        </li>
                        <li>
                            <a href="../stock_management/stock_register.html">
                                매장재고실사등록
                            </a>
                        </li>
                        <li>
                            <a href="../stock_management/stock_other_current.html">
                                타매장재고현황
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0);">
                        <span>수선/수리관리</span>
                        <img src="../assets/images/depth_arrow.svg" alt="">
                    </a>
                    <ul class="depth2">
                        <li>
                            <a href="../repair_management/repair_register01.html">
                                수선등록(A/S매장)
                            </a>
                        </li>
                        <li>
                            <a href="../repair_management/repair_register02.html">
                                수리등록(CBC-매장)
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0);">
                        <span>커뮤니티</span>
                        <img src="../assets/images/depth_arrow.svg" alt="">
                    </a>
                    <ul class="depth2">
                        <li>
                            <a href="javascript:void(0);">
                                커뮤니티1
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                커뮤니티2
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
    
</header>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // 오늘 날짜 동적 렌더링
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    function getKoreanDate() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const date = now.getDate();
        const day = days[now.getDay()];
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours < 12 ? '오전' : '오후';
        const h = hours % 12 || 12;
        const m = String(minutes).padStart(2, '0');
        return `${year}.${month}.${date}(${day}) ${ampm} ${h}:${m}`;
    }
    const dateEl = document.querySelector('.header-date-text');
    if (dateEl) dateEl.textContent = getKoreanDate();


    // nav 메뉴 open
    const menu = document.querySelector('.menu');
    const gnb = document.querySelector('header.main-header .gnb')
    const gnbOverlay = document.querySelector('.gnb-overlay');
    const depth1 = document.querySelectorAll('header.main-header .gnb .gnb-inner .depth1 > li > a');
    const depth2 = document.querySelectorAll('header.main-header .gnb .gnb-inner .depth2');

    const toggleGnb = () => {
        const isOpen = gnb.classList.contains('open');
        gnbOverlay.classList.toggle('active', !isOpen);
        gnb.classList.toggle('open');
        if (isOpen) {
            // depth1.forEach(el => el.classList.remove('active-arrow'));
            // depth2.forEach(el => el.classList.remove('active'));
        }
    };
    
    const closeGnb = () => {
        gnb.classList.remove('open');
        gnbOverlay.classList.remove('active');
        // depth1.forEach(el => el.classList.remove('active-arrow'));
        // depth2.forEach(el => el.classList.remove('active'));
    };
    menu.addEventListener('click', toggleGnb);
    gnbOverlay.addEventListener('click', closeGnb);

    // nav 메뉴 스크립트
    depth1.forEach((el, idx) => {
        el.addEventListener('click', () => {
            if (el.classList.contains('active-arrow')) {
                el.classList.remove('active-arrow');
                if (el.nextElementSibling) {
                    el.nextElementSibling.classList.remove('active');
                }
            } else {
                for (let i = 0; i < depth1.length; i++) {
                    depth1[i].classList.remove('active-arrow');
                }
                el.classList.add('active-arrow');
                depth2.forEach((el) => {
                    el.classList.remove('active');
                });
                if (el.nextElementSibling) {
                    el.nextElementSibling.classList.add('active');
                }
            }
        });
    })

});
