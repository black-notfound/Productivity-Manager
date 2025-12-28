document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');

  const calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: 'title legend',
      center: '',
      right: 'today,prev,next'
    },
    customButtons: {
      legend: {
        text: 'Work • Study • Personal',
        click: function () {

        }
      }
    }
  });

  calendar.render();
});