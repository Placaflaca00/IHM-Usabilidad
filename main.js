function loadContent(section) {
    const contentElement = document.getElementById('content');

    setTimeout(() => {
        if (section === 'basic') {
            contentElement.innerHTML = `
            <h1>1.1 Definición y Campo de Aplicación de la Usabilidad</h1>
            <h2>Definición:</h2>
            <p>La usabilidad se define como la medida en la que un producto puede ser utilizado por usuarios específicos para alcanzar objetivos concretos con efectividad, eficiencia y satisfacción en un contexto específico de uso. Esta definición se enfoca en la experiencia del usuario al interactuar con el sistema y abarca tres componentes principales:</p>
            <ul>
                <li><strong>Efectividad:</strong> Precisión y completitud con las que los usuarios logran ciertos objetivos.</li>
                <li><strong>Eficiencia:</strong> Relación entre la precisión y la completitud de los objetivos alcanzados y los recursos empleados para conseguirlos.</li>
                <li><strong>Satisfacción:</strong> Comodidad y actitudes positivas hacia el uso del producto.</li>
            </ul>
            
            
            <h1>1.2 Importancia Estratégica en el Desarrollo de Software</h1>
            <p>La usabilidad en el desarrollo de software es de importancia estratégica por varias razones:</p>
            <ul>
                <li><strong>Competitividad:</strong> Un software con alta usabilidad mejora la satisfacción del usuario, lo que puede traducirse en una ventaja competitiva significativa. Los productos fáciles de usar atraen y retienen a más usuarios.</li>
                <li><strong>Productividad:</strong> Software con buena usabilidad aumenta la productividad de los usuarios al reducir el tiempo y el esfuerzo necesarios para completar tareas.</li>
                <li><strong>Costos de soporte:</strong> Mejorar la usabilidad puede reducir los costos asociados al soporte técnico, ya que un diseño intuitivo disminuye la necesidad de ayuda externa.</li>
                <li><strong>Accesibilidad:</strong> Considerar la usabilidad implica diseñar para todos los usuarios, incluyendo aquellos con discapacidades, lo cual es crucial para la inclución y el cumplimiento de normativas legales.</li>
                <li><strong>Reduccion de errores:</strong> Sistemas usables minimizan el riesgo de errores por parte de los usuarios, lo que es vital en áreas críticas como la banca en línea y la medicina.</li>
                <h2>Video para Esfuerzo</h2>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/Y7nLeu4cY38?autoplay=1&mute=1" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                </div>
                `;
        } else if (section === 'design') {
            contentElement.innerHTML = `
            <h1>2. Diseño y Experiencia del Usuario</h1>
            <img src="Img/diseno-de-experiencia-de-usuario.jpg" alt="Diseño de Experiencia de Usuario" width="500" height="300">
            <h2>2.1 Fundamentos de la Experiencia del Usuario (UX)</h2>
            <ul>
                <li><strong>Investigación del usuario:</strong> Comprende a tus usuarios objetivo modelando sus roles, comportamientos y objetivos. Utiliza técnicas como las entrevistas etnográficas para desarrollar "personas" que representen a los usuarios típicos.</li>
                <li><strong>Diseño de interacción:</strong> Se enfoca en crear interfaces intuitivas donde los elementos de la interfaz se autoexpliquen. Prioriza la simplicidad y la eficiencia, basándote en principios de diseño estándar y accesibilidad.</li>
                <li><strong>Evaluación de la usabilidad:</strong> Implementa pruebas de usabilidad y utiliza herramientas automáticas para medir y mejorar la interacción del usuario con el sitio web. La iteración es clave: evalúa, recibe feedback y ajusta el diseño repetidamente.</li>
            </ul>
            <h2>2.2 Diseño Interactivo</h2>
            <ul>
                <li><strong>Arquitectura de la información:</strong> Organiza la información de manera lógica y fácil de navegar. Usa etiquetas claras y consistentes para los enlaces y menús de navegación.</li>
                <li><strong>Diseño de legibilidad:</strong> El contenido debe ser fácil de leer y escanear. Utiliza tipografías claras y adecuadas, y asegúrate de que los contrastes de color faciliten la lectura.</li>
                <li><strong>Diseño de búsqueda:</strong> Implementa un sistema de búsqueda eficiente y conforme a las expectativas de los usuarios. Considera la optimización del motor de búsqueda para mejorar la visibilidad y accesibilidad del sitio.</li>
            </ul>
            <h2>2.3 Accesibilidad y Navegación</h2>
            <ul>
                <li><strong>Accesibilidad:</strong> Asegúrate de que tu sitio web sea accesible para todos los usuarios, incluyendo aquellos con discapacidades. Implementa las directrices de accesibilidad web (WCAG) para garantizar que todos los usuarios puedan interactuar efectivamente con tu sitio.</li>
                <li><strong>Navegación consistente:</strong> Proporciona una experiencia de navegación fluida y predecible. Utiliza un diseño de navegación coherente en todas las páginas y asegúrate de que los enlaces sean claros y visibles.</li>
                <li><strong>Respuesta a la interacción:</strong> Cada acción del usuario debe recibir una respuesta inmediata y clara. Las transiciones y los efectos visuales deben reforzar la comprensión del usuario sobre la interacción.</li>
            </ul>
            <h2>Las 12 Leyes para UX & UI</h2>
            <div class="video-container">
                    <iframe src="https://youtube.com/embed/ABggYX2jOsM" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                </div>
                `;
        }else if (section === 'visualization'){
            contentElement.innerHTML = `
            <h1>3. Visualización y Contenidos</h1>
            <h2>3.1 Contenidos y Visualización</h2>
            <p>Esta sección profundiza en la importancia de diseñar contenidos que sean accesibles y comprensibles para los usuarios, con énfasis en cómo se estructura y presenta la información en los sitios web. Los aspectos clave podrían incluir:</p>
            <ul>
                <li><strong>Arquitectura de la Información:</strong>Asegurar que el contenido esté organizado lógicamente y sea fácil de navegar.</li>
                <p><strong>Por ejemplo:</strong></p>
                <div class="img-container">
                <div class="image-item">
                    <a href="https://es.wikipedia.org" target="_blank">
                        <img src="Img/wikipedia.jpg" alt="Wikipedia">
                    </a>
                    <a href="https://es.wikipedia.org">Visitar Wikipedia</a>
                </div>

                <div class="image-item">
                    <a href="https://www.amazon.com" target="_blank">
                        <img src="Img/amazon.webp" alt="Amazon">
                    </a>
                    <a href="https://www.amazon.com">Visitar Amazon</a>
                </div>

                <div class="image-item">
                    <a href="https://www.bbc.com" target="_blank">
                        <img src="Img/BBC.jpg" alt="BBC">
                    </a>
                    <a href="https://www.bbc.com">Visitar BBC News</a>
                </div>

                <div class="image-item">
                    <a href="https://www.airbnb.com" target="_blank">
                        <img src="Img/airbnb.png" alt="Airbnb">
                    </a>
                    <a href="https://www.airbnb.com">Visitar Airbnb</a>
                </div>
                </div>

                <li><strong>Diseño Visual:</strong> Uso de elementos visuales que mejoran la interacción del usuario sin sobrecargarlo o confundirlo, <strong>por ejemplo</strong>; Iconos claros y consistentes :<i class="fas fa-home"></i><i class="fas fa-search"></i> <button class="add-button"><i class="fas fa-plus"></i> Agregar</button></li>
                <li><strong>Estrategia de Contenido:</strong> Técnicas para crear y gestionar contenidos que satisfagan las necesidades del usuario, apoyando la usabilidad al hacer que la información importante sea fácil de encontrar y comprender.</li>
            </ul>
            <h2>3.2 Aspectos Técnicos del Diseño Responsivo</h2>
            <p>Esta sección probablemente discute los enfoques técnicos para hacer que los sitios web funcionen eficazmente en diversos dispositivos y tamaños de pantalla, lo cual es crucial para el diseño web moderno. Los puntos clave podrían incluir:</p>
            <ul>
                <li><strong>Técnicas de Diseño Responsivo:</strong> Métodos como los layouts de rejilla fluida, imágenes flexibles y consultas de medios CSS que permiten que los diseños se adapten a diferentes entornos de pantalla.</li>
                <li><strong>Optimización del Rendimiento:</strong> Técnicas para asegurar que el sitio web se cargue rápidamente y de manera fluida en todos los dispositivos, lo cual es crucial para la usabilidad.</li>
                <li><strong>Compatibilidad Entre Dispositivos:</strong> Asegurar que el sitio web ofrezca una experiencia de usuario consistente en diferentes dispositivos y navegadores, incluyendo el manejo de interfaces táctiles frente a no táctiles y variaciones en las capacidades de los dispositivos.</li>
            </ul>

            `;
        }else if (section === 'interface_elements'){
            contentElement.innerHTML=`
            <h1>4. Elementos y Estrategias de Interfaz de Usuario</h1>
            <h2>4.1 Elementos de Interfaz de Usuario (UI)</h2>
            <ul>
                <li><strong>Diseño Estructural:</strong> Se refiere al marco conceptual del diseño de interfaz, incluyendo la lógica de operación y estética de la interfaz.</li>
                <li><strong>Diseño Interactivo:</strong> Enfocado en la facilidad de uso del producto y la interacción hombre-máquina, incluyendo comunicación efectiva y comportamiento interactivo consistente.</li>
                <li><strong>Diseño Visual:</strong> Trata sobre la estética visual, incluyendo colores, fuentes y otros elementos gráficos para crear una interfaz agradable y coherente.</li>
            </ul>
            <h2>Para leer mas</h2>

            <iframe src="https://ovacen.com/diseno-interfaz-usuario-ui/" width="80%" height="800px" frameborder="1" scrolling="yes" style="display: block; margin: auto;"></iframe>

            
            <h2>4.2 Elementos Avanzados y Estrategias de Optimización para UI</h2>
            <ul>
                <li><strong>Principios de Usabilidad de Jakob Nielsen:</strong> Estos son directrices claves para mejorar la experiencia del usuario, como la visibilidad del estado del sistema, consistencia y estándares, y ayuda y documentación. Estos principios ayudan a diseñar interfaces que son intuitivas y fáciles de usar.</li>
                <li><strong>Funciones Principales de la UI:</strong> La interfaz de usuario debería facilitar la comunicación entre el usuario y el sistema, permitir la personalización del entorno del usuario según sus preferencias, y ofrecer un sistema de control de acceso para garantizar la seguridad, entre otros.</li>
                <li><strong>Tipos de Interfaces de Usuario:</strong> Las interfaces pueden ser de hardware, software, o una combinación de ambas. Las interfaces gráficas de usuario (GUI) son las más comunes y permiten interactuar a través de elementos visuales como botones e íconos, mientras que las interfaces de línea de comandos (CLI) son basadas en texto</li>
                <li><strong>Importancia del Diseño Visual:</strong> Un diseño visual atractivo es crucial. Debe ser minimalista, evitando elementos innecesarios que puedan confundir al usuario, y usar colores y fuentes que mejoren la legibilidad y la jerarquía visual de la información.</p>
                <li><strong>Accesibilidad:</strong> Asegurar que la interfaz sea accesible para todos los usuarios, incluyendo aquellos con discapacidades, es fundamental. Esto implica un diseño que considere el contraste adecuado entre colores, uso de etiquetas apropiadas para tecnología asistiva, y alternativas textuales para contenido multimedia</li>
            </ul>
            `;
        }else if (section === 'evaluation'){
            contentElement.innerHTML=`
            <h1>5. Evaluación y Mejora</h1>
            <h2>5.1 Evaluación Heurística</h2>
            <p><strong>Evaluación heurística </strong> es una técnica cualitativa que permite obtener información sobre el funcionamiento de un producto y su cumplimiento de objetivos. A través de este método, se identifican las áreas de mejora en la usabilidad del producto y se generan recomendaciones para optimizar la experiencia del usuario.</p> 
            <img src="Img/heuristicas-de-usabilidad.png" alt="#" width="600" height="372">
            <h3>Paso a paso</h3> 

            <h4>Primer paso: Definición de objetivos </h4>

            <p>Debes colaborar con el cliente para establecer los objetivos de la evaluación, identificando las áreas clave del producto que se evaluarán y estableciendo su prioridad. También es importante definir las tareas necesarias para alcanzar estos objetivos, así como los indicadores que se utilizarán para medir su cumplimiento y el estado actual del producto.</p>

            <p>Ejemplo</p>

            <p>Imagina que estás trabajando en el desarrollo de un nuevo sitio web para una tienda en línea. Tu cliente quiere mejorar la experiencia de usuario y aumentar las conversiones. Juntos, establecen los siguientes objetivos para la evaluación de usabilidad:</p>

            <ul>
            <li>Aumentar la tasa de conversión en un 20% en los próximos 6 meses.</li>
            <li>Reducir el abandono del carrito de compras en un 15%.</li>
            <li>Mejorar la navegación del sitio para facilitar la búsqueda de productos.</li>
            <li>Asegurar que el proceso de pago sea intuitivo y sin problemas.</li>
            <li>Identificar y corregir cualquier problema de usabilidad que pueda afectar la satisfacción del usuario.</li>
            </ul>

            <h4>Segundo paso: Perfiles de usuario</h4>

            <p>Una vez definidos los objetivos, es fundamental comprender a quién está dirigido el producto y quiénes serán los usuarios principales. Deberás identificar los diferentes perfiles de usuarios y las tareas asociadas a cada uno de ellos. Es común que haya varios tipos de usuarios, por lo que es importante personalizar estas descripciones utilizando la técnica de personas.</p>

            <p>Aquí se podría usar la técnica de personas, donde se junta todas las características de los diferentes usuarios y se crea un perfil que imita a la persona real.</p>

            <img src="Img/Imagen1.png" alt="#" width="500" height="300">

            <p><strong>Ejemplo</strong></p>

            <p>Después de definir los objetivos, te centras en comprender a los usuarios del sitio web. Identificas tres perfiles de usuarios principales:</p>

            <ul>
            <li>Compradores habituales: Personas que visitan el sitio con frecuencia para realizar compras.</li>
            <li>Nuevos visitantes: Personas que llegan al sitio por primera vez en busca de productos específicos.</li>
            <li>Exploradores: Personas que navegan por el sitio sin una intención de compra clara, pero podrían convertirse en clientes en el futuro.</li>
            </ul>

            <p>Para cada perfil de usuario, identificas las tareas que podrían realizar, como buscar un producto, agregarlo al carrito, completar el proceso de pago, etc.</p>

            <h4>Tercer paso: Las tareas</h4>

            <p>Para asegurar una evaluación completa, debes definir detalladamente las tareas que realizarán los usuarios durante la evaluación. Esto incluye la descripción de las tareas, sus objetivos comerciales asociados y las partes más importantes de las funcionalidades que serán revisadas.</p>

            <p>Con base en los perfiles de usuario, defines las tareas específicas que cada grupo realizará durante la evaluación de usabilidad. Por ejemplo:</p>

            <ul>
            <li>Compradores habituales: Realizar una compra de principio a fin, incluyendo la búsqueda de productos, la selección de tallas y colores, y el pago.</li>
            <li>Nuevos visitantes: Encontrar un producto específico utilizando la barra de búsqueda y agregarlo al carrito.</li>
            <li>Exploradores: Navegar por las diferentes categorías de productos y añadir varios artículos al carrito para evaluar la experiencia de compra.</li>
            </ul>

            <h4>Cuarto paso: Análisis de criterios generales y específicos</h4>

            <p>Durante la evaluación, deberás analizar una variedad de criterios que van desde aspectos generales como la identificación y el lenguaje, hasta cuestiones específicas como la ayuda y la accesibilidad del producto. Utiliza una lista de criterios predefinidos para guiar tu análisis y asigna una puntuación a cada uno de ellos para facilitar la interpretación de los resultados.</p>

            <p>Algunos ejemplos de criterios generales y específicos podrían incluir:</p>

            <ul>
            <li><strong>Identificación:</strong>
                <ul>
                <li>¿Es claro el logo de la marca y ayuda a los usuarios a identificar el sitio web?</li>
                <li>¿La navegación principal es fácil de encontrar y entender?</li>
                </ul>
            </li>
            <li><strong>Lenguaje:</strong>
                <ul>
                <li>¿El texto en el sitio web es claro y fácil de entender para los usuarios?</li>
                <li>¿Se utilizan términos técnicos o jerga que puedan confundir a los usuarios?</li>
                </ul>
            </li>
            <li><strong>Ayuda:</strong>
                <ul>
                <li>¿El sitio web proporciona suficiente información de ayuda para los usuarios, como preguntas frecuentes o tutoriales?</li>
                <li>¿Se ofrece soporte en línea, como chat en vivo o asistencia por correo electrónico, para resolver las dudas de los usuarios?</li>
                </ul>

            </li>
            <li><strong>Accesibilidad:</strong>
                <ul>
                <li>¿El sitio web cumple con las pautas de accesibilidad web, como la capacidad de navegar utilizando solo el teclado?</li>
                <li>¿Se proporcionan opciones de personalización, como el cambio de tamaño de fuente o contraste, para usuarios con necesidades específicas?</li>
                </ul>
                <img src="Img/img3.jpg" alt="#" width="500" height="300">
            </li>
            <li><strong>Llamadas a la acción:</strong>

                <ul>
                    <li>¿Las llamadas a la acción, como "Agregar al carrito" o "Comprar ahora", son claras y visibles?</li>
                    <li>¿Están ubicadas estratégicamente en el sitio para impulsar la conversión?</li>
                </ul>
            </li>

            <li><strong>Proceso de pago:</strong>

                <ul>
                    <li>¿El proceso de pago es intuitivo y fácil de seguir?</li>
                    <li>¿Se proporciona retroalimentación clara sobre el progreso del usuario durante el proceso de pago?</li>
                </ul>
            </li>

            </ul>

            <p>Al analizar estos criterios y asignarles una puntuación del 1 al 5, podrás identificar áreas específicas de mejora en la usabilidad del sitio web y generar recomendaciones para optimizar la experiencia del usuario.</p>

            <h4>Quinto paso: Recomendaciones</h4>

            <p>Una vez completada la evaluación, deberás preparar y presentar recomendaciones basadas en los hallazgos. Esto incluye identificar y destacar las debilidades encontradas en la interfaz y el proceso, especialmente aquellos elementos que puedan afectar negativamente la experiencia del usuario. Además de un informe detallado, considera también preparar una presentación ejecutiva que resuma los hallazgos y las recomendaciones de manera concisa.</p>

            <p>Ejemplos</p>

            <ul>
                <li>Simplificar el proceso de pago mediante la eliminación de pasos innecesarios.</li>
                <li>Mejorar la visibilidad de las opciones de navegación para facilitar la búsqueda de productos.</li>
                <li>Optimizar el diseño del carrito de compras para hacerlo más intuitivo y fácil de usar.</li>
                <li>Implementar pruebas de usuario adicionales para validar las recomendaciones y realizar ajustes según sea necesario.</li>
            </ul>
            <h2>5.2 Herramientas y Técnicas Especiales</h2>
            <h2>5.2.1 Método Think Out Loud</h2>
            <p>Es una técnica utilizada en los tests de usabilidad para observar y comprender el proceso de pensamiento de los usuarios mientras interactúan con un producto. Esta técnica permite a los moderadores obtener información valiosa sobre las dificultades que encuentran los usuarios, sus estrategias para resolver problemas y sus opiniones sobre la experiencia general.</p>
            <h2>5.2.2 UserTesting</h2>
            <h3>Pasos para utilizar la función de grabado con User testing</h3>

            <ol>
                <li>Delegar permisos de audio y video</li>
                <img src="Img/Imagen2.png" alt="#" width="429" height="451">
                <li>Realizar un chequeo de micrófono</li>
                <img src="Img/Imagen3.png" alt="#" width="442" height="210">
                <li>Seguir las instrucciones de la herramienta: La herramienta reconocerá el contenido de la página web e irá haciéndote preguntas interactivas, las cuales debes ir respondiendo con completa franqueza</li>
                <img src="Img/Imagen4.png" alt="#" width="527" height="356">
                <li>Interactuar con el producto: Expresa tus pensamientos y sentimientos en voz alta mientras interactúas con el producto.</li>
                <img src="Img/Imagen5.png" alt="#" width="605" height="415">
                <li>Realizar las tareas que pide el test: La herramienta te pedirá buscar un botón aleatorio y tomara en cuenta el tiempo que hayas tardado en encontrar ese botón para determinar qué tan fácil es de encontrar</li>
                <img src="Img/Imagen6.png" alt="#" width="360" height="171">
                <img src="Img/Imagen8.png" alt="#" width="350" height="230">
            </ol>

            <h4>Consejos adicionales:</h4>

            <ul>
            <li>Habla con claridad y en voz alta para que tu audio se grabe correctamente.</li>
            <li>Mantén tu rostro visible en la cámara para que se puedan captar tus expresiones faciales.</li>
            <li>Sé honesto y sincero en tus respuestas.</li>
            <li>No tengas miedo de expresar tus frustraciones o dificultades.</li>
            <li>Cuanta más información proporciones, más valiosa será la evaluación de la usabilidad.</li>
            </ul>

            <h2>5.2.3 Método de Cuestionarios</h2>
            
            <img src="Img/523.png" alt="#" width="600" height="424">
            
            <p>En el ámbito de la evaluación de sistemas interactivos hablamos de cuestionarios para referirnos a listas de preguntas que el evaluador distribuye entre usuarios y/o implicados para que éstos nos las devuelvan respuestas y, así, poder extraer conclusiones. El cuestionario normalmente se distribuye en formato escrito y las preguntas plantean aspectos relacionados con el sistema o aplicación concreta.</p>

            <p>Así pues, la base del cuestionario es la recolección de información a partir de respuestas contestadas por los usuarios y/o los implicados.</p>

            <h3>Paso a paso</h3>

            <il>
                <li><strong>Paso 1:</strong>Definir los objetivos de la evaluación de usabilidad. Antes de crear cualquier cuestionario, es crucial entender qué aspectos específicos del sistema interactivo deseas evaluar. Esto podría incluir la facilidad de uso, la eficiencia, la satisfacción del usuario, entre otros.</li>
                <li><strong>Paso 2: Diseñar el cuestionario</strong>
                    <ol type="a">
                        <li><strong>Identificar las partes del cuestionario:</strong>Divide el cuestionario en tres secciones: pre-tarea, post-tarea y post-test. La sección pre-tarea recopila información del perfil del usuario. La sección post-tarea se enfoca en la experiencia durante las tareas. La sección post-test evalúa la experiencia global del usuario.</li>
                        <li><strong>Seleccionar tipos de preguntas:</strong> Utiliza preguntas generales, abiertas, escalares, opciones múltiples y ordenadas para obtener datos sobre la usabilidad del sistema.</li>
                    </ol>
                </li>
                <li><strong>Paso 3: Elaborar las preguntas</strong>
                    <ol type="a">
                        <li><strong>Preguntas de carácter general:</strong>Incluye preguntas sobre el perfil del usuario, como edad, sexo, ocupación, etc., para entender mejor a quiénes estás evaluando.</li>
                        <li><strong>Preguntas específicas de la experiencia del usuario:</strong> Diseña preguntas que aborden aspectos clave de la usabilidad, como la facilidad de uso, la eficacia en la realización de tareas y la satisfacción general.</li>
                        <li><strong>Preguntas post-tarea:</strong> Crea preguntas específicas para cada tarea que los usuarios realicen durante la evaluación. Estas preguntas deben centrarse en la experiencia del usuario mientras completan la tarea asignada.</li>
                    </ol>
                </li>
                <li><strong>Paso 4: Validar el cuestionario</strong> Antes de distribuir el cuestionario, realiza una revisión para asegurarte de que las preguntas sean claras, relevantes y no sesgadas. También puedes realizar pruebas piloto con un grupo pequeño de usuarios para identificar cualquier problema potencial con el cuestionario.</li>
                <li><strong>Paso 5: Distribuir el cuestionario</strong> Una vez validado, distribuye el cuestionario a los usuarios que participarán en la evaluación de usabilidad. Puedes hacerlo en formato impreso o electrónico, según sea más conveniente para tus usuarios.</li>
                <li><strong>Paso 6: Analizar los resultados</strong> Recopila y analiza las respuestas de los usuarios para identificar patrones, tendencias y áreas de mejora en la usabilidad del sistema interactivo. Utiliza herramientas de análisis estadístico si es necesario para obtener conclusiones significativas.</li>
                <li><strong>Paso 7: Iterar y mejorar</strong> Utiliza los resultados de la evaluación de usabilidad para realizar mejoras en el sistema interactivo. Este proceso iterativo garantizará que el producto final sea más fácil de usar y satisfactorio para los usuarios.</li>
            </il>

            `;
        }  
        // Ahora desplazamos después de actualizar el contenido
        contentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300); // Ajusta este tiempo si es necesario para sincronizar con la velocidad de desplazamiento
}

function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}
