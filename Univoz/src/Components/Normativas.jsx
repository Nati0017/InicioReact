function createData(id, titulo, descripcion, url) {
  return { id, titulo, descripcion, url };
}

const informacionCard = [
  createData(
    1,
    "Ley TEA (N° 21.545, 2023, Ministerio de Salud",
    "La Ley de Autismo N° 21.545 fue promulgada en marzo del 2023, siendo un avance importante para la inclusión de esta comunidad en nuestro país. Los derechos que contempla consideran todo el ciclo vital de las personas autistas.",
    "https://www.bcn.cl/leychile/navegar?idNorma=1190123"
  ),
  createData(
    2,
    "Ley Miscelanea (N° 21.544, Art 10, 2023, Ministerio de Educación)",
    "Artículo de ley que regula los procesos de inclusión para estudiantes en situación de discapacidad en establecimientos particulares pagados.",
    "https://www.bcn.cl/leychile/navegar?idNorma=1190123"
  ),
  createData(
    3,
    "Determinación de alumnos con necesidades especiales (Decreto 170, 2010, Ministerio de Educación)",
    "Decreto que fija normas para determinar a los alumnos con necesidades educactivas especiales para que puedan acceder a beneficios de subvenciones para educación especial.",
    "https://www.bcn.cl/leychile/navegar?idNorma=1190123"
  ),
  createData(
    4,
    "Diversificación de la enseñanza (Decreto N° 83, 2015, Ministerio de Educación)",
    "Decreto que considera la educación como un derecho fundamental y que surge como una herramienta para asegurar la particiáción y el aprendizaje de todos los estudiantes, incluidos aquellos que enfrentan dificultades para aprender y participar en la vida escolar.",
    "https://www.bcn.cl/leychile/navegar?idNorma=1190123"
  ),
  createData(
    5,
    "Decreto 65 Ministerio del Trabajo",
    "Establece normas de igualdad de oportunidades e inclusión social para personas con discapacidad.",
    "https://www.bcn.cl/leychile/navegar?idNorma=1190123"
  ),
  createData(
    6,
    "Ley de inclusión laboral (N° 21.015, 2018, Ministerio de Desarrollo Social)",
    "Ley que provee una inclusión laboral eficaz de las personas en situación de discapacidad, tanto en el ámbito público como en el privado.",
    "https://www.bcn.cl/leychile/navegar?idNorma=1190123"
  ),
  createData(
    7,
    "Ley de gestor de inclusión (N° 21.275, 2020, Ministerio del Trabajo y Prevención Social)",
    "Ley que modifica el código del trabajo para exigir a las empresas pertinentes la adopción de medidas que faciliten la inclusión laboral de trabajadores en situación de discapacidad.",
    "https://www.bcn.cl/leychile/navegar?idNorma=1190123"
  ),
];

const Normativas = () => {
  return (
    <>
      <div className="infotitulo ms-4">
        <h3>Normativas</h3>
        <h4>Educación y trabajo</h4>
      </div>

      {informacionCard.map((informacion, index) => (
        <div key={index}>
          <div className="card card-principal" id="infotarj">
            <div className="card-body card-pub" id="info">
              <ul>
                <h4>
                  <i className="fa-solid fa-gavel fa-lg me-3"> </i>
                  <a
                    href={informacion.url}
                    target="blank"
                    className="card-link"
                    id="enlace-info"
                  >
                    {informacion.titulo}
                  </a>
                </h4>
              </ul>
              <div className="info-parrafo">
                <p>{informacion.descripcion}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Normativas;
