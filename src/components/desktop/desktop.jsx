import React from 'react'
import "./desktop.css"
import HorCard from "../firstHorizontalCard/firstHorizontalCard"
import Revisaras from "../../assets/desktop/largeHCards/reloj.png"
import Ultimo from "../../assets/desktop/largeHCards/camara.png"
import Libro from "../../assets/desktop/largeHCards/libro.png"
import Diplomado from "../../assets/desktop/largeHCards/diplomado.png"
import ModuloCard from "../moduloCard/moduloCard"
import Modulo1 from "../../assets/desktop/modulos/modulo1.png"
import Modulo2 from "../../assets/desktop/modulos/modulo2.png"
import Modulo3 from "../../assets/desktop/modulos/modulo3.png"
import Modulo4 from "../../assets/desktop/modulos/modulo4.png"
import Modulo5 from "../../assets/desktop/modulos/modulo5.png"
import Modulo6 from "../../assets/desktop/modulos/modulo6.png"
import Modulo7 from "../../assets/desktop/modulos/modulo7.png"
import Modulo8 from "../../assets/desktop/modulos/modulo8.png"
import Modulo9 from "../../assets/desktop/modulos/modulo9.png"
import Avalado1 from "../../assets/desktop/modulos/avalado1.png"
import Avalado2 from "../../assets/desktop/modulos/avalado2.png"
import ProfesorasCard from '../profesorasCard/profesorasCard'
import Raquel from "../../assets/desktop/profesoras/raquel.png"
import Elena from "../../assets/desktop/profesoras/elena.png"
import Rocio from "../../assets/desktop/profesoras/rocio.png"
import HerramientasCard from '../herramientasCard/herramientasCard'
import Conocimiento from "../../assets/desktop/finalizarCards/conocimiento.png"
import Habilidades from "../../assets/desktop/finalizarCards/habilidades.png"
import Seguridad from "../../assets/desktop/finalizarCards/seguridad.png"
import IncluyeR from "../../components/incluyeR/incluyeR"
import IncluyeL from '../../components/incluyeL/incluyeL'
import BeneficiosCard from '../../components/beneficiosCard/beneficiosCard'
import Tache from "../../assets/desktop/tache.png"
import PreguntasCard from "../../components/preguntasCard/preguntasCard"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import TestimonioCard from '../../components/testimonioCard/testimonioCard'

