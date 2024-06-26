import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const Modal = () => {
  
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [tag, setTag] = useState('');
  
  // useEffect para realizar una acción cuando se actualicen los estados
  useEffect(() => {
    // Puedes realizar alguna acción cada vez que los estados cambien
    
  }, [title, message, tag]);

  // Función para manejar el clic del botón Publicar
  const handlePublish = () => {
    // Validar que todos los campos estén llenos
    if (!title || !message || !tag) {
      Swal.fire({
        title: 'Error',
        text: 'Todos los campos son obligatorios',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }

    // Validar longitud del título, mensaje y tag
    if (title.length < 3 || message.length < 3 || tag.length < 3) {
      Swal.fire({
        title: 'Error',
        text: 'Todos los campos deben tener al menos 3 caracteres',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }

    // alerta
    Swal.fire({
      title: 'Confirmar publicación',
      html: `¿Estás seguro de que deseas publicar esto?<br><br><strong>Título:</strong> ${title}<br><strong>Mensaje:</strong> ${message}<br><strong>Tag:</strong> ${tag}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Publicar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      // Si el usuario confirma la publicación, guarda los datos
      if (result.isConfirmed) {
        // Aquí puedes enviar los datos a tu backend o realizar cualquier otra acción
        console.log(title);
        console.log(message);
        console.log(tag);

        handleCancelar();
        
        Swal.fire('Publicado!', 'Tu publicación ha sido publicada con éxito.', 'success');
      }
    });
  }

  const handleCancelar = () => {
    setTitle('');
    setMessage('');
    setTag('');
  }

  return (
    <>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Nueva publicación✨</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title-text" className="col-form-label">Título *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title-text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">¿Qué quieres escribir? *</label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Añadir tag *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button id="boton-cancelar" type="button" className="btn btn-outline-secondary" onClick={handleCancelar} data-bs-dismiss="modal">Cancelar</button>
              <button id="boton-publicar" type="button" className="btn btn-secondary" onClick={handlePublish}>Publicar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
