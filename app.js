const scenarios = [
  { category: 'IDENTIDAD VISUAL', sector: 'CULTURA', title: 'Una noche que se recuerda', description: 'Un festival pequeño de música independiente quiere llenar un antiguo cine de barrio. Diseña una identidad que se sienta cercana, nocturna y un poco inesperada.' },
  { category: 'PACKAGING', sector: 'ALIMENTACIÓN', title: 'El sabor de quedarse', description: 'Una marca local de conservas quiere llegar a tiendas de producto cuidado. El envase debe hablar de origen sin caer en los códigos rústicos de siempre.' },
  { category: 'CAMPAÑA', sector: 'LIBROS', title: 'Leer también es salir', description: 'Una librería organiza encuentros en plazas, bares y patios. Crea una campaña que invite a sumarse aunque no conozcas a nadie.' },
  { category: 'DISEÑO EDITORIAL', sector: 'TURISMO', title: 'La guía de los desvíos', description: 'Una ruta de pueblos quiere animar a la gente a parar en lugares que normalmente se atraviesan sin mirar. Diseña una guía que premie la curiosidad.' },
  { category: 'UX / UI', sector: 'BIENESTAR', title: 'Cinco minutos para ti', description: 'Una app de pausas breves necesita una experiencia que invite a parar, no a completar tareas. Diseña una interfaz amable y sin presión.' },
  { category: 'DIRECCIÓN DE ARTE', sector: 'MODA', title: 'Vestirse para repetir', description: 'Una marca de ropa circular prepara una sesión sobre prendas que pasan de una persona a otra. Celebra el uso y las pequeñas marcas de cada prenda.' },
  { category: 'IDENTIDAD VISUAL', sector: 'GASTRONOMÍA', title: 'La mesa de cada día', description: 'Un comedor de menú diario quiere renovar su imagen sin perder el carácter de sitio conocido. La identidad debe funcionar en la puerta y en el móvil.' },
  { category: 'CARTEL', sector: 'MÚSICA', title: 'El último concierto del verano', description: 'Una sala prepara una fecha sorpresa para cerrar la temporada. Crea un cartel que despierte curiosidad sin revelar quién toca.' },
  { category: 'DISEÑO DE SERVICIO', sector: 'COMUNIDAD', title: 'Prestar también es cuidar', description: 'Un centro vecinal quiere poner en marcha una biblioteca de objetos. Diseña una forma sencilla y atractiva de compartir herramientas, juegos y cosas de uso ocasional.' },
  { category: 'PACKAGING', sector: 'COSMÉTICA', title: 'Menos cosas, mejor elegidas', description: 'Una marca de cuidado personal lanza un jabón sólido para viajes. El envase debe explicar cómo usarlo y hacer que apetezca llevarlo en la mochila.' },
  { category: 'CAMPAÑA', sector: 'MEDIOAMBIENTE', title: 'La ciudad también escucha', description: 'Una asociación quiere que más gente se fije en las aves que comparten la ciudad. Convierte una caminata normal en una pequeña búsqueda.' },
  { category: 'IDENTIDAD VISUAL', sector: 'TECNOLOGÍA', title: 'Reparar antes de cambiar', description: 'Un taller de reparación de electrónica quiere dejar de parecer un servicio técnico impersonal. La identidad debe transmitir oficio, transparencia y confianza.' },
  { category: 'UX / UI', sector: 'EDUCACIÓN', title: 'Aprender a tu manera', description: 'Una plataforma educativa ayuda a jóvenes a estudiar en ratos cortos. Diseña una experiencia que dé autonomía y haga visible el progreso sin presionar.' },
  { category: 'IDENTIDAD VISUAL', sector: 'DEPORTE', title: 'Un equipo de todos', description: 'Un club deportivo de barrio quiere atraer a nuevas familias y recuperar a antiguos socios. Dale una identidad reconocible que sirva para varias generaciones.' },
  { category: 'CAMPAÑA', sector: 'ADOPCIÓN ANIMAL', title: 'Conocer antes de elegir', description: 'Una protectora quiere contar la personalidad de sus animales, no solo publicar fichas. Crea una campaña que facilite encuentros responsables.' },
  { category: 'DIRECCIÓN DE ARTE', sector: 'MÚSICA', title: 'Un sonido, muchas formas', description: 'Un sello independiente prepara el lanzamiento de un nuevo grupo. Construye un universo visual que acompañe la música sin ilustrar literalmente las canciones.' },
  { category: 'DISEÑO EDITORIAL', sector: 'MUSEOS', title: 'Mirar dos veces', description: 'Un museo local organiza una exposición sobre objetos cotidianos de la ciudad. Diseña materiales que ayuden a descubrir historias escondidas en ellos.' },
  { category: 'IDENTIDAD VISUAL', sector: 'CAFÉ', title: 'Un lugar para volver', description: 'Una cafetería abre en un local pequeño y quiere convertirse en punto de encuentro vecinal. Crea una identidad con carácter, fácil de reconocer desde la calle.' },
  { category: 'UX / UI', sector: 'FINANZAS', title: 'Entender el dinero sin miedo', description: 'Una herramienta de finanzas personales quiere explicar gastos y metas con claridad. Diseña una interfaz útil para alguien que empieza a organizarse.' },
  { category: 'DISEÑO EDITORIAL', sector: 'VIAJES', title: 'Una ciudad a pie', description: 'Una guía urbana propone descubrir una ciudad siguiendo detalles arquitectónicos y pequeñas historias. Diseña un formato que apetezca llevar en el bolsillo.' },
  { category: 'CAMPAÑA', sector: 'ACCIÓN SOCIAL', title: 'Pequeños gestos, otra ciudad', description: 'Una organización local quiere sumar voluntariado a una iniciativa de barrio. La campaña debe hacer que participar parezca cercano y posible.' },
  { category: 'CAMPAÑA', sector: 'MOVILIDAD', title: 'Cambiar de ruta', description: 'Una ciudad quiere que más personas prueben formas distintas de moverse en trayectos cortos. Crea una campaña clara, optimista y fácil de llevar al espacio público.' },
  { category: 'PACKAGING', sector: 'HOGAR', title: 'Objetos que se quedan', description: 'Un pequeño taller fabrica piezas para el hogar con materiales recuperados. Diseña un sistema de envases y etiquetas que explique su origen y cuidado.' },
  { category: 'CARTEL', sector: 'CINE', title: 'Una película, otra mirada', description: 'Un cineclub presenta un ciclo de películas sobre crecer y cambiar. Crea un cartel que conecte las obras sin recurrir a imágenes reconocibles de sus protagonistas.' }
];

