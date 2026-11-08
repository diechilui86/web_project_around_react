# Around The U.S. — React

Aplicación web desarrollada como parte del programa de desarrollo web. Esta versión migra la interfaz del [proyecto Around The U.S. anterior](https://github.com/diechilui86/web_project_around) a **React y TypeScript**, utilizando **Vite** como herramienta de desarrollo y compilación.

La etapa actual se centra en organizar la interfaz en componentes reutilizables, pasar datos mediante props y gestionar ventanas emergentes con estado. El perfil muestra información estática y las tarjetas utilizan datos ficticios definidos en el código.

## Funcionalidades

- Mostrar el nombre, la descripción y el avatar del perfil.
- Renderizar una lista de tarjetas a partir de un array tipado.
- Mostrar el nombre y la imagen de cada lugar.
- Abrir los formularios de edición de perfil, actualización de avatar y creación de tarjetas.
- Ampliar la imagen de una tarjeta en una ventana emergente con su descripción.
- Cerrar las ventanas emergentes mediante el botón de cierre.
- Adaptar la distribución de la interfaz mediante media queries, Flexbox y CSS Grid.

## Alcance actual

Los formularios contienen su marcado y campos, pero todavía no guardan cambios. La validación gestionada con React, el envío de formularios, los «me gusta», la eliminación de tarjetas y la integración con la API quedan pendientes de las siguientes etapas.

La apertura y el cierre de los popups se controlan con React. Actualmente, el cierre se realiza mediante el botón X.

## Tecnologías utilizadas

- React y React DOM.
- TypeScript y TSX.
- Vite.
- HTML5 y CSS3.
- Metodología BEM.
- Flexbox, CSS Grid y media queries.
- Fuentes Inter locales en formato WOFF2 y Normalize.css.
- ES Modules (`import` / `export`).
- ESLint.
- Git y GitHub.

## Componentes

| Componente | Responsabilidad |
| --- | --- |
| `App` | Componer la estructura principal con `Header`, `Main` y `Footer`. |
| `Header` | Mostrar el logotipo de la aplicación. |
| `Main` | Mostrar el perfil y las tarjetas, y administrar el estado del popup. |
| `Footer` | Mostrar la información de copyright. |
| `Card` | Renderizar una tarjeta y solicitar la apertura de su imagen. |
| `Popup` | Reutilizar el contenedor, el título opcional y el botón de cierre de las ventanas emergentes. |
| `NewCard` | Mostrar el formulario de creación de una tarjeta. |
| `EditProfile` | Mostrar el formulario de edición del perfil. |
| `EditAvatar` | Mostrar el formulario de actualización del avatar. |
| `ImagePopup` | Mostrar la imagen y la descripción de la tarjeta seleccionada. |

## Estado y comunicación entre componentes

`Main` administra el estado `popup` mediante `useState<PopupConfig | null>(null)`. Cuando su valor es `null`, la ventana está cerrada. Al seleccionar una configuración con título opcional y contenido, se renderiza `Popup`.

`handleOpenPopup` recibe esa configuración y actualiza el estado. `handleClosePopup` lo restablece a `null`. Los formularios se pasan a `Popup` mediante `children`.

Cada `Card` recibe los datos de una tarjeta y la función `handleOpenPopup` mediante props. Al pulsar su imagen, envía una configuración cuyo contenido es `ImagePopup`. La ausencia de título permite aplicar los estilos específicos del popup de imagen.

Las tarjetas se renderizan con `map()` y utilizan su `_id` como `key`.

## TypeScript

Los tipos compartidos se encuentran en `src/types/types.ts`.

| Tipo | Uso en esta etapa |
| --- | --- |
| `CardData` | Definir los datos de una tarjeta: `_id`, `name`, `link`, `owner`, `createdAt` e `isLiked`. |
| `PopupConfig` | Describir el título opcional y el contenido de una ventana emergente. |

Las props de cada componente se tipan junto a su implementación. El archivo de tipos también conserva interfaces del proyecto anterior para futuras etapas.

## Desarrollo local

Necesitas Git y una versión de Node.js compatible con las dependencias de Vite del proyecto, además de npm.

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/diechilui86/web_project_around_react.git
cd web_project_around_react
npm ci
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Vite está configurado para utilizar el puerto **3000** y abrir automáticamente el navegador mediante `--open`. Si el puerto está disponible, la dirección es `http://localhost:3000`. Si está ocupado, Vite puede seleccionar otro puerto; consulta la dirección que aparece en la terminal.

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Iniciar Vite y abrir el navegador. |
| `npm run build` | Comprobar TypeScript y generar la compilación de producción en `dist/`. |
| `npm run lint` | Analizar el código con ESLint. |
| `npm run preview` | Servir localmente la compilación de producción para revisarla. |

Para revisar la compilación de producción:

```bash
npm run build
npm run preview
```

La terminal indica la dirección del servidor de vista previa.

## Estructura del proyecto

| Ruta | Contenido |
| --- | --- |
| `index.html` | Documento HTML de entrada con el contenedor raíz de React. |
| `src/main.tsx` | Montaje de la aplicación e importación de los estilos globales. |
| `src/index.css` | Importaciones de estilos por bloque, fuentes y Normalize.css. |
| `src/components/App.tsx` | Componente principal de la aplicación. |
| `src/components/Header/` | Encabezado y logotipo. |
| `src/components/Main/Main.tsx` | Perfil, datos ficticios, lista de tarjetas y estado del popup. |
| `src/components/Main/Card/` | Componente de tarjeta. |
| `src/components/Main/Popup/Popup.tsx` | Contenedor reutilizable de las ventanas emergentes. |
| `src/components/Main/Popup/NewCard/` | Formulario de nueva tarjeta. |
| `src/components/Main/Popup/EditProfile/` | Formulario de edición de perfil. |
| `src/components/Main/Popup/EditAvatar/` | Formulario de actualización del avatar. |
| `src/components/Main/Popup/ImagePopup/` | Imagen ampliada y descripción. |
| `src/components/Footer/` | Pie de página. |
| `src/types/types.ts` | Interfaces y tipos compartidos. |
| `src/blocks/` | Hojas de estilo organizadas con BEM. |
| `src/images/` | Imágenes e iconos de la interfaz. |
| `src/vendor/` | Normalize.css y fuentes locales. |
| `public/` | Recursos estáticos servidos directamente. |
| `vite.config.ts` | Configuración de React y del puerto de desarrollo. |
| `tsconfig*.json` | Configuración de TypeScript. |
| `eslint.config.js` | Configuración del análisis de código. |
| `.gitignore` | Exclusiones de Git, incluidas `node_modules/` y `dist/`. |

## Conceptos aplicados

- Migración de HTML a TSX.
- Componentes funcionales y composición.
- Props tipadas y desestructuración.
- Contenido reutilizable mediante `children`.
- Estado local con el hook `useState`.
- Renderización condicional y clases CSS dinámicas.
- Renderización de listas con `map()` y claves únicas.
- Manejo de eventos con callbacks.
- Importación de imágenes y estilos con Vite.

## Diseño

La interfaz conserva los estilos del proyecto anterior, organizados con la metodología **BEM (Block, Element, Modifier)**. Utiliza Flexbox para distribuir elementos, CSS Grid para las tarjetas y media queries para adaptar el contenido a diferentes tamaños de pantalla.

Incluye fuentes Inter locales, Normalize.css e iconos SVG para los controles de la interfaz.

## Autor

**Diego Chiluisa S.**
