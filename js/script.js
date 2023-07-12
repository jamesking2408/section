window.addEventListener('DOMContentLoaded', (event) => {
    const sections = document.querySelectorAll('.section');
    let currentSectionIndex = 0;
  
    function scrollToSection(index) {
      if (index >= 0 && index < sections.length) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
        sections[currentSectionIndex].classList.remove('active');
        sections[index].classList.add('active');
        currentSectionIndex = index;
      }
    }
  
    function handleArrowDown(event) {
      if (event.key === 'ArrowDown' || event.keyCode === 40 || event.key === 'PageDown' || event.keyCode === 34) {
        event.preventDefault();
        scrollToSection(currentSectionIndex + 1);
      }
    }
  
    function handleArrowUp(event) {
      if (event.key === 'ArrowUp' || event.keyCode === 38 || event.key === 'PageUp' || event.keyCode === 33) {
        event.preventDefault();
        scrollToSection(currentSectionIndex - 1);
      }
    }
  
    document.addEventListener('keydown', handleArrowDown);
    document.addEventListener('keydown', handleArrowUp);
  });
  