const formats = {
  'IDENTIDAD VISUAL': ['Identidad + redes', 'Logo + sistema gráfico', 'Papelería + señalética', 'Guía de marca breve', 'Landing + elementos de marca'],
  PACKAGING: ['Envase + etiqueta', 'Packaging + caja', 'Etiqueta + ficha de producto', 'Sistema para tres variantes', 'Pack + pieza de lanzamiento'],
  CAMPAÑA: ['Carrusel + stories', 'Campaña social + landing', 'Reels + piezas estáticas', 'Email + contenido social', 'Concepto + kit de campaña', 'Anuncio + página de destino'],
  'DISEÑO EDITORIAL': ['Guía plegable + mapa', 'Folleto breve', 'Mini revista + portada', 'Sistema editorial digital', 'Cuaderno + piezas promocionales'],
  'UX / UI': ['App móvil + flujo principal', 'Landing + formulario', 'Onboarding + tres pantallas', 'Prototipo de tres pantallas', 'Web responsive + navegación'],
  'DIRECCIÓN DE ARTE': ['Editorial fotográfica', 'Campaña + key visual', 'Serie de imágenes + portada', 'Dirección de arte para redes', 'Concepto de lanzamiento'],
  CARTEL: ['Cartel + adaptaciones sociales', 'Key visual + stories', 'Cartel de calle + entrada', 'Póster + pieza animada', 'Sistema de carteles'],
  'DISEÑO DE SERVICIO': ['Flujo de servicio + señalética', 'Mapa del recorrido + cartelería', 'App sencilla + guía de uso', 'Puntos de contacto + comunicación']
};

const audiences = [
  'Personas que lo descubren por primera vez', 'Gente joven de la ciudad', 'Familias del barrio',
  'Personas con poco tiempo', 'Público curioso, sin experiencia previa', 'Comunidad local',
  'Personas que buscan una alternativa más sostenible', 'Público digital que usa el móvil a diario',
  'Personas de distintas edades y capacidades', 'Visitantes que llegan por recomendación'
];

const tones = ['Cercano y directo', 'Sereno y optimista', 'Atrevido pero claro', 'Íntimo y expresivo', 'Honesto y contemporáneo', 'Lúdico sin ser infantil', 'Minimalista y cálido', 'Enérgico y memorable'];

