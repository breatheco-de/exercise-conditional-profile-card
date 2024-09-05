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
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  /*-----Twitter------*/
  let twitter = "";
  if (!variables.twitter) twitter += "https://twitter.com/4geeksacademy";
  else twitter += variables.twitter;
  /*-----Github------*/
  let github = "";
  if (!variables.github) github += "https://github.com/Andres-Arreaza";
  else github += variables.github;
  /*-----Github------*/
  let linkedin = "";
  if (!variables.linkedin)
    linkedin += "https://www.linkedin.com/in/andres-arreaza-1a6235252/";
  else linkedin += variables.linkedin;
  /*-----Instagram------*/
  let instagram = "";
  if (!variables.instagram)
    instagram += "https://www.instagram.com/andress_arreaza/";
  else instagram += variables.instagram;
  /*-----FullName------*/
  let fullName = "";
  if (!variables.name) fullName += "Your Name";
  else fullName += variables.name + " ";
  if (!variables.lastName) fullName += " Your last Name";
  else fullName += variables.lastName;
  /*-----ROL------*/
  let roleFinal = "";
  if (!variables.role) roleFinal += "Web Developer";
  else roleFinal += variables.role;
  /*-----City------*/
  let cityFinal = "";
  if (!variables.city) cityFinal += "Miami";
  else cityFinal += variables.role;
  /*-----country------*/
  let countryFinal = "";
  if (!variables.city) countryFinal += "USA";
  else countryFinal += variables.role;

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${fullName}</h1>
          <h2>${roleFinal}</h2>
          <h3>${cityFinal}, ${countryFinal}</h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a href="${twitter}"><i class="fab fa-twitter"></i></a></li>
            <li><a href="${github}"><i class="fab fa-github "></i></a></li>
            <li><a href="${linkedin}"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="${instagram}"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background:
      "https://img.freepik.com/foto-gratis/fondo-azul-degradado-lujo-abstracto-azul-oscuro-liso-banner-estudio-vineta-negra_1258-54587.jpg?t=st=1725499909~exp=1725503509~hmac=39cf63310e37e56f69ad962f458afa9ff4223c183479ea9354ecd428043e1116&w=740",
    // this is the url for the profile avatar
    avatarURL: "https://avatars.githubusercontent.com/u/112995166?v=4",
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
