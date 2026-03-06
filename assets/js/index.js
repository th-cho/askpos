// input 수량 스크립트
if (document.querySelector('.input-group.number')) {
    document.querySelectorAll('.input-group.number').forEach(group => {
        function quantity(group) {
            const minusBtn = group.querySelector('.minus');
            const plusBtn = group.querySelector('.plus');
            const quantityInput = group.querySelector('.quantity');

            minusBtn.addEventListener('click', () => {
                let currentValue = parseInt(quantityInput.value, 10);
                if (!isNaN(currentValue) && currentValue > 1) {
                    quantityInput.value = currentValue - 1;
                }
            });

            plusBtn.addEventListener('click', () => {
                let currentValue = parseInt(quantityInput.value, 10);
                if (!isNaN(currentValue)) {
                    quantityInput.value = currentValue + 1;
                }
            });

            quantityInput.addEventListener('input', () => {
                quantityInput.value = quantityInput.value.replace(/[^0-9]/g, '');
            });
        }

        quantity(group);
    });
}



// segment 버튼 스크립트
function setSlideBarPosition(segmentWrap) {
    const smBox = segmentWrap.querySelector('.segment-btn.active');
    const segeSlideBar = segmentWrap.querySelector('.slide-wrap');
    if (smBox) {
        const smallBoxRect = smBox.getBoundingClientRect();
        const boxRect = segmentWrap.getBoundingClientRect();
        const leftGap = smallBoxRect.left - boxRect.left;

        segeSlideBar.style.left = `${leftGap}px`;
        segeSlideBar.style.width = `${smBox.clientWidth}px`;
        segeSlideBar.style.height = `${smBox.clientHeight}px`;
    }
}

document.querySelectorAll('.segment-wrap').forEach(setSlideBarPosition)
document.querySelectorAll('.segment-wrap').forEach((el, idx) => {

    el.querySelectorAll('.segment-btn').forEach((btn) => {

        btn.addEventListener('click', () => {
            el.querySelectorAll('.segment-btn').forEach((btn) => {
                btn.classList.remove('active');
            });
            btn.classList.add('active');
            // 크기, 위치 업데이트
            setSlideBarPosition(el);
        });
    });
});







// 토스트 date picker 
if (document.querySelector('#tui-date-wrap')) {
    const datepicker = new tui.DatePicker('#tui-date-wrap', {
        date: new Date(),
        language: 'ko',
        input: {
            element: '#datepicker-input',
            format: 'yyyy-MM-dd',
        }
    });
}
// 토스트 date picker 2
if (document.querySelector('#tui-date-wrap2')) {
    const datepicker = new tui.DatePicker('#tui-date-wrap2', {
        date: new Date(),
        language: 'ko',
        input: {
            element: '#datepicker-input2',
            format: 'yyyy-MM-dd',
        }
    });
}
// 토스트 date picker 3
if (document.querySelector('#tui-date-wrap3')) {
    const datepicker = new tui.DatePicker('#tui-date-wrap3', {
        date: new Date(),
        language: 'ko',
        input: {
            element: '#datepicker-input3',
            format: 'yyyy-MM-dd',
        }
    });
}
// 토스트 date picker 4
if (document.querySelector('#tui-date-wrap4')) {
    const datepicker = new tui.DatePicker('#tui-date-wrap4', {
        date: new Date(),
        language: 'ko',
        input: {
            element: '#datepicker-input4',
            format: 'yyyy-MM-dd',
        }
    });
}
// 토스트 date picker 5
if (document.querySelector('#tui-date-wrap5')) {
    const datepicker = new tui.DatePicker('#tui-date-wrap5', {
        date: new Date(),
        language: 'ko',
        input: {
            element: '#datepicker-input5',
            format: 'yyyy-MM-dd',
        }
    });
}
// 토스트 date picker 6
if (document.querySelector('#tui-date-wrap6')) {
    const datepicker = new tui.DatePicker('#tui-date-wrap6', {
        date: new Date(),
        language: 'ko',
        input: {
            element: '#datepicker-input6',
            format: 'yyyy-MM-dd',
        }
    });
}