const constraints = [
  'Solo dos colores', 'Una única tipografía', 'Sin usar fotografías', 'Debe funcionar en móvil y en papel',
  'Pensado para producirse con bajo presupuesto', 'Máximo tres elementos gráficos', 'Accesible a primera vista',
  'Debe entenderse en menos de diez segundos', 'Sin depender de ilustraciones', 'Usa un formato poco habitual'
];

const angles = [
  'Prioriza que la idea se entienda en menos de diez segundos.',
  'Busca una manera de destacar sin usar los códigos visuales más habituales del sector.',
  'Piensa primero en una experiencia de móvil, aunque también aparezca en papel.',
  'Haz que la accesibilidad y la lectura rápida formen parte de la idea desde el principio.',
  'Imagina cómo se verá tanto en la calle como en una pantalla pequeña.',
  'Construye una propuesta reconocible con muy pocos recursos.',
  'Haz que la pieza invite a participar, no solo a mirar.',
  'Piensa en todo el recorrido: desde el primer contacto hasta el uso.',
  'Encuentra un tono cercano sin que parezca infantil.',
  'Prueba una dirección inesperada, pero fácil de aplicar en todos los formatos.',
  'Organiza la información para que lo más importante se entienda primero.',
  'Equilibra personalidad y claridad en cada punto de contacto.'
];

const SAVED_KEY = 'brief-de-bolsillo-saved-v1';
const RECENT_KEY = 'brief-de-bolsillo-recent-v1';
const RECENT_LIMIT = 1000;
let currentBrief = null;
let briefNumber = 0;
let toastTimer;
let recentCombos = loadRecentCombos();

const $ = (selector) => document.querySelector(selector);

function savedBriefs() {
  try { return JSON.parse(localStorage.getItem(SAVED_KEY) || '[]'); }
  catch { return []; }
}

function loadRecentCombos() {
  try { return new Set(JSON.parse(localStorage.getItem(RECENT_KEY) || '[]')); }
  catch { return new Set(); }
}

function pick(array) {
  const index = Math.floor(Math.random() * array.length);
  return { value: array[index], index };
}

function generateBrief() {
  let selection;
  let attempts = 0;
  do {
    const scenario = pick(scenarios);
    const audience = pick(audiences);
    const format = pick(formats[scenario.value.category]);
    const tone = pick(tones);
    const constraint = pick(constraints);
    const angle = pick(angles);
    const combinationId = [scenario.index, audience.index, format.index, tone.index, constraint.index, angle.index].join('-');
    selection = { scenario: scenario.value, audience, format, tone, constraint, angle, combinationId };
    attempts += 1;
  } while (recentCombos.has(selection.combinationId) && attempts < 250);

  recentCombos.add(selection.combinationId);
  if (recentCombos.size > RECENT_LIMIT) {
    const recent = [...recentCombos].slice(-RECENT_LIMIT);
    recentCombos = new Set(recent);
  }
  localStorage.setItem(RECENT_KEY, JSON.stringify([...recentCombos]));

  return {
    ...selection.scenario,
    audience: selection.audience.value,
    format: selection.format.value,
    tone: selection.tone.value,
    constraint: selection.constraint.value,
    description: `${selection.scenario.description} ${selection.angle.value}`,
    combinationId: selection.combinationId,
    id: `brief-${Date.now()}-${selection.combinationId}`
  };
}

function chooseBrief() {
  currentBrief = generateBrief();
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
  const alreadySaved = savedBriefs().some((brief) => brief.combinationId === currentBrief.combinationId);
  const button = $('#save-button');
  button.classList.toggle('saved', alreadySaved);
  button.querySelector('span').textContent = alreadySaved ? 'Guardado' : 'Guardar brief';
}

function saveCurrentBrief() {
  const items = savedBriefs();
  if (items.some((brief) => brief.combinationId === currentBrief.combinationId)) {
    showToast('Este brief ya está guardado.');
    return;
  }
  items.unshift({ ...currentBrief, savedAt: new Date().toISOString() });
  localStorage.setItem(SAVED_KEY, JSON.stringify(items));
  updateSavedCount();
  updateSaveButton();
  showToast('Brief guardado en este dispositivo.');
}

function updateSavedCount() {
  $('#saved-count').textContent = savedBriefs().length;
}

