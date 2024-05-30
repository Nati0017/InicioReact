
import React from 'react';


const Cards = () => {

    return (

        <>
           
                        <div className="card cardprincipal" >
                            <div className="card-body card-pub">
                                <img
                                    src="data:image/png;base64,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"
                                    alt=""
                                    width="40px"
                                    height="40px"
                                />
                                <span>Coniconeja</span>
                                <h5 className="card-title mt-2">
                                    Soy adulta y hace poco me enteré de que tenía TDAH
                                </h5>
                                <p className="card-text mt-3">
                                    🔍✨ ¡Hola a todos! Quiero compartir algo personal con ustedes que acabo
                                    de descubrir y que ha sido un verdadero punto de inflexión en mi vida.
                                    Después de años de luchar con lo que pensaba que eran solo
                                    "distracciones normales", finalmente comprendí que podría tener TDAH en
                                    la edad adulta. 💡✍️ Ahora estoy en el proceso de aprender más sobre el
                                    TDAH en adultos y cómo puedo manejar mejor mis síntomas. Quiero animar a
                                    cualquiera que esté pasando por algo similar a que no tenga miedo de
                                    buscar ayuda y apoyo. ¡No estás solo en esto! Compartir mi experiencia
                                    es un paso hacia adelante en mi viaje de autodescubrimiento y
                                    autocuidado. Si alguien más se siente identificado con esto, ¡me
                                    encantaría saber de ustedes! Juntos podemos compartir experiencias y
                                    apoyarnos mutuamente en este camino.
                                </p>
                                <br />
                                <span className="badge rounded-pill ">TDA</span>
                                <span className="badge rounded-pill ">INCLUSIÓN</span>
                                <span className="badge rounded-pill ">INCLUSIÓN</span>
                            </div>
                        </div>{" "}
                    <br />
                
        
        </>
    )
}

export default Cards