// table item 선택1
const tableList = document.querySelector('.table-content table.table-selectable tbody');
if (tableList) {
    const tablItems = tableList.querySelectorAll('tr');

    for (let i = 0; i < tablItems.length; i++) {
        tablItems[i].addEventListener('click', function () {
            const selected = tableList.querySelector('.selected');
            if (selected) {
                selected.classList.remove('selected');
                console.log(selected);
            }
            this.classList.add('selected');
        });
    }
}
// table item 선택2
const tableList2 = document.querySelector('.payment-table table.table-selectable tbody');
if (tableList2) {
    const tablItems = tableList2.querySelectorAll('tr');

    for (let i = 0; i < tablItems.length; i++) {
        tablItems[i].addEventListener('click', function () {
            const selected = tableList2.querySelector('.selected');
            if (selected) {
                selected.classList.remove('selected');
                console.log(selected);
            }
            this.classList.add('selected');
        });
    }
}

// table item 선택3
const tableContainers = document.querySelectorAll('.table-container table.table-selectable tbody');

tableContainers.forEach(tableList3 => {
    if (tableList3) {
        const tablItems = tableList3.querySelectorAll('tr');

        tablItems.forEach(tablItem => {
            tablItem.addEventListener('click', function () {
                const selected = tableList3.querySelector('.selected');
                if (selected) {
                    selected.classList.remove('selected');
                    console.log(selected);
                }
                this.classList.add('selected');
            });
        });
    }
});

// table item 선택 (check박스 형식)
const tableCheckBox = document.querySelectorAll('.table-container table.table-check tbody');

tableCheckBox.forEach(tableList3 => {
    if (tableList3) {
        const tablItems = tableList3.querySelectorAll('.input-check input');

        tablItems.forEach(tablItem => {
            tablItem.addEventListener('click', function () {
                const trElement = this.closest('tr');
                if (trElement) {
                    trElement.classList.toggle('checked');
                }
            });
        });
    }
});

// 모든 popup
const popupAll = document.querySelectorAll('.layer-wrap');

// ****************** POPUP - 적립 고객 검색
const searchPoint = document.querySelectorAll('.point-search');
if (searchPoint) {
    const pointPopup = document.querySelector('.layer-wrap.pop-point');
    searchPoint.forEach((e, idx) => {
        e.addEventListener('click', () => {
            pointPopup.classList.add('active');
        })
    })
}



// ****************** POPUP - 적립 고객 검색 => 테이블 선택
const customerTbl = document.getElementById('customerTbl');
if (customerTbl) {
    const customerTblRows = customerTbl.getElementsByTagName('tr');
    for (let i = 0; i < customerTblRows.length; i++) {
        customerTblRows[i].addEventListener('click', function () {
            const selected = customerTbl.querySelector('.selected');
            if (selected) {
                selected.classList.remove('selected');
            }
            this.classList.add('selected');
        });
    }
}


// ****************** POPUP - 상품 검색
const productSearch = document.querySelectorAll('.product-search');
const productSearchPopup = document.querySelector('.layer-wrap.pop-product-search');
productSearch.forEach((e, idx) => {
    e.addEventListener('click', () => {
        productSearchPopup.classList.add('active');
    })
})

// ****************** POPUP - 매장 설정
const storeChange = document.querySelectorAll('.store-change');
const storeSettingPopup = document.querySelector('.layer-wrap.pop-store-setting');
storeChange.forEach((e, idx) => {
    e.addEventListener('click', () => {
        storeSettingPopup.classList.add('active');
    })
})

// ****************** POPUP - 단가변경
const priceChange = document.querySelectorAll('.price-change');
const pricePopup = document.querySelector('.layer-wrap.pop-price');
priceChange.forEach((e, idx) => {
    e.addEventListener('click', () => {
        pricePopup.classList.add('active');
    })
})


// ****************** POPUP - 할인적용하기
const applyDiscount = document.querySelectorAll('.discount-btn');
const discountPopup = document.querySelector('.layer-wrap.pop-discount');
applyDiscount.forEach((e, idx) => {
    e.addEventListener('click', () => {
        discountPopup.classList.add('active');
    })
})

