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
            <h2>Campo de Aplicación:</h2>
            <p>La usabilidad es crucial en el diseño y desarrollo de cualquier producto interactivo, como sitios web, software de escritorio, aplicaciones móviles, y sistemas operativos, entre otros. Se aplica en diversos campos como el comercio electrónico, la educación, la salud, y el entretenimiento, buscando siempre mejorar la experiencia del usuario para que sea más intuitiva, accesible y agradable.</p>
            
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

            <iframe src="https://ovacen.com/diseno-interfaz-usuario-ui/" width="80%" height="800px" frameborder="0" scrolling="yes" style="display: block; margin: auto;"></iframe>

            
            <h2>4.2 Elementos Avanzados y Estrategias de Optimización para UI</h2>
            <ul>
                <li><strong>Principios de Usabilidad de Jakob Nielsen:</strong> Estos son directrices claves para mejorar la experiencia del usuario, como la visibilidad del estado del sistema, consistencia y estándares, y ayuda y documentación. Estos principios ayudan a diseñar interfaces que son intuitivas y fáciles de usar.</li>
                <li><strong>Funciones Principales de la UI:</strong> La interfaz de usuario debería facilitar la comunicación entre el usuario y el sistema, permitir la personalización del entorno del usuario según sus preferencias, y ofrecer un sistema de control de acceso para garantizar la seguridad, entre otros.</li>
                <li><strong>Tipos de Interfaces de Usuario:</strong> Las interfaces pueden ser de hardware, software, o una combinación de ambas. Las interfaces gráficas de usuario (GUI) son las más comunes y permiten interactuar a través de elementos visuales como botones e íconos, mientras que las interfaces de línea de comandos (CLI) son basadas en texto</li>
                <li><strong>Importancia del Diseño Visual:</strong> Un diseño visual atractivo es crucial. Debe ser minimalista, evitando elementos innecesarios que puedan confundir al usuario, y usar colores y fuentes que mejoren la legibilidad y la jerarquía visual de la información.</p>
                <li><strong>Accesibilidad:</strong> Asegurar que la interfaz sea accesible para todos los usuarios, incluyendo aquellos con discapacidades, es fundamental. Esto implica un diseño que considere el contraste adecuado entre colores, uso de etiquetas apropiadas para tecnología asistiva, y alternativas textuales para contenido multimedia</li>
            </ul>
            `;
        }
        // Ahora desplazamos después de actualizar el contenido
        contentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300); // Ajusta este tiempo si es necesario para sincronizar con la velocidad de desplazamiento
}

function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}
