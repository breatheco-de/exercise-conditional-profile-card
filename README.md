# Conditional Profile Card

As a web developer, you will be creatings lots and lots of dynamic HTML using Javascript based algorithms.

In this exercise you have to create the HTML code needed to render a profile card based on a series of variables that could change in value during runtime. Here is an example of the profile card:

![Conditional Profile Card](https://raw.githubusercontent.com/breatheco-de/exercise-conditional-profile-card/master/preview.gif)

## Initial Variable Values

| Name | Type | Default Value | Description |
| --- | --- | --- | --- |
| includeCover | boolean | true | it determins if the cover shoud be visible with an image or not |
| background | string | null | the url of the image that will used as background for the profile cover |
| avatarURL | string | null | the url for the profile avatar |
| socialMediaPosition | string | "right" | it can be `left` or `right` and it determines where to place the social media bar |
| twitter | string | null | the twitter username to be displayed on the profile |
| github | string | null | the github username to be displayed on the profile |
| linkedin | string | null | the linkedin username to be displayed on the profile |
| instagram | string | null | the instagram username to be displayed on the profile |
| name | string | null | The name of the user to be displayed on the profile |
| lastname | string | null | The name of the user to be displayed on the profile |
| role | string | null | The name of the user to be displayed on the profile |
| country | string | null | The name of the user to be displayed on the profile |
| city | string | null | the twitter username to be displayed on the profile |

## Hard-Coded HTML

This is an example of a possible HTML output, you will have to replace the name, lastname, etc. With the values that these variables may have.
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
## Installation

1. Clone this repository.
2. Install the NPM packages: `npm install`
3. Buid for the first time: `npm run build`
4. Start updating the `render` function inside the `index.js` file, that is the only file and function you have to update.

Note: every time you update any file you will have to build again in order to update the bundle.
