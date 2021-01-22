import "../style/index.scss";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: "alesanchezr",
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name} ${variables.lastname}</h1>
          <h2>${variables.role}</h2>
          <h3>${variables.city}, ${variables.country}</h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a href="https://twitter.com/${variables.twitter}"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/${variables.github}"><i class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${variables.linkedin}"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${variables.instagram}"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background:
      "data:image/jpeg;base64,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",
    // this is the url for the profile avatar
    avatarURL:
      "https://estaticos.muyinteresante.es/uploads/images/pyr/55520750c0ea197b3fd51118/mono-chillon.gif",
    // social media bar position (left or right)
    socialMediaPosition: "position-right",
    // social media usernames
    twitter: "farancibiat",
    github: "farancibiat",
    linkedin: "farancibiat",
    instagram: "farancibiat",
    name: "Atan",
    lastname: "Gana",
    role: "Gritaor",
    country: "República Independiente de Chiloé",
    city: "Castro"
  };
  render(window.variables); //render the card for the first time

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
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
