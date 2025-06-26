import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables);
  `gkjdfgfdg
fsdfldsnfsd
sflsdjfnsddf
sdfslnf`; // Portada: se decide si se muestra la imagen de fondo o no
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover === false) cover = "<div class='cover'></div>";

  // Nombre completo: combinamos el nombre y apellido, o usamos valor predeterminado
  let nombreCompleto = "";
  if (variables.name || variables.lastName) {
    nombreCompleto = `${variables.name || "Lucy"} ${variables.lastName ||
      "Boilett"}`.trim();
  } else {
    nombreCompleto = "Lucy Boilett";
  }

  // Rol (ocupación): si no se provee lo dejamos con un valor por defecto
  let rol = variables.role || "Web Developer";

  // Ubicación: construyendo la cadena a partir de ciudad y país
  let ubicacion = "";
  if (variables.city || variables.country) {
    // Se agregan los valores ingresados, o se dejan vacíos si no están disponibles
    ubicacion = `${variables.city || "Miami"}, ${variables.country || "USA"}`;
  } else {
    ubicacion = "Miami, USA";
  }

  // Redes sociales: se renderizan solo si existe un usuario en alguna
  let redesSociales = `<ul class="${variables.socialMediaPosition ||
    "position-right"}">`;

  redesSociales += `
    <li>
      <a href="https://twitter.com/${variables.twitter ||
        "4geeksacademy"}" target="_blank">
        <i class="fab fa-twitter"></i>
      </a>
    </li>
    <li>
      <a href="https://github.com/${variables.github ||
        "4geeksacademy"}" target="_blank">
        <i class="fab fa-github"></i>
      </a>
    </li>
    <li>
      <a href="https://linkedin.com/${
        variables.linkedin ? "in/" + variables.linkedin : "school/4geeksacademy"
      }" target="_blank">
        <i class="fab fa-linkedin"></i>
      </a>
    </li>
    <li>
      <a href="https://instagram.com/${variables.instagram ||
        "4geeksacademy"}" target="_blank">
        <i class="fab fa-instagram"></i>
      </a>
    </li>
  `;

  redesSociales += `</ul>`;

  // Renderizamos el widget completo, combinando todos los elementos dinámicos
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${nombreCompleto}</h1>
          <h2>${rol}</h2>
          <h3>${ubicacion}</h3>
          ${redesSociales}
        </div>`;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

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
};
