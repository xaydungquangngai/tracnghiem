
    document.addEventListener('DOMContentLoaded', () => {
      const quizEl = document.getElementById('quiz');
      const summaryEl = document.getElementById('summary');
      const resetBtn = document.getElementById('resetBtn');
      let score = 0, answeredCount = 0;

      function generateQuiz() {
        quizEl.innerHTML = '';
        score = 0;
        answeredCount = 0;
        summaryEl.innerText = 'Đã trả lời: 0/0 | Đúng: 0/0';
        resetBtn.style.display = 'none';

        summaryEl.innerText = `Đã trả lời: 0/${questions.length} | Đúng: 0/0`;

        questions.forEach((q, idx) => {
          const block = document.createElement('div');
          block.className = 'question-block';

          const qText = document.createElement('div');
          qText.className = 'question';
          qText.innerText = `${idx + 1}. ${q.question}`;

          const options = document.createElement('div');
          options.className = 'options';

          q.options.forEach((opt, optIdx) => {
            const label = document.createElement('label');
            label.innerHTML = `<input type="radio" name="q${idx}" value="${optIdx}" /> ${opt}`;
            label.addEventListener('click', () => {
              if (block.classList.contains('answered')) return;
              block.classList.add('answered');
              answeredCount++;

              const isCorrect = optIdx === q.correct;
              if (isCorrect) {
                score++;
                block.classList.add('correct');
                label.classList.add('selected');
              } else {
                block.classList.add('incorrect');
                label.classList.add('incorrect-selected');
                options.children[q.correct].classList.add('selected');
              }

              const result = document.createElement('div');
              result.className = 'result-message';
              result.innerText = isCorrect
                ? '✅ Đúng rồi!'
                : `❌ Sai. Đáp án đúng: ${q.options[q.correct]}`;
              block.appendChild(result);

              summaryEl.innerText = `Đã trả lời: ${answeredCount}/${questions.length} | Đúng: ${score}/${answeredCount}`;
              resetBtn.style.display = 'inline-block';
            });

            options.appendChild(label);
          });

          block.appendChild(qText);
          block.appendChild(options);
          quizEl.appendChild(block);
        });
      }

      resetBtn.addEventListener('click', generateQuiz);
      generateQuiz();
    });
