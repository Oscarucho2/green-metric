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
    CheckboxGroup,
    Checkbox,
} from "@chakra-ui/react";


import ModuleInput from "./ModuleInput";

export default function Energia(){
    return(
        <VStack
        w="100%"
        divider={<StackDivider borderColor="gray.200" />}
        padding="30px"
        spacing={"30px"}
        >
            <h1>Energía y cambio climático</h1>
            
            <Stack spacing="30px" w="100%" padding="30px" className="column-3">
                <h3 className="expand-2 green">2.1 Indicar en cada espacio, la cantidad de forma numérica de mobiliario de eficiencia energética y el número de aplicaciones convencionales que usa</h3>
                
                <Stack spacing="30px">
                    <ModuleInput title="Iluminación" elements={[{text: '2.1.1 Descarga de alta intensidad', type:2}, 
                    {text:'2.1.2 LED', type:2}, {text:'2.1.3 Fluorescente', type:2}, {text:'2.1.4 Inducción', type:2}, {evidence:true, maxPhotos:3}]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput title="Refrigeradores" elements={[{text: '2.1.5 Convencional', type:2}, 
                    {text:'2.1.6 De alta eficiencia', type:2}, {text:'2.1.7 De laboratorio', type:2},{evidence:true, maxPhotos:3}]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput title="Generadores eléctricos" elements={[
                    {text: '2.1.8 Generador inverter', type:2}, 
                    {text:'2.1.9 Generador por condensador', type:2}, {text:'2.1.10 Generador por regulador electrónico', type:2},{evidence:true, maxPhotos:3}]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput title="Aire acondicionado" elements={[
                    {text: '2.1.11 Convencional', type:2}, 
                    {text:'2.1.12 Con tecnología inverter', type:2}, {text:'2.1.13 Aire lavado', type:2},{evidence:true, maxPhotos:3}]} />
                </Stack>
            </Stack>
            <Stack spacing="30px" w="100%" className="column-2">
                <ModuleInput title="2.1.14 En referencia a los edificios inteligentes, marcar si se cumple con las especificaciones siguientes dentro de cada uno de sus edificios" 
                checkbox={{data: [
                    "Presencia de Building Management System (BMS)/Building Information Modelling (BIM)/Building Automation System (BAS)/Facility Management System (FMS).",
                    "Soporte interactivo para usuarios a través de la APP o servicio en línea",
                    "Sistema de alarma contra intrusos.",
                    "Sistema de extinción de incendios.",
                    "Sistema de video vigilancia.",
                    "Sistema anti-inundaciones.",
                    "Sistema automático de adquisición y registro de consumo de energia.",
                    "Sistema de gestión automática para el suministro y producción de energía.",
                    "Sistema automático de adquisición y registro de consumo de agua.",
                    "Sistema de recuperación de agua de lluvia para riego y lavado.",
                    "Monitoreo de los parámetros ambientales relacionados con el confort.",
                    "Monitoreo de contaminantes atmosféricos.",
                    "Programación y gestión en tiempo real según el perfil de ocupación.",
                    "Sistema pasivo de refrigeración para suministros.",
                    "Luminarias de alta eficiencia (LED).",
                    "Control de iluminación automático (sensores de movimiento).",
                    "Ajuste de protección solar (ventanas polarizadas,pergolas).",
                    "Sistemas pasivos para el aprovechamiento de la luz natural (Ventanas y tragaluces).",
                    ]}}/>
            </Stack>
            <Stack spacing="30px" w="100%"   padding="30px">
            <ModuleInput title="2.1.15 Área total ocupada por Smart Buildings dentro de su entidad o espacio de trabajo"
                elements={[{type:5}]} /> 
            </Stack>
            <Stack spacing="30px" w="100%">
            <h3 className="expand-2 green">2.2 Responda los siguientes requerimentos</h3>
            <h4 className="expand-2 blue">2.2.1 Número de fuentes de energía renovable en su campus y su capacidad en kW/h para cada tipo que tenga (energía solar, eólica, geotérmica, hidroeléctrica, biodiesel y biomasa limpia).</h4>
            <h5 className="expand-2 blue">Coloque la información solicitada en los recuadros y añada evidencia fotográfica del recuadro de mayor tamaño</h5>
            <Stack w="100%" direction={"row"} divider={<StackDivider borderColor="gray.200" />}>
                <Stack spacing="30px">
                    <ModuleInput elements={[{text: 'Tipo de energía renovable', type:1}, 
                    {text:'Cantidad de equipos', type:2}, {text:'Capacidad de kW/h', type:2}, {evidence:true, maxPhotos:1}]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{text: 'Tipo de energía renovable', type:1}, 
                    {text:'Cantidad de equipos', type:2}, {text:'Capacidad de kW/h', type:2}, {evidence:true, maxPhotos:1}]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{text: 'Tipo de energía renovable', type:1}, 
                    {text:'Cantidad de equipos', type:2}, {text:'Capacidad de kW/h', type:2}, {evidence:true, maxPhotos:1}]} />
                </Stack>
            </Stack>
            </Stack>

            <Stack spacing="30px" w="100%" padding="30px" className="column-2">
            <h4 className="expand-2 blue">2.2.2 Certificación nacional o internacional sobre políticas en la implementación de edificion verdes. Adjuntar evidencia que lo valide</h4>
                <Stack spacing="30px">
                    <ModuleInput elements={[{text: 'Nombre de política', type:1}, 
                    {text:'Institución que lo valida', type:1}, {evidence:true, maxPhotos:3}]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{text: 'Nombre de política', type:1}, 
                    {text:'Institución que lo valida', type:1}, {evidence:true, maxPhotos:3}]} />
                </Stack>
            </Stack>
            {/* FALTA AGREGAR LA TABLA DE FUENTES DE EMISIÓN*/}
            <Stack spacing="30px" w="100%" align="center" direction="column">
                <h4 className="expand-2 blue">2.2.3 Condición de la implementación de programas para reducir las emisiones de gases de efecto invernadero (biodigestores, compostaje, etc.).</h4>
                <ModuleInput title="Determine la condición que refleje la situación actual de su entidad en la provisión de programas para reducir las emisiones de gases de efecto invernadero" select={[
                "Ninguno. Seleccione esta opción si se necesita el programa de reducción, pero no se ha hecho nada.",
                "Programa en preparación (es decir, estudio de factibilidad y promoción).",
                "Programa(s) tiene como objetivo reducir uno de los tres alcances de emisiones (Alcance 1 o 2 o 3).",
                "Los programas tienen como objetivo reducir dos de los tres alcances de emisiones (Alcance 1 y 2 o Alcance 1 y 3 o Alcance 2 y 3).",
                "Los programas tienen como objetivo reducir las emisiones de los tres alcances (Alcance 1, 2 y 3)",
                ]}/>
            </Stack>

            <Stack spacing="30px" w="100%" padding="30px">
            <h4 className="expand-2 blue">2.2.4 Número de programas de innovación en energía y cambio climático (Implementación de programas de seguridad energética, programas de ahorro de energía, programa de eficiencia energética, sosteibilidd energética, etc).</h4>
                <Stack spacing="30px">
                    <ModuleInput elements={[{type:2}, {evidence:true, maxPhotos:3}]} />
                 </Stack>
            </Stack>

            <Stack spacing="30px" w="100%" padding="30px" className="column-2">
            <h4 className="expand-2 blue">2.2.5 ¿Su entidad cuenta con programas que enfrentan los riesgos del cambio climático? ¿Cuál es su condición de implementación?</h4>
            <Stack spacing="30px">
                <ModuleInput title="2.2.5.1 3R (Reducir, Reusar, Reciclar)" elements={[{dicotomic:true, span:true}]} />
                <ModuleInput select={[
                "Sin programa implementado",
                "Programa en preparación",
                "Capacitación y material educativo a nivel local",
                "Capacitación y material educativo a nivel local y nacional",
                "Capacitación y material educativo a nivel local, nacional y internacional",
                ]}/>
                <ModuleInput elements={[{evidence:true, maxPhotos:3}]}/>            
                </Stack>
                <Stack spacing="30px">
                <ModuleInput title="2.2.5.2 Programa de seguridad energética" elements={[{dicotomic:true, span:true}]} />
                <ModuleInput select={[
                "Sin programa implementado",
                "Programa en preparación",
                "Capacitación y material educativo a nivel local",
                "Capacitación y material educativo a nivel local y nacional",
                "Capacitación y material educativo a nivel local, nacional y internacional",
                ]}/>
                <ModuleInput elements={[{evidence:true, maxPhotos:3}]}/>            
                </Stack>
                <Stack spacing="30px">
                <ModuleInput title="2.2.5.3 Mitigación de cambio climático" elements={[{dicotomic:true, span:true}]} />
                <ModuleInput select={[
                "Sin programa implementado",
                "Programa en preparación",
                "Capacitación y material educativo a nivel local",
                "Capacitación y material educativo a nivel local y nacional",
                "Capacitación y material educativo a nivel local, nacional y internacional",
                ]}/>
                <ModuleInput elements={[{evidence:true, maxPhotos:3}]}/>            
                </Stack>
                <Stack spacing="30px">
                <ModuleInput title="2.2.5.4 Reducción del uso de papel y plástico" elements={[{dicotomic:true, span:true}]} />
                <ModuleInput select={[
                "Sin programa implementado",
                "Programa en preparación",
                "Capacitación y material educativo a nivel local",
                "Capacitación y material educativo a nivel local y nacional",
                "Capacitación y material educativo a nivel local, nacional y internacional",
                ]}/>
                <ModuleInput elements={[{evidence:true, maxPhotos:3}]}/>            
                </Stack>
                <Stack spacing="30px">
                <ModuleInput title="2.2.5.5 3R Advertencia temprana del cambio climático" elements={[{dicotomic:true, span:true}]} />
                <ModuleInput select={[
                "Sin programa implementado",
                "Programa en preparación",
                "Capacitación y material educativo a nivel local",
                "Capacitación y material educativo a nivel local y nacional",
                "Capacitación y material educativo a nivel local, nacional y internacional",
                ]}/>
                <ModuleInput elements={[{evidence:true, maxPhotos:3}]}/>            
                </Stack>
            </Stack>
            
            <Stack spacing="30px" w="100%" align="center" direction="column">
                <ModuleInput title="2.3 Añade un comentario sobre el criterio que evaluaste en tu entidad. (Comentarios, sugerencias, crítica constructiva, observaciones. te lo agradecemos. "
                elements={[{type:1}]} />
            </Stack>
        </VStack>
    )
}