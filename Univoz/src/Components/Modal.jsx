import React, { useRef } from 'react';
import Swal from 'sweetalert2';

const Modal = () => {
    // Crear referencias para los inputs
    const messageRef = useRef(null);
    const tagRef = useRef(null);

    // Función para manejar el clic del botón Publicar
    const handlePublish = () => {
        const message = messageRef.current.value;
        const tag = tagRef.current.value;

        // Mostrar la alerta de confirmación usando SweetAlert2
        Swal.fire({
            title: 'Confirmar publicación',
            html: `¿Estás seguro de que deseas publicar esto?<br><br><strong>Mensaje:</strong> ${message}<br><strong>Tag:</strong> ${tag}`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Publicar',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then((result) => {
            // Si el usuario confirma la publicación, guarda los datos
            if (result.isConfirmed) {
                // Aquí puedes enviar los datos a tu backend o realizar cualquier otra acción
                console.log(message);
                console.log(tag);
                // Otra acción aquí...
                Swal.fire('Publicado!', 'Tu publicación ha sido publicada.', 'success');
            }
        });
    }

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Nueva publicación</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="message-text" className="col-form-label">¿Qué estás pensando? *</label>
                                    <textarea className="form-control" id="message-text" ref={messageRef}></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Añadir tag *</label>
                                    <input type="text" className="form-control" id="recipient-name" ref={tagRef}/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button id="boton-cancelar" type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button id="boton-publicar" type="button" className="btn btn-secondary" onClick={handlePublish}>Publicar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
