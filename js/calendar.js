document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');

  const calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: 'title',
      center: '',
      right: 'today,prev,next'
    }
  });

  calendar.render();

  const title = document.querySelector('.fc-toolbar-title');
  const legend = document.createElement('div');
  legend.classList.add('legend')

  if (title) {
    legend.innerHTML = `
        <span class="work">●</span> Work
        <span class="study">●</span> Study
        <span class="social">●</span> Social
        <span class="other">●</span> Other
    `;

    title.insertAdjacentElement('afterend', legend);
  }
});