# Conditional Profile Card

Como desarrollador web, estarás creando muchos HTML dinámicos + CSS usando algoritmos de Javascript.

En este ejercicio, debes crear el código HTML necesario para representar una tarjeta de perfil. El código final cambiará en tiempo de ejecución en función de una serie de variables que podrían cambiar. Aquí hay un ejemplo de la tarjeta de perfil:

![Conditional Profile Card](https://projects.breatheco.de/p/javascript/beginner/conditional-profile-card/preview.gif)

## Valores de variables iniciales

| Nombre | Tipo | Valor por Defecto | Descripción |
| --- | --- | --- | --- |
| background | string | null | la url de la imagen que se utilizará como fondo para la portada del perfil |
| includeCover | boolean | true | Determina si debe mostrarse la portada. |
| avatarURL | string | null | la url para el perfil de la imagen del avatar |
| socialMediaPosition | string | "right" | puede ser `left` o` right` y determina dónde colocar la barra de redes sociales |
| twitter | string | null | El nombre de usuario de Twitter que se mostrará en el perfil. |
| github | string | null | El nombre de usuario de Github que se mostrará en el perfil. |
| linkedin | string | null | El nombre de usuario de linkedin que se mostrará en el perfil. |
| instagram | string | null | El nombre de usuario de Instagram para ser mostrado en el perfil. |
| name | string | null | El nombre del usuario que se mostrará en el perfil.|
| lastname | string | null | El nombre del usuario que se mostrará en el perfil. |
| role | string | null | El nombre del título del trabajo que se mostrará en el perfil. |
| country | string | null | El país de residencia del usuario que se mostrará en el perfil. |
| city | string | null | La ciudad de residencia del usuario que se mostrará en el perfil.|

## Ejemplo de HTML codificado

Este es un ejemplo de una posible **salida (output)** HTML, debe reemplazar: 
  *name*,           //h1 
  *lastname*,       //h1
  *role*,           //h2
  *city*,           //h3
  *country*,        //h3
  *social networks*,//ul
  *photo*,          //img
  *background*,     //div->img

Con valores reales.

```html
<div class="widget">
  <div class="cover"><img src="https://the_url.com/for_the_background.png" /></div>
  <img src="https://the_url.com/for_the_image.png" class="photo" />
  <h1>Ryan Boylett</h1>
  <h2>Web Developer</h2>
  <h3>Miami, USA</h3>
  <ul class="position-right">
    <li><a href="https://twitter.com/alesanchezr"><i class="fa fa-twitter"></i></a></li>
    <li><a href="https://github.com/alesanchezr"><i class="fa fa-github"></i></a></li>
    <li><a href="https://linkedin.com/alesanchezr"><i class="fa fa-linkedin"></i></a></li>
    <li><a href="https://instagram.com/alesanchezr"><i class="fa fa-instagram"></i></a></li>
  </ul>
</div>
```

## Instalación

1. Clona este repositorio para descargar la plantilla inicial:

`git clone https://github.com/breatheco-de/exercise-conditional-profile-card`

2. Entra en la carpeta del proyecto: 

`cd exercise-conditional-profile-card`

3. Instala los paquetes NPM:
Nota: si está utilizando c9, asegúrese de estar ejecutando la última versión de node: 

`nvm install 8`

`nvm use 8`


`npm install`

4. Construir por primera vez: 

`npm run build`

5.Si estás usando la cloud 9, haga clic con el botón derecho en el archivo `public / index.html` y haga clic en "ejecutar" para iniciar el servidor y obtener el enlace de su sitio web público.

6. Comience a actualizar la función `render` dentro del archivo `index.js`, ese es el único archivo que tiene que hacer de nuevo `npm run build` y actualice la url de su sitio web público.

Nota: cada vez que actualice un archivo, tendrá que volver a compilarlo para actualizar el paquete.
