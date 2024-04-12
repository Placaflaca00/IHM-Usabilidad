function loadContent(section) {
    const contentElement = document.getElementById('content');

    // Primero se desplaza hasta el elemento para una transición suave
    contentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Retraso en la actualización del contenido para sincronizar con el desplazamiento
    setTimeout(() => {
        if (section === 'basic') {
            contentElement.innerHTML = `
            <h2>Qué es la Usabilidad</h2>
            <p>Mucho se recuerda cómo hace años, cuando en los hogares comenzaban a hacerse presentes las primeras computadoras personales y en los entornos laborales la automatización de procesos era la novedad, se incorporó un nuevo término al vocabulario: <strong>“amigable”</strong>.</p>
            <p>Este se utilizaba para referirse a aquellas aplicaciones software en las que su uso, al menos, no terminaba provocándonos un dolor de cabeza o un estado de interminable frustración.</p>
            <p>Este término fue progresivamente mutando hacia otro, usabilidad, un anglicismo (usability) que se refiere a la facilidad de uso de las aplicaciones, herramientas o productos interactivos. Este cambio terminológico no obedecía a una moda, sino a la intención de definir, delimitar y clarificar uno de los atributos de calidad de los productos interactivos que mayor impacto tienen en la satisfacción del usuario y la aceptación social del “producto”.</p>
            <h2>Entonces, ¿qué es la usabilidad?</h2>
            <p>Fundamentalmente, la usabilidad se refiere a la facilidad de uso, de cómo el diseño de un producto cualquiera facilita o dificulta su utilización. La Organización Internacional de Normalización (ISO) 9241-11 la define como la medida en la cual un producto puede ser utilizado por determinados usuarios para conseguir objetivos específicos con efectividad, eficiencia y satisfacción, en un contexto de uso determinado.</p>
            <p>Si hablamos de usabilidad aplicada al entorno web, Jakob Nielsen la entiende como un atributo de calidad que evalúa la facilidad de uso de las interfaces de usuario. También se refiere a los métodos que podemos aplicar para mejorar esta facilidad de uso durante el proceso de diseño. Nielsen define la usabilidad a partir de cinco elementos:</p>
            <ul>
                <li><strong>Facilidad de aprendizaje:</strong> hasta qué punto es fácil para los usuarios realizar las tareas básicas cuando se enfrentan por primera vez a un diseño.</li>
                <li><strong>Efficiency:</strong> una vez que los usuarios han aprendido el diseño, con qué rapidez realizan las tareas.</li>
                <li><strong>Facilidad para ser recordado:</strong> cuando los usuarios han dejado de interactuar con ese diseño durante un tiempo, cuánto les cuesta recordar cómo se utilizaba.</li>
                <li><strong>Errores:</strong> cuántos errores cometen los usuarios, y si pueden resolverlos fácilmente.</li>
                <li><strong>Satisfacción:</strong> si es agradable utilizar el diseño, si los elementos están fácilmente localizables, si ayuda o dificulta la realización de las tareas, y si los usuarios volverían a utilizar ese diseño.</li>
            </ul>
            <h2>Video para Esfuerzo</h2>
            <div class="video-container">
            <iframe src="https://www.youtube.com/embed/Y7nLeu4cY38?autoplay=1&mute=1" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
        </div>`;
        } else if (section === 'interaction') {
            contentElement.innerHTML = `
            <h2>La experiencia del usuario</h2>
            <p>Ocurre muy a menudo que se intenta buscar algo en concreto en una página web y no se encuentra. Puede semejarse a buscar un producto en particular en un supermercado; dependiendo de cuál sea su distribución, se puede llegar a pasar más de cinco minutos buscándolo, mientras se pregunta si no hubiera sido mejor situarlo junto a los productos de higiene en vez de la sección de alimentación. Estos 5 minutos alguien puede perderse en un supermercado, pero en el mundo de internet el escenario es distinto, ya que un usuario que no encuentre lo que busca en pocos segundos, abandonará la página.</p>
            <p>En este sentido, cada usuario interactuará con los contenidos del sitio en función de la necesidad de información; esta será la que condicione el comportamiento de búsqueda. Así, la búsqueda de información conocida es diferente que la búsqueda de información sobre un tema desconocido por el usuario. Esta diferencia es determinante en las prioridades de nuestros usuarios y por lo tanto debe ser tenida en cuenta al estructurar la información en el espacio Web.</p>
            <h2>Navegabilidad</h2>
            <p>Se trata de la navegabilidad del sitio: un sitio debe ser cómodo para el usuario, debe ser fácilmente navegable, el usuario tiene que poder ir de un lado a otro del sitio rápidamente y sin perderse. Así, llegamos a un principio básico de la usabilidad: el usuario no tiene tiempo, y menos para estar adivinando cuál es la manera de llegar a los diferentes contenidos de nuestras webs. La navegabilidad es un elemento muy importante en todo sitio y debe ser igual en cada parte del mismo. Es un elemento de la usabilidad que debe ser tomado en cuenta a la hora de planificar cualquier sitio web.</p>`;
        }
    }, 200); // Ajusta este tiempo si es necesario para sincronizar con la velocidad de desplazamiento
}
