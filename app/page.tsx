"use client";

import Form from "@/components/Form";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <main className={`my-10 px-2 h-full`}>
        <Form />
        <div className={`w-11/12 max-w-[1100px] mx-auto text-sm mt-5`}>
          <h2 className={`font-bold uppercase`}>
            <span className={`text-red-500`}>**</span> Términos y Condiciones
            del Sorteo “Epic CX30 GRAND TOURING 2025”
          </h2>
          <div>
            <ol className={`list-decimal ps-7`}>
              <li className={`ps-2`}>
                <span className={`font-medium`}>Organizador</span> <br /> El
                presente sorteo es organizado por Epic Motors SAS, con domicilio
                en Cartagena, Bolívar, Calle 58 No 18 A 04, y se regirá por los
                siguientes términos y condiciones.
              </li>
              <li className={`ps-2`}>
                <span className={`font-medium`}>Premio</span> <br /> El premio
                consiste en 12 vehículos Epic CX30 GRAND TOURING, modelo 2025,
                uno para cada ganador, durante un periodo de 12 meses. Un
                vehículo será sorteado el último sábado de cada mes, desde enero
                hasta diciembre de 2.025.
              </li>
              <li className={`ps-2`}>
                <span className={`font-medium`}>Participantes</span> <br />{" "}
                Podrán participar todas las personas naturales mayores de 18
                años, residentes en Colombia, que completen correctamente el
                formulario disponible en la página web del sorteo, acepten los
                términos y condiciones, y otorguen su consentimiento para el
                tratamiento de sus datos personales.
              </li>
              <li className={`ps-2`}>
                <span className={`font-medium`}>Mecanismo de paticipación</span>{" "}
                <br />
                Para participar en el sorteo, los interesados deberán:
                <ul className={`list-disc ps-5`}>
                  <li className={`ps-3`}>
                    Diligenciar completamente el formulario de inscripción
                    disponible en &ldquo;{" "}
                    <span className={`text-blue-600`}>
                      {" "}
                      www.sorteovehiculoepic@epicmotors.com
                    </span>
                    &ldquo;.
                  </li>
                  <li className={`ps-3`}>
                    Proporcionar datos veraces y completos.
                  </li>
                  <li className={`ps-3`}>
                    Aceptar los términos y condiciones del sorteo y el
                    tratamiento de datos personales.
                  </li>
                </ul>
                Solo será válida una inscripción por persona cada mes. Si una
                persona desea participar en sorteos posteriores, deberá
                diligenciar el formulario nuevamente.
              </li>
              <li className={`ps-2`}>
                <span className={`font-medium`}>Selección de ganadores</span>{" "}
                <br /> Cada mes, un ganador será seleccionado de forma aleatoria
                mediante una plataforma certificada de sorteos. La selección
                será pública y se transmitirá en redes sociales. El nombre del
                ganador será anunciado en nuestras redes sociales y en la página
                web oficial de Epic Motors SAS.
              </li>
              <li className={`ps-2`}>
                <span className={`font-medium`}>Notificación del ganador</span>{" "}
                <br /> El ganador será notificado a través de los datos de
                contacto proporcionados en el formulario de inscripción
                (teléfono o correo electrónico). En caso de que no se logre
                contactar al ganador dentro de los 10 días hábiles siguientes a
                la realización del sorteo, Epic Motors SAS se reserva el derecho
                de seleccionar un nuevo ganador.
              </li>
              <li className={`ps-2`}>
                <span className={`font-medium`}>Entrega del premio</span> <br />{" "}
                El ganador de cada mes deberá presentar su identificación y
                firmar la documentación correspondiente para la entrega del
                vehículo. Los gastos de impuestos y registro vehicular serán
                responsabilidad del ganador. El premio no es transferible ni
                intercambiable por dinero en efectivo.
              </li>
              <li className={`ps-2`}>
                <span className={`font-medium`}>Exclusiones</span> <br /> No
                podrán participar empleados de Epic Motors SAS, ni sus
                familiares directos (padres, hijos, cónyuges), ni personas que
                tengan relación profesional con la organización del sorteo.
              </li>
              <li className={`ps-2`}>
                <span className={`font-medium`}>Publicidad</span> <br /> El
                ganador autoriza a Epic Motors SAS a utilizar su nombre, imagen
                y datos para efectos publicitarios en medios de comunicación sin
                que esto genere compensación adicional.
              </li>
              <li className={`ps-2`}>
                <span className={`font-medium`}>Datos personales</span> <br />{" "}
                Los datos recolectados serán tratados de acuerdo con la Ley de
                Protección de Datos Personales y únicamente utilizados para
                fines relacionados con el sorteo. El participante podrá
                solicitar la actualización, rectificación o supresión de sus
                datos en cualquier momento.
              </li>
              <li className={`ps-2`}>
                <span className={`font-medium`}>
                  Modificación de términos y condiciones
                </span>{" "}
                <br /> Epic Motors SAS se reserva el derecho de modificar los
                términos y condiciones del presente sorteo, siempre que se
                informe con antelación suficiente a los participantes a través
                de su página web oficial.
              </li>
              <li className={`ps-2`}>
                <span className={`font-medium`}>Aceptación de términos</span>{" "}
                <br /> La participación en el sorteo implica la aceptación plena
                de estos términos y condiciones, sin lugar a reclamo alguno.
              </li>
            </ol>
          </div>
        </div>
      </main>
    </Wrapper>
  );
}
