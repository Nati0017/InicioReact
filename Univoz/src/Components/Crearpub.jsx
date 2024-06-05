import Modal from "./Modal"


const Crearpub = () => {
    return (
        <>
            <div className="col-12 col-md-5 col-xl-7 col-xxl-8">
                <div className="container">
                    <button
                        id="boton-crear"
                        type="button"
                        className="btn btn-light mt-3 mb-3"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        data-bs-whatever=""
                    >
                        Crear publicación +
                    </button>
                </div>
            </div>
            <Modal/>
        </>
    )
}

export default Crearpub