// ****************** POPUP - 영수증 조회
const searchReceipt = document.querySelectorAll('.receipt-search');
if (searchReceipt) {
    const receiptPopup = document.querySelector('.layer-wrap.pop-receipt-search');
    searchReceipt.forEach((e, idx) => {
        e.addEventListener('click', () => {
            receiptPopup.classList.add('active');
        })
    })
}

// ****************** POPUP - 영수증 조회 스크립트
const receiptTbl = document.getElementById('receiptTbl');
if (receiptTbl) {
    const receiptTblRows = receiptTbl.querySelectorAll('tbody tr');

    for (let i = 0; i < receiptTblRows.length; i++) { // 첫 번째 행은 헤더이므로 제외
        receiptTblRows[i].addEventListener('click', function () {
            // 이미 선택된 행이 있다면 선택 해제
            const selected = receiptTbl.querySelector('.selected');
            if (selected) {
                selected.classList.remove('selected');
            }

            // 클릭한 행을 선택
            const totalRow = receiptTbl.querySelector('.total-row');
            if (totalRow !== this) {
                this.classList.add('selected');
            }
        });
    }
}

// ****************** POPUP - 보류 등록
const holdRegister = document.querySelectorAll('.hold-register');
if (holdRegister) {
    const holdPopup = document.querySelector('.layer-wrap.pop-hold');
    holdRegister.forEach((e, idx) => {
        e.addEventListener('click', () => {
            holdPopup.classList.add('active');
        })
    })
}

// ****************** POPUP - 매장정보
const storeCode = document.querySelectorAll('.store-code');
if (storeCode) {
    const storeCodePopup = document.querySelector('.layer-wrap.pop-store-code');
    storeCode.forEach((e, idx) => {
        e.addEventListener('click', () => {
            storeCodePopup.classList.add('active');
        })
    })
}

// ****************** POPUP - 매장그룹검색
const storeGroup = document.querySelectorAll('.store-group');
if (storeGroup) {
    const storeGroupPopup = document.querySelector('.layer-wrap.pop-store-group');
    storeGroup.forEach((e, idx) => {
        e.addEventListener('click', () => {
            storeGroupPopup.classList.add('active');
        })
    })
}

// ****************** POPUP - 사용자정보
const userInfo = document.querySelectorAll('.pop_user_info');
if (userInfo) {
    const userInfoPopup = document.querySelector('.layer-wrap.pop-userInfo');
    userInfo.forEach((e, idx) => {
        e.addEventListener('click', () => {
            const storeGroupPopup = document.querySelector('.layer-wrap.pop-store-group').classList.remove('active');
            userInfoPopup.classList.add('active');
        })
    })
}

// ****************** POPUP - 고객 검색
const customerSearch = document.querySelectorAll('.customer_search');
const customerSearchPopup = document.querySelector('.layer-wrap.pop-customer-search');
customerSearch.forEach((e, idx) => {
    e.addEventListener('click', () => {
        customerSearchPopup.classList.add('active');
    })
})

// ****************** POPUP - 고객 검색
const emailChange = document.querySelectorAll('.email-change');
const emailChangePopup = document.querySelector('.layer-wrap.pop-email-change');
emailChange.forEach((e, idx) => {
    e.addEventListener('click', () => {
        emailChangePopup.classList.add('active');
    })
})

// ****************** POPUP - 사용자 ID 검색
const userIdSearch = document.querySelectorAll('.user-id-search');
if (userIdSearch) {
    const idSearchPopup = document.querySelector('.layer-wrap.pop-id-search');
    userIdSearch.forEach((e, idx) => {
        e.addEventListener('click', () => {
            document.querySelector('.layer-wrap.pop-email-change').classList.remove('active');
            idSearchPopup.classList.add('active');
        })
    })
}

