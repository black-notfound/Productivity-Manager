document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');
  const addBtn = document.getElementById('add-event-btn');
  const generateBtn = document.getElementById('generate-schedule-btn');
  const titleInput = document.getElementById('event-title');
  const dateInput = document.getElementById('event-date');
  const agendaItems = document.querySelector('.agenda .items');

  const eventos = [
    { title: 'Estudar JS', start: '2025-10-01' },
    { title: 'Academia', start: '2025-10-02', end: '2025-10-04' }
  ];

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'pt-br',
    editable: true,
    selectable: true,
    events: eventos,
    dateClick: function (info) {
      mostrarCompromissos(info.dateStr);
    }
  });

  calendar.render();

  // Mostrar compromissos do dia
  function mostrarCompromissos(data) {
    agendaItems.innerHTML = '';
    const filtrados = eventos.filter(ev => ev.start === data);

    if (filtrados.length === 0) {
      agendaItems.innerHTML = '<p>Nenhum compromisso.</p>';
      return;
    }

    filtrados.forEach(ev => {
      const p = document.createElement('p');
      p.textContent = ev.title;
      agendaItems.appendChild(p);
    });
  }

  // Adicionar evento manual
  addBtn.addEventListener('click', () => {
    const titulo = titleInput.value.trim();
    const data = dateInput.value;

    if (!titulo || !data) {
      alert('Preencha o título e a data!');
      return;
    }

    const novoEvento = { title: titulo, start: data };
    eventos.push(novoEvento);
    calendar.addEvent(novoEvento);
    mostrarCompromissos(data);
    titleInput.value = '';
    dateInput.value = '';
  });

  // 🔁 GERAR ESCALA DIA SIM / DIA NÃO
  generateBtn.addEventListener('click', () => {
    const titulo = titleInput.value.trim();
    const dataInicio = dateInput.value;

    if (!titulo || !dataInicio) {
      alert('Preencha o título e a data inicial!');
      return;
    }

    const qtdDias = parseInt(prompt('Por quantos dias deseja gerar a escala? (Ex: 30)'));
    if (isNaN(qtdDias) || qtdDias <= 0) {
      alert('Digite um número válido.');
      return;
    }

    const data = new Date(dataInicio);

    for (let i = 0; i < qtdDias; i += 2) {
      const novaData = new Date(data);
      novaData.setDate(data.getDate() + i);

      const dataFormatada = novaData.toISOString().split('T')[0];

      const novoEvento = { title: titulo, start: dataFormatada };
      eventos.push(novoEvento);
      calendar.addEvent(novoEvento);
    }

    alert('Escala gerada com sucesso!');
  });
});
