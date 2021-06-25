import React, { Component } from 'react'
import ExpedienteTemplate from '../General/ExpedienteTemplate'

const datos = [
    {nombre: 'Comprobante de comicilio', url: 'https://www.uab.edu/vsrc/images/manuals/How_to_create_a_read_only_PDF.pdf',FechaCulminacion: '19/5/2021 16:1:11' },
    {nombre: 'Comprobante de nomina', url: 'https://www.uab.edu/vsrc/images/manuals/How_to_create_a_read_only_PDF.pdf',FechaCulminacion: '19/5/2021 16:1:11' },
 
];

const ContenidoMap = datos.map((datos) =>
    <div className="col-xs-6 col-md-4" key={datos.Id}>
        <ExpedienteTemplate nombreExpediente={datos.nombre} url={datos.url}/>
    </div>
);
export default class Expediente extends Component {
    render(props) {
        return (
            <div>
                <div className="pl-lg-4">
                    <div className=" p-3"><div className="form-group">
                        <label className="form-control-label">Diagnóstico</label>
                        <textarea rows={10} className="form-control"
                        defaultValue={"Inicio padecimiento actual en marzo de 2020 con escotoma en ojo derecho y disminución de la agudeza visual. Estudió de imagen de mayo de 2020 evidenció datos de malignidad de primario pulmonar con afección a adenopatías cervicales, mediastinales, ambas glándulas adrenales, además de múltiples lesiones pulmonares, hepáticas y óseas. PET/CT del 11 de junio de 2020 confirmó afección de sitios mencionados además de cámara posterior de ojo izquierdo. El 25 de junio de 2020 por medio de biopsia por broncoscopia se confirmó adenocarcinoma de pulmón CK7+, TTF1+, napsina A+. Se realizó Foundation One CDX el 17 de agosto de 2020 donde se confirmó fusión ROS1 (CD74-ROS1) positiva, sin presencia de otras conmutaciones de relevancia. Se administró radioterapia (20Gy/5Fx) paliativa a columna toracolumbar T12- L5 con mejoría clínica importante del dolor. El 31 de agosto de 2020 inició tratamiento con ceritinib 450mg/día con alimentos. El 01 de septiembre de2020 se realizó pericardiocentesis por derrame pericárdico con repercusión hemodinámica con citológico positivo para células neoplásicas. Se administraron un total de 8 ciclos de ceritinib con adecuada tolerancia y sin suspensiones por toxicidad. El 10 de marzo de 2021 se realizó RMN con evidencia de múltiples lesiones infratentoriales y supratentoriales intraxiales subcentimétricas no visualizadas en estudio previo. PET/CT del 24 de marzo de 2021 igualmente demostró progresión de la enfermedad en 3 sitios óseos (cresta iliaca derecha, fémur izquierdo y vertebra T5). Se extiende el presente resumen con fines informativos para considerar paciente para programa de uso compasivo con Rozlytrek (entrectinib)."} />
                    </div>
                    </div>
                    

                    <hr className="my-4"/>
                    <div className="p-3">
                        <div className="row ">
                        {ContenidoMap}
                    </div>
                    </div>
                    
                </div>

            </div>
        )
    }
}
