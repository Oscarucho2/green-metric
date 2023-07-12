"use client";
import {
    Input,
    Stack,
    VStack,
    Text,
    StackDivider,
    InputLeftElement,
    InputGroup,
    Select,
    Button,
} from "@chakra-ui/react";


import ModuleInput from "./ModuleInput";
import CustomTextArea from "./CustomTextArea";
import { useEffect, useState } from 'react';

export default function Educacion() {

    const [components,setComponents] = useState([]);
    const [components2,setComponents2] = useState([]);
    const [components3,setComponents3] = useState([]);
    const [components4,setComponents4] = useState([]);
    const [components5,setComponents5] = useState([]);
    const [components6,setComponents6] = useState([]);
    const [components7,setComponents7] = useState([]); 
    const [components8,setComponents8] = useState([]);
    const [components9,setComponents9] = useState([]);



    
    const item = () => {
        const newMod = [...components, { text: 'Nombre del foro', type: 1, question:'6-3-1-1-3' }, { text: "Asistentes", type: 1, question:'6-3-1-1-4' }, { evidence: true }];
        setComponents([...newMod]);
    }

    const item2 = () => {
        const newMod2 = [...components2,{ text: 'Nombre de la rodada', type: 1, question:'6-3-1-2-1' }, { text: "Asistentes", type: 1 , question:'6-3-1-2-2'}, { evidence: true }];
        setComponents2([...newMod2]);
    }

    const item3 = () => {
        const newMod3 = [...components3, { text: 'Nombre de la feria', type: 1, question:'6-3-1-3-1' }, { text: "Asistentes", type: 1, question:'6-3-1-3-2' }, { evidence: true }];
        setComponents3([...newMod3]);
    }
    
    const item4 = () => {
        const newMod4 = [...components4, { text: 'Nombre de la charla', type: 1, question:'6-3-1-4-1' }, { text: "Asistentes", type: 1, question:'6-3-1-4-2' }, { evidence: true }];
        setComponents4([...newMod4]);
    }
    const item5 = () => {
        const newMod5 = [...components5, { text: 'Nombre del seminario', type: 1, question:'6-3-1-5-1' }, { text: "Asistentes", type: 1, question:'6-3-1-5-2' }, { evidence: true }];
        setComponents5([...newMod5]);
    }

   
    const item6 = () => {
        const newMod6 = [...components6,{ text: 'Nombre de la conferencia', type: 1, question:'6-3-1-6-1' }, { text: "Asistentes", type: 1, question:'6-3-1-6-2' }, { evidence: true }];
        setComponents6([...newMod6]);
    }

    const item7 = () => {
        const newMod7 = [...components7,{ text: 'Nombre de la conferencia', type: 1, question:'6-3-1-7-1' }, { text: "Asistentes", type: 1, question:'6-3-1-7-2' }, { evidence: true }];
        setComponents7([...newMod7]);
    }
    
    const item8 = () => {
        const newMod8 = [...components8,{ text: 'Número de programas', type: 2, question:'6-5-1-1' }, { evidence: true }];
        setComponents8([...newMod8]);
    }
    
    const item9 = () => {
        const newMod9 = [...components9,{ text: 'Nombre del proyecto', type: 1, question:'6-5-3-4' }, { text: 'Cantidad destinada ($)', type: 6, question:'6-5-3-5' }, { text: 'Fuente de recurso', type: 1, question:'6-5-3-6' }, { evidence: true }];
        setComponents9([...newMod9]);
    }
    
    return (
        <VStack
            w="100%"
            divider={<StackDivider borderColor="gray.200" />}
            padding="30px"
            spacing={"30px"}
        >
            <h1 className="blue">Educación</h1>
            <Stack spacing="30px" w="100%" padding="30px" direction="column">
                <h2 className="green">6.1 Cursos y asignaturas</h2>
                <ModuleInput title="6.1.1 Números de cursos/asignaturas totales, contenidos en el plan curricular de cada programa educativo que ofrece la entidad."
                    elements={[{ type: 2, question:'6-1-1' }]} />
                <ModuleInput title="6.1.2 Indicar el número de cursos/aginaturas relacionado con la sostenibilidad."
                    elements={[{ text: 'Número de cursos y asignaturas', type: 2, question:'6-1-2-1' }, { text: 'Nombre del curso o asignatura', type: 1, question:'6-1-2-2' }, { text: 'Nombre del programa educativo', type: 1, question:'6-1-2-3' }]} />
                <ModuleInput elements={[{ disabled: true, type: -1, text: "Total: ", holder: "Total", question:'6-1-2-4' },]} />
                <ModuleInput title="6.1.3 Número de alumnos que tomaron materias ambientales y sostenibilidad."
                    elements={[{ type: 2, question:'6-1-3' }]} />
            </Stack>

            <Stack spacing="30px" className="column-3">
                <h2 className="green">6.2 Número de eventos relacionados con la sostenibilidad.</h2>
                <ModuleInput title="6.2.1 Indicar el número de cursos/aginaturas relacionado con la sostenibilidad."
                    elements={[{ text: 'Nombre del evento', type: 2, question:'6-2-1-1' }, { text: 'Responsable', type: 1, question:'6-2-1-2' }, { evidence: true, maxPhotos: 3 }]} />
                <ModuleInput
                    elements={[{ text: 'Nombre del evento', type: 2, question:'6-2-1-3' }, { text: 'Responsable', type: 1, question:'6-2-1-4' }, { evidence: true, maxPhotos: 3 }]} />
                <ModuleInput
                    elements={[{ text: 'Nombre del evento', type: 2, question:'6-2-1-5' }, { text: 'Responsable', type: 1, question:'6-2-1-6' }, { evidence: true, maxPhotos: 3 }]} />
            </Stack>

            <Stack spacing="30px" w="100%" padding="30px" className="column-3">
            <Button className="add-button" onClick={item}>+</Button>
                <h2 className="green">6.3 Actividades extracurriculares</h2>
                <h3 className="blue">6.3.1.1 Foros</h3>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre del foro', type: 1, question:'6-3-1-1-1' }, { text: "Asistentes", type: 1, question:'6-3-1-1-2' }, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre del foro', type: 1, question:'6-3-1-1-3' }, { text: "Asistentes", type: 1, question:'6-3-1-1-4' }, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={components}/>
                </Stack>
                <Button className="add-button" onClick={item2}>+</Button>
                <h3 className="blue">6.3.1.2 Rodadas</h3>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre de la rodada', type: 1, question:'6-3-1-2-1' }, { text: "Asistentes", type: 1 , question:'6-3-1-2-2'}, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre de la rodada', type: 1, question:'6-3-1-2-3'}, { text: "Asistentes", type: 1, question:'6-3-1-2-4' }, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                <ModuleInput elements={components2}/>
                </Stack>
                <Button className="add-button" onClick={item3}>+</Button>
                <h3 className="blue">6.3.1.3 Ferias (cualquier tipo)</h3>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre de la feria', type: 1, question:'6-3-1-3-1' }, { text: "Asistentes", type: 1, question:'6-3-1-3-2' }, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre del feria', type: 1, question:'6-3-1-3-3' }, { text: "Asistentes", type: 1, question:'6-3-1-3-4' }, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px" >
                <ModuleInput elements={components3}/>
                </Stack>

                <Button className="add-button" onClick={item4}>+</Button>
                <h3 className="blue">6.3.1.4 Charlas</h3>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre de la charla', type: 1, question:'6-3-1-4-1' }, { text: "Asistentes", type: 1, question:'6-3-1-4-2' }, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre de la charla', type: 1, question:'6-3-1-4-3' }, { text: "Asistentes", type: 1, question:'6-3-1-4-4' }, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                <ModuleInput elements={components4}/>
                </Stack>

                <Button className="add-button" onClick={item5}>+</Button>
                <h3 className="blue">6.3.1.5 Seminarios</h3>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre del seminario', type: 1, question:'6-3-1-5-1' }, { text: "Asistentes", type: 1, question:'6-3-1-5-2' }, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre del seminario', type: 1, question:'6-3-1-5-3' }, { text: "Asistentes", type: 1, question:'6-3-1-5-4' }, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px" >
                <ModuleInput elements={components5}/>
                </Stack>

                <Button className="add-button" onClick={item6}>+</Button>
                <h3 className="blue">6.3.1.6 Conferencias</h3>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre de la conferencia', type: 1, question:'6-3-1-6-1' }, { text: "Asistentes", type: 1, question:'6-3-1-6-2' }, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre de la conferencia', type: 1, question:'6-3-1-6-3' }, { text: "Asistentes", type: 1, question:'6-3-1-6-4' }, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                <ModuleInput elements={components6}/>
                </Stack>
                <Button className="add-button" onClick={item7}>+</Button>
                <h3 className="blue">6.3.1.7 Eventos culturales (festivales, teatro, evento musical, exhibiciones artísticas,etc.)</h3>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre de la conferencia', type: 1, question:'6-3-1-7-1' }, { text: "Asistentes", type: 1, question:'6-3-1-7-2' }, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre de la conferencia', type: 1, question:'6-3-1-7-3' }, { text: "Asistentes", type: 1, question:'6-3-1-7-4' }, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                <ModuleInput elements={components7}/>
                </Stack>
            </Stack>

            <Stack spacing="30px" w="100%" padding="30px" className="column-3">
                <h2 className="green">6.4 Publicaciones académicas sobre sostenibilidad.</h2>
                <Stack spacing="30px">
                    <ModuleInput title="6.4.1 Indica el nombre de la publicación, autor (es) y lugar donde se publicó."
                        elements={[{ text: 'Nombre de la publicación', type: 1, question:'6-4-1-1-1' }, { text: 'Autor(es)', type: 1, question:'6-4-1-1-2' }, { text: 'Sitio de publicación', type: 1, question:'6-4-1-1-3' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput title="6.4.1 Indica el nombre de la publicación, autor (es) y lugar donde se publicó."
                        elements={[{ text: 'Nombre de la publicación', type: 1, question:'6-4-1-2-1' }, { text: 'Autor(es)', type: 1, question:'6-4-1-2-2' }, { text: 'Sitio de publicación', type: 1, question:'6-4-1-2-3' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput title="6.4.1 Indica el nombre de la publicación, autor (es) y lugar donde se publicó."
                        elements={[{ text: 'Nombre de la publicación', type: 1, question:'6-4-1-3-1' }, { text: 'Autor(es)', type: 1 , question:'6-4-1-3-2'}, { text: 'Sitio de publicación', type: 1, question:'6-4-1-3-4' }]} />
                </Stack>

                <Stack spacing="30px">
                    <ModuleInput title="6.4.2 Indica el número de tesis generadas sobre temas relacionados con la sostenibilidad."
                        elements={[{ type: 2, question:'6-4-2-1' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput title="6.4.2 Indica el número de tesis generadas sobre temas relacionados con la sostenibilidad."
                        elements={[{ type: 2, question:'6-4-2-2' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput title="6.4.2 Indica el número de tesis generadas sobre temas relacionados con la sostenibilidad."
                        elements={[{ type: 2, question:'6-4-2-3' }]} />
                </Stack>

                <Stack spacing="30px">
                    <ModuleInput title="6.4.3 Indica las agrupaciones que persiguen un objetivo relacionado con la sostenibilidad."
                        elements={[{ text: 'Nombre de agrupación', type: 1, question:'6-4-3-1-1' }, { text: ' Objetivo de agrupacion', type: 1, question:'6-4-3-1-2' }, { text: 'Integrantes', type: 2, question:'6-4-3-1-3' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput title="6.4.3 Indica las agrupaciones que persiguen un objetivo relacionado con la sostenibilidad."
                        elements={[{ text: 'Nombre de agrupación', type: 1, question:'6-4-3-2-1' }, { text: ' Objetivo de agrupacion', type: 1, question:'6-4-3-2-2' }, { text: 'Integrantes', type: 2, question:'6-4-3-2-3'}]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput title="6.4.3 Indica las agrupaciones que persiguen un objetivo relacionado con la sostenibilidad."
                        elements={[{ text: 'Nombre de agrupación', type: 1, question:'6-4-3-3-1' }, { text: ' Objetivo de agrupacion', type: 1, question:'6-4-3-3-2' }, { text: 'Integrantes', type: 2, question:'6-4-3-3-3' }]} />
                </Stack>
            </Stack>
            <Stack spacing="30px" w="100%" padding="30px" className="column-3">
            <Button className="add-button" onClick={item8}>+</Button>
                <h2 className="green">6.5 Investigación relacionada a la sostenibilidad.</h2>
                <Stack spacing="30px">
                    <ModuleInput title="6.5.1 Número de programas relacionados con la sostenibilidad de su entidad con colaboraciones internacionales"
                        elements={[{ text: 'Número de programas', type: 2, question:'6-5-1-1' }, { evidence: true }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput title="6.5.1 Número de programas relacionados con la sostenibilidad de su entidad con colaboraciones internacionales"
                        elements={[{ text: 'Número de programas', type: 2, question:'6-5-1-2' }, { evidence: true }]} />
                </Stack>
                <Stack spacing="30px">
                <ModuleInput title="6.5.1 Número de programas relacionados con la sostenibilidad de su entidad con colaboraciones internacionales" elements={components8}/>
                </Stack>

                <Stack spacing="30px">
                    <ModuleInput title="6.5.2 Fondos de investigación totales de los últimos 3 años."
                        elements={[{ helper: 'Esta información se utilizará para calcular el porcentaje de financiación de la investigación sobre el medio ambiente y la sostenibilidad con respecto a la financiación total de la investigación.' }, { text: '2020', type: 2, question:'6-5-2-1' }, { evidence: true }]} />
                </Stack>

                <Stack spacing="30px">
                    <ModuleInput title="6.5.2 Fondos de investigación totales de los últimos 3 años."
                        elements={[{ helper: 'Esta información se utilizará para calcular el porcentaje de financiación de la investigación sobre el medio ambiente y la sostenibilidad con respecto a la financiación total de la investigación.' }, { text: '2021', type: 2, question:'6-5-2-2' }, { evidence: true }]} />
                </Stack>

                <Stack spacing="30px">
                    <ModuleInput title="6.5.2 Fondos de investigación totales de los últimos 3 años."
                        elements={[{ helper: 'Esta información se utilizará para calcular el porcentaje de financiación de la investigación sobre el medio ambiente y la sostenibilidad con respecto a la financiación total de la investigación.' }, { text: '2022', type: 2, question:'6-5-2-3' }, { evidence: true }]} />
                </Stack>

                <Stack spacing="30px">
                    <ModuleInput title="6.5.3 Cantidad monetaria destinada a proyectos relacionados con la sostenibilidad en los últimos 3 años"
                        elements={[{ text: 'Nombre del proyecto', type: 1, question:'6-5-3-1' }, { text: 'Cantidad destinada ($)', type: 6, question:'6-5-3-2' }, { text: 'Fuente de recurso', type: 1, question:'6-5-3-3' }, { evidence: true }]} />
                </Stack>

                <Stack spacing="30px">
                    <ModuleInput title="6.5.3 Cantidad monetaria destinada a proyectos relacionados con la sostenibilidad en los últimos 3 años"
                        elements={[{ text: 'Nombre del proyecto', type: 1, question:'6-5-3-4' }, { text: 'Cantidad destinada ($)', type: 6, question:'6-5-3-5' }, { text: 'Fuente de recurso', type: 1, question:'6-5-3-6' }, { evidence: true }]} />
                </Stack>
                <Button className="add-button" onClick={item9}>+</Button>
                <Stack spacing="30px" >
                <ModuleInput elements={components9}/>
                </Stack>

                <h3>6.5.4 Indique si en su entidad se realiza investigación relacionada con la sostenibilidad, y de ser así, indicar el nombre del investigador o investigadora, su área de investigación y proyectos de investigación.</h3>
                <Stack spacing="30px">
                    <ModuleInput
                        elements={[{ text: '1. Infraestructura y escenarios', dicotomic: true, questionDicotomic:'6-5-4-1' }, { text: 'Nombre del investigado', type: 1, question:'6-5-4-1-1' }, { text: 'Área de investigación', type: 1, question:'6-5-4-1-2' }, { text: 'Proyectos de investigación', type: 1, question:'6-5-4-1-3' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput
                        elements={[{ text: '2. Energía y cambio climático', dicotomic: true, questionDicotomic:'6-5-4-2' }, { text: 'Nombre del investigado', type: 1, question:'6-5-4-2-1' }, { text: 'Área de investigación', type: 1, question:'6-5-4-2-2'}, { text: 'Proyectos de investigación', type: 1, question:'6-5-4-2-3' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput
                        elements={[{ text: '3. Residuos', dicotomic: true, questionDicotomic:'6-5-4-3' }, { text: 'Nombre del investigado', type: 1, question:'6-5-4-3-1' }, { text: 'Área de investigación', type: 1, question:'6-5-4-3-2' }, { text: 'Proyectos de investigación', type: 1, question:'6-5-4-3-3' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput
                        elements={[{ text: '4. Agua', dicotomic: true, questionDicotomic:'6-5-4-4' }, { text: 'Nombre del investigado', type: 1, question:'6-5-4-4-1' }, { text: 'Área de investigación', type: 1, question:'6-5-4-4-2' }, { text: 'Proyectos de investigación', type: 1, question:'6-5-4-4-3' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput
                        elements={[{ text: '5. Transporte', dicotomic: true, questionDicotomic:'6-5-4-5'}, { text: 'Nombre del investigado', type: 1, question:'6-5-4-5-1' }, { text: 'Área de investigación', type: 1, question:'6-5-4-5-2' }, { text: 'Proyectos de investigación', type: 1, question:'6-5-4-5-3' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput
                        elements={[{ text: '6. Educación', dicotomic: true, questionDicotomic:'6-5-4-6' }, { text: 'Nombre del investigado', type: 1, question:'6-5-4-6-1' }, { text: 'Área de investigación', type: 1, question:'6-5-4-6-2' }, { text: 'Proyectos de investigación', type: 1, question:'6-5-4-6-3' }]} />
                </Stack>

                <h3>6.5.5 Indica los cuerpos académicos que tienen línea de investigación relacionada con sostenibilidad</h3>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre del grupo', type: 1, question:'6-5-5-1' }, { text: 'Objetivo', type: 1, question:'6-5-5-2' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre del grupo', type: 1, question:'6-5-5-3' }, { text: 'Objetivo', type: 1, question:'6-5-5-4' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre del grupo', type: 1, question:'6-5-5-5' }, { text: 'Objetivo', type: 1, question:'6-5-5-6' }]} />
                </Stack>

                <Stack spacing="30px">
                    <ModuleInput title="6.5.6 Número total de estudiantes regulares" elements={[{ type: 2, question:'6-5-6' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput title="6.5.7 Número total de estudiantes que trabajan en línea" elements={[{ type: 2, question:'6-5-7' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput title="6.5.8 Número total de personal académico y administrativo" elements={[{ type: 2, question:'6-5-8' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput title="6.5.9 Número total de grupos estudiantiles, o independientes que fomenten acciones en pro de la sostenibilidad. (clubes, organizaciones no gubernamentales, sindicatos, grupos, etc)" elements={[{ type: 2, question:'6-5-9' }, { evidence: true }]} />
                </Stack>

                <Stack spacing="30px">
                    <ModuleInput title="6.5.10 Número total de empresas o emprendimientos que han surgido en su entidad con productos o proyectos sostenibles" elements={[{ type: 2, question:'6-5-10' }, { evidence: true }]} />
                </Stack>
            </Stack>

            <CustomTextArea title="6.6 Añade un comentario sobre el criterio que evaluaste en tu entidad. (Comentarios, sugerencias, crítica cosntructiva, observaciones. te lo agradecemos." />
            <Button type="submit">Subir</Button>
        </VStack>
    )
}