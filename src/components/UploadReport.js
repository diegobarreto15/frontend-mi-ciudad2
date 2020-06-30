import React from 'react'

class UploadReport extends React.Component {

    render() {
        return (
            <section class="content report-section">


                <div class="public-report">

                    <div class="content-user">
                        <div class="profile-img">
                            <figure>
                                <img src="../../assets/images/fot-profil.png" />
                            </figure>
                            <p>Tironi_Tiziana</p>
                        </div>
                    </div>

                    <div class="description">
                        <textarea placeholder="Escribe la descripcion aca"></textarea>
                    </div>

                    <div class="items-lower">
                        <ul>
                            <li>
                                <a href="#">
                                    <i class="fas fa-cogs settings"></i>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <i class="fas fa-camera camera"></i>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <i class="fas fa-map-marker-alt map-marker"></i>
                                </a>
                            </li>

                            <li>
                                <a href="#"
                                    class="btn-public">
                                    Publicar
              </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </section>
        )
    }

}
export default UploadReport;