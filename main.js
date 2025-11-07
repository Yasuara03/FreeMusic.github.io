// app.js: playlist, render and player controls
const tracks = [
{id:1, title: "Mi Amor Es Pobre ", artist: "Tony Dize ft.Ken Y y Arcangel", src: "Musica/Mi Amor Es Pobre.mp3", cover: "Img/Mi Amor Es Pobre.jpg"},								
{id:2, title: "23 PREGUNTAS", artist: "Anuel AA", src: "Musica/23 PREGUNTAS.mp3", cover: "Img/23 PREGUNTAS.jpg"},								
{id:3, title: "Arbol Sin Hojas", artist: "Dread Mar I - Topic", src: "Musica/Arbol Sin Hojas.mp3", cover: "Img/Arbol Sin Hojas.jpg"},								
{id:4, title: "BUM BUM", artist: "JON Z X EL ALFA X ALOFOKE MUSIC", src: "Musica/BUM BUM.mp3", cover: "Img/BUM BUM.jpg"},								
{id:5, title: "Copitas de Mezcal", artist: "Antonio Aguilar", src: "Musica/Copitas de Mezcal.mp3", cover: "Img/Copitas de Mezcal.jpg"},								
{id:6, title: "CUÁL NOSOTROS", artist: "Sech,kapo", src: "Musica/CUÁL NOSOTROS.mp3", cover: "Img/CUÁL NOSOTROS.jpg"},	
{id:7, title: "Culpables", artist: "Manuel Turizo", src: "Musica/Culpables.mp3", cover: "Img/Culpables.jpg"},								
{id:8, title: "Dame La Verde", artist: "Luar La L c Dei V", src: "Musica/Dame La Verde.mp3", cover: "Img/Dame La Verde.jpg"},								
{id:9, title: "DETRÁS DE TU ALMA", artist: "Mora", src: "Musica/DETRÁS DE TU ALMA.mp3", cover: "Img/DETRÁS DE TU ALMA.jpg"},								
{id:10, title: "Dices Que Te Vas", artist: "KAROL G x Anuel AA ", src: "Musica/Dices Que Te Vas.mp3", cover: "Img/Dices Que Te Vas.jpg"},								
{id:11, title: "DONDE", artist: "Kapo - Topic", src: "Musica/DONDE.mp3", cover: "Img/DONDE.jpg"},								
{id:12, title: "El Próximo Viernes", artist: "Espinoza Paz-Topic", src: "Musica/El Próximo Viernes.mp3", cover: "Img/El Próximo Viernes.jpg"},								
{id:13, title: "KORAZONG", artist: "Kapo - Topic", src: "Musica/KORAZONG.mp3", cover: "Img/KORAZONG.jpg"},								
{id:14, title: "Lately", artist: "Luar La L ", src: "Musica/Lately.mp3", cover: "Img/Lately.jpg"},								
{id:15, title: "luna-llena", artist: "Elvis Crespo", src: "Musica/luna-llena.mp3", cover: "Img/luna-llena.jpg"},								
{id:16, title: "Hablame bajito", artist: "Abraham Mateo", src: "Musica/Hablame bajito.mp3", cover: "Img/Háblame bajito.jpg"},								
{id:17, title: "Mi angel yo te quiero", artist: "Banda Sureña", src: "Musica/Mi angel yo te quiero.mp3", cover: "Img/Mi angel yo te quiero.jpg"},								
{id:18, title: "Mi Princesa", artist: "Remmy Velenzuela", src: "Musica/Mi Princesa.mp3", cover: "Img/Mi Princesa.jpg"},								
{id:19, title: "Mocca", artist: "Lalo Ebratt", src: "Musica/Mocca.mp3", cover: "Img/Mocca.jpg"},								
{id:20, title: "MONACO", artist: "Bad Bunny", src: "Musica/MONACO.mp3", cover: "Img/MONACO.jpg"},								
{id:21, title: "MONSTRUO", artist: "Anuel AA", src: "Musica/MONSTRUO.mp3", cover: "Img/MONSTRUO.jpg"},								
{id:22, title: "Piensame", artist: "Frank Louis x Luar La L", src: "Musica/Piensame.mp3", cover: "Img/Piensame.jpg"},								
{id:23, title: "Pretty Little Baby", artist: "BIGOBLIM", src: "Musica/Pretty Little Baby.mp3", cover: "Img/Pretty Little Baby.jpg"},								
{id:24, title: "Que Sensación Remix", artist: "Jezzy x Arcangel", src: "Musica/Que Sensación Remix.mp3", cover: "Img/Que Sensación Remix.jpg"},								
{id:25, title: "Salvame ", artist: "Dread Mar I - Topic", src: "Musica/Salvame.mp3", cover: "Img/Salvame.jpg"},								
{id:26, title: "Sensación Del Bloque", artist: "Release Topic ", src: "Musica/Sensación Del Bloque.mp3", cover: "Img/Sensación Del Bloque.jpg"},								
{id:27, title: "Si No Estás", artist: "Iñigo Quintero", src: "Musica/Si No Estás.mp3", cover: "Img/Si No Estás.jpg"},								
{id:28, title: "Tiroteo Remix", artist: "Rauw Alejandro x Marc Seguí", src: "Musica/Tiroteo Remix.mp3", cover: "Img/Tiroteo Remix.jpg"},								
{id:29, title: "Un idiota", artist: "Eddy Herrera ", src: "Musica/Un idiota.mp3", cover: "Img/Un idiota.jpg"},								
{id:30, title: "Ya Viene Amaneciendo", artist: "Antonio Aguilar", src: "Musica/Ya Viene Amaneciendo.mp3", cover: "Img/Ya Viene Amaneciendo.jpg"},															
];

