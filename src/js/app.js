import "../style/index.css";

function render(variables = {}) {
  console.log("These are the current variables: ", variables);

  // COVER
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // NOMBRE Y APELLIDO
  let name = variables.name == null ? "Name" : variables.name;
  let lastName = variables.lastName == null ? "Last Name" : variables.lastName;

  // ROLE, CITY, COUNTRY
  let role = variables.role == null ? "Web Developer" : variables.role;
  let city = variables.city == null ? "City" : variables.city;
  let country = variables.country == null ? "Country" : variables.country;

  // REDES SOCIALES
  let twitterUser =
    variables.twitter == null ? "4geeksacademy" : variables.twitter;
  let githubUser =
    variables.github == null ? "4geeksacademy" : variables.github;
  let linkedinUser =
    variables.linkedin == null ? "4geeksacademy" : variables.linkedin;
  let instagramUser =
    variables.instagram == null ? "4geeksacademy" : variables.instagram;

  // POSICIÓN REDES
  let socialPosition =
    variables.socialMediaPosition == "position-left"
      ? "position-left"
      : "position-right";

  // GENERAR EL HTML
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
            <img src="${variables.avatarURL}" class="photo" />
            <h1>${name} ${lastName}</h1>
            <h2>${role}</h2>
            <h3>${city}, ${country}</h3>
            <ul class="${socialPosition}">
                <li><a href="https://twitter.com/${twitterUser}"><i class="fab fa-twitter"></i></a></li>
                <li><a href="https://github.com/${githubUser}"><i class="fab fa-github"></i></a></li>
                <li><a href="https://linkedin.com/in/${linkedinUser}"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="https://instagram.com/${instagramUser}"><i class="fab fa-instagram"></i></a></li>
            </ul>
        </div>
    `;
}

window.onload = function() {
  window.variables = {
    includeCover: true,
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    socialMediaPosition: "position-left",
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
  render(window.variables);

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
