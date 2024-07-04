# ALURAFLIX: PLATAFORMA DE VIDEOS EDUCATIVOS

Este proyecto es una aplicación de plataforma de videos que permite a los usuarios ver, agregar, editar y eliminar videos. También incluye una gestión de categorías para organizar los videos. La aplicación está construida con React y utiliza un servidor JSON falso (My JSON Server) para simular una API backend.

## Características

- **Página de inicio**: Muestra tarjetas de video con botones para editar y eliminar.
- **Formulario de Nuevo Video**: Permite agregar nuevos videos a la plataforma.
- **Modal de Edición de Video**: Permite editar los detalles de un video existente.
- **Gestión de Categorías**: Permite agregar y eliminar categorías para organizar los videos.
- **Reproducción de Video**: Permite reproducir los videos seleccionados.
- **Responsividad**: La aplicación es completamente responsive y se adapta a diferentes tamaños de pantalla.

## Tecnologías Utilizadas

- **React**: Librería de JavaScript para construir interfaces de usuario.
- **Styled Components**: Librería para escribir estilos CSS en JavaScript.
- **Axios**: Cliente HTTP para realizar peticiones a la API.
- **My JSON Server**: Servidor JSON falso para simular una API backend.

## Temas de React Utilizados

- **Context API**: Para manejar el estado global de la aplicación, incluyendo los videos y categorías.
- **Hooks (useState, useContext, useEffect)**: Para manejar el estado y los efectos secundarios en los componentes.
- **Custom Hooks**: useVideos para manejar la lógica de obtener y actualizar los videos y categorías desde la API.
- **Styled Components**: Para escribir estilos CSS en JavaScript y aplicar estilos a los componentes de React.
- **Conditional Rendering**: Para mostrar u ocultar componentes basados en el estado.
- **Event Handling**: Para manejar los eventos de formularios y botones.
- **Axios**: Para realizar peticiones HTTP a la API.

## Uso

### Página de Inicio

La página de inicio muestra una lista de videos organizados en tarjetas. Cada tarjeta incluye una imagen, un título y botones para editar y eliminar el video.

### Agregar un Nuevo Video

Para agregar un nuevo video, haz clic en el botón "Agregar Video" en la página de inicio. Se abrirá un formulario donde puedes ingresar los detalles del video, como la categoría, título, imagen, enlace del video y descripción. Al enviar el formulario, el nuevo video se agregará a la lista.

### Editar un Video

Para editar un video, haz clic en el botón "Editar" en la tarjeta del video que deseas modificar. Se abrirá un modal con los mismos campos que el formulario de nuevo video, permitiéndote actualizar cualquier detalle del video. Al enviar el formulario, los cambios se guardarán.

### Eliminar un Video

Para eliminar un video, haz clic en el botón "Eliminar" en la tarjeta del video que deseas eliminar. El video se eliminará de la lista.

### Gestión de Categorías

En la sección de gestión de categorías, puedes agregar y eliminar categorías. Para agregar una nueva categoría, ingresa el nombre de la categoría y el color de fondo deseado, luego haz clic en "Agregar Categoría". Para eliminar una categoría, selecciona la categoría que deseas eliminar y haz clic en "Eliminar Categoría".

# Deployment

The App is deployed on Vercel. Have a glance and try it: [AluraFlix by Junior Jusmé](https://challenge-aluraflix-nine.vercel.app/)

# Contact

Email me at [junior.jusme@gmail.com](mailto:junior.jusme@gmail.com)
Connect with me on [LinkedIn](https://www.linkedin.com/in/junior-jusm%C3%A9-2b783012a/)
