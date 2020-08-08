# The Person Finder

Hi Tyler! I had fun implementing this challenge. There's a lot more features I'd love to play around with if I had more time, but here's some documentation below on what I have so far.

## Live Link
https://katelyn-air-challenge.netlify.app/

## Instructions

To open locally, clone this repo and then run:

`npm install`

`npm start`

## Process

I took a chunk of time at the start of this challenge to read over all the directions, consider the assets given, and map out my file structure. I decided to keep both components and style files in a components folder for sake of time and quick navigation (as well as immediate visibility). 

I decided to use Hooks for state management rather than a class component for readability and simplicity. 

I deployed to Netlify early on to insure there weren't last minute issues - I chose Netlify this time for ease of deployment as I pushed up changes. 

I typically use branching whenever programming, but decided to work directly in master for time - I made sure to commit and push whenever I completed a portion that I didn't want to lose.

I primarily used flexbox for styling.

## Choices

Made the Air logo a link to the site (opens in a new tab)

I initially used autofocus for the search bar, but read in the success criteria for accessibility that it can be disorienting for vision-impaired users and can also be problematic for users with motor control disabilities.

I thought about adding some animations but didn't want to impact site performance unnecessarily and also thought some could have similar impact to autofocus as described above.

I made the Person component a Lazy component while the data loads. I decided to do this for the individual Person component rather than the PersonList so that the user would be able to anticipate the list format that would appear on the page, rather than some amorphous mystery data.

## Features to add

With more time, I'd like to focus on some of the items in the check list I didn't have time to fully research and implement. I haven't worked with Typescript (though it's high on my list to learn!) so I decided not to invest the time to learn that during this challenge - I would want to dig into the docs and understand best practices before attempting to implement it on my own.

I would also add testing and try to further enhance the performance of the site.

There's always more to polish and tweak!

## Thank you!