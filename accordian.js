const accordians = document.querySelectorAll('.accordian');
accordians.forEach(accordian => {
  const icon = accordian.querySelector('.icon');
  const answer = accordian.querySelector('.answer');
  accordian.addEventListener('click', () => {
    // 1st Way :-

    // icon.classList.toggle('active');
    // answer.classList.toggle('active');

    // 2nd Way :- 
    if(icon.classList.contains('active') 
      // && answer.classList.contains('active')
    ){
      icon.classList.remove('active');
      // answer.classList.remove('active');
      answer.style.maxHeight = null;
    }else {
      icon.classList.add('active');
      // answer.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  })
})