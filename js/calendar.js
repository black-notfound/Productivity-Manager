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
        <div><span class="work">●</span> Work</span></div>
        <div><span class="study">●</span> Study</span></div>
        <div><span class="social">●</span> Social</span></div>
        <div><span class="other">●</span> Other</span></div>
    `;

    title.insertAdjacentElement('afterend', legend);
  }
});