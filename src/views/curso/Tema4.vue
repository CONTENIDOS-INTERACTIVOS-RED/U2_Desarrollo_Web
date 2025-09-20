<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Uso de <em>framework</em>s (React, Angular)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Los marcos de trabajo de JavaScript moderno han transformado fundamentalmente el panorama del desarrollo <em>frontend</em>, proporcionando arquitecturas estructuradas, patrones establecidos y herramientas especializadas que permiten crear aplicaciones web complejas y escalables con mayor eficiencia y mantenibilidad. Estos marcos de trabajo abordan desafíos inherentes del desarrollo con JavaScript nativo, como la gestión de estado complejo, la sincronización entre datos e interfaz de usuario, la organización de código en aplicaciones grandes, y la implementación de patrones de diseño que faciliten la colaboración en equipos multidisciplinarios. La adopción de marcos de trabajo permite a los desarrolladores enfocarse en la lógica de negocio específica en lugar de en la infraestructura técnica fundamental.
    
        .bg-color-6.p-5(data-aos="fade-left")
          p.mb-0 React y Angular representan dos aproximaciones filosóficamente diferentes, pero igualmente válidas para estructurar aplicaciones <em>frontend</em>, cada una con fortalezas específicas que las hacen más apropiadas para diferentes tipos de proyectos y contextos organizacionales. 
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/2.svg", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-5(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p <b>React</b>, con su enfoque de biblioteca centrada en la creación de interfaces de usuario a través de componentes reutilizables, proporciona flexibilidad y simplicidad conceptual que permite integraciones graduales y arquitecturas personalizadas. 
              p.mb-0 <b>Angular</b>, como marco de trabajo completo, ofrece una estructura determinada que incluye todas las herramientas necesarias para desarrollar aplicaciones empresariales robustas, con patrones establecidos para enrutamiento, cliente HTTP, manejo de formularios, pruebas, e inyección de dependencias.
        p(data-aos="fade-left") Los subtemas incluyen una introducción comparativa a los principales marcos de trabajo de JavaScript, explorando sus filosofías y casos de uso óptimo; el estudio profundo de componentes y JSX en React, examinando cómo estos conceptos revolucionan el desarrollo de UI; la gestión de estado y propiedades en React, fundamental para crear aplicaciones interactivas; la exploración de directivas y módulos en Angular, que proporcionan estructura y reutilización; y una comparativa detallada entre React y Angular que guíe la selección del marco de trabajo más apropiado para proyectos específicos.

    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] Introducción a los <em>framework</em>s de JavaScript: diferencias entre React, Angular y Vue.js

    p.mb-5 La elección de un <em>framework</em> de JavaScript adecuado es una decisión estratégica en el desarrollo <em>frontend</em> moderno, ya que impacta directamente en la estructura, mantenibilidad y escalabilidad de las aplicaciones.
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white
            h2.mb-4(data-aos="flip-up") Introducción a los <em>framework</em>s de JavaScript: diferencias entre React, Angular y Vue.js   
            p.mb-4(data-aos="fade-right") En el PDF <b>Introducción a los <em>framework</em>s de JavaScript</b>, se presentan los fundamentos esenciales para comprender las diferencias entre React, Angular y Vue.js, los tres marcos más populares en la actualidad. A través de un enfoque comparativo y práctico, se exploran sus arquitecturas, filosofías de diseño y casos de uso ideales, brindando a los estudiantes una base crítica para seleccionar y aplicar la tecnología más adecuada según las necesidades de cada proyecto.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_7.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Introducción a los <em>framework</em>s de JavaScript: diferencias entre React, Angular y Vue.js  
    
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/4.png', alt='')
    
    #t_4_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.2] Componentes y JSX en React: cómo organizar una aplicación React
    
    .row.align-items-center.mb-5
      .col-lg-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema4/4-1.svg", style="max-width: 90px").mx-auto
      .col-lg
        p.mb-0 Los componentes son la unidad fundamental de la arquitectura en React, ya que encapsulan la lógica, el estado y la presentación en elementos reutilizables. Estos pueden combinarse para crear interfaces de usuario complejas a partir de bloques de construcción simples y bien definidos.
    
    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Paradigma basado en componentes" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-lg-0.order-2
            h4 Paradigma basado en componentes
            p Promueve separación de responsabilidades, reutilización, y mantenibilidad a través de la creación de elementos autocontenidos que gestionan su propio estado interno mientras se comunican con componentes padre e hijo a través de interfaces claramente definidas.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/5.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="JSX (JavaScript XML)" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-lg-0.order-2
            h4 JSX (JavaScript XML)
            p Sirve como azúcar sintáctico que permite escribir marcado directamente en javascript, permitiendo a desarrolladores aprovechar el poder completo del lenguaje mientras mantienen la naturaleza declarativa que hace el desarrollo de UI intuitivo y predecible.
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/6.png', alt='')
    
    p.mb-5 La organización efectiva de aplicaciones React requiere comprensión de patrones como composición de componentes, propiedades de renderizado, componentes de orden superior, y hooks personalizados que permiten reutilización de código sin sacrificar claridad o rendimiento (Contreras Castañeda, 2016). 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema4/7.svg")
            .col-lg-9.order-1.mb-3.mb-lg-0
              p La jerarquía de componentes debe reflejar la arquitectura de información de la aplicación, con componentes contenedores gestionando lógica de negocio y estado mientras componentes de presentación se enfocan únicamente en renderizar UI basada en propiedades recibidas. 
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema4/8.svg")
            .col-lg-9.order-1.mb-3.mb-lg-0
              p El uso apropiado del algoritmo de reconciliación de React a través de propiedades claves, técnicas de memorización con React.memo y useMemo, y división de código con carga diferida asegura que aplicaciones permanezcan eficientes conforme escalan.
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema4/9.svg")
            .col-lg-9.order-1.mb-3.mb-lg-0
              p El desarrollo moderno de React enfatiza componentes funcionales con hooks sobre componentes de clase, proporcionando sintaxis más limpia y mejores oportunidades para reutilización de lógica a través de componentes.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/10.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En aplicaciones de gestión de atención médica, la arquitectura basada en componentes de React, permite la creación de elementos UI reutilizables como tarjetas de pacientes, programadores de citas, y listas de medicamentos que pueden componerse en tableros complejos mientras mantienen consistencia y reducen tiempo de desarrollo. Por ejemplo, un componente TarjetaPaciente puede encapsular toda la lógica para mostrar información del paciente, manejar eventos de clic para navegación, y gestionar estados de carga, mientras ser reutilizable a través de diferentes vistas como listado de pacientes, resultados de búsqueda, y programación de citas. 
    
        .bg-color-2.p-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/11.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La composición de estos componentes en características más grandes como Tablero o GestorCitas demuestra cómo la arquitectura de React escala elegantemente desde elementos UI simples hacia aplicaciones comprehensivas.
    
    .bg-full-width.bg-color-9
      .p-4.p-md-5
        .row.align-items-center.mb-5
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema4/12.svg", style="max-width: 90px").mx-auto
          .col-lg
            h2(data-aos="fade-left") Ejercicio práctico
        
        p.mb-5 Desarrollar una arquitectura basada en componentes completa para una aplicación de gestión de inventario utilizando patrones modernos de React. 
        
        .row.justify-content-center
          .col-lg-10
            PasosA.color-primario.mb-5(tipo="n")
              .row
                .col-lg-9.mb-4.mb-lg-0
                  h3 Paso 1
                  p Diseñar la jerarquía de componentes identificando componentes contenedores (TablerInventario, CatalogoProductos) y componentes de presentación (TarjetaProducto, FiltrosBusqueda, IndicadorStock) con responsabilidades claras y flujo de datos.
                .col-md-4.col-lg-2
                  figure
                    img(src='@/assets/curso/tema4/13.svg', alt='Texto que describa la imagen')
              .row
                .col-lg-9.mb-4.mb-lg-0.order-2
                  h3 Paso 2
                  p Implementar hooks personalizados como useInventario para gestionar llamadas API y estado local, useFiltro para funcionalidad de búsqueda, y useAlmacenamientoLocal para persistir preferencias del usuario, demostrando reutilización de lógica a través de componentes.
                .col-md-4.col-lg-2.order-1.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema4/14.svg', alt='Texto que describa la imagen')
              .row
                .col-lg-9.mb-4.mb-lg-0
                  h3 Paso 3
                  p Crear componentes compuestos como ListaProductos que gestiona su propio estado interno mientras proporciona API flexible a través de propiedades hijas, permitiendo a consumidores personalizar comportamiento de renderizado sin modificar el componente central.
                .col-md-4.col-lg-2
                  figure
                    img(src='@/assets/curso/tema4/15.svg', alt='Texto que describa la imagen')
              .row
                .col-lg-9.mb-4.mb-lg-0.order-2
                  h3 Paso 4
                  p Implementar optimizaciones de rendimiento utilizando React.memo para prevenir re-renderizados innecesarios, useMemo para cálculos costosos, y React.lazy para división de código de componentes grandes.
                .col-md-4.col-lg-2.order-1.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema4/16.svg', alt='Texto que describa la imagen')
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/17.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 El resultado es una arquitectura de aplicación modular que demuestra mejores prácticas para organización de componentes React, gestión de estado, y optimización de rendimiento.
    
    #t_4_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.3] React: Estado y props: gestión de la información en la interfaz

    p.mb-5 El manejo adecuado de la información en interfaces interactivas es clave para construir experiencias de usuario eficientes, coherentes y reactivas.
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white
            h2.mb-4(data-aos="flip-up") React: Estado y props: gestión de la información en la interfaz    
            p.mb-4(data-aos="fade-right") En el PDF React, se exploran los conceptos fundamentales para gestionar datos dentro de componentes en aplicaciones construidas con React, haciendo énfasis en el flujo unidireccional de datos y las herramientas que permiten controlar cómo se actualiza y comparte la información. A través de explicaciones detalladas y ejercicios prácticos, se abordan diferentes niveles de complejidad en la gestión del estado, desde el uso de props y hooks locales hasta técnicas avanzadas con contextos y reducers, sentando así una base sólida para el desarrollo de aplicaciones dinámicas y escalables.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_8.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> React: Estado y props: gestión de la información en la interfaz   
    
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/18.png', alt='')
     
    #t_4_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.4] Angular: directivas y módulos: organización en una app Angular
    

    p.mb-5 Conozcamos sobre directivas y módulos:

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/19.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Directivas en Angular")
            p Constituyen elementos fundamentales que extienden HTML con comportamientos personalizados, proporcionando mecanismos para encapsular manipulación del DOM, lógica de enlace de datos, y patrones de comportamiento reutilizables de manera declarativa y mantenible. Angular proporciona tres tipos de directivas: directivas estructurales como *ngFor y *ngIf que modifican estructura del DOM a través de agregar o remover elementos, directivas de atributo que cambian apariencia o comportamiento de elementos existentes, y directivas de componente que son esencialmente componentes con plantillas asociadas. Las directivas personalizadas permiten a desarrolladores crear comportamientos reutilizables que pueden aplicarse a través de múltiples componentes, promoviendo reutilización de código y manteniendo separación de responsabilidades mientras extienden la expresividad de la sintaxis de plantilla.
    
          .div(titulo="Módulos en Angular")
            p Sirven como unidades organizacionales que agrupan componentes, directivas, tuberías, y servicios relacionados en bloques funcionales cohesivos, proporcionando límites claros para encapsulación de características y habilitando gestión efectiva de dependencias a través de aplicaciones grandes (Vara Mesa et al., 2015). El sistema de módulos facilita carga diferida de módulos de características, mejorando tiempos iniciales de carga de aplicación y habilitando división de código que optimiza características de rendimiento. El sistema de inyección de dependencias de Angular trabaja estrechamente con el sistema de módulos para proporcionar servicios y otras dependencias donde se necesiten, habilitando aislamiento de pruebas y promoviendo acoplamiento suelto entre diferentes partes de la aplicación. Los módulos de características pueden encapsular dominios de negocio completos, mientras los módulos compartidos proporcionan funcionalidad común que puede importarse por múltiples módulos de características.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/20.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En aplicaciones de planificación de recursos empresariales, la organización apropiada a través de módulos y directivas habilita equipos para trabajar independientemente en diferentes áreas funcionales mientras mantienen consistencia y evitan conflictos. Por ejemplo, un módulo de Recursos Humanos puede encapsular componentes de gestión de empleados, directivas para validación de datos de empleados, y servicios para llamadas API relacionadas con RR. HH., mientras un módulo de Finanzas, maneja funcionalidad de contabilidad con su propio conjunto de componentes y servicios. 
    
        .bg-color-5.p-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/21.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Directivas compartidas para comportamientos comunes como formateo de datos, verificación de permisos, y registro de auditoría, pueden colocarse en módulos compartidos que son importados por módulos de características, según necesidad, promoviendo reutilización mientras mantienen límites claros de propiedad.

    .row.align-items-center.mb-5
      .col-lg-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema4/12.svg", style="max-width: 90px").mx-auto
      .col-lg
        h2(data-aos="fade-left") Ejercicio práctico
    
    p.mb-5 Desarrollar una aplicación Angular modular para gestión de proyectos con directivas personalizadas y estructura de módulos bien organizadas. 

    .bg-full-width.bg-fondo-1
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema4/22.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="47%" y="76.5%" numero="+")
                h5 Primero
                p Crear la estructura central de módulos con MóduloCompartido para componentes y directivas comunes, MóduloNúcleo para servicios singleton, y módulos de características separados para Proyectos, Tareas, y Equipos con configuración apropiada de carga diferida. 
    
              .bg-color-white.box-shadow.p-3(x="69%" y="47.5%" numero="+")
                h5 Segundo
                p Implementar directivas personalizadas como appResaltarVencido para resaltar tareas vencidas, appArrastrarSoltar para implementar funcionalidad de arrastrar y soltar, y appVerificarPermisos para mostrar condicionalmente elementos basados en permisos de usuario. 
              .bg-color-white.box-shadow.p-3(x="33%" y="20.5%" numero="+")
                h5 Tercero
                p Desarrollar directivas estructurales como *appAccesoRol que renderizan condicionalmente contenido basado en roles de usuario, demostrando creación avanzada de directivas con TemplateRef y ViewContainerRef. 
    
              .bg-color-white.box-shadow.p-3(x="20%" y="42.5%" numero="+")
                h5 Cuarto
                p Establecer patrones apropiados de inyección de dependencias utilizando el sistema de inyector jerárquico de Angular para proporcionar servicios específicos de características mientras mantiene servicios globales en alcances apropiados.  

    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/17.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 El resultado es una aplicación Angular con buena arquitectura que demuestra mejores prácticas para organización modular, creación de directivas personalizadas, y gestión de dependencias en aplicaciones de escala empresarial.

    #t_4_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.5] Comparativa entre React y Angular: elección del <em>framework</em> adecuado para proyectos
    

    p.mb-5 La elección de un marco de trabajo adecuado es un paso determinante en el éxito de cualquier proyecto de desarrollo <em>frontend</em>, ya que influye directamente en la arquitectura, la experiencia del equipo y la escalabilidad de la solución.
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white.order-2
            h2.mb-4(data-aos="flip-up") Comparativa entre React y Angular: elección del <em>framework</em> adecuado para proyectos  
            p.mb-4(data-aos="fade-right") En el PDF <b>Comparativa entre React y Angular</b>, se presenta un análisis detallado que contrasta estos dos enfoques populares, considerando criterios como rendimiento, estructura, ecosistema, mantenimiento y experiencia de desarrollo. A través de una evaluación práctica e informada, se exploran los puntos fuertes y desafíos de cada uno, proporcionando herramientas de juicio para seleccionar la tecnología más adecuada según los objetivos, recursos y contexto particular de cada proyecto.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_9.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Comparativa entre React y Angular: elección del <em>framework</em> adecuado para proyectos 
    
          .col-lg-4.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/23.png', alt='')

    .row.align-items-center.mb-5
      .col-lg-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema4/24.svg", style="max-width: 90px").mx-auto
      .col-lg
        h2(data-aos="fade-left") Reflexión final
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/25.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El desarrollo <em>frontend</em> y la experiencia de usuario representan disciplinas fundamentales que han evolucionado desde simples ejercicios de presentación web hacia campos complejos y multidisciplinarios que requieren la integración de conocimientos técnicos avanzados, principios de diseño centrado en el usuario, y metodologías de desarrollo modernas. La comprensión profunda de tecnologías como HTML semántico, CSS avanzado, y JavaScript moderno proporciona las bases técnicas esenciales, pero su aplicación efectiva requiere una perspectiva holística que considere factores humanos, contextos de uso diversos, y objetivos de negocio específicos. Esta integración de aspectos técnicos y humanos define la excelencia en el desarrollo <em>frontend</em> contemporáneo.
    
        .bg-color-6.p-5(data-aos="fade-left")
          p.mb-0 Los principios de diseño centrado en el usuario y accesibilidad universal, no constituyen consideraciones adicionales sino elementos centrales que deben guiar cada decisión tecnológica y de implementación.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/26.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-5.p-5(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/27.svg", style="max-width: 90px").mx-auto
            .col-lg
              p La aplicación rigurosa de metodologías como flujos de usuario, esquematización, y pruebas iterativas, asegura que las soluciones técnicas sirvan genuinamente a las necesidades humanas, mientras que la implementación de estándares de accesibilidad, garantiza que estas soluciones beneficien a la mayor diversidad de usuarios, posible.
        h4 Esta perspectiva inclusiva no solo cumple con responsabilidades éticas y legales, sino que también resulta en productos superiores que ofrecen mejores experiencias para todos los usuarios.
        p(data-aos="fade-left") En el contexto laboral de la ingeniería de <em>software</em>, estas habilidades resultan críticas para crear aplicaciones que no solo funcionen correctamente, sino que también proporcionen valor real a organizaciones y usuarios finales. Los profesionales que dominan tanto los aspectos técnicos como los principios de experiencia de usuario están mejor posicionados para liderar proyectos complejos, colaborar efectivamente en equipos multidisciplinarios, y contribuir a la creación de productos digitales que generen impacto positivo. La evolución continua del ecosistema <em>frontend</em> requiere un compromiso con el aprendizaje permanente y la adaptación a nuevas tecnologías, mientras se mantienen los principios fundamentales de calidad, accesibilidad y centrado en el usuario que definen la excelencia profesional en este campo.
    
        






    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://developer.mozilla.org/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks" target="_blank" rel="noopener noreferrer") Colaboradores de MDN. (s.f.). Entendiendo los frameworks de JavaScript del lado del cliente. MDN Web Docs. Consultado el 20 de septiembre de 2025, desde 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.react.dev/learn" target="_blank" rel="noopener noreferrer") El equipo de React. (s.f.). Aprende React. React. Consultado el 20 de septiembre de 2025, desde 

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://angular.dev/overview" target="_blank" rel="noopener noreferrer")  El equipo de Angular. (s.f.). Documentación de Angular. Angular. Consultado el 20 de septiembre de 2025, desde 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.toptal.com/front-end/angular-vs-react-cual-es-mejor-para-el-desarrollo-web " target="_blank" rel="noopener noreferrer") Toptal. (s.f.). Angular vs. React: ¿Cuál es mejor para el desarrollo web?  



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Qué lenguaje se utiliza para estructurar el contenido de una página web?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'HTML',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'CSS',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'JavaScript',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Python',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Correcto: HTML (HyperText Markup Language) es el lenguaje base para la estructura de cualquier sitio web.',
            mensaje_incorrecto:
              'Incorrecto: CSS y JavaScript son importantes, pero HTML organiza la información',
          },
          {
            id: 2,
            texto: '¿Cuál es el propósito principal de CSS?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Interactividad',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Estilo visual',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Acceso a bases de datos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Seguridad',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Correcto: CSS define colores, márgenes, tamaños, tipografía y estilos visuales.',
            mensaje_incorrecto:
              'Incorrecto: La interactividad la proporciona JavaScript, y CSS no accede a bases de datos.',
          },
          {
            id: 3,
            texto:
              '¿Qué lenguaje se encarga de la interactividad en la web (como validaciones, animaciones, etc.)?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'HTML',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'CSS',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'JavaScript',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'SQL',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Correcto: JavaScript permite animaciones, validaciones, menús interactivos y más.',
            mensaje_incorrecto:
              'Incorrecto: HTML y CSS son esenciales, pero no permiten interactividad dinámica.',
          },
          {
            id: 4,
            texto: '¿Qué se busca con el diseño centrado en el usuario (DCU)?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Optimizar el código',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Crear experiencias útiles y satisfactorias para el usuario',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Reducir costos de servidor',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Automatizar tareas del desarrollador',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Correcto: El DCU se basa en las necesidades, habilidades y objetivos del usuario.',
            mensaje_incorrecto:
              'Incorrecto: Aunque puede mejorar procesos, su prioridad es la experiencia del usuario.',
          },
          {
            id: 5,
            texto:
              '¿Cuál es un <em>framework</em> de JavaScript popular para crear interfaces modernas?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Flask',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'React',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Django',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Bootstrap',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Correcto: React es uno de los <em>framework</em>s más utilizados para desarrollar componentes dinámicos en front-end.',
            mensaje_incorrecto:
              'Incorrecto: Flask y Django son <em>framework</em>s, pero para back-end en Python.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
