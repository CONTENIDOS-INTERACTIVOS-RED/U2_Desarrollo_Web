<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Tecnologías claves (HTML, CSS, JavaScript)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El ecosistema de tecnologías frontend constituye el fundamento técnico sobre el cual se construyen todas las interfaces web modernas, representando un conjunto de herramientas especializadas que trabajan de manera sinérgica para crear experiencias digitales completas. Estas tecnologías han evolucionado significativamente desde sus orígenes, adaptándose a las crecientes demandas de interactividad, capacidad de respuesta y accesibilidad que caracterizan el desarrollo web contemporáneo.
    
        .bg-color-6.p-5(data-aos="fade-left")
          p.mb-0 HTML, CSS y JavaScript, forman la tríada fundamental que define la estructura, presentación y comportamiento de las aplicaciones web, cada una con responsabilidades específicas pero interdependientes que requieren un dominio técnico profundo para ser utilizadas efectivamente. La comprensión de estas tecnologías va más allá del conocimiento sintáctico, abarcando principios de arquitectura de información, metodologías de diseño adaptativo, patrones de interacción y optimización de rendimiento que son esenciales para crear aplicaciones robustas y escalables.
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Los subtemas que se abordarán incluyen la estructura semántica del HTML y su impacto en la accesibilidad, proporcionando las bases para crear documentos web bien estructurados; la estilización avanzada con CSS, cubriendo selectores, propiedades y el modelo de caja como elementos fundamentales; los principios de diseño adaptativo mediante Flexbox y Grid, tecnologías que revolucionan la creación de diseños adaptativos; la manipulación del DOM y gestión de eventos con JavaScript, elementos claves para la interactividad; y las buenas prácticas que garantizan aplicaciones accesibles y optimizadas para el rendimiento.
    

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Estructura del HTML: etiquetas semánticas y su papel en la accesibilidad
    
    .row.align-items-center.mb-5
      .col-lg-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
      .col-lg
        p.mb-0 La comprensión de la estructura semántica en HTML es fundamental para desarrollar páginas web accesibles, organizadas y efectivas.
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white.order-2
            h2.mb-4(data-aos="flip-up") Estructura del HTML: etiquetas semánticas y su papel en la accesibilidad 
            p.mb-4(data-aos="fade-right") En el PDF <b>Estructura del HTML</b>, se analizan los elementos semánticos más relevantes y su impacto en la accesibilidad digital, destacando cómo etiquetas como ""header", "main" o "article"contribuyen a una navegación más intuitiva y comprensible para todos los usuarios. A través de ejemplos prácticos, se promueve el diseño inclusivo y el uso responsable del lenguaje de marcado en contextos reales de desarrollo web.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Estructura del HTML: etiquetas semánticas y su papel en la accesibilidad
    
          .col-lg-4.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/4.png', alt='')
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Estilización con CSS: selectores, propiedades y el modelo de caja
    
    p.mb-5 El dominio de CSS como lenguaje de hojas de estilo requiere una comprensión profunda de su sistema de selectores, la cascada de propiedades y el modelo de caja, elementos que constituyen los pilares fundamentales para crear interfaces visuales coherentes y mantenibles. 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/5.svg")
            .col-lg-9.order-1.mb-3.mb-lg-0
              p Los selectores CSS proporcionan un sistema sofisticado para dirigir estilos a elementos específicos del documento, permitiendo desde selecciones básicas por tipo, clase o identificador hasta consultas complejas que combinan múltiples criterios. Esta flexibilidad en la selección de elementos permite crear sistemas de estilos modulares y reutilizables que facilitan el mantenimiento y la escalabilidad de aplicaciones web de gran tamaño.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/6.svg")
            .col-lg-9.order-1.mb-3.mb-lg-0
              p El modelo de caja CSS constituye el fundamento conceptual que define cómo se calculan las dimensiones y el espaciado de todos los elementos en una página web, estableciendo la relación entre contenido, relleno, bordes y márgenes (Cardador Cabello, 2015). La comprensión profunda de este modelo resulta esencial para crear diseños precisos y predecibles, especialmente cuando se trabaja con diferentes tipos de elementos y contextos de formateo. La diferencia entre box-sizing: content-box y box-sizing: border-box puede determinar el éxito o fracaso de un diseño complejo, mientras que la correcta aplicación de márgenes y relleno influye directamente en la legibilidad y usabilidad de la interfaz. Las propiedades de CSS moderno han expandido significativamente las posibilidades de estilización, incluyendo variables personalizadas, funciones de cálculo y propiedades lógicas que se adaptan a diferentes direcciones de escritura.
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/7.svg")
            .col-lg-9.order-1.mb-3.mb-lg-0
              p En el desarrollo de interfaces para aplicaciones de gestión empresarial, la correcta aplicación del modelo de caja y selectores avanzados permite crear componentes reutilizables que mantienen consistencia visual en toda la aplicación. Por ejemplo, al diseñar un sistema de tarjetas para mostrar información de empleados, la utilización de selectores de atributo como [data-role="manager"] permite aplicar estilos específicos, según el rol, mientras que el correcto manejo del modelo de caja asegura que las tarjetas mantengan proporciones consistentes independientemente del contenido. La implementación de variables CSS para colores corporativos y espaciado estándar facilita el mantenimiento y permite cambios globales de tema con modificaciones mínimas en el código.
    
    .bg-full-width.bg-color-9
      .p-4.p-md-5
        .row.align-items-center.mb-5
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
          .col-lg
            h2(data-aos="fade-left") Ejercicio práctico
        
        p.mb-5 Desarrollar un sistema de componentes de tarjeta adaptativo utilizando el modelo de caja avanzado. 
        
        .row.justify-content-center
          .col-lg-10
            PasosA.color-primario.mb-5(tipo="n")
              .row
                .col-md-9.mb-4.mb-md-0
                  h3 Paso 1
                  p Establecer las variables CSS para definir un sistema de espaciado coherente (--spacing-xs: 0.5rem, --spacing-sm: 1rem, --spacing-md: 1.5rem) y colores corporativos.
                .col-md-2
                  figure
                    img(src='@/assets/curso/tema2/9.svg', alt='Texto que describa la imagen')
              .row
                .col-md-9.mb-4.mb-md-0.order-2
                  h3 Paso 2
                  p Crear la estructura base de la tarjeta utilizando box-sizing: border-box para facilitar el cálculo de dimensiones y aplicar relleno interno usando las variables definidas.
                .col-md-2.order-1.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema2/10.svg', alt='Texto que describa la imagen')
              .row
                .col-md-9.mb-4.mb-md-0
                  h3 Paso 3
                  p Implementar selectores específicos para diferentes variantes de tarjeta (.card--primary, .card--secondary) y estados (:hover, :focus) que modifiquen propiedades como color de fondo, sombra y transformación.
                .col-md-2
                  figure
                    img(src='@/assets/curso/tema2/11.svg', alt='Texto que describa la imagen')
              .row
                .col-md-9.mb-4.mb-md-0.order-2
                  h3 Paso 4
                  p Aplicar consultas de medios para adaptar el tamaño y espaciado de las tarjetas en diferentes dispositivos.
                .col-md-2.order-1.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema2/12.svg', alt='Texto que describa la imagen')
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 El resultado es un sistema de componentes flexible que mantiene consistencia visual, facilita el mantenimiento y se adapta automáticamente a diferentes contextos de uso.
    
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Principios de diseño con CSS: Flexbox, Grid, y diseño responsivo
    

    p.mb-5 El dominio de los principios de diseño con CSS es esencial para la creación de interfaces web modernas, funcionales y adaptativas.
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white.order-2
            h2.mb-4(data-aos="flip-up") Principios de diseño con CSS: Flexbox, Grid, y diseño responsivo 
            p.mb-4(data-aos="fade-right") En el PDF <b>Principios de diseño con CSS</b>, se exploran herramientas fundamentales como Flexbox, CSS Grid y técnicas de diseño responsivo, destacando su aplicación en la construcción de estructuras visuales eficientes y accesibles en múltiples dispositivos. A través de ejemplos prácticos, se analiza cómo estas tecnologías permiten implementar diseños adaptativos y escalables que responden eficazmente a los retos del desarrollo frontend contemporáneo.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Principios de diseño con CSS: Flexbox, Grid, y diseño responsivo
    
          .col-lg-4.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/13.png', alt='')
    
    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] JavaScript en el navegador: Manipulación del DOM y eventos
    

    p.mb-5 JavaScript como lenguaje de programación del navegador proporciona las capacidades dinámicas e interactivas que transforman documentos estáticos en aplicaciones web completamente funcionales, estableciendo la comunicación bidireccional entre la interfaz de usuario y la lógica de la aplicación. 

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/14.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="La manipulación del DOM (<em>Document Object Model</em>")
            p Constituye el mecanismo fundamental mediante el cual JavaScript puede modificar dinámicamente la estructura, contenido y estilo de una página web en respuesta a acciones del usuario o eventos del sistema. Esta capacidad de modificación en tiempo real permite crear experiencias ricas e interactivas que responden inmediatamente a las necesidades y acciones del usuario, desde validación de formularios en tiempo real hasta actualizaciones dinámicas de contenido sin recargar la página.
    
          .div(titulo="El sistema de eventos en JavaScript")
            p Proporciona un modelo robusto para manejar interacciones del usuario y eventos del sistema, permitiendo que las aplicaciones respondan de manera apropiada a clics, movimientos del ratón, entrada de teclado, cambios de enfoque y numerosos otros eventos (Vara Mesa & Granada, 2015). La comprensión profunda del burbujeo de eventos, captura de eventos y delegación de eventos resulta crucial para crear aplicaciones eficientes que manejen eficientemente grandes números de elementos interactivos. Las técnicas modernas incluyen el uso de addEventListener con opciones avanzadas como passive y once, la implementación de eventos personalizados para comunicación entre componentes, y el manejo apropiado de eventos asíncronos. La correcta gestión de la memoria mediante la eliminación de detectores de eventos cuando sea necesario previene fugas de memoria en aplicaciones de larga duración.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/15.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-5(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/16.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En aplicaciones de comercio electrónico, la manipulación del DOM y gestión de eventos permite crear experiencias de compra fluidas e interactivas que mejoran significativamente la conversión y satisfacción del usuario. Por ejemplo, la implementación de un carrito de compras dinámico utiliza delegación de eventos para manejar clics en botones de agregar o remover productos, manipulación del DOM para actualizar inmediatamente los totales y cantidades, y eventos personalizados para sincronizar el estado entre diferentes componentes de la página. La validación en tiempo real de formularios de pago combina eventos de entrada y pérdida de enfoque con manipulación del DOM para proporcionar retroalimentación inmediata, reduciendo errores y mejorando la experiencia de usuario.
        p(data-aos="fade-left") <b>Ejercicio práctico</b>. Implementar un sistema de gestión de tareas interactivo con manipulación completa del DOM. 
    
    .bg-full-width.bg-color-9
      .p-4.p-md-5
        .row.justify-content-center
          .col-lg-10
            PasosA.color-primario.mb-5(tipo="n")
              .row
                .col-md-9.mb-4.mb-md-0
                  h3 Paso 1
                  p Crear la estructura HTML básica con un formulario de entrada y un contenedor para las tareas, asegurando accesibilidad con etiquetas apropiadas y atributos ARIA.
                .col-md-2
                  figure
                    img(src='@/assets/curso/tema2/17.svg', alt='Texto que describa la imagen')
              .row
                .col-md-9.mb-4.mb-md-0.order-2
                  h3 Paso 2
                  p Implementar la funcionalidad de agregar tareas utilizando addEventListener en el formulario, previniendo el comportamiento predeterminado con preventDefault() y creando dinámicamente elementos DOM con createElement y appendChild.
                .col-md-2.order-1.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema2/18.svg', alt='Texto que describa la imagen')
              .row
                .col-md-9.mb-4.mb-md-0
                  h3 Paso 3
                  p Utilizar delegación de eventos agregando un único detector de eventos al contenedor de tareas que maneje clics en botones de completar y eliminar usando event.target para identificar el elemento específico.
                .col-md-2
                  figure
                    img(src='@/assets/curso/tema2/19.svg', alt='Texto que describa la imagen')
              .row
                .col-md-9.mb-4.mb-md-0.order-2
                  h3 Paso 4
                  p Implementar persistencia local utilizando localStorage para guardar el estado de las tareas, cargando los datos al inicializar la página y actualizando el almacenamiento cada vez que se modifica una tarea.
                .col-md-2.order-1.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema2/20.svg', alt='Texto que describa la imagen')
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 El resultado es una aplicación completamente funcional que demuestra manipulación avanzada del DOM, gestión eficiente de eventos y persistencia de datos del lado del cliente.
    
    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] Buenas prácticas en el desarrollo frontend: accesibilidad y optimización de rendimiento
    
    .row.align-items-center.mb-5
      .col-lg-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema2/21.svg", style="max-width: 90px").mx-auto
      .col-lg
        p.mb-0 La implementación de buenas prácticas en el desarrollo frontend es fundamental para garantizar que las aplicaciones web sean accesibles, eficientes y sostenibles a lo largo del tiempo.
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white
            h2.mb-4(data-aos="flip-up") Buenas prácticas en el desarrollo frontend: accesibilidad y optimización de rendimiento 
            p.mb-4(data-aos="fade-right") En el PDF <b>Buenas prácticas en el desarrollo frontend</b>, se abordan estrategias clave centradas en la accesibilidad y la optimización del rendimiento, destacando su impacto en la experiencia de usuario y en la calidad técnica de los proyectos. A través de ejemplos prácticos, se presentan metodologías que permiten construir interfaces inclusivas y de alto rendimiento, aplicables a contextos reales del entorno empresarial y tecnológico.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Buenas prácticas en el desarrollo frontend: accesibilidad y optimización de rendimiento
    
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/22.png', alt='')
    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/113039?page=1" target="_blank" rel="noopener noreferrer") Celaya Luna, A. (Coord.). (2015). Desarrollo de páginas web con Joomla 2.5: (2 ed.). Editorial ICB.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/101940?page=1" target="_blank" rel="noopener noreferrer") Contreras Castañeda, M. Á. (2016). Desarrollo de aplicaciones web multiplataforma: ( ed.). Ministerio de Educación y Formación Profesional de España. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/62489?page=1" target="_blank" rel="noopener noreferrer") Vara Mesa, J. M. Verde Marín, J. & López Sanz, M. (2015). Desarrollo web en entorno servidor: ( ed.). RA-MA Editorial. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://onenine.com/es/user-centered-design-principles/" target="_blank" rel="noopener noreferrer") OneNine. (2025, abril 19). Los 8 principios de diseño centrado en el usuario para mejorar la experiencia de usuario. OneNine. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.justinmind.com/es/blog/diseno-centrado-en-el-usuario/" target="_blank" rel="noopener noreferrer") Justinmind. (2024). Guía completa de diseño centrado en el usuario (DCU). Justinmind Blog. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://keepcoding.io/blog/principios-del-diseno-centrado-en-el-usuario/" target="_blank" rel="noopener noreferrer") KeepCoding. (s.f.). Principios básicos del diseño centrado en el usuario. KeepCoding Blog. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.chromeexperiments.com/" target="_blank" rel="noopener noreferrer") Google Inc. (2009-2024). Google Chrome Experiments: Experimentos interactivos con web tech. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://getcontenttools.com/" target="_blank" rel="noopener noreferrer") Blackshaw, A. (2025). ContentTools: Editor de contenido WYSIWYG en JavaScript. 
            
            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/fQKyqUG3UZA" target="_blank" rel="noopener noreferrer") Software Guru. (2021, 28 de mayo). #QuerynTalks 21-04 - ¿Qué es la UX?. [Vídeo] YouTube. 



           

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/eX6lEg4wMj4" target="_blank" rel="noopener noreferrer") VLC TechFest. (2025, 18 de junio). Érase una vez una evaluación de accesibilidad - Carlos Muncharaz. [Vídeo] YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
