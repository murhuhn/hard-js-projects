'use strict'

const weekData = {
  weekArr: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Вокресенье' ],
  weekDiv: document.getElementById('week'),
  findTodayDay: function() {

    weekData.weekArr.forEach(function(item, i) {
      let dayDiv = document.createElement('div'); 
      if (i === (6 + new Date().getDay()) % 7) { 
        dayDiv.classList.add('today-day'); 
      } 
      if (i === 5 || i === 6) { 
        dayDiv.classList.add('weekend-day'); 
      }
      dayDiv.textContent = item; 
      weekData.weekDiv.appendChild(dayDiv);
    
    });
  },
};

weekData.findTodayDay();


