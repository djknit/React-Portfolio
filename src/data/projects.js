import React from 'react';
import technologies from './technologies';

const projects = [
  {
    name: 'Book Search',
    description:
      <>
        This app uses the Google Books API to allow users to search for books. Information and
        links for the books are displayed together. Users may save book information to the database.
        Books can be saved to the public list which is shared among all users or to the user's
        private list. Authentication is managed using the Passport.js Local Strategy. Passwords are
        hashed before being saved to the database. Authentication is verified each time a user attempts
        to access their data. A password reset link is generated upon a user's request and sent to the
        email address associate with the user's account.
      </>,
    role: 1,  // the number '1' here signifies that I am the sole developer
    notes: [
      <>
        Many of the features of this app can used without an account. If you wish to create an account,
        you can do so with only a username and password. For these reasons, there is no guest account
        for this app.
      </>
    ],
    image: 'assets/images/book_search.png',
    tech: {
      front: [
        technologies.react,
        technologies.bulma,
        technologies.node,
        technologies.axios,
        technologies.moment
      ],
      back: [
        technologies.node,
        technologies.express,
        technologies.passport,
        technologies.mongo,
        technologies.mongoose,
        technologies.nodemailer,
        technologies.bcrypt,
        technologies.axios
      ],
      api: [
        technologies.googleBooksApi
      ]
    },
    links: {
      repo: 'https://github.com/djknit/google-books-search',
      deployed: 'https://daves-book-search.herokuapp.com/',
    }
  },
  {
    name: 'Cerebellum',
    description: <>
      A social network dedicated to the sharing and building of knowledge. Users can post ideas and
      article links, search for other users, and save posts to their personal Knowledge Base.
      Standard social media features such as commenting on posts, editing and deleting posts, and
      creating a profile with a profile picture are available.
    </>,
    role: <>
      Part of a four person team. I was responsible for user authentication with Passport, Express.js
      server setup, MongoDB setup, database models and controllers, API routes, and mobile responsiveness.
      I was also responsible for integrating Nodemailer, Vue Croppa, and the Meetup API into the project.
    </>,
    notes: [
      <>
        The "Deployed Page" link below will automatically log you in to the guest account.
        <br />If you wish to create your own account, use&nbsp;
        <a href="https://cerebellum-network.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          this link
        </a>.
      </>
    ],
    image: 'assets/images/cerebellum.png',
    tech: {
      front: [
        technologies.vue,
        technologies.bootstrap,
        technologies.node,
        technologies.axios,
        technologies.veeValidate,
        technologies.vueCroppa
      ],
      back: [
        technologies.passport,
        technologies.node,
        technologies.express,
        technologies.mongo,
        technologies.mongoose,
        technologies.axios,
        technologies.nodemailer
      ],
      api: [
        technologies.meetupApi,
        technologies.linkPreviewApi
      ]
    },
    links: {
      repo: 'https://github.com/huntertrammell/Dev-Social-Network',
      deployed: 'https://cerebellum-network.herokuapp.com/guest-login'
    }
  },
  {
    name: 'Expense',
    description:
      <>
        A finance tracker built with Vue.js. The user must create an account. After creating their
        account and with every login they are routed to their dashboard where they can view and
        update their expenses and budgets. The dashboard consists of 4 elements: Receipt Que, Budgets,
        Transactions, and Upcoming bills. The user will keep the dashboard information up to date by
        manually adding in all of their new expenses.
      </>,
    role: 1,  // the number '1' here signifies that I am the sole developer
    notes: [
      <>
        The "Deployed Page" link below will automatically log you in to the guest account.
        <br />If you wish to create your own account, use&nbsp;
        <a href="https://quiet-spire-74175.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          this link
        </a>.
      </>
    ],
    image: 'assets/images/expense.png',
    tech: {
      front: [
        technologies.vue,
        technologies.bootstrap,
        technologies.jQuery
      ],
      back: [
        technologies.passport,
        technologies.node,
        technologies.express,
        technologies.mySql,
        technologies.sequelize
      ]
    },
    links: {
      repo: 'https://github.com/djknit/Expense',
      deployed: 'https://quiet-spire-74175.herokuapp.com/guest-login',
    }
  },
  {
    name: 'NPR News Scraper',
    description:
      <>
        When the user presses the scrape button, the app scrapes the
        <a href="https://www.npr.org/sections/news" target="_blank" rel="noopener noreferrer">
          NPR news site
        </a> for article headlines, pictures, links, and summaries. If there are already
        articles in the database, the new article headlines are compared against the ones in
        the database to prevent duplicates and up to 8 new articles are saved in the database.
        The article information is displayed along with a link to the article and a comment
        section. The comment section is contained in a modal. The comments for the chosen
        article are retrieved from the database when the modal is opened.
      </>,
    role: 1,
    image: 'assets/images/news_scraper.png',
    tech: {
      front: [
        technologies.handlebars,
        technologies.bootstrap,
        technologies.jQuery
      ],
      back: [
        technologies.node,
        technologies.express,
        technologies.mongo,
        technologies.mongoose,
        technologies.axios,
        technologies.cheerio
      ]
    },
    links: {
      repo: 'https://github.com/djknit/news-scraper',
      deployed: 'https://daves-news-scraper.herokuapp.com/',
    }
  },
  {
    name: 'Eat-da-Burger',
    description:
      <>
        Eat-da-Burger is a simple looking application with a little more going on behind the
        scenes. This is the first complete app that I built using the model-view-controller file
        structure. The user may enter the name of a burger they would like to eat. The burger
        appears on the left side of the page with a button labeled "Devour!" The user may add as
        many burgers as they would like. When the "Devour!" button is pressed, the burger moves
        to the right side of the page to show that it has been devoured. All data is stored in a
        MySQL database. This app uses three of the four CRUD methods (create, read, and update).
      </>,
    role: 1,
    image: 'assets/images/burger.png',
    tech: {
      front: [
        technologies.handlebars,
        technologies.jQuery
      ],
      back: [
        technologies.node,
        technologies.express,
        technologies.mySql
      ]
    },
    links: {
      repo: 'https://github.com/djknit/burger',
      deployed: 'https://devourdaburger.herokuapp.com/',
    }
  },
  {
    name: 'Friend Finder',
    description:
      <>
        Friend Finder is a survey based matchmaker app powered by an Express server. The input
        form accepts the user's name, a link to a picture, and their answers to 10 survey questions
        (with answers being agree/disagree on a scale of 1-5). The input is validated on the front
        end to ensure that all the questions were answered before being posted to the server with
        jQuery's Ajax method. On the server side, the new user's answers are compared to the answers
        of all existing users to find the existing user(s) whose answers most closely match the new
        user's answers. The new user is added to the users array and their match is returned by
        the server. The front end then display's the match.
      </>,
    role: 1,
    image: 'assets/images/friend_finder.png',
    tech: {
      front: [
        technologies.bootstrap,
        technologies.jQuery
      ],
      back: [
        technologies.node,
        technologies.express
      ]
    },
    links: {
      repo: 'https://github.com/djknit/Friend-Finder/',
      deployed: 'https://people-matcher.herokuapp.com/'
    }
  },
  {
    name: 'LIRI',
    description:
      <>
        LIRI, the Language Interpretation and Recognition Interface, is a command-line-interface
        (CLI) app built with Node.js. LIRI accepts four commands. The "concert-this" command
        searches the Bandsintown API for upcoming performances by the artist provided by the user.
        The "spotify-this-song" command queries the Spotify API for information about the
        user-specified song. The "movie-this" command searches the OMDB API for information about
        the user-specified movie. Results are printed in the console and also recorded in a '.txt' file.
      </>,
    role: 1,
    image: 'assets/images/liri.png',
    tech: {
      general: [
        technologies.node,
        technologies.request,
        technologies.moment,
        technologies.dotenv
      ]
    },
    links: {
      repo: 'https://github.com/djknit/liri-node-app',
      video: 'https://www.youtube.com/watch?v=GGi05Dj_tzY'
    }
  },
  {
    name: 'Food Fight RPG',
    description:
      <>
        Food Fight is an RPG game written with HTML, CSS, and Javascript. The jQuery Javascript library
        is used for DOM interaction. The player begins the game by selecting a character to play as.
        They must then battle their enemies one at a time. The player wins when they have defeated all
        the enemies and loses if their character is defeated. The player's character deals more damage
        with each attack, but the opponents' counter attack scores are not increased. The game can be
        both won and lost when playing as any given character.
      </>,
    role: 1,
    image: 'assets/images/rpg.png',
    tech: {
      general: [
        technologies.jQuery
      ]
    },
    links: {
      repo: 'https://github.com/djknit/Food-Fight',
      deployed: 'https://djknit.github.io/Food-Fight'
    }
  }
];

export default projects;