// ****************** POPUP - 등급 변경
const ratingChange = document.querySelectorAll('.rating-change');
if (ratingChange) {
    const ratingChangePopup = document.querySelector('.layer-wrap.pop-rating-change');
    ratingChange.forEach((e, idx) => {
        e.addEventListener('click', () => {
            ratingChangePopup.classList.add('active');
        })
    })
}

// ****************** POPUP - 탈퇴하기
const resign = document.querySelectorAll('.resign-btn');
if (resign) {
    const resignPopup = document.querySelector('.layer-wrap.pop-resign');
    resign.forEach((e, idx) => {
        e.addEventListener('click', () => {
            resignPopup.classList.add('active');
        })
    })
}


// ****************** POPUP - 매장검색(RT)
const searchStoreRt = document.querySelectorAll('.rt-store-search');
if(searchStoreRt) {
    const storeSearchRtPopup = document.querySelector('.pop-store-search-rt');
    searchStoreRt.forEach((e, idx) => {
        e.addEventListener('click', () => {
            storeSearchRtPopup.classList.add('active');
        })
    })
}


// ****************** POPUP - 상품검색(RT)
const searchProductRt = document.querySelectorAll('.rt-product-search');
if(searchProductRt) {
    const productSearchRtPopup = document.querySelector('.pop-product-search-rt');
    searchProductRt.forEach((e, idx) => {
        e.addEventListener('click', () => {
            productSearchRtPopup.classList.add('active');
        })
    })
}


// ****************** POPUP - RT번호검색
const numberSearchRt = document.querySelectorAll('.rt-number-search');
if(numberSearchRt) {
    const numberSearchRtPopup = document.querySelector('.pop-number-search-rt');
    numberSearchRt.forEach((e, idx) => {
        e.addEventListener('click', () => {
            numberSearchRtPopup.classList.add('active');
        })
    })
}


// ****************** POPUP - 주문번호검색
const orderNumSearch = document.querySelectorAll('.order-num-search');
if(orderNumSearch) {
    const orderNumSearchPopup = document.querySelector('.pop-order-num-search');
    orderNumSearch.forEach((e, idx) => {
        e.addEventListener('click', () => {
            orderNumSearchPopup.classList.add('active');
        })
    })
}

// ****************** POPUP - 부자재정보
const materialInfo = document.querySelectorAll('.material-info');
if(materialInfo) {
    const orderNumSearchPopup = document.querySelector('.pop-material-info');
    materialInfo.forEach((e, idx) => {
        e.addEventListener('click', () => {
            orderNumSearchPopup.classList.add('active');
        })
    })
}

// ****************** POPUP - 색상 검색
const colorSearch = document.querySelectorAll('.color-search');
if(colorSearch) {
    const colorSearchPopup = document.querySelector('.pop-color-search');
    colorSearch.forEach((e, idx) => {
        e.addEventListener('click', () => {
            colorSearchPopup.classList.add('active');
        })
    })
}

// ****************** POPUP - 박스번호 검색
const boxNumber = document.querySelectorAll('.box-number-search');
if(boxNumber) {
    const boxNumberSearchPopup = document.querySelector('.pop-box-number-search');
    boxNumber.forEach((e, idx) => {
        e.addEventListener('click', () => {
            document.querySelector('.layer-wrap.pop-box-number-search').classList.remove('active')
            boxNumberSearchPopup.classList.add('active');
        })
    })
}

// ****************** POPUP - 박스번호 검색2
const boxNumber2 = document.querySelectorAll('.box-number-search2');
if(boxNumber2) {
    const boxNumberSearchPopup2 = document.querySelector('.pop-box-number-search2');
    boxNumber2.forEach((e, idx) => {
        e.addEventListener('click', () => {
            document.querySelector('.layer-wrap.pop-box-number-search').classList.remove('active');
            boxNumberSearchPopup2.classList.add('active');
        })
    })
}

// ****************** POPUP - 실사일자
const dueDiligence = document.querySelectorAll('.due-diligence');
if(dueDiligence) {
    const dueDiligencePopup = document.querySelector('.pop-due-diligence');
    dueDiligence.forEach((e, idx) => {
        e.addEventListener('click', () => {
            dueDiligencePopup.classList.add('active');
        })
    })
}

