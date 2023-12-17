document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var score = 0;
    var userAnswers = []; // Array to store user's selected options
    var correctAnswers = ['a', 'd', 'a']; // Correct answers for each question

    // Calculate score and store user's selected options
    for (var i = 1; i <= correctAnswers.length; i++) {
      var questionName = 'q' + i;
      var selectedOption = document.querySelector('input[name="' + questionName + '"]:checked');

      if (selectedOption) {
        userAnswers.push(selectedOption.value);
        if (selectedOption.value === correctAnswers[i - 1]) {
          score++;
        }
      }
    }

    // Display score
    alert('Your score: ' + score + '/' + correctAnswers.length);

    // Display correct answers
    var correctAnswersText = "Correct answers:\n";
    for (var i = 0; i < correctAnswers.length; i++) {
      correctAnswersText += "Question " + (i + 1) + ": " + correctAnswers[i] + "\n";
    }
    alert(correctAnswersText);
  });