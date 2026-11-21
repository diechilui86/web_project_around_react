# Around The U.S. — React

Aplicación web para compartir lugares mediante tarjetas con imágenes. Permite editar el perfil, cambiar el avatar, publicar lugares, ampliar sus imágenes, dar o quitar «me gusta» y eliminar las tarjetas propias.

El proyecto es una migración de [Around The U.S.](https://github.com/diechilui86/web_project_around) a React y TypeScript. El perfil y las tarjetas se cargan desde la API de TripleTen.

## Demo

[Ver Around The U.S. en GitHub Pages](https://diechilui86.github.io/web_project_around_react/)

## Funcionalidades

- Cargar el perfil y la lista de tarjetas al iniciar la aplicación.
- Editar el nombre y la descripción del perfil con los datos actuales precargados.
- Cambiar el avatar mediante la URL de una imagen.
- Publicar una tarjeta y mostrarla al principio de la lista.
- Abrir una imagen en una ventana emergente con el título del lugar.
- Dar y quitar «me gusta», con un indicador visual del estado de cada tarjeta.
- Mostrar la papelera solo en las tarjetas propias y pedir confirmación antes de eliminarlas.
- Mostrar «Guardando...» al editar el perfil, cambiar el avatar o crear una tarjeta, y «Eliminando...» al confirmar un borrado.
- Bloquear el botón de envío y el cierre de la ventana emergente mientras la solicitud está en curso.
- Mostrar mensajes de validación del navegador junto a los campos de edición de perfil y creación de tarjetas. El botón de envío se habilita cuando el formulario es válido.

## Tecnologías

- React y TypeScript
- Vite
- CSS con metodología BEM, Flexbox, Grid y media queries
- Fetch API
- ESLint

## Estructura del proyecto

| Ruta                                    | Responsabilidad                                                                                                       |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `src/main.tsx`                          | Monta la aplicación e importa los estilos globales.                                                                   |
| `src/components/App.tsx`                | Gestiona el usuario, las tarjetas, el popup activo y las solicitudes a la API.                                        |
| `src/components/Main/Main.tsx`          | Muestra el perfil, la lista de tarjetas y la ventana emergente activa.                                                |
| `src/components/Main/components/Card/`  | Renderiza cada tarjeta y sus acciones de imagen, like y borrado.                                                      |
| `src/components/Main/components/Popup/` | Contiene el popup reutilizable y sus componentes `EditProfile`, `EditAvatar`, `NewCard`, `ImagePopup` y `RemoveCard`. |
| `src/contexts/CurrentUserContext.tsx`   | Comparte los datos del usuario, las acciones de los formularios y el estado de guardado.                              |
| `src/interfaces/`                       | Define `UserData`, `CardData`, `CurrentUserContextType` y `ModalData`.                                                |
| `src/types/types.ts`                    | Define los tipos de los formularios y reexporta las interfaces compartidas.                                           |
| `src/utils/api.ts`                      | Contiene la clase `Api` y exporta la instancia que usa la aplicación.                                                 |
| `src/blocks/`                           | Contiene las hojas de estilo de la interfaz.                                                                          |

## Estado y comunicación con la API

`App` carga el perfil y las tarjetas en paralelo al montar la aplicación. El estado del usuario, la lista de tarjetas y el popup activo se mantienen en `App`. `Main` consume el contexto para mostrar el perfil y `Card` lo usa para comprobar si la tarjeta pertenece al usuario actual.

Los formularios de perfil y creación de tarjetas usan campos controlados. El formulario del avatar usa `useRef` para leer la URL al enviarlo. `App` ejecuta las solicitudes, aplica los cambios al estado local y cierra el popup cuando la operación tiene éxito.

## Desarrollo local

Necesitas Git, Node.js compatible con la versión de Vite declarada en `package.json` y npm.

```bash
git clone https://github.com/diechilui86/web_project_around_react.git
cd web_project_around_react
npm ci
npm run dev
```

Abre la dirección que muestra Vite en la terminal.

| Comando           | Acción                                                                          |
| ----------------- | ------------------------------------------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo.                                               |
| `npm run build`   | Comprueba TypeScript y genera la versión de producción en `dist/`.              |
| `npm run preview` | Sirve localmente la compilación de producción. Ejecuta `npm run build` primero. |
| `npm run lint`    | Revisa el código con ESLint.                                                    |

## Autor

Diego Chiluisa S.
