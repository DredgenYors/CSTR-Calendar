document.addEventListener('DOMContentLoaded', function() {
    const currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
  
    const monthAndYear = document.getElementById('monthAndYear');
    const calendarBody = document.getElementById('calendar-body');
    const prevMonthBtn = document.getElementById('prevMonthBtn');
    const nextMonthBtn = document.getElementById('nextMonthBtn');
  
    prevMonthBtn.addEventListener('click', () => {
      if (currentMonth === 0) {
        currentMonth = 11;
        currentYear -= 1;
      } else {
        currentMonth -= 1;
      }
      updateCalendar();
    });
  
    nextMonthBtn.addEventListener('click', () => {
      if (currentMonth === 11) {
        currentMonth = 0;
        currentYear += 1;
      } else {
        currentMonth += 1;
      }
      updateCalendar();
    });
  
    function updateCalendar() {
      calendarBody.innerHTML = '';
      monthAndYear.innerHTML = `${new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} ${currentYear}`;
  
      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
      for (let i = 1; i <= daysInMonth; i++) {
        const day = document.createElement('div');
        day.classList.add('day');
        day.textContent = i;
        calendarBody.appendChild(day);
      }
    }
  
    updateCalendar();
  });