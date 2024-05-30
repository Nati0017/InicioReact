


const SideBar = () => {

    return (
        <>
            <div class="row">
                <div class="col-2 col-md-3 col-xl-2 col-xxl-2 sidebar-display">
                    <nav class="sidebar"  >
                        <div class="menu">
                            <ul>
                                <li class="list-group-item active"><a href="#"><i class="fas fa-house"></i> Inicio</a></li>
                                <li class="list-group-item"><a href="#"><i class="fas fa-circle-info"></i> Información</a>
                                </li>
                                <li class="list-group-item"><a href="#"><i class="fas fa-person"></i> Quiénes Somos</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default SideBar