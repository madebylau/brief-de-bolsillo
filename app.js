const briefs = [
  {
    category: 'IDENTIDAD VISUAL', sector: 'CULTURA', title: 'Una noche que se recuerda',
    description: 'Un pequeño festival de música independiente quiere llenar un antiguo cine de barrio. Diseña una identidad que se sienta cercana, nocturna y un poco inesperada.',
    audience: 'Gente de 20 a 35 años', format: 'Cartel + redes', tone: 'Íntimo y eléctrico', constraint: 'Solo dos tintas'
  },
  {
    category: 'PACKAGING', sector: 'ALIMENTACIÓN', title: 'El sabor de quedarse',
    description: 'Una marca local de conservas quiere llegar a tiendas de producto cuidado. El envase debe hablar de origen sin caer en los códigos rústicos de siempre.',
    audience: 'Personas que disfrutan cocinando', format: 'Etiqueta + caja', tone: 'Honesto y contemporáneo', constraint: 'Sin fotografías'
  },
  {
    category: 'CAMPAÑA DIGITAL', sector: 'CULTURA', title: 'Leer también es salir',
    description: 'Una librería pequeña organiza encuentros fuera del local: en plazas, bares y patios. Crea una campaña que invite a sumarse aunque no conozcas a nadie.',
    audience: 'Lectores curiosos', format: 'Carrusel + stories', tone: 'Espontáneo y cálido', constraint: 'Una sola tipografía'
  },
  {
    category: 'DISEÑO EDITORIAL', sector: 'TURISMO', title: 'La guía de los desvíos',
    description: 'Una ruta de pueblos quiere animar a la gente a parar en lugares que normalmente se atraviesan sin mirar. Diseña una guía que premie la curiosidad.',
    audience: 'Viajeros sin prisa', format: 'Guía plegable', tone: 'Observador y libre', constraint: 'Formato bolsillo'
  },
  {
    category: 'UX / UI', sector: 'BIENESTAR', title: 'Cinco minutos para ti',
    description: 'Una app de pausas breves necesita una pantalla de inicio que invite a parar, no a completar tareas. Diseña una experiencia amable y sin presión.',
    audience: 'Personas con días intensos', format: 'App móvil', tone: 'Sereno y directo', constraint: 'Máximo tres acciones'
  },
  {
    category: 'DIRECCIÓN DE ARTE', sector: 'MODA', title: 'Vestirse para repetir',
    description: 'Una marca de ropa circular prepara una sesión sobre prendas que pasan de una persona a otra. Propón un lenguaje visual que celebre el uso y las pequeñas marcas.',
    audience: 'Compradores conscientes', format: 'Editorial + portada', tone: 'Real y expresivo', constraint: 'Luz natural'
  },
  {
    category: 'IDENTIDAD VISUAL', sector: 'GASTRONOMÍA', title: 'La mesa de cada día',
    description: 'Un comedor de menú diario quiere renovar su imagen sin perder el carácter de sitio conocido. Diseña una identidad que funcione igual de bien en la puerta y en el móvil.',
    audience: 'Vecindario y gente de paso', format: 'Marca + menú', tone: 'Sencillo y con carácter', constraint: 'Una tinta + papel crema'
  },
  {
    category: 'CARTEL', sector: 'MÚSICA', title: 'El último concierto del verano',
    description: 'Una sala prepara una fecha sorpresa para cerrar la temporada. Crea un cartel que despierte curiosidad sin revelar quién toca.',
    audience: 'Público de salas pequeñas', format: 'Cartel + formato story', tone: 'Enigmático y urgente', constraint: 'Sin imágenes de artistas'
  },
  {
    category: 'DISEÑO DE SERVICIO', sector: 'COMUNIDAD', title: 'Prestar también es cuidar',
    description: 'Un centro vecinal quiere poner en marcha una biblioteca de objetos: herramientas, juegos y cosas que se usan pocas veces. Diseña una forma clara y atractiva de participar.',
    audience: 'Personas del barrio', format: 'Flujo móvil + señalética', tone: 'Abierto y práctico', constraint: 'Explicarlo en tres pasos'
  },
  {
    category: 'PACKAGING', sector: 'COSMÉTICA', title: 'Menos cosas, mejor elegidas',
    description: 'Una marca de cuidado personal lanza un jabón sólido para viajes. El diseño debe explicar cómo usarlo y hacer que apetezca llevarlo en la mochila.',
    audience: 'Viajeros frecuentes', format: 'Faja + estuche', tone: 'Ligero y funcional', constraint: 'Sin plástico'
  },
  {
    category: 'CAMPAÑA', sector: 'MEDIOAMBIENTE', title: 'La ciudad también escucha',
    description: 'Una asociación quiere que más gente se fije en las aves que comparten la ciudad. Diseña una campaña que convierta una caminata normal en una pequeña búsqueda.',
    audience: 'Público general', format: 'Carteles + mapa', tone: 'Curioso y optimista', constraint: 'Sin usar el color verde'
  },
  {
    category: 'IDENTIDAD VISUAL', sector: 'TECNOLOGÍA', title: 'Reparar antes de cambiar',
    description: 'Un taller de reparación de electrónica quiere dejar de parecer un servicio técnico impersonal. Crea una identidad que transmita oficio, transparencia y confianza.',
    audience: 'Personas con dispositivos averiados', format: 'Marca + web', tone: 'Claro y humano', constraint: 'Sin iconos de herramientas'
  }
];

const STORAGE_KEY = 'brief-de-bolsillo-saved-v1';
let currentBrief = null;
let previousIndex = -1;
let briefNumber = 0;
let toastTimer;

