

function saveToLS() {
    //resInfo라는 LS_key에 storageValue배열을 저장해줌.
    localStorage.setItem('resInfo', JSON.stringify(storageValue));
}

function loadLS() {
    //LS에 저장된 resInfo라는 키값을 가진 내용을 loadedInfo에 담아둠.
    const loadedInfo = localStorage.getItem('resInfo');
    //LS에 저장된 값이 있을 경우 LS내용을 바탕으로 table 생성
    if (loadedInfo !== null) {
        JSON.parse(loadedInfo).forEach(function (items) {
            printTable(items);   
        });
    //LS에 저장된 값이 없을 경우, LS에 초기화 시켜줄 내용(기본 6개 식당)
    } else{

        let initValue = makeResObj("오카에리","봉은사로 44길 68",1,"일식");
        printTable(initValue);

        initValue = makeResObj("청운각","언주로 98길 21", 5,"중식");
        printTable(initValue);

        initValue = makeResObj("매반생면","언주로 508 지하1층",5,"한식");
        printTable(initValue);

        initValue = makeResObj("일미리 금계찜닭", "선릉로 93길 22",10, "한식");
        printTable(initValue);

        initValue = makeResObj("어메이징 타이", "언주로 98길 25",5, "양식");
        printTable(initValue);

        initValue = makeResObj("포하임", "선릉로86길 15",5, "양식");
        printTable(initValue);

        initValue = makeResObj("해변에서", "언주로98길 5-3",1, "한식");
        printTable(initValue);

        initValue = makeResObj("동해식당", "역삼동 700-22",5, "한식");
        printTable(initValue);

        initValue = makeResObj("코우", "언주로98길 23",5, "일식");
        printTable(initValue);

        initValue = makeResObj("쌈밥", "동해식당 옆",5, "한식");
        printTable(initValue);

        initValue = makeResObj("백억한우", "언주로 508",5, "한식");
        printTable(initValue);

        initValue = makeResObj("담소", "선릉로86길 48",1, "한식");
        printTable(initValue);

        initValue = makeResObj("김가면옥", "언주로98길 9",1, "한식");
        printTable(initValue);

        initValue = makeResObj("샐러디", "선릉로93길 26",5, "양식");
        printTable(initValue);

        initValue = makeResObj("메이크샐러드", "언주로98길 15",5, "양식");
        printTable(initValue);

        initValue = makeResObj("김가네", "언주로98길 18",5, "한식");
        printTable(initValue);

        initValue = makeResObj("모쿠", "봉은사로44길 70",5, "일식");
        printTable(initValue);

        initValue = makeResObj("맘스터치", "선릉로93길 32",10, "양식");
        printTable(initValue);

        initValue = makeResObj("마피아분식", "선정릉역 근처",10, "양식");
        printTable(initValue);
        
        saveToLS();
    }
}

loadLS();