// Render cards
const lista = document.getElementById('lista');
if(lista){
  function renderList(items){
    lista.innerHTML = items.map(t => `
      <div class="col-md-4">
        <div class="card h-100">
          <img src="${t.cover}" class="card-img-top" alt="${t.title}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${t.title}</h5>
            <p class="card-text">${t.artist}</p>
            <div class="mt-auto">
              <button class="btn btn-primary w-100" onclick="playTrack(${t.id})">Reproducir</button>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }
  renderList(tracks);
}

// Search functionality
const search = document.getElementById('search');
if(search){
  search.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    const filtered = tracks.filter(t => t.title.toLowerCase().includes(q) || t.artist.toLowerCase().includes(q));
    renderList(filtered);
  });
}

// Player controls
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const nowTitle = document.getElementById('now-title');
const nowArtist = document.getElementById('now-artist');

let currentIndex = 0;

function loadTrack(index){
  const t = tracks[index];
  if(!t) return;
  audio.src = t.src;
  nowTitle.textContent = t.title;
  nowArtist.textContent = t.artist;
  currentIndex = index;
}

function playTrack(id){
  const idx = tracks.findIndex(t => t.id === id);
  if(idx === -1) return;
  if(currentIndex !== idx) loadTrack(idx);
  audio.play();
  playBtn.textContent = '⏸';
}

if(playBtn){
  playBtn.addEventListener('click', () => {
    if(audio.paused){
      audio.play();
      playBtn.textContent = '⏸';
    } else {
      audio.pause();
      playBtn.textContent = '▶';
    }
  });
}

if(nextBtn){
  nextBtn.addEventListener('click', () => {
    const next = (currentIndex + 1) % tracks.length;
    loadTrack(next);
    audio.play();
    playBtn.textContent = '⏸';
  });
}

if(prevBtn){
  prevBtn.addEventListener('click', () => {
    const prev = (currentIndex - 1 + tracks.length) % tracks.length;
    loadTrack(prev);
    audio.play();
    playBtn.textContent = '⏸';
  });
}

// Auto-next when track ends (protegido)
if (audio) {
  audio.addEventListener('ended', () => {
    const next = (currentIndex + 1) % tracks.length;
    loadTrack(next);
    audio.play();
  });
}

// Inicializa primer track (opcional)
if(tracks.length) loadTrack(0);