// ****************** POPUP - 재고실사일자
const stockDueDiligence = document.querySelectorAll('.stock-due-diligence');
if(stockDueDiligence) {
    const stockDueDiligencePopup = document.querySelector('.pop-stock-due-diligence');
    stockDueDiligence.forEach((e, idx) => {
        e.addEventListener('click', () => {
            stockDueDiligencePopup.classList.add('active');
        })
    })
}

// ****************** POPUP - A/S 번호정보
const asNumberInfo = document.querySelectorAll('.as-number-info');
if(asNumberInfo) {
    const asNumberInfoPopup = document.querySelector('.pop-as-number-info');
    asNumberInfo.forEach((e, idx) => {
        e.addEventListener('click', () => {
            asNumberInfoPopup.classList.add('active');
        })
    })
}

// ****************** POPUP - A/S 판매정보 조회
const asSaleInfo = document.querySelectorAll('.as-sale-info');
if(asSaleInfo) {
    const asSaleInfoPopup = document.querySelector('.pop-as-sale-info');
    asSaleInfo.forEach((e, idx) => {
        e.addEventListener('click', () => {
            asSaleInfoPopup.classList.add('active');
        })
    })
}

// ****************** POPUP - A/S 매장정보 조회
const asStoreInfo = document.querySelectorAll('.as-store-info');
if(asStoreInfo) {
    const asStoreInfoPopup = document.querySelector('.pop-as-store-info');
    asStoreInfo.forEach((e, idx) => {
        e.addEventListener('click', () => {
            asStoreInfoPopup.classList.add('active');
        })
    })
}

// ****************** POPUP - A/S 사용자정보 조회
const asUserInfo = document.querySelectorAll('.as-user-info');
if(asUserInfo) {
    const asUserInfoPopup = document.querySelector('.pop-as-user-info');
    asUserInfo.forEach((e, idx) => {
        e.addEventListener('click', () => {
            asUserInfoPopup.classList.add('active');
        })
    })
}

// ****************** POPUP - A/S 상품정보 
const asProductInfo = document.querySelectorAll('.as-product-info');
if(asProductInfo) {
    const asProductInfoPopup = document.querySelector('.pop-as-product-info');
    asProductInfo.forEach((e, idx) => {
        e.addEventListener('click', () => {
            asProductInfoPopup.classList.add('active');
        })
    })
}

// ****************** POPUP - A/S 상품검색 
const asProductSearch = document.querySelectorAll('.as-product-search');
if(asProductSearch) {
    const asProductSearchPopup = document.querySelector('.pop-as-product-search');
    asProductSearch.forEach((e, idx) => {
        e.addEventListener('click', () => {
            asProductSearchPopup.classList.add('active');
        })
    })
}


var rows = document.querySelectorAll(".fold-table tr.view");

rows.forEach(function (row) {
    row.addEventListener("click", function () {
        row.classList.toggle("open");
        var nextRow = row.nextElementSibling;
        if (nextRow && nextRow.classList.contains("fold")) {
            nextRow.classList.toggle("open");
        }
    });
});




const discountTbl = document.getElementById('discountTbl');
if (discountTbl) {
    const discountTblRows = discountTbl.getElementsByTagName('tr');

    for (let i = 0; i < discountTblRows.length; i++) {
        discountTblRows[i].addEventListener('click', function () {
            if (event.target.type === 'radio') {
                return;
            }
            const selected = discountTbl.querySelector('.selected');

            if (selected && selected !== this) {
                const selectedRadioGroup = selected.querySelector(".input-group.radio");
                selectedRadioGroup.classList.remove('active')
                selected.classList.remove('selected');
                selected.querySelector("input[name='discount-radio']").checked = false;
            }

            this.classList.add('selected');
            const radio = this.querySelector("input[name='discount-radio']");
            radio.checked = true;

            const radioGroup = this.querySelector(".input-group.radio");
            radioGroup.classList.add('active')
        });
    }
}


