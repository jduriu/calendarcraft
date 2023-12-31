
<a name="readme-top"></a>

## Welcome to CalendarCraft
A modern, minimalist calendar app. No frills, just dates.


<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#welcome-to-calendarcraft">Welcome to CalendarCraft</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## Built With
- [![React][React.js]][React-url]
- [![Next][Next.js]][Next-url]
- [![Tailwind][Tailwind]][Tailwind-url]

<div align="right">(<a href="#readme-top">back to top</a>)</div>

## Getting Started

### Prerequisites
* node.js 16.14 or later

* npm
    ```sh
    npm install npm@latest
    ```

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/jduriu/calendarcraft
    ```
2. Navigate to the root folder of the cloned application
    ```sh
    cd calendarcraft
    ```
3. Install NPM packages
    ```sh
    npm install
    ```
4. Run the project in development mode
    ```
    npm run dev
    ```
5. Open a browser of your choice and navigate to
  http://localhost:3000/

<div align="right">(<a href="#readme-top">back to top</a>)</div>

## Usage
Click on a date bubble to change the selected date!

Other ways to navigate:
- The month and year will change depending on which date is selected. You can also cycle through the months via the arrows at the top of the date grid.
- If you enter a date in the search bar and press the magnifying glass it will jump you to the calendar date.

There might even be a hidden feature if you land on the right date!

## Roadmap

Design Decisions:
- I chose to use arrays to house the date data. By starting with the current date, I was able to manipulate the javascript data object in order to get lists of the current months days as well as the previous and next months to ensure a full grid of date bubbles
- I think I would have chosen a different data structure if this was coming from a backend api. My concern is that currently the dates are linked to their date number which is often repeated because of the multi-month dates in the grid. I think linking them to something like a uuid attribute would eliminate that condition.

Additional Notes:
- I think if I had additional time I would probably try and refactor my tailwind classes and set them to their own variables. I noticed after a while they were becoming repetitive across components.
- I tried to abstract as much of the functions as possible and send them as props to child components to reduce copied code. I still think there is room for improvement. I may look into refactoring this in the future.


See the [open issues](https://github.com/jduriu/clubsport-calendar/issues) for a full list of proposed features (and known issues).

<div align="right">(<a href="#readme-top">back to top</a>)</div>



## Contact

Jon Uriu - [Linkedin](https://www.linkedin.com/in/jonathan-uriu/) - [Gitlab](https://gitlab.com/jduriu)


<div align="right">(<a href="#readme-top">back to top</a>)</div>


## Acknowledgments

* [Img Shields](https://shields.io)
* [React Feather Icons](https://www.npmjs.com/package/react-feather)
* [icanhazdadjoke](https://icanhazdadjoke.com/api)


<div align="right">(<a href="#readme-top">back to top</a>)</div>

<!-- MARKDOWN LINKS & IMAGES -->
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwind-url]: https://tailwindcss.com/
[Tailwind]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