function renderSaved() {
  const items = savedBriefs();
  const list = $('#saved-list');
  if (!items.length) {
    list.innerHTML = `<div class="empty-state"><span class="empty-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4.75h12a1 1 0 0 1 1 1v14l-7-4-7 4v-14a1 1 0 0 1 1-1Z"/></svg></span><h2>Aún no has guardado ninguno</h2><p>Cuando encuentres una combinación que te apetezca desarrollar, guárdala aquí.</p><button type="button" data-go-generator>Crear un brief <span aria-hidden="true">↗</span></button></div>`;
    return;
  }
  list.innerHTML = items.map((brief, index) => {
    const savedDate = new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(brief.savedAt));
    return `<article class="saved-card" data-index="${index}">
      <div><span class="saved-card-category">${escapeHTML(brief.category)} · ${escapeHTML(brief.sector)}</span><h2>${escapeHTML(brief.title)}</h2><p>${escapeHTML(brief.description)}</p><div class="saved-card-meta">${escapeHTML(brief.format)} · ${escapeHTML(brief.tone)} · Guardado el ${savedDate}</div></div>
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

function initWaveCanvas() {
  const canvas = $('#wave-canvas');
  if (!canvas) return;
  const context = canvas.getContext('2d');
  if (!context) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const variation = {
    speed: 0.003 + Math.random() * 0.003,
    height: 52 + Math.random() * 46,
    width: 0.004 + Math.random() * 0.003,
    drift: 0.002 + Math.random() * 0.002,
    density: 24 + Math.floor(Math.random() * 18),
    phase: Math.random() * Math.PI * 2
  };
  let width = 0;
  let height = 0;
  let pixelRatio = 1;
  let time = variation.phase;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    pixelRatio = Math.min(window.devicePixelRatio || 1, 1.6);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    draw();
  }

  function draw() {
    context.clearRect(0, 0, width, height);
    context.globalCompositeOperation = 'screen';
    const center = height * 0.72;
    const leftColor = '#145cff';
    const midColor = '#00aaff';
    const rightColor = '#315bff';

    for (let layer = 0; layer < 3; layer += 1) {
      const layerOffset = layer * 19;
      const layerAlpha = 0.13 + layer * 0.065;
      for (let row = 0; row < variation.density; row += 1) {
        const normalized = (row / (variation.density - 1)) * 2 - 1;
        context.beginPath();
        for (let x = -20; x <= width + 20; x += 12) {
          const distance = (x - width * 0.51) / (width * 0.58);
          const envelope = Math.max(0, 1 - distance * distance);
          const swell = Math.sin(x * variation.width + time + normalized * 0.32 + layerOffset * 0.01) * variation.height * envelope;
          const ripple = Math.sin(x * 0.011 - time * 1.35 + row * 0.075 + layer) * 15 * envelope;
          const diagonal = Math.sin(x * 0.0026 + time * 0.48 + layer) * 25;
          const y = center + normalized * (36 + layerOffset) + swell + ripple + diagonal;
          if (x === -20) context.moveTo(x, y);
          else context.lineTo(x, y);
        }
        const gradient = context.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, leftColor);
        gradient.addColorStop(0.5, midColor);
        gradient.addColorStop(1, rightColor);
        context.strokeStyle = gradient;
        context.globalAlpha = layerAlpha;
        context.lineWidth = row % 7 === 0 ? 1.15 : 0.55;
        context.shadowColor = layer === 1 ? '#138bff' : '#195dff';
        context.shadowBlur = row % 7 === 0 ? 14 : 5;
        context.stroke();
      }
    }
    context.globalAlpha = 1;
    context.globalCompositeOperation = 'source-over';
    context.shadowBlur = 0;
  }

  let animationFrame;
  function animate() {
    time += variation.speed;
    draw();
    animationFrame = window.requestAnimationFrame(animate);
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });
  if (!reducedMotion) animationFrame = window.requestAnimationFrame(animate);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) window.cancelAnimationFrame(animationFrame);
    else if (!reducedMotion) animationFrame = window.requestAnimationFrame(animate);
  });
}

document.querySelectorAll('.nav-link').forEach((button) => button.addEventListener('click', () => switchView(button.dataset.view)));
$('#surprise-button').addEventListener('click', chooseBrief);
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
      localStorage.setItem(SAVED_KEY, JSON.stringify(items));
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

initWaveCanvas();
updateSavedCount();
chooseBrief();