// ****************** POPUP - 할인 직원 검색
const employeeSearch = document.querySelectorAll('.employee-search');
const employeePopup = document.querySelector('.layer-wrap.pop-employee');
employeeSearch.forEach((e, idx) => {
    e.addEventListener('click', () => {
        employeePopup.classList.add('active');
    })
})
const employeeTbl = document.getElementById('employeeTbl');
if (employeeTbl) {
    const employeeTblRows = employeeTbl.getElementsByTagName('tr');
    for (let i = 0; i < employeeTblRows.length; i++) {
        employeeTblRows[i].addEventListener('click', function () {
            const selected = employeeTbl.querySelector('.selected');

            if (selected && selected !== this) {
                selected.classList.remove('selected');
            }
            this.classList.add('selected');
        });
    }
}





const cardPay = document.querySelector('.card_payment');
const cardCancel = document.querySelector('.card_cancel');
const cashPay = document.querySelector('.cash_payment');
const creditHand = document.querySelector('.card_handwriting');
const mileagePay = document.querySelector('.mileage-pay');
const enuri = document.querySelector('.enuri');
const cashReceiptApprove = document.querySelector('.cash_receipt_approval');
const cashReceiptCancel = document.querySelector('.cash_receipt_cancel');

const popupArr = [cardPay, cardCancel, cashPay, creditHand, cashReceiptApprove, mileagePay, enuri, cashReceiptCancel]
popupArr.forEach(el => {
    if (el) {
        el.addEventListener('click', function () {

            const layerWrapElements = document.querySelectorAll('.layer-wrap');
            const cardPayClasses = this.classList;

            let foundElements = [];
            layerWrapElements.forEach(layer => {
                cardPayClasses.forEach(className => {
                    if (layer.classList.contains(className)) {
                        foundElements.push(layer);
                    }
                });
            });
            if (foundElements.length > 0) {
                foundElements[0].classList.add('active');



                document.querySelectorAll('.segment-wrap').forEach(setSlideBarPosition)
                document.querySelectorAll('.segment-wrap').forEach((el, idx) => {

                    el.querySelectorAll('.segment-btn').forEach((btn) => {

                        btn.addEventListener('click', () => {
                            el.querySelectorAll('.segment-btn').forEach((btn) => {
                                btn.classList.remove('active');
                            });
                            btn.classList.add('active');
                            // 크기, 위치 업데이트
                            setSlideBarPosition(el);
                        });
                    });
                });
            }
        })
    }

})
// 팝업 닫기
const popupClose = document.querySelectorAll('.ui-close-pop');
popupClose.forEach((e, idx) => {
    e.addEventListener('click', () => {
        for (let i = 0; i < popupAll.length; i++) {
            popupAll[i].classList.remove('active');
        }
        if (document.querySelectorAll('#customerTbl tr')) {
            document.querySelectorAll('#customerTbl tr').forEach((e, idx) => {
                e.classList.remove('selected');
            })
        }
    })
})



// 자동 하이픈
function autoHyphen(input) {
    var phoneNumber = input.value.replace(/[^\d]/g, "");
    if (phoneNumber.length >= 4 && phoneNumber.length <= 7) {
        input.value = phoneNumber.slice(0, 3) + "-" + phoneNumber.slice(3);
    } else if (phoneNumber.length >= 8) {
        input.value = phoneNumber.slice(0, 3) + "-" + phoneNumber.slice(3, 7) + "-" + phoneNumber.slice(7);
    }
}

// 이메일 직접입력
const domainListEl = document.querySelector('#domain-list')
const domainInputEl = document.querySelector('#domain-txt')
if(domainListEl) {
    domainListEl.addEventListener('change', (event) => {
        if (event.target.value !== "type") {
            domainInputEl.value = event.target.value
            domainInputEl.disabled = true
        } else {
            domainInputEl.value = ""
            domainInputEl.disabled = false
        }
    })
}

// tooltip
const tooltip = document.querySelector('.ico_tooltip');
if(tooltip) {
    const tooltipContent = document.querySelector('.tooltip-content');
    tooltip.addEventListener('click', () => {
        tooltipContent.classList.toggle('active');
    })
}
