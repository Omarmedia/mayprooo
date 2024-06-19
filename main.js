  document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const hamburger = document.querySelector('.hamburger');
    const navBar = document.querySelector('.nav-bar');
  
    hamburger.addEventListener('click', function () {
      navBar.classList.toggle('show');
    });
  
    window.addEventListener('scroll', function () {
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      } 
    });
  });


  // Finn hamburger-ikonet
const hamburger = document.querySelector('.hamburger');

// Finn navigasjonsmenyen
const navBar = document.querySelector('.nav-bar');

// Legg til event-lytter for klikk på hamburger-ikonet
hamburger.addEventListener('click', () => {
  // Toggle klassen 'active' på hamburger-ikonet for å animere det
  hamburger.classList.toggle('active');

  // Toggle klassen 'active' på navigasjonsmenyen for å vise/lukke menyen
  navBar.classList.toggle('active');
});



// Finn alle faq-question elementer
const faqQuestions = document.querySelectorAll('.faq-question');

// Legg til klikk-lytter til hvert spørsmål
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling; // Finn neste sibling, som er faq-answer

        // Toggle klassen 'active' på faq-answer for å vise/skjule svaret
        answer.classList.toggle('active');

        // Endre ikonet fra + til - og vice versa basert på om svaret er åpent eller lukket
        const icon = question.querySelector('.icon');
        icon.textContent = answer.classList.contains('active') ? '-' : '+';
    });
});