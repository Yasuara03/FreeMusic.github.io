// Lista de artistas
const artistas = [
{nombre:"Elvis Crespo", imagen:"Img/elvisC.jpg", descripcion:"Cantante puertorriqueño famoso por éxitos como 'Suavemente' y 'Luna Llena'"},																		
{nombre:"Anuel AA", imagen:"Img/Anuel AA.jpg", descripcion:"Anuel AA, nacido en 1992 en Puerto Rico, es un cantante y pionero del trap latino. Alcanzó fama con temas como Sola y Ayer, y tras salir de prisión en 2018, triunfó con su álbum Real Hasta la Muerte. Ha colaborado con Bad Bunny, Ozuna y Karol G, destacando por su estilo callejero y su lema “Real Hasta la Muerte”."},	
{nombre:"Abraham Mateo", imagen:"Img/Abraham Mateo.jpg", descripcion:"Nacido el 25 de agosto de 1998 en San Fernando, Cádiz, es un cantante y compositor español. Alcanzó fama internacional con temas como Señorita y Loco Enamorado, destacando por su versatilidad en el pop y la música urbana. Ha colaborado con artistas como Jennifer Lopez, Yandel y Sebastián Yatra, consolidándose como una figura importante del pop latino actual."},																		
{nombre:"Bad Bunny", imagen:"Img/bad bunny.jpg", descripcion:"Bad Bunny, nacido en 1994 en Puerto Rico, es un cantante y compositor que revolucionó la música urbana y el trap latino. Saltó a la fama con Soy Peor y logró éxito mundial con álbumes como YHLQMDLG y Un Verano Sin Ti. Es reconocido por su estilo único, su autenticidad y por romper barreras en la música y la cultura."},																		
{nombre:"Antonio Aguilar", imagen:"Img/antonioAguilar.jpg", descripcion:"Antonio Aguilar (1919-2007) fue un icónico cantante y actor mexicano, conocido como “El Charro de México”. Destacó en la música ranchera y mariachi, grabando más de 150 álbumes, y participó en más de 150 películas. Su legado continúa a través de sus hijos, Pepe Aguilar y Antonio Aguilar Jr."},																		
{nombre:"Arcangel", imagen:"Img/arcangel.jpg", descripcion:"Arcángel, nacido en 1985 en Nueva York, es un cantante y pionero del reguetón y la música urbana. Alcanzó fama con Chica Virtual y ha colaborado con artistas como Daddy Yankee y Bad Bunny, destacando por su estilo versátil y letras de romance y vida callejera."},																		
{nombre:"Dread Mar I", imagen:"Img/dread I.jpg", descripcion:"Dread Mar I, nacido en 1981 en Argentina, es un cantante de reggae en español conocido por sus letras sobre amor, conciencia social y espiritualidad. Es uno de los referentes del reggae latino, con álbumes destacados como Escucha y Playa Ancha."},																		
{nombre:"Espinoza Paz", imagen:"Img/Espinoza paz.jpg", descripcion:"Espinoza Paz, nacido en 1981 en Sinaloa, México, es un destacado cantante y compositor de música regional mexicana. Es conocido por éxitos como Lo Intentamos y El Próximo Viernes, y por sus letras románticas y emotivas que lo han convertido en una figura importante del género."},																		
{nombre:"Frank Louis", imagen:"Img/frank louis.jpg", descripcion:"Frank Louis es un cantante y productor urbano puertorriqueño que comenzó como corista de otros artistas y logró consolidarse en la música latina. Su estilo fusiona reguetón y música urbana con letras personales y emotivas. Uno de sus temas destacados es Piénsame junto a Luar La L, que impulsó su popularidad."},																		
{nombre:"Iñigo Quintero", imagen:"Img/inigoq.jpg", descripcion:"Íñigo Quintero, nacido en 2001 en A Coruña, España, es un joven cantautor que se hizo viral con su tema Si no Estás, llegando al número uno global en Spotify. Su música combina melodías sencillas al piano con letras de desamor y reflexión, conectando masivamente en plataformas como TikTok."},																		
{nombre:"Jezzy el Chef", imagen:"Img/jezzy.jpg", descripcion:"Jezzy, nacido como Jessy Leonardo Lorenzo Rodríguez en República Dominicana, es un artista urbano conocido como “El Chef de los Versos”. Sus canciones reflejan la vida de los jóvenes en los barrios y buscan transmitir mensajes de conciencia, como en su tema Preso a 30."},																		
{nombre:"Jon Z", imagen:"Img/jonz.jpg", descripcion:"Jon Z, nacido Jonathan Resto Quiñones en 1991 en Puerto Rico, es un rapero y cantante de trap latino y reguetón. Se hizo conocido con JonTrapVolta y 0 Sentimientos (Remix), y ha colaborado con artistas como Enrique Iglesias. Destaca por su estilo único que mezcla letras de calle, humor y reflexión."},																		
{nombre:"Kapo", imagen:"Img/kapo.jpg", descripcion:"Kapo, nacido Juan David Loaiza en Colombia, es un cantante urbano que fusiona afrobeat, reguetón y ritmos latinos. Alcanzó fama internacional con Ohnana y Uwaie, destacando por sus letras positivas y colaboraciones con artistas como Feid, Myke Towers y Yandel."},																		
{nombre:"Karol G", imagen:"Img/karlog.jpg", descripcion:"Karol G, nacida en 1991 en Medellín, Colombia, es una cantante de reguetón y música urbana. Es conocida por éxitos como Tusa y Bichota y ha colaborado con artistas como Bad Bunny y Anuel AA. Destaca por su estilo que mezcla ritmos urbanos con letras de empoderamiento y amor."},																		
{nombre:"Ken Y", imagen:"Img/kenY.jpg", descripcion:"Ken-Y, cuyo nombre real es Kenny Vázquez, es un cantante puertorriqueño nacido el 7 de septiembre de 1984 en Carolina, Puerto Rico. Es conocido por formar parte del dúo de reguetón romántico R.K.M & Ken-Y, donde destacó por su voz melódica y letras de amor. Tras el éxito con el dúo en canciones como Down y Te Regalo Amores, Ken-Y también ha desarrollado carrera como solista, consolidándose como una de las voces más reconocidas del reguetón romántico."},																		
{nombre:"Lalo Ebratt", imagen:"Img/lalo ebratt.jpg", descripcion:"Lalo Ebratt, cuyo nombre real es Eduardo Ebratt Martínez, nació el 3 de agosto de 1993 en Santa Marta, Colombia. Es un cantante y compositor de música urbana y reguetón, conocido por su estilo fresco y juvenil. Alcanzó fama internacional con su participación en el éxito Mocca del colectivo Trapical Minds y por canciones como Party Animal. Su estilo combina ritmos latinos con elementos de trap y reguetón, destacando por su carisma y energía en el escenario."},																		
{nombre:"Luar La L", imagen:"Img/luarp.jpg", descripcion:"Luar L, cuyo nombre real es Luis Alberto Ramírez López, es un cantante urbano dominicano nacido en Santo Domingo. Se ha destacado en el género del reguetón y música urbana con un estilo versátil que combina ritmos bailables con letras de romance y vida callejera. Es conocido por colaboraciones con artistas como Frank Louis, incluyendo el tema Piénsame, que lo consolidó como una figura emergente en la escena urbana latina."},																		
{nombre:"Manuel Turizo", imagen:"Img/Manuel turizo.jpg", descripcion:"Manuel Turizo, cuyo nombre real es Manuel Turizo Zapata, nació el 12 de abril de 2000 en Montería, Colombia. Es un cantante y compositor de música urbana y reguetón, reconocido por su estilo melódico y su voz característica. Alcanzó fama internacional con el sencillo Una Lady Como Tú y ha colaborado con artistas como Ozuna, Karol G y Maluma. Sus canciones combinan reguetón, pop y baladas urbanas, y se destacan por temas de amor y romance."},																		
{nombre:"Marc Segui", imagen:"Img/marc segui.jpg", descripcion:"Marc Seguí, nacido en 1998 en Palma de Mallorca, España, es un cantante de pop y música urbana. Alcanzó fama con Tiroteo y su remix con Rauw Alejandro, destacando por sus letras sobre amor y desamor y su estilo juvenil. Ha lanzado álbumes como Pinta y Colorea y AAAAAA, consolidándose como una voz emergente en España."},																		
{nombre:"Rauw Alejandro", imagen:"Img/rauw.jpg", descripcion:"Rauw Alejandro, nacido en 1993 en Puerto Rico, es un cantante y productor de música urbana y reguetón. Es conocido por éxitos como Todo de Ti y Tattoo, y ha colaborado con artistas como Rosalía y J Balvin. Destaca por su estilo versátil y su energía en el escenario."},																		
{nombre:"Remmy Velenzuela", imagen:"Img/remmy velenzuela.jpg", descripcion:"Remmy Valenzuela, nacido en 1990 en Sinaloa, México, es un cantante y acordeonista de música regional mexicana. Conocido como “El Príncipe del Acordeón”, alcanzó fama con éxitos como Te Tocó Perder y su álbum Mi Vida en Vida, destacando en corridos, narcocorridos y baladas románticas."},																		
{nombre:"Sech", imagen:"Img/sech.jpg", descripcion:"Sech, nacido en 1993 en Panamá, es un cantante de reguetón y R&B latino. Alcanzó fama con Otro Trago y ha colaborado con artistas como Bad Bunny y J Balvin, destacando por su voz melódica y letras románticas."},																		
{nombre:"Tony Dize", imagen:"Img/tonyDize.jpg", descripcion:"Tony Dize, cuyo nombre real es Tony Feliciano Rivera, nació el 31 de mayo de 1982 en Boston, Estados Unidos, y es de ascendencia puertorriqueña. Es un cantante de reguetón y música urbana, conocido por su estilo melódico y romántico. Alcanzó popularidad con éxitos como Permitirme y El Doctorado, y ha colaborado con artistas como Daddy Yankee, Wisin & Yandel y Jowell & Randy, consolidándose como una figura importante del reguetón romántico."},																		

];

// Contenedor de tarjetas
const contenedor = document.querySelector('.row.g-3.mt-2');

// Referencia al reproductor de audio
const audioPlayer = document.querySelector('#audio-player'); // asegúrate de tener <audio id="audio-player">

if (contenedor) {
  artistas.forEach(artista => {
    const div = document.createElement('div');
    div.classList.add('col-md-4');
    div.innerHTML = `
      <div class="card h-100">
        <img src="${artista.imagen}" class="card-img-top" alt="${artista.nombre}">
        <div class="card-body">
          <h5 class="card-title">${artista.nombre}</h5>
          <p class="card-text">${artista.descripcion}</p>
        </div>
      </div>
    `;
    contenedor.appendChild(div);

    // Añadir evento click a la tarjeta
    const card = div.querySelector('.card');
    card.addEventListener('click', () => {
      // Quitar 'playing' de todas las tarjetas
      document.querySelectorAll('.card.playing').forEach(c => c.classList.remove('playing'));
      // Agregar 'playing' a la tarjeta clickeada
      card.classList.add('playing');

      // Reproducir la música del artista
      if (audioPlayer) {
        audioPlayer.src = artista.audio; // cambiar la fuente de audio
        audioPlayer.play();              // reproducir
      }
    });
  });
}
