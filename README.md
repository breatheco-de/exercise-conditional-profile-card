# Conditional Profile Card

As a web developer, you will be creatings lots and lots of dynamic HTML using Javascript based algorithms.

In this exercise you have to create the HTML code needed to render a profile card based on a series of variables that could change in value over time. Here is an example of the profile card:

![Conditional Profile Card](aasd)

```
  // if includeCover is true the algorithm should
  includeCover: true,
  // this is the url of the image that will used as background for the profile cover
  background:
    "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
  // this is the url for the profile avatar
  avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
  // social media bar position (left or right)
  socialMediaPosition: "left",
  // social media usernames
  twitter: null,
  github: "alesanchezr",
  linkedin: null,
  instagram: null,

  name: null,
  lastname: null,
  role: null,

  country: null,
  city: null
```

## Installation

1. Clone the repository
2. Install NPM packages: `npm install`
3. Buid for the first time: `npm run build`

Note: every time you update any file you will have to build again in order to update the bundle.