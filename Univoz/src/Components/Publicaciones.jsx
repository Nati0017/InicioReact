import React from 'react';
import Crearpub from './Crearpub';

function createData(id, usuario, titulo, descripcion, hashtags) {
  return { id, usuario, titulo, descripcion, hashtags };
}

const publicacionesCard = [
  createData(
    1,
    "Coniconeja",
    "Soy adulta y hace poco me enteré de que tenía TDAH",
    '🔍✨ ¡Hola a todos! Quiero compartir algo personal con ustedes que acabo de descubrir y que ha sido un verdadero punto de inflexión en mi vida. Después de años de luchar con lo que pensaba que eran solo "distracciones normales", finalmente comprendí que podría tener TDAH en la edad adulta. 💡✍️ Ahora estoy en el proceso de aprender más sobre el TDAH en adultos y cómo puedo manejar mejor mis síntomas. Quiero animar a cualquiera que esté pasando por algo similar a que no tenga miedo de buscar ayuda y apoyo. ¡No estás solo en esto! Compartir mi experiencia es un paso hacia adelante en mi viaje de autodescubrimiento y autocuidado. Si alguien más se siente identificado con esto, ¡me encantaría saber de ustedes! Juntos podemos compartir experiencias y apoyarnos mutuamente en este camino.',
    ["TDA", "ADULTO", "INCLUSIÓN"]
  ),
  createData(
    2,
    "Nati0017",
    "¿Cómo se desenvuelve el autismo en el deporte?",
    "El deporte les brinda mayor condiciones físicas además de que los ayuda a mejorar las habilidades motoras, mejoran la comunicación, la atención, la resolución de problemas de comportamiento y las habilidades académicas. La natación es uno de los deportes más completos y de bajo impacto, lo que lo hace ideal para niños con autismo. Ayuda a mejorar problemas sensoriales, proporciona una sensación relajante y desarrolla fuerza física, resistencia y coordinación 🏊🏃",
    ["ESCUELAS", "DEPORTES", "AUTISMO"]
  ),
  createData(
    3,
    "Mr.Burns",
    "Las máquinas touch de pago con tarjeta no consideran a las personas con discapacidad visual",
    "Es una máquina NO ACCESIBLE para personas con discapacidad visual, al ser touch las personas con esta y otras discapacidades (motoras), al no ver y tampoco tener control de movimientos precisos deben entregar sus claves a terceros, incapacitando, vulnerando/ violando derechos a una vida autónoma e independiente de las personas con discapacidad.😡",
    ["DISCAPACIDAD VISUAL", "ACCESIBILIDAD", "MOTRICIDAD"]
  ),
  createData(
    4,
    "ReginaGeorge",
    "✨Necesitamos un mundo más inclusivo✨",
    "Al abrazar la diversidad en todas sus formas, construimos sociedades más resilientes, innovadoras y justas, donde cada individuo tiene la oportunidad de prosperar y contribuir plenamente.🌈",
    ["SOCIEDAD INCLUSIVA", "DIFERENCIAS"]
  ),
];

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getAvatar(initial) {
  const avatarStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: getRandomColor(),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    color: "#fff",
    fontWeight: "bold",
  };

  return (
    <div style={avatarStyle}>
      {initial.toUpperCase()}
    </div>
  );
}

const Publicaciones = () => {
  return (
    <>
    <Crearpub />
      {publicacionesCard.map((publicacion, index) => (
        <div key={index}>
          <div className="card cardprincipal" id="tarjePublicaciones">
            <div className="card-body" id="pubCuerpo">
              <div className="d-flex align-items-center">
                {getAvatar(publicacion.usuario[0])}
                <span className="usuario ms-2">{publicacion.usuario}</span>
              </div>
              <h5 className="card-title mt-2">{publicacion.titulo}</h5>
              <p className="card-text mt-3">{publicacion.descripcion}</p>
              <div className="mt-3">
                {publicacion.hashtags.map((hashtag, index) => (
                  <span key={index} className="badge rounded-pill me-2">{hashtag}</span>
                ))}
              </div>
            </div>
          </div>
          <br />
        </div>
      ))}
    </>
  );
};

export default Publicaciones;
