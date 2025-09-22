document.addEventListener('DOMContentLoaded', function() {
    const questionList = document.getElementById('questionList');

    // 질문-답변 아이템 렌더링
    function renderQuestions() {
        qaData.forEach((item) => {
            // 전체 Q&A 컨테이너
            const qaItem = document.createElement('div');
            qaItem.className = 'qa-item';
            qaItem.dataset.id = item.id;

            // 질문 헤더
            const questionHeader = document.createElement('div');
            questionHeader.className = 'question-header';

            const questionText = document.createElement('div');
            questionText.className = 'question-text';
            questionText.textContent = item.question;

            questionHeader.appendChild(questionText);

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
        });

        // 클릭한 아이템이 닫혀있었으면 열기
        if (!isActive) {
            clickedItem.classList.add('active');

            // 답변 영역의 실제 높이 계산하여 max-height 설정
            const answerWrapper = clickedItem.querySelector('.answer-wrapper');
            const answerContent = clickedItem.querySelector('.answer-content');
            answerWrapper.style.maxHeight = answerContent.scrollHeight + 'px';
        } else {
            // 이미 열려있던 것을 클릭하면 닫기
            const answerWrapper = clickedItem.querySelector('.answer-wrapper');
            answerWrapper.style.maxHeight = '0';
        }
    }

    // 초기 렌더링
    renderQuestions();
});