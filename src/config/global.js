export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Frontend y experiencia de usuario',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tecnologías claves (HTML, CSS, JavaScript)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Estructura del HTML: etiquetas semánticas y su papel en la accesibilidad',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Estilización con CSS: selectores, propiedades y el modelo de caja',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Principios de diseño con CSS: Flexbox, Grid, y diseño responsivo',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'JavaScript en el navegador: Manipulación del DOM y eventos',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo:
              'Buenas prácticas en el desarrollo <em>frontend</em>: accesibilidad y optimización de rendimiento',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Principios de diseño centrado en el usuario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Usabilidad y diseño centrado en el usuario: Principios fundamentales de UX',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Flujo de trabajo del usuario (User Flow): planificación de la experiencia del usuario',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              '<em>Wireframes</em> y prototipos: herramientas para visualizar la experiencia',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo:
              'Interacción y retroalimentación en la UI: asegurar que la interfaz sea intuitiva',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo:
              'Principios de accesibilidad en el diseño web: normas WCAG y accesibilidad para todos',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Uso de <em>framework</em>s (React, Angular)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'Introducción a los <em>framework</em>s de JavaScript: diferencias entre React, Angular y Vue.js',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo:
              'Componentes y JSX en React: cómo organizar una aplicación React',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo:
              'React: Estado y props: gestión de la información en la interfaz',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo:
              'Angular: directivas y módulos: organización en una app Angular',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo:
              'Comparativa entre React y Angular: elección del <em>framework</em> adecuado para proyectos',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Cardador Cabello, A. L. (2015). Desarrollo de aplicaciones web distribuidas (UF1846): ( ed.). IC Editorial. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/44134?page=1',
    },
    {
      referencia:
        'Celaya Luna, A. (Coord.). (2015). Desarrollo de páginas web con Joomla 2.5: (2 ed.). Editorial ICB. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/113039?page=1',
    },
    {
      referencia:
        'Contreras Castañeda, M. Á. (2016). Desarrollo de aplicaciones web multiplataforma: ( ed.). Ministerio de Educación y Formación Profesional de España.  ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/101940?page=1',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad web:',
      significado:
        'Práctica de diseño que asegura que los sitios web y aplicaciones sean utilizables por personas con discapacidades, siguiendo principios universales que benefician a todos los usuarios.',
    },
    {
      termino: '<em>Affordance</em>',
      significado:
        'Propiedad de un objeto o elemento de interfaz que sugiere cómo debe ser utilizado, facilitando la comprensión intuitiva de su funcionalidad.',
    },
    {
      termino: 'Angular',
      significado:
        '<em>Framework</em> completo de JavaScript desarrollado por Google que proporciona una arquitectura opinionada para crear aplicaciones web robustas y escalables.',
    },
    {
      termino: 'API (<em>Application Programming Interface</em>)',
      significado:
        'Conjunto de reglas y protocolos que permite la comunicación entre diferentes componentes de <em>software</em> o servicios web.',
    },
    {
      termino: 'ARIA (<em>Accessible Rich Internet Applications</em>)',
      significado:
        'Conjunto de atributos que pueden agregarse a elementos HTML para mejorar la accesibilidad de aplicaciones web dinámicas.',
    },
    {
      termino: '<em>Box model</em>',
      significado:
        ' Modelo conceptual en CSS que define cómo se calculan las dimensiones de los elementos, incluyendo contenido, padding, bordes y márgenes.',
    },
    {
      termino: '<em>Bundle</em>',
      significado:
        'Archivo compilado que contiene todo el código JavaScript, CSS y otros assets necesarios para que una aplicación web funcione correctamente.',
    },
    {
      termino: '<em>Cascading</em>',
      significado:
        'Mecanismo en CSS que determina qué estilos se aplican cuando múltiples reglas afectan el mismo elemento, basándose en especificidad y orden de declaración.',
    },
    {
      termino: '<em>Code splitting</em>',
      significado:
        'Técnica de optimización que divide el código JavaScript en múltiples archivos más pequeños que se cargan según se necesite.',
    },
    {
      termino: '<em>Component</em>',
      significado:
        'Elemento reutilizable en <em>framework</em>s como React o Angular que encapsula lógica, estructura y presentación de una parte específica de la interfaz.',
    },
    {
      termino: 'CSS (<em>Cascading Style Sheets</em>)',
      significado:
        'Lenguaje de hojas de estilo que define la presentación visual de documentos HTML, incluyendo colores, <em>layout</em>s y tipografía.',
    },
    {
      termino: '<em>Dependency injection</em>',
      significado:
        'Patrón de diseño utilizado en Angular que permite proporcionar dependencias a componentes desde fuentes externas en lugar de crearlas internamente.',
    },
    {
      termino: '<em>Directive</em>',
      significado:
        'Instrucción en Angular que extiende HTML con comportamientos personalizados, pudiendo ser estructurales, de atributo o componentes.',
    },
    {
      termino: 'DOM (<em>Document Object Model</em>)',
      significado:
        'Representación estructural de un documento HTML como un árbol de objetos que puede ser manipulado dinámicamente con JavaScript.',
    },
    {
      termino: '<em>Event bubbling</em>',
      significado:
        'Mecanismo en JavaScript donde los eventos se propagan desde el elemento objetivo hacia sus elementos padre en la jerarquía del DOM.',
    },
    {
      termino: '<em>Event delegation</em>',
      significado:
        'Técnica que utiliza event bubbling para manejar eventos de múltiples elementos similares mediante un único event listener en un elemento padre.',
    },
    {
      termino: '<em>Flexbox</em>',
      significado:
        'Sistema de <em>layout</em> unidimensional en CSS que permite distribuir elementos en una fila o columna con control flexible sobre alineación y espaciado.',
    },
    {
      termino: '<em>Framework</em>',
      significado:
        'Estructura de <em>software</em> que proporciona herramientas, bibliotecas y convenciones para desarrollar aplicaciones de manera más eficiente y organizada.',
    },
    {
      termino: '<em>Frontend</em>',
      significado:
        'Parte de una aplicación web que interactúa directamente con el usuario, incluyendo la interfaz visual y la lógica de presentación.',
    },
    {
      termino: '<em>Grid</em> CSS',
      significado:
        'Sistema de <em>layout</em> bidimensional que permite crear diseños complejos con control simultáneo sobre filas y columnas.',
    },
    {
      termino: 'Hook',
      significado:
        'Función especial en React que permite utilizar estado y otras características sin escribir componentes de clase.',
    },
    {
      termino: 'HTML (<em>HyperText Markup Language</em>)',
      significado:
        'Lenguaje de marcado estándar para crear documentos web que define la estructura y contenido mediante etiquetas semánticas.',
    },
    {
      termino: 'JavaScript',
      significado:
        ' Lenguaje de programación dinámico que permite crear interactividad y comportamientos complejos en aplicaciones web.',
    },
    {
      termino: 'JSX (JavaScript XML)',
      significado:
        ' Extensión de sintaxis para JavaScript que permite escribir elementos similares a HTML dentro del código JavaScript en React.',
    },
    {
      termino: '<em>Lazy loading</em>',
      significado:
        'Técnica de optimización que retrasa la carga de recursos hasta que sean realmente necesarios, mejorando el rendimiento inicial.',
    },
    {
      termino: '<em>Media queries</em>',
      significado:
        'Característica de CSS que permite aplicar estilos específicos basándose en características del dispositivo como ancho de pantalla o orientación.',
    },
    {
      termino: '<em>Mobile-first</em>',
      significado:
        'Metodología de diseño que comienza optimizando para dispositivos móviles y luego adapta para pantallas más grandes.',
    },
    {
      termino: '<em>Module</em>',
      significado:
        'Unidad organizacional en Angular que agrupa componentes, directivas, pipes y servicios relacionados funcionalmente.',
    },
    {
      termino: '<em>Progressive enhancement</em>',
      significado:
        'Estrategia de desarrollo que comienza con funcionalidad básica y agrega mejoras progresivas para dispositivos más capaces.',
    },
    {
      termino: '<em>Props</em>',
      significado:
        'Mecanismo en React para pasar datos desde componentes padre hacia componentes hijo, estableciendo comunicación unidireccional.',
    },
    {
      termino: 'Prototipo',
      significado:
        'Representación tangible e interactiva de una interfaz que permite validar conceptos de diseño antes de la implementación final.',
    },
    {
      termino: 'React',
      significado:
        'Biblioteca de JavaScript desarrollada por Facebook para construir interfaces de usuario mediante componentes reutilizables y un modelo declarativo.',
    },
    {
      termino: '<em>Reconciliation</em>',
      significado:
        'Algoritmo interno de React que determina qué cambios deben realizarse en el DOM real basándose en diferencias en el Virtual DOM.',
    },
    {
      termino: '<em>Responsive design</em>',
      significado:
        'Enfoque de diseño que permite que las interfaces se adapten automáticamente a diferentes tamaños de pantalla y dispositivos.',
    },
    {
      termino: 'Selector',
      significado:
        'Patrón en CSS que especifica a qué elementos HTML se aplicarán determinados estilos, utilizando diversos criterios de selección.',
    },
    {
      termino: 'SEO (<em>Search Engine Optimization</em>)',
      significado:
        'Conjunto de técnicas para mejorar la visibilidad de un sitio web en los resultados de motores de búsqueda.',
    },
    {
      termino: '<em>Service</em>',
      significado:
        'Clase en Angular que encapsula lógica de negocio, acceso a datos o funcionalidades que pueden ser compartidas entre múltiples componentes.',
    },
    {
      termino: 'SPA (<em>Single Page Application</em>)',
      significado:
        'Aplicación web que carga una sola página HTML y actualiza dinámicamente el contenido mediante JavaScript sin recargar la página completa.',
    },
    {
      termino: '<em>State</em>',
      significado:
        'Datos que pertenecen a un componente y pueden cambiar a lo largo del tiempo, determinando cómo se renderiza la interfaz.',
    },
    {
      termino: '<em>TypeScript</em>',
      significado:
        'Superset de JavaScript que agrega tipado estático opcional, proporcionando mejor tooling y detección temprana de errores.',
    },
    {
      termino: 'UI (<em>User Interface</em>)',
      significado:
        'Conjunto de elementos visuales y controles que permiten la interacción entre usuarios y aplicaciones digitales.',
    },
    {
      termino: 'Usabilidad',
      significado:
        'Grado en que un producto puede ser usado por usuarios específicos para alcanzar objetivos determinados con efectividad, eficiencia y satisfacción.',
    },
    {
      termino: '<em>User flow</em>',
      significado:
        'Representación visual del camino que sigue un usuario para completar una tarea específica dentro de una aplicación o sitio web.',
    },
    {
      termino: 'UX (<em>User Experience</em>)',
      significado:
        'Experiencia completa que tiene una persona al interactuar con un producto digital, incluyendo aspectos emocionales, cognitivos y funcionales.',
    },
    {
      termino: '<em>Viewport</em>',
      significado:
        'Área visible de una página web en el navegador, cuyas dimensiones varían según el dispositivo utilizado.',
    },
    {
      termino: '<em>Virtual</em> DOM',
      significado:
        'Representación en memoria del DOM real utilizada por React para optimizar actualizaciones mediante comparaciones eficientes.',
    },
    {
      termino: 'Vue.js',
      significado:
        '<em>Framework</em> progresivo de JavaScript que combina simplicidad en el aprendizaje con capacidades avanzadas para aplicaciones complejas.',
    },
    {
      termino: 'WCAG (<em>Web Content Accessibility Guidelines</em>)',
      significado:
        'Estándares internacionales que proporcionan recomendaciones para hacer contenido web más accesible a personas con discapacidades.',
    },
    {
      termino: '<em>Wireframe</em>',
      significado:
        'Representación esquemática de baja fidelidad que muestra la estructura básica y disposición de elementos en una interfaz sin detalles visuales.',
    },
  ],
}
