import "../style/index.css";

function render(variables = {}) {
  // Set default values if variables are not provided
  variables = {
    includeCover:
      variables.includeCover !== undefined ? variables.includeCover : true,
    background:
      variables.background ||
      "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL:
      variables.avatarURL || "https://randomuser.me/api/portraits/women/42.jpg",
    socialMediaPosition: variables.socialMediaPosition || "left",
    twitter: variables.twitter || null,
    github: variables.github || "alesanchezr",
    linkedin: variables.linkedin || null,
    instagram: variables.instagram || null,
    name: variables.name || "Jane",
    lastName: variables.lastName || "Doe",
    role: variables.role || "Software Developer",
    country: variables.country || "USA",
    city: variables.city || "San Francisco"
  };

  // Update the profile cover
  const coverElement = document.querySelector(".cover");
  if (coverElement) {
    coverElement.style.backgroundImage = variables.includeCover
      ? `url(${variables.background})`
      : "none";
  }

  // Update the profile avatar
  const avatarElement = document.querySelector(".profile-avatar");
  if (avatarElement) {
    avatarElement.src = variables.avatarURL;
  }

  // Update the profile name
  const nameElement = document.querySelector(".profile-name");
  if (nameElement) {
    nameElement.innerText = `${variables.name} ${variables.lastName}`;
  }

  // Update the profile role
  const roleElement = document.querySelector(".profile-role");
  if (roleElement) {
    roleElement.innerText = variables.role;
  }

  // Update the profile location
  const locationElement = document.querySelector(".profile-location");
  if (locationElement) {
    locationElement.innerText = `${variables.city}, ${variables.country}`;
  }

  // Update social media links
  const socialMediaElement = document.querySelector(".social-media");
  if (socialMediaElement) {
    socialMediaElement.style.flexDirection =
      variables.socialMediaPosition === "left" ? "row" : "row-reverse";
  }

  const twitterElement = document.querySelector(".twitter");
  if (twitterElement) {
    twitterElement.style.display = variables.twitter ? "block" : "none";
    twitterElement.href = `https://twitter.com/${variables.twitter}`;
  }

  const githubElement = document.querySelector(".github");
  if (githubElement) {
    githubElement.style.display = variables.github ? "block" : "none";
    githubElement.href = `https://github.com/${variables.github}`;
  }

  const linkedinElement = document.querySelector(".linkedin");
  if (linkedinElement) {
    linkedinElement.style.display = variables.linkedin ? "block" : "none";
    linkedinElement.href = `https://linkedin.com/in/${variables.linkedin}`;
  }

  const instagramElement = document.querySelector(".instagram");
  if (instagramElement) {
    instagramElement.style.display = variables.instagram ? "block" : "none";
    instagramElement.href = `https://instagram.com/${variables.instagram}`;
  }
}

window.onload = function() {
  window.variables = {
    includeCover: true,
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    socialMediaPosition: "left",
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
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
