import "../style/index.css";

/**
 * EDIT ONLY INSIDE THIS RENDER FUNCTION
 * This function is called every time the user changes types or changes any input
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables);

  let cover = variables.includeCover
    ? `<div class="cover"><img src="${variables.background}" alt="Cover Image"/></div>`
    : `<div class="cover"></div>`;

  let socialMediaLinks =
    variables.twitter ||
    variables.github ||
    variables.linkedin ||
    variables.instagram
      ? `
      <ul class="social-media">
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
      </ul>
    `
      : "";

  document.querySelector("#widget_content").innerHTML = `
    <div class="widget">
      ${cover}
      <img src="${variables.avatarURL}" class="photo" alt="Profile Avatar"/>
      <h1>${variables.name || "Your Name"} ${variables.lastName || ""}</h1>
      <h2>${variables.role || "Your Role"}</h2>
      <h3>${variables.city || "Your City"}, ${variables.country ||
    "Your Country"}</h3>
      ${socialMediaLinks}
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
