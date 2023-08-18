import "../style/index.css";

function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // Build the social media icons only if usernames are provided
  let socialMediaIcons = "";
  if (
    variables.twitter ||
    variables.github ||
    variables.linkedin ||
    variables.instagram
  ) {
    socialMediaIcons = `
      <ul class=${variables.socialMediaPosition}>
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
            ? `<li><a href="https://linkedin.com/${variables.linkedin}"><i class="fab fa-linkedin"></i></a></li>`
            : ""
        }
        ${
          variables.instagram
            ? `<li><a href="https://instagram.com/${variables.instagram}"><i class="fab fa-instagram"></i></a></li>`
            : ""
        }
      </ul>`;
  }

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
    ${cover}
    <img src="${variables.avatarURL}" class="photo" />
    <h1>${variables.name} ${variables.lastname}</h1>
    <h2>${variables.role}</h2>
    <h3>${variables.city}, ${variables.country}</h3>
    ${socialMediaIcons}
  </div>`;
}

window.onload = function() {
  window.variables = {
    includeCover: true,
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    socialMediaPosition: "position-left",
    twitter: "",
    github: "",
    linkedin: "",
    instagram: "",
    name: "",
    lastname: "",
    role: "",
    country: "",
    city: ""
  };
  render(window.variables); // render the card for the first time

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
