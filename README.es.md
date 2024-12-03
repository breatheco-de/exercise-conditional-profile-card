<!--hide-->
# Tarjeta de Perfil Condicional
<!--endhide-->

**Nota:** Si trabajas localmente, asegúrate de que tienes node.js instalado en tu computadora escribiendo en tu terminal:

```bash
$ node -v
```

<onlyfor saas="false" withBanner="false">

## 🌱 Cómo comenzar este proyecto

Este proyecto viene con los archivos necesarios para comenzar a trabajar de inmediato.

Recomendamos abrir este mismo repositorio usando un entorno de desarrollo como [Codespaces](https://4geeks.com/es/lesson/tutorial-de-github-codespaces) (recomendado) o [Gitpod](https://4geeks.com/es/lesson/como-utilizar-gitpod). Alternativamente, puedes clonarlo en tu computadora local usando el comando `git clone`.

Este es el repositorio que necesitas abrir:

```text
https://github.com/breatheco-de/exercise-conditional-profile-card.git
```

**👉 Por favor sigue estos pasos sobre** [cómo comenzar un proyecto de programación](https://4geeks.com/es/lesson/como-comenzar-un-proyecto-de-codificacion).

Para ver el resultado en el navegador, deberás iniciar el proyecto ejecutando el siguiente comando en tu terminal:
```bash
$ npm run start
```

> 💡 Importante: Recuerda guardar y cargar tu código en GitHub creando un nuevo repositorio, actualizando el remoto (`git remote set-url origin <your new url>`) y cargando el código en su nuevo repositorio usando los comandos `add`, `commit` y `push` desde el terminal git.

</onlyfor>

## Un poco de Contexto

Como desarrollador web, estarás creando muchos HTML dinámicos y CSS usando algoritmos de JavaScript.

En este ejercicio, debes crear el código HTML necesario para renderizar una tarjeta de perfil en función de una serie de variables que pueden cambiar. Aquí hay un ejemplo:

![Tarjeta de perfil condicional](https://github.com/breatheco-de/exercise-conditional-profile-card/raw/master/preview.gif?raw=true)

Dentro de `src/app.js` hay una función llamada `render` que recibe un objeto `variables` y contiene la lógica para crear la mayoría del código HTML de nuestro sitio web.

```js
function render(variables = {}) {
  document.querySelector("#widget_content").innerHTML = `<div>Website code</div>`;
}
```

Puedes ver las `variables` que están siendo generadas escribiendo en la consola:

```js
console.log(window.variables);
/*
{
    includeCover: true, // if includeCover is true the algorithm should show the cover image
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
    socialMediaPosition: "left", // social media bar position (left or right)
    
    twitter: null, // social media usernames
    github: "alesanchezr",
    linkedin: null,
    instagram: null,

    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
}
*/
```

## 📝 Instrucciones

Revisa este video con las instrucciones para que entiendas mejor el ejercicio: https://youtu.be/gaVm8eyCqlM

1. Lee y comprende la función `render` y el valor de la variable `variables` que recibe.

2. Cambia el contenido de la función `render` para que renderice todos los valores que llegan a través de `variables` en la tarjeta de perfil.

## 💡 Atención!

**No** necesitas añadir ningún *event listener* a los elementos que ya están construidos en el proyecto. Esto ya está siendo realizado por esta parte del código:

```javascript
document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
```

Entonces cuando el contenido de los elementos "cambia" se va a actualizar de una vez la variable para cada elemento. Todo lo que necesitas hacer es actualizar el contenido HTML dentro de la función `render`, como se mencionó en la instrucción 1.

## Valores de variables iniciales

| Nombre | Tipo | Valor por Defecto | Descripción |
| --- | --- | --- | --- |
| background | string | null | La url de la imagen que se utilizará como fondo para la portada del perfil |
| includeCover | boolean | true | Determina si debe mostrarse la portada o no |
| avatarURL | string | null | La url para el avatar del perfil |
| socialMediaPosition | string | "right" | puede ser `left` o` right` y determina dónde colocar la barra de redes sociales |
| twitter | string | null | El nombre de usuario de Twitter que se mostrará en el perfil |
| github | string | null | El nombre de usuario de Github que se mostrará en el perfil |
| linkedin | string | null | El nombre de usuario de Linkedin que se mostrará en el perfil |
| instagram | string | null | El nombre de usuario de Instagram para ser mostrado en el perfil |
| name | string | null | El nombre del usuario que se mostrará en el perfil |
| lastName | string | null | El nombre del usuario que se mostrará en el perfil |
| role | string | null | El nombre del título del trabajo que se mostrará en el perfil |
| country | string | null | El país de residencia del usuario que se mostrará en el perfil |
| city | string | null | La ciudad de residencia del usuario que se mostrará en el perfil |

## HTML programado manualmente

Este es un ejemplo de una posible salida HTML, vas a tener que remplazar el nombre, apellido, etc. Con los valores que puedan tener estas variables.

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

Este y otros proyectos son usados para [aprender a programar](https://4geeksacademy.com/es/aprender-a-programar/aprender-a-programar-desde-cero) por parte de los alumnos de 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) realizado por [Alejandro Sánchez](https://twitter.com/alesanchezr) y muchos otros contribuyentes. Conoce más sobre nuestros [Cursos de Programación](https://4geeksacademy.com/es/curso-de-programacion-desde-cero?lang=es) para convertirte en [Full Stack Developer](https://4geeksacademy.com/es/coding-bootcamps/desarrollador-full-stack/?lang=es), o nuestro [Data Science Bootcamp](https://4geeksacademy.com/es/coding-bootcamps/curso-datascience-machine-learning).
