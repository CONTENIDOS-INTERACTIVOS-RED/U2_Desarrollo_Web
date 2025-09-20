<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Introducción'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-2.p-5(data-aos="fade-left").mb-3
          p.mb-0 El desarrollo frontend representa la puerta de entrada entre las personas usuarias y las aplicaciones web, constituyendo una disciplina fundamental que combina aspectos técnicos, estéticos y funcionales para crear experiencias digitales efectivas. En el contexto actual del desarrollo de software, el frontend ha evolucionado desde simples páginas estáticas hacia interfaces complejas e interactivas que requieren un dominio profundo de tecnologías, principios de diseño y metodologías centradas en la experiencia del usuario. Esta evolución ha transformado la manera en que se conciben, diseñan y desarrollan las aplicaciones web modernas, exigiendo a los profesionales en ingeniería de software una comprensión integral de múltiples disciplinas.
        p(data-aos="fade-left") La experiencia de usuario se ha posicionado como un factor determinante en el éxito de cualquier aplicación web, influyendo directamente en la adopción, retención y satisfacción de las personas que interactúan con estos sistemas. Los principios de usabilidad, accesibilidad y diseño centrado en el usuario no son simplemente consideraciones adicionales, sino elementos centrales que guían cada decisión de desarrollo desde las etapas iniciales de conceptualización hasta la implementación final. Esta perspectiva integral reconoce que la tecnología debe servir a las necesidades humanas, adaptándose a diferentes contextos, capacidades y preferencias, lo que requiere un enfoque metodológico y sistemático en el diseño de interfaces.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2.svg", data-aos="zoom-in")
      .col-lg-8
        .bg-color-8.p-5(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p El dominio de las tecnologías frontend contemporáneas, incluyendo HTML semántico, CSS avanzado, JavaScript moderno y marcos de trabajo especializados, constituye la base técnica sobre la cual se construyen experiencias digitales robustas y escalables.
              p.mb-0 Estas herramientas, cuando se combinan con una comprensión sólida de los principios de diseño y las mejores prácticas de desarrollo, permiten crear aplicaciones que no solo funcionan correctamente, sino que también ofrecen experiencias excepcionales.
        p(data-aos="fade-left") La integración de estos conocimientos técnicos con metodologías de diseño centrado en el usuario y principios de accesibilidad universal forma profesionales capaces de abordar los desafíos complejos del desarrollo web moderno, preparándose para contribuir significativamente en equipos multidisciplinarios y proyectos de alta complejidad.
    
      

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href=" https://elibro.net/es/ereader/tecnologicadeloriente/44134?page=1" target="_blank" rel="noopener noreferrer") Cardador Cabello, A. L. (2015). Desarrollo de aplicaciones web distribuidas (UF1846): ( ed.). IC Editorial.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href=" https://elibro.net/es/ereader/tecnologicadeloriente/62489?page=1" target="_blank" rel="noopener noreferrer") Vara Mesa, J. M. Verde Marín, J. & López Sanz, M. (2015). Desarrollo web en entorno servidor: ( ed.). RA-MA Editorial. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href=" https://devpractical.com/html-css-js-project-blog-website/" target="_blank" rel="noopener noreferrer") DevPractical. (2023, mayo 13). HTML, CSS and JavaScript Projects: Blog Website. DevPractical. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href=" https://www.geeksforgeeks.org/javascript/learn-web-development-basics-with-html-css-and-javascript/" target="_blank" rel="noopener noreferrer") GeeksforGeeks. (2023). Learn Web Development Basics with HTML, CSS and JavaScript. GeeksforGeeks. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href=" https://www.freecodecamp.org/news/html-css-and-javascript-explained-for-beginners/" target="_blank" rel="noopener noreferrer") freeCodeCamp. (2021). HTML, CSS and JavaScript explained for beginners. FreeCodeCamp. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href=" https://jsfiddle.net" target="_blank" rel="noopener noreferrer") JSFiddle. (2024). JSFiddle: Sandbox online para HTML, CSS y JavaScript. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://codesandbox.io/s/htmlcssjs-editor-sf3el" target="_blank" rel="noopener noreferrer") CodeSandbox. (2024). HTML, CSS, JS Editor - entorno interactivo. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/5LcDLSQMRGg" target="_blank" rel="noopener noreferrer") WordPress. (2023, 28 de septiembre). Núria Ramoneda: Crear contenidos semánticos: la importancia de marcar el contenido adecuadamente. [Vídeo] YouTube. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/Cc2r8Apf_50" target="_blank" rel="noopener noreferrer") Plain Concepts. (2020, 18 de junio). #VirtualCoffee | La importancia del frontend en entornos empresariales. [Vídeo] YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
