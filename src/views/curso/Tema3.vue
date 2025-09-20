<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Principios de diseño centrado en el usuario'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El diseño centrado en el usuario representa una filosofía fundamental que coloca las necesidades, comportamientos y limitaciones de las personas usuarias en el centro de todas las decisiones de diseño y desarrollo, transformando la manera en que se conciben y crean las experiencias digitales. Esta aproximación metodológica reconoce que la tecnología debe adaptarse a los usuarios y no viceversa, requiriendo una comprensión profunda de los contextos de uso, motivaciones y objetivos que guían la interacción con las aplicaciones web.
    
        .bg-color-2.p-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p Los principios de UX (User Experience) trascienden la estética visual para abarcar aspectos cognitivos, emocionales y funcionales que determinan la efectividad de una interfaz en el cumplimiento de objetivos específicos.
              p.mb-0 La investigación en experiencia de usuario, ha demostrado que interfaces bien diseñadas no solo mejoran la satisfacción, sino que también incrementan la productividad, reducen errores y disminuyen los costos de entrenamiento y soporte técnico.

    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/3.svg", data-aos="zoom-in")
      .col-lg-9
        .bg-color-8.p-5(data-aos="fade-left").mb-3
          p.mb-0 Esta disciplina requiere la integración de conocimientos de psicología cognitiva, diseño de interacción, arquitectura de información y evaluación empírica para crear soluciones que realmente sirvan a las necesidades humanas.
        p(data-aos="fade-left") Los subtemas incluyen los fundamentos de usabilidad y principios centrales de UX que guían las decisiones de diseño; la planificación de flujos de usuario para mapear la experiencia completa del usuario; el desarrollo de esquemas y prototipos como herramientas de visualización y validación; los principios de interacción y retroalimentación que aseguran interfaces intuitivas; y la implementación de estándares de accesibilidad que garantizan inclusión universal en el acceso a la información y funcionalidad.
    
        

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Usabilidad y diseño centrado en el usuario: Principios fundamentales de UX
    
    .row.align-items-center.mb-5
      .col-lg-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema3/4.svg", style="max-width: 90px").mx-auto
      .col-lg
        p.mb-0 La usabilidad y el diseño centrado en el usuario son componentes esenciales en la creación de interfaces digitales que respondan eficazmente a las necesidades reales de quienes las utilizan.
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white
            h2.mb-4(data-aos="flip-up") Usabilidad y diseño centrado en el usuario: Principios fundamentales de UX  
            p.mb-4(data-aos="fade-right") En el PDF <b>Usabilidad y diseño centrado en el usuario</b>, se exploran los principios fundamentales de la experiencia de usuario (UX), proporcionando un marco teórico y práctico para evaluar, mejorar y diseñar sistemas interactivos accesibles, eficientes y agradables. A través de casos y ejercicios aplicados, se estudian metodologías y estrategias que sitúan al usuario en el centro del proceso de desarrollo, garantizando soluciones más inclusivas, funcionales y sostenibles.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Usabilidad y diseño centrado en el usuario: Principios fundamentales de UX 
    
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/5.png', alt='')
    
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Flujo de trabajo del usuario (User Flow): planificación de la experiencia del usuario
    
    p.mb-5 Para estudiar esta temática, lo invitamos a ver el siguiente video.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/tG-Y1S468NM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] <em>Wireframes</em> y prototipos: herramientas para visualizar la experiencia
    
    p.mb-5 La visualización anticipada de interfaces digitales mediante esquemas y prototipos es una práctica esencial en el diseño centrado en el usuario, ya que permite experimentar, evaluar y refinar propuestas antes del desarrollo técnico.
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white
            h2.mb-4(data-aos="flip-up") <em>Wireframes</em> y prototipos: herramientas para visualizar la experiencia  
            p.mb-4(data-aos="fade-right") En el PDF <b><em>Wireframes</em> y prototipos</b>, se abordan estas herramientas como medios estratégicos para estructurar contenido, modelar interacciones y simular la experiencia final del usuario. A través de su aplicación progresiva, desde representaciones de baja fidelidad hasta simulaciones interactivas, se estudian procesos que promueven la validación temprana de ideas y reducen riesgos en la implementación de soluciones digitales.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Wireframes y prototipos: herramientas para visualizar la experiencia 
    
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/6.png', alt='')
    
    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Interacción y retroalimentación en la UI: asegurar que la interfaz sea intuitiva
    
    p.mb-5 Los principios de interacción y retroalimentación constituyen elementos fundamentales que determinan la calidad de la comunicación entre usuarios y sistemas digitales, estableciendo un diálogo continuo que informa, guía y confirma las acciones del usuario a lo largo de su experiencia.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/7.svg")
            .col-lg-8.order-1.mb-3.mb-lg-0
              h3 Retroalimentación
              p La retroalimentación efectiva debe ser inmediata, específica y apropiada al contexto, proporcionando confirmación clara de que el sistema ha recibido y procesado la entrada del usuario, información sobre el estado actual del proceso, y orientación sobre los próximos pasos disponibles. Los patrones de interacción bien diseñados anticipan las expectativas del usuario basándose en convenciones establecidas y metáforas familiares, reduciendo la carga cognitiva y permitiendo que los usuarios se enfoquen en sus objetivos en lugar de descifrar el funcionamiento de la interfaz.
          .row.align-items-center.p-4.p-md-5
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/8.svg")
            .col-lg-8.order-1.mb-3.mb-lg-0
              h3 Implementación 
              p La implementación de micro-interacciones y animaciones con propósito puede transformar significativamente la percepción de calidad y capacidad de respuesta de una aplicación, proporcionando continuidad visual durante transiciones y comunicando relaciones causales entre acciones y resultados (Granados La Paz, 2023). Los elementos de retroalimentación incluyen indicadores de progreso para operaciones de larga duración, confirmaciones visuales para acciones críticas o irreversibles, información contextual que proporciona información adicional sin sobrecargar la interfaz, y estados de carga que mantienen al usuario informado durante procesos asincrónicos. La gestión apropiada de estados como flotación, enfoque, activo, deshabilitado y error asegura que la interfaz comunique claramente las posibilidades de interacción disponibles en cada momento, siguiendo principios de affordance que hacen que la funcionalidad sea autodescubrible.

    .bg-full-width.bg-color-9
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") En sistemas de comercio financiero, donde las decisiones deben tomarse rápidamente y los errores pueden tener consecuencias significativas, la implementación de retroalimentación efectiva resulta crítica para la usabilidad y seguridad del sistema. Por ejemplo, la interfaz debe proporcionar confirmación visual inmediata cuando se coloca una orden, retroalimentación clara sobre el estado de ejecución, y alertas apropiadas cuando los límites de riesgo están cerca de ser alcanzados. Las micro-animaciones pueden mostrar cómo las órdenes se mueven a través de diferentes estados (pendiente, ejecución parcial, completada), mientras que los cambios de color e iconografía comunican instantáneamente el éxito o fallo de operaciones críticas.

        .row.align-items-center.mb-5
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
          .col-lg
            h2(data-aos="fade-left") Ejercicio práctico
        
        p.mb-5 Implementar un sistema completo de retroalimentación para un formulario de registro de usuario que incluya validación en tiempo real y retroalimentación contextual. 
        
        .row.justify-content-center
          .col-lg-10
            PasosA.color-primario.mb-5(tipo="n")
              .row.justify-content-center
                .col-lg-9.mb-4.mb-lg-0
                  h3 Paso 1
                  p Diseñar estados visuales distintos para cada campo de entrada incluyendo predeterminado, enfoque, válido, inválido, y deshabilitado, utilizando color, iconografía y animación para comunicar claramente el estado actual.
                .col-md-4.col-lg-2
                  figure
                    img(src='@/assets/curso/tema3/11.svg', alt='Texto que describa la imagen')
              .row.justify-content-center
                .col-lg-9.mb-4.mb-lg-0.order-2
                  h3 Paso 2
                  p Implementar validación progresiva que proporcione retroalimentación inmediata mientras el usuario escribe, mostrando criterios de validación (longitud de contraseña, formato de correo electrónico) con indicadores visuales que se actualizan dinámicamente.
                .col-md-4.col-lg-2.order-1.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema3/12.svg', alt='Texto que describa la imagen')
              .row.justify-content-center
                .col-lg-9.mb-4.mb-lg-0
                  h3 Paso 3
                  p Crear micro-interacciones para acciones como mostrar u ocultar contraseña con animación suave, indicador de progreso para fortaleza de contraseña, y animaciones sutiles que confirmen cuando los criterios de validación se cumplen.
                .col-md-4.col-lg-2
                  figure
                    img(src='@/assets/curso/tema3/13.svg', alt='Texto que describa la imagen')
              .row.justify-content-center
                .col-lg-9.mb-4.mb-lg-0.order-2
                  h3 Paso 4
                  p Implementar un sistema de mensajes de error que aparezcan contextualmente cerca del campo relevante, con lenguaje claro y accionable que guíe al usuario hacia la corrección, incluyendo estados de éxito que confirmen cuando el formulario está listo para envío.
                .col-md-4.col-lg-2.order-1.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema3/14.svg', alt='Texto que describa la imagen')
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 El resultado es un formulario que guía proactivamente al usuario hacia la finalización exitosa, reduciendo fricción y mejorando las tasas de conversión mientras mantiene excelente usabilidad.
    
    #t_3_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.5] Principios de accesibilidad en el diseño web: normas WCAG y accesibilidad para todos
    
    p.mb-5 La accesibilidad digital es un principio esencial en el diseño web que garantiza la igualdad de acceso a la información y a los servicios para todas las personas, sin importar sus condiciones o capacidades.
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white
            h2.mb-4(data-aos="flip-up") Principios de accesibilidad en el diseño web: normas WCAG y accesibilidad para todos   
            p.mb-4(data-aos="fade-right") En el PDF <b>Principios de accesibilidad en el diseño web</b>, se presentan los fundamentos técnicos y conceptuales basados en las normas WCAG, enfocados en crear entornos digitales inclusivos. A través de ejemplos aplicados, se abordan estrategias para evaluar y mejorar la accesibilidad de los sitios web, promoviendo el diseño de experiencias que favorezcan la equidad, la usabilidad y la conformidad con estándares internacionales.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Principios de accesibilidad en el diseño web: normas WCAG y accesibilidad para todos  
    
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/15.png', alt='')


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/101940?page=1" target="_blank" rel="noopener noreferrer") Contreras Castañeda, M. Á. (2016). Desarrollo de aplicaciones web multiplataforma: ( ed.). Ministerio de Educación y Formación Profesional de España. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/249857?page=1" target="_blank" rel="noopener noreferrer") Granados La Paz, R. L. (2023). Desarrollo de aplicaciones web en el entorno servidor. IFCD0210: (1 ed.). IC Editorial. 

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/62488?page=1" target="_blank" rel="noopener noreferrer") Vara Mesa, J. M. & Granada, D. (2015). Desarrollo web en entorno cliente: ( ed.). RA-MA Editorial. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blog.fabritglobal.com/react-for-angular-developers/" target="_blank" rel="noopener noreferrer") Fabrit Global. (s.f.). Getting Started with React, When You’re an Angular Developer. Fabrit Global Blog. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://rangle.io/blog/angular-for-react-devs" target="_blank" rel="noopener noreferrer") Rangle.io. (2019, octubre 3). Angular for React Devs. Rangle.io. 

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://codezup.com/building-a-single-page-application-with-angular-and-react/" target="_blank" rel="noopener noreferrer") Codez Up. (2024, noviembre 17). Building a Single-Page Application with Angular and React. Codez Up. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://labex.io/tutorials/category/react" target="_blank" rel="noopener noreferrer") LabEx. (2025). React tutorials: laboratorio interactivo para desarrollo de UI en React. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://freecomputerbooks.com/Angular-Notes-for-Professionals.html" target="_blank" rel="noopener noreferrer") Stack Overflow Contributors. (s.f.). Angular Notes for Professionals. Goalkicker. 




            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

  </template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
