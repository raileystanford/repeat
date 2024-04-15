let questions = document.querySelectorAll('.question');
let questionsArray = Array.from(questions);
let coop = document.querySelector('.coop');

count222.textContent = `${coop.children.length}`;

questionsArray.forEach((item) => {
   if (!item.classList.contains('active')) {
      let title = item.querySelector('.con-title');
      item.style.height = `${title.offsetHeight + parseFloat(getComputedStyle(item).paddingTop) * 2 + 'px'}`
   }
})

document.addEventListener('click', (event) => {

   if (!event.target.classList.contains('answer') && !event.target.classList.contains('done')) {
   if (event.target.classList.contains('question') || event.target.closest('.question')) {
      event.target.style.height = `${event.target.scrollHeight + 'px'}`;
      event.target.classList.add('active');
      setTimeout(() => event.target.querySelector('.answer').focus(), 100);
   }
   }

   if (event.target.classList.contains('close')) {
      event.target.parentElement.parentElement.classList.remove('active');
      questionsArray.forEach((item) => {
         if (!item.classList.contains('active')) {
            let title = item.querySelector('.con-title');
            item.style.height = `${title.offsetHeight + parseFloat(getComputedStyle(item).paddingTop) * 2 + 'px'}`
         }
      })
   }

   if (event.target.classList.contains('con')) {
      event.target.classList.toggle('active1');
   }

   if (event.target.classList.contains('done')) {
      event.target.parentElement.parentElement.parentElement.querySelector('.question__title').classList.toggle('active');
   }

})