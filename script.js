document.addEventListener('DOMContentLoaded', function() {
    const questionList = document.getElementById('questionList');

    // 질문-답변 아이템 렌더링
    function renderQuestions() {
        qaData.forEach((item, index) => {
            // 전체 Q&A 컨테이너
            const qaItem = document.createElement('div');
            qaItem.className = 'qa-item';
            qaItem.dataset.id = item.id;

            // 질문 헤더
            const questionHeader = document.createElement('div');
            questionHeader.className = 'question-header';

            // 번호 추가
            const questionNumber = document.createElement('div');
            questionNumber.className = 'question-number';
            questionNumber.textContent = (index + 1).toString().padStart(2, '0');

            const questionText = document.createElement('div');
            questionText.className = 'question-text';
            questionText.textContent = item.question;

            // 화살표 아이콘 추가
            const arrowIcon = document.createElement('div');
            arrowIcon.className = 'arrow-icon';
            arrowIcon.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            `;

            questionHeader.appendChild(questionNumber);
            questionHeader.appendChild(questionText);
            questionHeader.appendChild(arrowIcon);

            // 답변 래퍼
            const answerWrapper = document.createElement('div');
            answerWrapper.className = 'answer-wrapper';

            const answerContent = document.createElement('div');
            answerContent.className = 'answer-content';
            answerContent.textContent = item.answer;

            answerWrapper.appendChild(answerContent);

            // 클릭 이벤트 리스너
            questionHeader.addEventListener('click', function() {
                toggleAnswer(qaItem);
            });

            // Q&A 아이템 구성
            qaItem.appendChild(questionHeader);
            qaItem.appendChild(answerWrapper);

            questionList.appendChild(qaItem);
        });
    }

    // 답변 토글 함수
    function toggleAnswer(clickedItem) {
        const isActive = clickedItem.classList.contains('active');

        // 모든 아이템 닫기
        document.querySelectorAll('.qa-item').forEach(item => {
            item.classList.remove('active');
            const wrapper = item.querySelector('.answer-wrapper');
            wrapper.style.maxHeight = '0';
        });

        // 클릭한 아이템이 닫혀있었으면 열기
        if (!isActive) {
            clickedItem.classList.add('active');

            // 답변 영역의 실제 높이 계산하여 max-height 설정
            const answerWrapper = clickedItem.querySelector('.answer-wrapper');
            const answerContent = clickedItem.querySelector('.answer-content');
            answerWrapper.style.maxHeight = answerContent.scrollHeight + 'px';
        }
    }

    // 초기 렌더링
    renderQuestions();
});