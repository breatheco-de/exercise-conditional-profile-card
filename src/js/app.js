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
  let socialPosition =
    variables.socialMediaPosition === "left" ||
    variables.socialMediaPosition === "right"
      ? variables.socialMediaPosition
      : "right";

  let socialMediaLinks = `
    ${
      variables.twitter
        ? `<li><a href="https://twitter.com/${variables.twitter}"><i class="fab fa-twitter"></i></a></li>`
        : ""
    }
    ${
      variables.github
        ? `<li><a href="https://github.com/${variables.github}"><i class="fab fa-github"></i></a></li>`
        : ""
    }
    ${
      variables.linkedin
        ? `<li><a href="https://linkedin.com/in/${variables.linkedin}"><i class="fab fa-linkedin"></i></a></li>`
        : ""
    }
    ${
      variables.instagram
        ? `<li><a href="https://instagram.com/${variables.instagram}"><i class="fab fa-instagram"></i></a></li>`
        : ""
    }
  `;
  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${
            variables.name && variables.lastName
              ? `${variables.name} ${variables.lastName}`
              : "Nombre no disponible"
          }</h1>
          <h2>${variables.role || "Rol no disponible"}</h2>
          <h3>${
            variables.city && variables.country
              ? `${variables.city}, ${variables.country}`
              : "Ubicacion no disponible"
          }</h3>
          <ul class="position-${variables.socialMediaPosition}">
            ${socialMediaLinks || "No hay redes sociales disponibles"}
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
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL:
      "https://z-p3-scontent.fscl27-1.fna.fbcdn.net/v/t39.30808-6/459954186_10229958902175416_3444878738620715119_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGfWjHo3YLYWW6NLtPVDlUKLXstk17hq6ctey2TXuGrp-3weZJ_lSVAyWU3MoQgYx4&_nc_ohc=8yEqBTRFs_UQ7kNvgF9LSOg&_nc_zt=23&_nc_ht=z-p3-scontent.fscl27-1.fna&_nc_gid=A_rL7_oJtdwogLr2Gv27e_G&oh=00_AYCu7OPi2n7k4ASl_Rf_lt6M5AvVSJqKE0URZS8krH1PuQ&oe=6703E944",
    // social media bar position (left or right)
    socialMediaPosition: "right",
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