const $ = (selector) => document.querySelector(selector);
const savedBriefs = () => {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
  catch { return []; }
};

function chooseBrief() {
  let nextIndex = Math.floor(Math.random() * briefs.length);
  if (briefs.length > 1) {
    while (nextIndex === previousIndex) nextIndex = Math.floor(Math.random() * briefs.length);
  }
  previousIndex = nextIndex;
  currentBrief = { ...briefs[nextIndex], id: `brief-${Date.now()}-${nextIndex}` };
  briefNumber += 1;
  renderBrief();
}

function renderBrief() {
  const date = new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date());
  $('#brief-number').textContent = `BRIEF Nº ${String(briefNumber).padStart(2, '0')}`;
  $('#brief-date').textContent = date.toUpperCase();
  $('#brief-category').innerHTML = `${escapeHTML(currentBrief.category)} <span>•</span> ${escapeHTML(currentBrief.sector)}`;
  $('#brief-title').textContent = currentBrief.title;
  $('#brief-description').textContent = currentBrief.description;
  $('#brief-details').innerHTML = [
    ['Para quién', currentBrief.audience], ['Formato', currentBrief.format],
    ['Tono', currentBrief.tone], ['Límite', currentBrief.constraint]
  ].map(([label, value]) => `<span class="detail-chip"><strong>${escapeHTML(label)}</strong>${escapeHTML(value)}</span>`).join('');
  updateSaveButton();
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

function updateSaveButton() {
  const alreadySaved = savedBriefs().some((brief) => brief.sourceId === currentBrief.id || brief.title === currentBrief.title);
  const button = $('#save-button');
  button.classList.toggle('saved', alreadySaved);
  button.querySelector('span').textContent = alreadySaved ? 'Guardado' : 'Guardar brief';
}

function saveCurrentBrief() {
  const items = savedBriefs();
  if (items.some((brief) => brief.title === currentBrief.title)) {
    showToast('Este brief ya está en tus guardados.');
    return;
  }
  items.unshift({ ...currentBrief, sourceId: currentBrief.id, savedAt: new Date().toISOString() });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  updateSavedCount();
  updateSaveButton();
  showToast('Brief guardado. Ya puedes volver a él cuando quieras.');
}

function updateSavedCount() {
  $('#saved-count').textContent = savedBriefs().length;
}

function renderSaved() {
  const items = savedBriefs();
  const list = $('#saved-list');
  if (!items.length) {
    list.innerHTML = `<div class="empty-state"><span class="empty-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4.75h12a1 1 0 0 1 1 1v14l-7-4-7 4v-14a1 1 0 0 1 1-1Z"/></svg></span><h2>Aún no has guardado ninguno</h2><p>Cuando encuentres un brief que te apetezca desarrollar, guárdalo aquí.</p><button type="button" data-go-generator>Crear un brief <span aria-hidden="true">↗</span></button></div>`;
    return;
  }
  list.innerHTML = items.map((brief, index) => {
    const savedDate = new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(brief.savedAt));
    return `<article class="saved-card" data-index="${index}">
      <div><span class="saved-card-category">${escapeHTML(brief.category)} · ${escapeHTML(brief.sector)}</span><h2>${escapeHTML(brief.title)}</h2><p>${escapeHTML(brief.description)}</p><div class="saved-card-meta">Guardado el ${savedDate} · ${escapeHTML(brief.format)}</div></div>
      <div class="saved-card-actions"><button class="small-action" type="button" data-action="copy" data-index="${index}">Copiar</button><button class="small-action delete" type="button" data-action="delete" data-index="${index}">Eliminar</button></div>
    </article>`;
  }).join('');
}

function switchView(view) {
  const isSaved = view === 'saved';
  $('#generator-view').classList.toggle('active', !isSaved);
  $('#saved-view').classList.toggle('active', isSaved);
  document.querySelectorAll('.nav-link').forEach((link) => link.classList.toggle('active', link.dataset.view === view));
  $('#current-section').textContent = isSaved ? 'MIS BRIEFS' : 'NUEVO BRIEF';
  if (isSaved) renderSaved();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function briefAsText(brief) {
  return `${brief.title}\n${brief.category} · ${brief.sector}\n\n${brief.description}\n\nPara quién: ${brief.audience}\nFormato: ${brief.format}\nTono: ${brief.tone}\nLímite: ${brief.constraint}`;
}

async function copyBrief(brief) {
  try {
    await navigator.clipboard.writeText(briefAsText(brief));
    showToast('Brief copiado al portapapeles.');
  } catch {
    showToast('No se ha podido copiar. Prueba desde un navegador seguro.');
  }
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

document.querySelectorAll('.nav-link').forEach((button) => button.addEventListener('click', () => switchView(button.dataset.view)));
$('#surprise-button').addEventListener('click', chooseBrief);
$('#another-button').addEventListener('click', chooseBrief);
$('#save-button').addEventListener('click', saveCurrentBrief);
$('#copy-button').addEventListener('click', () => copyBrief(currentBrief));
$('#saved-list').addEventListener('click', async (event) => {
  const actionButton = event.target.closest('[data-action]');
  if (actionButton) {
    const index = Number(actionButton.dataset.index);
    const items = savedBriefs();
    if (actionButton.dataset.action === 'copy') await copyBrief(items[index]);
    if (actionButton.dataset.action === 'delete') {
      items.splice(index, 1);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      updateSavedCount();
      updateSaveButton();
      renderSaved();
      showToast('Brief eliminado de tus guardados.');
    }
    return;
  }
  if (event.target.closest('[data-go-generator]')) switchView('generator');
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && !['BUTTON', 'INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) chooseBrief();
});

updateSavedCount();
chooseBrief();
