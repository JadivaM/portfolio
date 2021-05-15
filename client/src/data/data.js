import secondappinion from '../dataImages/second-appinion/second-appinion-1.png';
import gitsearch from '../dataImages/gitsearch/gitsearch-1.png';
import handmade from '../dataImages/handmade-studio/handmade-1.png';
import turntable from '../dataImages/turntable-gigs/turntable-1.png';
import webscraper from '../dataImages/webscraper/webscraper-img.png';

const Projects =
[
    // {
    //     "id": "1",
    //     "name": "Hangry Recipes",
    //     "desc":"Recipes",
    //     "photo": "./1.png",
    //     "info": "Hangry Recipes is a React project that allows users to search for recipes while interacting with The Meal DB API. Once they search for their desired category they are able to click into the specific recipe and view a photo along with the recipe. A user is also able to receive and view a random recipe if they are indecisive and unable to decide whay they would like by clicking on the 'Choose for me' button.",
    //     "location": "Miami, FL"
    // },
    // {
    //     "id": "2",
    //     "name": "GitSearch",
    //     "desc": "Github",
    //     "photo": gitsearch,
    //     "info": "MERN stack site interacting with the Github API that allows users to create an account, log in, and save github users to their profile. A user is able to search for users on Github on the site and once they find the desired Github and click on save, they will also begin following the user on Github. The project is equipped with SendGrid for password reset and Sweet Alert for alerts once a user confirming when a user is saved or deleted.",
    //     "location": "Miami, FL",
    //     "link": "https://gitsearch-jadiva.herokuapp.com/welcome"
    // },
    {
        "id": "3",
        "name": "Second Appinion",
        "desc": "Dentistry",
        "photo": secondappinion,
        "info": "Collaborated with a team of UX/UI designers working in 2 week sprints for 3 months to create a MERN stack website for a client who wanted patients to be able to get a second opinion from a dentist online. I worked on designing the form to be viewed through mobile devices and creating the multi-page form to be saved to a MongoDB database and sending a confirmation email to the user on submit using the SendGrid API.",
        "location": "Miami, FL",
        "link": "https://second-appinion.herokuapp.com/"
    },
    // {
    //     "id": "4",
    //     "name": "Turntable Gigs",
    //     "desc": "Social Media",
    //     "photo": turntable,
    //     "info": "MERN stack application that connects DJs and venues in one place. It allows DJs to view available gigs, apply for the local gigs, view venue profiles, upload music, and upload images and videos. It allows venues to view local DJs, listen to the DJs music, and upload images and videos.",
    //     "location": "Miami, FL"
    // },
    // {
    //     "id": "5",
    //     "name": "Handmade Studio",
    //     "desc": "Ecommerce",
    //     "photo": handmade,
    //     "info": "Handmade Studio is a React site that interacts with the Commerce.js API. It allows users to search for items, add them to cart, edit the items in their cart, and complete the purchase of their desired items. Once they checkout, both parties (customer and shop owner) will receive an email confirming the transaction with the necessary information.",
    //     "location": "Miami, FL"
    // },
    {
        "id": "6",
        "name": "Hacker News Web Scraper",
        "desc": "Social Media",
        "photo": "",
        "info": "Web scraper app using Puppeteer and React that retrieves information from the Hacker News website. It filters and retrieves only articles that have upvotes higher than 100 so that users only get the highest rated articles. Users are able to view the title of the article, number of votes, and can click on the link to access the article.",
        "location": "Miami, FL",
        "link": "https://webscraper-jadiva.herokuapp.com/"
    }
]

export default Projects;