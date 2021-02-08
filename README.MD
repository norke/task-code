# EPAM code task for Miguel López

## Description

* Task: Create infinite scrolling (lazy loading) of images in a page - deferred fetching of images until the user scrolls near the end of the list.
* Languages/frameworks: JavaScript Vanilla (no frameworks), HTML, CSS
* Expected output: a folder containing corresponding files (HTML, CSS, JS, ...) & a README with the instructions to run the application.
* Additional comments: take into account best practices and style guides.
* Deadline: Monday, February 8th.

## Run the task demo

Just open the file infinite_scroll.html or if you prefer check the code running at https://jsfiddle.net/miguelLopez/aLzbmvjw/

## Consideration

* ES6
* AirBnB style guide
* DOM Recycling was not considered

* I tried to get the simplest way to achieve the goal, however, IntersectionObserver has a different behavior between Chrome and Firefox. This has forced me to relay on MutationObserver that cost me 7 lines and a little bit of performance.