const Desktop = () => {
  return (
    <div>
        <div className='section1De'>
            <h2 className='bannerTitle'>Diplomado<br/> <span>MANEJO ÓPTIMO DE</span><br/> DIABETES<br/><span>EN LA ERA DE LA INSULINA</span></h2>
            <div className='bannerBottomDiv'>
                <p className='bannerBottomP'>Domina el manejo de diabetes con insulina, dispositivos de alta tecnología y tratamientos de última generación en menos de un año con nuestro diplomado.</p>
            </div>
        </div>
        <div className='section2De'>
            <div className='section2DeLeft'>
                <h2 className='purpleTitle'>¿En qué consiste<br/><span>el diplomado?</span></h2>
                <p className='regularP'>Este es un programa de 8 módulos, cada uno con duración de 4 semanas con 1 semana extra de descanso entre módulos.</p>
                <p className='smallP'>Al finalizar este programa dominarás el manejo de diabetes con insulina, así como los dispositivos de alta tecnología y tratamientos de última generación.</p>
            </div>
            <div className='horCardGroup'>
                <HorCard imageSrc={Revisaras} paragraphText={"Revisarás los contenidos semanalmente en tus horarios disponibles"}/>
                <HorCard imageSrc={Ultimo} paragraphText={"El último sábado de cada módulo, se realiza una sesión simultánea de 10:00 a.m. a 12:00 p.m. (UTC-6 CDMX)"}/>
                <HorCard imageSrc={Libro} paragraphText={"Puedes tomar un solo módulo (20 horas) o el diplomado completo (160 horas) con valor curricular"}/>
                <HorCard imageSrc={Diplomado} paragraphText={"El diplomado cuenta con el aval académico de la Universidad Anáhuac y la Sociedad Mexicana de Nutrición y Endocrinología"}/>
            </div>
        </div>
        <div className='section3De'>
            <h2 className='section3Title'>¿A quién va dirigido el programa?</h2>
            <p className='section3Subt'>Este programa es para ti si eres profesional de la salud y atiendes a personas con diabetes que requieren insulina y:</p>
            <ul className='firstLi'>
                <li >Sientes frustración por ver que tus pacientes con diabetes no mejoran sus resultados a pesar de tus esfuerzos</li>
                <li>Experimentas agotamiento por la falta de tiempo en consulta para explicar a tus consultantes con diabetes lo que necesitan comprender para tomar mejores decisiones.</li>
                <li>Quieres ofrecer una orientación terapéutica integral con base en la evidencia más actualizada.</li>
                <li>Deseas contar con herramientas y recursos prácticos para facilitar la comprensión en tus consultantes de su condición y valor del tratamiento.</li>
                <li>Anhelas ver a tus consultantes que viven con diabetes logren y mantengan sus metas mucho más rápido mejorando así su calidad de vida.</li>
            </ul>
        </div>
        <div className='section4De'>
            <h2 className='section4Title'>Contenido del programa</h2>
            <div className='ContenidoCardContainer'>
                <div className='moduloCardRow'>
                    <ModuloCard imageSrc={Modulo1} paragraphText={"Acompañamiento psicoeducativo en diabetes con uso de insulina."}/>
                    <ModuloCard imageSrc={Modulo2} paragraphText={"Estrategias para el auto-monitoreo de glucosa - prevención y tratamiento de complicaciones agudas."}/>
                    <ModuloCard imageSrc={Modulo3} paragraphText={"Prescripción de insulina en múltiples dosis y manejo nutricional."}/>
                </div>
                <div className='moduloCardRow'>
                    <ModuloCard imageSrc={Modulo4} paragraphText={"Ejercicio y diabetes con uso de insulina.."}/>
                    <ModuloCard imageSrc={Modulo5} paragraphText={"Manejo con microinfusoras de insulina.."}/>
                    <ModuloCard imageSrc={Modulo6} paragraphText={"Salud femenina: embarazo, lactancia, ciclo menstrual, menopausia con diabetes."}/>
                </div>
                <div className='moduloCardRow'>
                    <ModuloCard imageSrc={Modulo7} paragraphText={"Otros factores: cirugías, hospitalización, patologías asociadas, complicaciones y comorbilidades."}/>
                    <ModuloCard imageSrc={Modulo8} paragraphText={"Acompañamiento emocional en distintas etapas de la vida con diabetes."}/>
                    <ModuloCard imageSrc={Modulo9} />
                </div>
            </div>
            <div className='avaladoDiv'>
                <p className='avalado'>Avalado por</p>
                <img src={Avalado1} className='avaladoImage' alt='escudo'/>
                <img src={Avalado2} className='avaladoImage' alt='escudo'/>
            </div>
        </div>
        <div className='section5De'>
            <h2 className='section5Title'>¿Quién está detrás<br/><span>del programa?</span></h2>
            <div className='profCardRow'>
                    <ProfesorasCard imageSrc={Raquel} nombre={"Raquel Faradji"} title={"Profesora titular"} firstLi={"Doctora especialista en Endocrinología, Metabolismo y Diabetes por la Clínica Joslin, Universidad de Harvard."} secondtLi={"Investigadora con Sub-especialidad en terapia intensiva de diabetes con bombas de insulina."} thirdtLi={"Directora General de Clínica EnDi."}>
                        <li>Presidente de la Sociedad Mexicana de Nutrición y Endocrinología.</li>
                    </ProfesorasCard>
                    <ProfesorasCard imageSrc={Elena} nombre={"Elena Sáinz"} title={"Profesora titular"} firstLi={"Doctorada en Educación por la Universidad Iberoamericana."} secondtLi={"Directora de Educación Continua en Clínica EnDi."} thirdtLi={"Educadora en Diabetes Certificada por el CONED."}>
                        <li>"Más de 27 años de experiencia viviendo con Diabetes tipo 1, más de 15 utilizando terapias con microinfusora de insulina y 3 años con circuito cerrado DIY OPENAPS LOOP."</li>
                    </ProfesorasCard>
                    <ProfesorasCard imageSrc={Rocio} nombre={"Rocío Chontal"} title={"Coordinadora del programa"} firstLi={"Maestra en Salud Pública por el Instituto Nacional de Salud Pública en México."} secondtLi={"Lic. en Nutrición."} thirdtLi={"Coordinadora de Programas Educativos en Clínica EnDi."}/>
            </div>
            <div className='pinkLeftDiv'/>
            <div className='pinkRightDiv'/>
        </div>
        <div className='section6De'>
            <h2 className='queHerramientas'>¿Qué herramientas tendré al finalizar el diplomado?</h2>
            <div className='moduloCardRow'>
                <HerramientasCard imageSrc={Conocimiento} paragraphText={"Conocimiento actualizado del manejo óptimo de diabetes con insulina, dispositivos de alta tecnología y tratamientos de última generación."}/>
                <HerramientasCard imageSrc={Habilidades} paragraphText={"Habilidades avanzadas de análisis de monitoreo de glucosa con distintos dispositivos."}/>
                <HerramientasCard imageSrc={Seguridad} paragraphText={"Seguridad y confianza al aplicar estrategias para ajustes de tratamiento puntuales con base en evidencia para ver mejoras en el estado de salud de tus consultantes."}/>
            </div>
        </div>
        <div className='section7De'>
            <h2 className='queIncluye'>¿Qué incluye el diplomado?</h2>
            <div className='incluyeCardContainer'>
                <div className='incluyeLeftGroup'>
                    <IncluyeR incluyeP={"8 módulos"}/>
                    <IncluyeR incluyeP={"16 horas de talleres en directo"}/>
                    <IncluyeR incluyeP={"Lecturas de trabajo"}/>
                    <IncluyeR incluyeP={"Acceso de por vida a la comunidad de expertos en diabetes en Telegram"}/>
                </div>
                <div className='incluyeRightGroup'>
                    <IncluyeL incluyeP={"160 hrs con valor curricular"}/>
                    <IncluyeL incluyeP={"Kit de folletos para tus consultantes"}/>
                    <IncluyeL incluyeP={"Acceso a la plataforma en línea por un años"}/>
                    <IncluyeL incluyeP={"Contenidos dosificados semanalmente que puedes revisar en tus horarios disponibles"}/>
                </div>
            </div>
            <div className='section7DbottomDiv'>

                <h2 className='sieres'>Si eres de los primeros en inscribirse, accedes también a estos beneficios</h2>
                <div className='beneficiosDuo'>
                    <BeneficiosCard beneficioNumber={"Beneficio 1"} info={"Nuevas tecnologías para el monitoreo de glucosa en sangre."} beneficioPinkP={"(Para los primeros 5 inscritos)"} />
                    <BeneficiosCard beneficioNumber={"Beneficio 2"} info={"Sesión individual de preceptoría con el equipo de Clínica ENDI."} beneficioPinkP={"(Para los primeros 3 inscritos)"} />
                </div>
            </div>
        </div>
        <div className='section8De'>
            <h2 className='cuales'>¿Cuál es el valor del programa?</h2>
            <div className='gridContainer'>
                <div className='gridRow'>
                    <div className='topLeft' >
                        <p className='gridP'>Programa de 160 horas con valor curricular + 16 horas de talleres en vivo con especialistas</p>
                    </div>
                    <div className='topRight'>
                        <p className='gridP'><span>$160,000 MXN</span><br/>($8 000 USD)</p>
                    </div>
                </div>
                <div className='gridRow'>
                    <div className='middleLeft'>
                        <p className='gridP'>Kit de folletos para tus pacientes</p>
                    </div>
                    <div className='middleRight'>
                        <p className='gridP'><span>$2,000 MXN</span>($100 USD)<br/>Bono de regalo con tu inscripción</p>
                    </div>
                </div>
                <div className='gridRow'>
                    <div className='middleLeft'>
                        <p className='gridP'>Curso: Nuevas tecnologías para el monitoreo de glucosa en sangre</p>
                    </div>
                    <div className='middleRight'>
                        <p className='gridP'><span>$10,000 MXN</span> ($500 USD) Bono de regalo para los primeros 5 en inscribirse</p>
                    </div>
                </div>
                <div className='gridRow'>
                    <div className='middleLeft'>
                        <p className='gridP'>Acceso de por vida al grupo de Telegram de profesionales de la salud con expertise en diabetes</p>
                    </div>
                    <div className='middleRight'>
                        <p className='gridP'><span>Invaluable</span></p>
                    </div>
                </div>
                <div className='gridRow'>
                    <div className='bottomLeft'>
                        <p className='gridP'>Acceso a las grabaciones y a todo el material durante 1 año</p>
                    </div>
                    <div className='bottomRight'>
                        <p className='gridP'><span>Invaluable</span></p>
                    </div>
                </div>
            </div>
            <div className='valorTotalDiv'>
                <h2 className='valortotal'>Valor total:</h2>
                <h2 className='valortotal'> 172,000 MXN<br/>(8600 USD)</h2>
                <img src={Tache} className='tache'/>
            </div>
            <h2 className='porUnica'>Por única ocasión con más del</h2>
            <h2 className='ochenta'>80%<br/><span>de descuento</span></h2>
            <div className='treintaycuatroDiv'>
                <h2 className='treintaycuatro'>$34,997 MXN</h2>
            </div>
            <p className='mil'>$1,870 USD aprox.</p>
            <p className='felicidades'>*Facilidades de pago y meses sin intereses.</p>
        </div>
        <div className='section9De'>
            <h2 className='testimoniosTtitle'>Testimonios</h2>
            <div className='carouselContainer'>
                <Carousel indicators={false} interval={null}>
                    <Carousel.Item>
                        <TestimonioCard persona={"LN. Luz Ma. Archundia"}>
                            <p className="testimonio">Cambió mi percepción tanto de cómo indicar el tratamiento a mis consultantes, así como en la forma de cómo debemos tratar y abordar a los pacientes con diabetes.</p>
                            <p className="testimonio">Nunca había dimensionado todo lo que implica el día a día de una persona que padece esta enfermedad y cómo no se puede distraer del objetivo porque sabe que tendría consecuencias a su salud.</p>
                            <p className="testimonio">Quiero felicitar al equipo de la Clínica EnDi por sus clases, su entrega, su forma de trasmitir el conocimiento para mí ha sido una experiencia única e increíble, me ha encantado conocerles.</p>
                        </TestimonioCard>
                    </Carousel.Item>
                    <Carousel.Item>
                        <TestimonioCard persona={"Endocrinóloga Pediatra, Elisa Barrios Santos"}>
                            <p className="testimonio">Me ayudó a poder entender mejor al paciente que vive con diabetes y poder sacarle jugo a la herramienta del sensor, realmente apoya muchísimo para un buen control del padecimiento, ademas de que aprendí tips para ayudarles a llevar un mejor control desde la alimentación.</p>
                            <p className="testimonio">Las profesoras son excelentes y muy amables. Muchas gracias y les felicito por la atención.</p>
                        </TestimonioCard>
                    </Carousel.Item>
                    <Carousel.Item>
                        <TestimonioCard persona={"Erick Martínez Médico General"}>
                            <p className="testimonio">Aprendí a interpretar mejor la información de los sensores de monitoreo continuo de glucosa para poder hacer cambios relevantes en la terapéutica de los pacientes; además de cómo orientar mejor a los pacientes en cuanto al conteo de sus carbohidratos así como la administración de su insulina.</p>
                        </TestimonioCard>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
        <div className='section10De'>
            <h2 className='preguntasTitle'>Preguntas frecuentes</h2>
            <div className='preguntasCardContainer'>
                <PreguntasCard title={"¿Puedo entrar al programa si no tengo tiempo para estar en las sesiones en vivo?"} expandedContent={"¡Sí! El programa está hecho para que puedas aprender, incluso si no te conectas a las sesiones en vivo, es altamente recomendable, ya que son sesiones de aplicación en la práctica, pero tendrás el acceso a las grabaciones de las sesiones en vivo."}/>
                <PreguntasCard title={"¿Qué pasa si no tengo tarjeta de crédito?"} expandedContent={"Puedes pagar el diplomado con la tarjeta de crédito de tu preferencia, incluso si no está a tu nombre. El acceso a la plataforma siempre va a ser por medio de tu correo electrónico. También puedes pagar con tarjeta de débito o con efectivo por medio de transferencia interbancaria o depósito. Te ayudamos a encontrar el medio de pago que se adapte a tus posibilidades dentro de nuestras opciones, escríbenos directamente por WhatsApp al +52 55 2736 8121."}/>
                <PreguntasCard title={"¿Cuándo empieza y cuándo termina el programa?"} expandedContent={"El programa empieza el lunes 1.º de mayo del 2023 y termina el 11 de febrero de 2024. Cada semana se liberan contenidos que deberás revisar en el horario que tengas disponible (sujeto a cambios previo aviso). Cada módulo dura 4 semanas, más 1 semana extra que puedes utilizar para descansar o para repasar los contenidos previos antes de avanzar a los siguientes temas."}/>
                <PreguntasCard title={"¿Qué días se transmiten las sesiones en vivo?"} expandedContent={"Las 8 sesiones en vivo se transmiten la cuarta semana de cada módulo en día sábado de 10:00 a.m. a 12:00 p.m. GTM-5 (horario Ciudad de México). La grabación está disponible a partir del día martes siguiente."}/>
                <PreguntasCard title={"¿Qué sucede después de hacer el pago?"} expandedContent={"Recibirás un correo electrónico con tus credenciales para entrar a nuestra escuela online. Allí encontrarás el calendario de trabajo y de las sesiones en vivo. Los contenidos de estudio y las actividades a desarrollar se irán liberando semana a semana. Si requieres factura podrás solicitarla por correo electrónico, envía tus datos de facturación junto con tu comprobante a clinicaendi@gmail.com"}/>
                <PreguntasCard title={"¿Qué pasa después de terminar el programa?"} expandedContent={"Una vez aprobado el programa, recibirás una constancia digital de Clínica EnDi con valor curricular de 160 horas con aval académico de la Sociedad Mexicana de Nutrición y Endocrinología y la Universidad Anáhuac de Cancún, México."}/>
            </div>
            
        </div>

    </div>
  )
}

export default Desktop