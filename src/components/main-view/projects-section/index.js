import React from 'react';
import './style.css'
import ProjectCard from './project-card';
import projects from '../../../data/projects';

function projectsSection() {
  return (
    <section id="projects">
      <div id="projects-main">
        <h2>Projects</h2>
        <div class="cards container">
          <div class="row">
            <ProjectCard
              name="Book Search"
              description=""
              myRole=""
              techUsed=""
              links={{}}
            />
            <div class="col-xl-6">
              <div class="project card">
                <div class="card-header"><h3>Book Search</h3></div>
                <div class="card-body">
                  <img src="assets/images/book_search.png" alt="Book Search screenshot" />
                </div>
                <div class="card-body">
                  This app uses the Google Books API to allow users to search for books. Information and links for the books are displayed together. Users may save book information to the database. Books can be saved to the public list which is shared among all users or to the user's private list. Authentication is managed using the Passport.js Local Strategy. Passwords are hashed before being saved to the database. Authentication is verified each time a user attempts to access their data. A password reset link is generated upon a user's request and sent to the email address associate with the user's account.
                </div>
                <div class="card-body">
                  <h6>My Role</h6>
                  Sole Developer
                </div>
                <div class="card-body">
                  <h6>Technologies Used</h6>
                  <div class="row">
                    <div class="col-6">
                      <label>Front End</label>
                      <ul>
                        <li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                          React</a></li>
                        <li><a href="https://bulma.io/" target="_blank" rel="noopener noreferrer">
                          Bulma</a></li>
                        <li><a href="https://nodejs.org/en/about/" target="_blank" rel="noopener noreferrer">
                          Node</a></li>
                        <li><a href="https://www.npmjs.com/package/axios/" target="_blank" rel="noopener noreferrer">
                          Axios</a></li>
                        <li><a href="http://momentjs.com/" target="_blank" rel="noopener noreferrer">
                          Moment</a></li>
                      </ul>
                      <br />
                      <label>Public APIs</label>
                      <ul class="apis">
                        <li><a href="https://developers.google.com/books/" target="_blank" rel="noopener noreferrer">
                          Google Books API</a></li>
                      </ul>
                    </div>
                    <div class="col-6">
                      <label>Back End</label>
                      <ul>
                        <li><a href="https://nodejs.org/en/about/" target="_blank" rel="noopener noreferrer">
                          Node</a></li>
                        <li><a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                          Express</a></li>
                        <li><a href="http://www.passportjs.org/" target="_blank" rel="noopener noreferrer">
                          Passport</a></li>
                        <li><a href="https://www.mongodb.com/what-is-mongodb/" target="_blank" rel="noopener noreferrer">
                          MongoDB</a></li>
                        <li><a href="https://mongoosejs.com/" target="_blank" rel="noopener noreferrer">
                          Mongoose</a></li>
                        <li><a href="https://nodemailer.com/about/" target="_blank" rel="noopener noreferrer">
                          Nodemailer</a></li>
                        <li><a href="https://www.npmjs.com/package/bcrypt/" target="_blank" rel="noopener noreferrer">
                          Bcrypt</a></li>
                        <li><a href="https://www.npmjs.com/package/axios/" target="_blank" rel="noopener noreferrer">
                          Axios</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <h6>Note</h6>
                  Many of the features of this app can used without an account. If you wish to create an account, you can do so with only a username and password. For these reasons, there is no guest account for this app.
                </div>
                <div class="card-footer">
                  <div class="btn-group" role="group" aria-label="links">
                    <a href="https://github.com/djknit/google-books-search/" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      <span>Repository</span>
                    </a>
                    <a href="https://daves-book-search.herokuapp.com/" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      <span>Deployed<br />Page</span>
                    </a>
                    <a href="./assets/documents/book-search.html" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      <span>Readme</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="project card">
                <div class="card-header"><h3>Cerebellum</h3></div>
                <div class="card-body">
                  <img src="assets/images/cerebellum.png" alt="Cerebellum screenshot" />
                </div>
                <div class="card-body">
                  A social network dedicated to the sharing and building of knowledge. Users can post ideas and article links, search for other users, and save posts to their personal Knowledge Base. Standard social media features such as commenting on posts, editing and deleting posts, and creating a profile with a profile picture are available.
                </div>
                <div class="card-body">
                  <h6>My Role</h6>
                  Part of a four person team. I was responsible for user authentication with Passport, Express.js server setup, MongoDB setup, database models and controllers, API routes, and mobile responsiveness. I was also responsible for integrating Nodemailer, Vue Croppa, and the Meetup API into the project.
                </div>
                <div class="card-body">
                  <h6>Technologies Used</h6>
                  <div class="row">
                    <div class="col-6">
                      <label>Front End</label>
                      <ul>
                        <li><a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
                          Vue</a></li>
                        <li><a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                          Bootstrap</a></li>
                        <li><a href="https://nodejs.org/en/about/" target="_blank" rel="noopener noreferrer">
                          Node</a></li>
                        <li><a href="https://www.npmjs.com/package/axios/" target="_blank" rel="noopener noreferrer">
                          Axios</a></li>
                        <li><a href="https://baianat.github.io/vee-validate/" target="_blank" rel="noopener noreferrer">
                          VeeValidate</a></li>
                        <li><a href="https://zhanziyang.github.io/vue-croppa/#/" target="_blank" rel="noopener noreferrer">
                          Vue Croppa</a></li>
                      </ul>
                      <br />
                      <label>Public APIs</label>
                      <ul class="apis">
                        <li><a href="https://www.meetup.com/meetup_api/" target="_blank" rel="noopener noreferrer">
                          Meetup API</a></li>
                        <li><a href="https://www.linkpreview.net/" target="_blank" rel="noopener noreferrer">
                          LinkPreview API</a></li>
                      </ul>
                    </div>
                    <div class="col-6">
                      <label>Back End</label>
                      <ul>
                        <li><a href="http://www.passportjs.org/" target="_blank" rel="noopener noreferrer">
                          Passport</a></li>
                        <li><a href="https://nodejs.org/en/about/" target="_blank" rel="noopener noreferrer">
                          Node</a></li>
                        <li><a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                          Express</a></li>
                        <li><a href="https://www.mongodb.com/what-is-mongodb/" target="_blank" rel="noopener noreferrer">
                          MongoDB</a></li>
                        <li><a href="https://mongoosejs.com/" target="_blank" rel="noopener noreferrer">
                          Mongoose</a></li>
                        <li><a href="https://www.npmjs.com/package/axios/" target="_blank" rel="noopener noreferrer">
                          Axios</a></li>
                        <li><a href="https://nodemailer.com/about/" target="_blank" rel="noopener noreferrer">
                          Nodemailer</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <h6>Note</h6>
                  The "Deployed Page" link below will automatically log you in to the guest account.
                  <br />
                  If you wish to create your own account, use <a href="https://cerebellum-network.herokuapp.com/" target="_blank" rel="noopener noreferrer">this link</a>.
                </div>
                <div class="card-footer">
                  <div class="btn-group" role="group" aria-label="links">
                    <a href="https://github.com/huntertrammell/Dev-Social-Network/" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      <span>Repository</span>
                    </a>
                    <a href="https://cerebellum-network.herokuapp.com/guest-login/" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      <span>Deployed<br />Page</span>
                    </a>
                    <a href="./assets/documents/cerebellum.html" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      <span>Readme</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="project card">
                <div class="card-header"><h3>Expense</h3></div>
                <div class="card-body">
                  <img src="assets/images/expense.png" alt="Expense screenshot" />
                </div>
                <div class="card-body">
                  A finance tracker built with Vue.js. The user must create an account. After creating their account and with every login they are routed to their dashboard where they can view and update their expenses and budgets.
                  The dashboard consists of 4 elements: Receipt Que, Budgets, Transactions, and Upcoming bills.
                  The user will keep the dashboard information up to date by manually adding in all of their new expenses. 
                </div>
                <div class="card-body">
                  <h6>My Role</h6>
                  Part of a four person team. I was responsible for user authentication with Passport.js, most of the API routes, deployment to Heroku with JawsDB, and Express server configuration. I also wrote most of the controller functions on the back end and a couple of the forms on the front end. 
                </div>
                <div class="card-body">
                  <h6>Technologies Used</h6>
                  <div class="row">
                    <div class="col-6">
                      <label>Front End</label>
                      <ul>
                        <li><a href="https://vuejs.org/" target="_blank">
                          Vue.js</a></li>
                        <li><a href="https://getbootstrap.com/" target="_blank">
                          Bootstrap</a></li>
                        <li><a href="https://jquery.com/" target="_blank">
                          jQuery</a></li>
                      </ul>
                    </div>
                    <div class="col-6">
                      <label>Back End</label>
                      <ul>
                        <li><a href="http://www.passportjs.org/" target="_blank">
                          Passport.js</a></li>
                        <li><a href="https://nodejs.org/en/about/" target="_blank">
                          Node</a></li>
                        <li><a href="https://expressjs.com/" target="_blank">
                          Express</a></li>
                        <li><a href="https://dev.mysql.com/doc/refman/8.0/en/introduction.html" target="_blank">
                          MySQL</a></li>
                        <li><a href="http://docs.sequelizejs.com/" target="_blank">
                          Sequelize</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <h6>Note</h6>
                  The "Deployed Page" link below will automatically log you in to the guest account.
                  <br />
                  If you wish to create your own account, use <a href="https://quiet-spire-74175.herokuapp.com/" target="_blank" rel="noopener noreferrer">this link</a>.
                </div>
                <div class="card-footer">
                  <div class="btn-group" role="group" aria-label="links">
                    <a href="https://github.com/djknit/Expense" class="btn btn-secondary" target="_blank">
                      <span>Repository</span>
                    </a>
                    <a href="https://quiet-spire-74175.herokuapp.com/guest-login/" class="btn btn-secondary" target="_blank">
                      <span>Deployed<br />Page</span>
                    </a>
                    <a href="./assets/documents/expense.html" class="btn btn-secondary" target="_blank">
                      <span>Readme</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="project card">
                <div class="card-header"><h3>NPR News Scraper</h3></div>
                <div class="card-body">
                  <img src="assets/images/news_scraper.png" alt="News Scraper screenshot" />
                </div>
                <div class="card-body">
                  When the user presses the scrape button, the app scrapes the <a href="https://www.npr.org/sections/news/" target="_blank" rel="noopener noreferrer">NPR news site</a> for article headlines, pictures, links, and summaries. If there are already articles in the database, the new article headlines are compared against the ones in the database to prevent duplicates and up to 8 new articles are saved in the database. The article information is displayed along with a link to the article and a comment section. The comment section is contained in a modal. The comments for the chosen article are retrieved from the database when the modal is opened.
                </div>
                <div class="card-body">
                  <h6>My Role</h6>
                  Sole developer.
                </div>
                <div class="card-body">
                  <h6>Technologies Used</h6>
                  <div class="row">
                    <div class="col-6">
                      <label>Front End</label>
                      <ul>
                        <li><a href="https://handlebarsjs.com/" target="_blank" rel="noopener noreferrer">
                          Handlebars</a></li>
                        <li><a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                          Bootstrap</a></li>
                        <li><a href="https://jquery.com/" target="_blank" rel="noopener noreferrer">
                          jQuery</a></li>
                      </ul>
                    </div>
                    <div class="col-6">
                      <label>Back End</label>
                      <ul>
                        <li><a href="https://nodejs.org/en/about/" target="_blank" rel="noopener noreferrer">
                          Node</a></li>
                        <li><a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                          Express</a></li>
                        <li><a href="https://www.mongodb.com/what-is-mongodb/" target="_blank" rel="noopener noreferrer">
                          MongoDB</a></li>
                        <li><a href="https://mongoosejs.com/" target="_blank" rel="noopener noreferrer">
                          Mongoose ORM</a></li>
                        <li><a href="https://www.npmjs.com/package/axios/" target="_blank" rel="noopener noreferrer">
                          Axios</a></li>
                        <li><a href="https://github.com/cheeriojs/cheerio#readme" target="_blank" rel="noopener noreferrer">
                          Cheerio</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="btn-group" role="group" aria-label="links">
                    <a href="https://github.com/djknit/news-scraper/" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      <span>Repository</span>
                    </a>
                    <a href="https://daves-news-scraper.herokuapp.com/" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      <span>Deployed<br />Page</span>
                    </a>
                    <a href="./assets/documents/news-scraper.html" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      <span>Readme</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="project card">
                <div class="card-header"><h3>Eat-da-Burger</h3></div>
                <div class="card-body">
                  <img src="assets/images/burger.png" alt="Eat-da-Burger screenshot" />
                </div>
                <div class="card-body">
                  Eat-da-Burger is a simple looking application with a little more going on behind the scenes. This is the first complete
                  app that I built using the model-view-controller file structure. The user may enter the name of a burger they would
                  like to eat. The burger appears on the left side of the page with a button labeled "Devour!" The user may add as many
                  burgers as they would like. When the "Devour!" button is pressed, the burger moves to the right side of the page to
                  show that it has been devoured. All data is stored in a MySQL database. This app uses three of the four CRUD methods
                  (create, read, and update).
                </div>
                <div class="card-body">
                  <h6>My Role</h6>
                    Sole developer.
                </div>
                <div class="card-body">
                  <h6>Technologies Used</h6>
                  <div class="row">
                    <div class="col-6">
                      <label>Front End</label>
                      <ul>
                        <li><a href="https://handlebarsjs.com/" target="_blank" rel="noopener noreferrer">
                          Handlebars</a></li>
                        <li><a href="https://jquery.com/" target="_blank" rel="noopener noreferrer">
                          jQuery</a></li>
                      </ul>
                    </div>
                    <div class="col-6">
                      <label>Back End</label>
                      <ul>
                        <li><a href="https://nodejs.org/en/about/" target="_blank" rel="noopener noreferrer">
                          Node</a></li>
                        <li><a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                          Express</a></li>
                        <li><a href="https://dev.mysql.com/doc/refman/8.0/en/introduction.html" target="_blank" rel="noopener noreferrer">
                          MySQL</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="btn-group" role="group" aria-label="links">
                    <a href="https://github.com/djknit/burger" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      <span>Repository</span>
                    </a>
                    <a href="https://devourdaburger.herokuapp.com/" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      <span>Deployed<br />Page</span>
                    </a>
                    <a href="./assets/documents/burger.html" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      <span>Readme</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="project card">
                <div class="card-header"><h3>Friend Finder</h3></div>
                <div class="card-body">
                  <img src="assets/images/friend_finder.png" alt="Friend Finder screenshot" />
                </div>
                <div class="card-body">
                  Friend Finder is a survey based matchmaker app powered by an Express server. The input form accepts the user's name, a link to a picture, and their answers to 10 survey questions (with answers being agree/disagree on a scale of 1-5). The input is validated on the front end to ensure that all the questions were answered before being posted to the server with jQuery's Ajax method. On the server side, the new user's answers are compared to the answers of all existing users to find the existing user(s) whose answers most closely match the new user's answers. The new user is added to the users array and their match is returned by the server. The front end then display's the match.
                </div>
                <div class="card-body">
                  <h6>My Role</h6>
                  Sole developer.
                </div>
                <div class="card-body">
                  <h6>Technologies Used</h6>
                  <div class="row">
                    <div class="col-6">
                      <label>Front End</label>
                      <ul>
                        <li><a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                          Bootstrap</a></li>
                        <li><a href="https://jquery.com/" target="_blank" rel="noopener noreferrer">
                          jQuery</a></li>
                      </ul>
                    </div>
                    <div class="col-6">
                      <label>Back End</label>
                      <ul>
                        <li><a href="https://nodejs.org/en/about/" target="_blank" rel="noopener noreferrer">
                          Node</a></li>
                        <li><a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                          Express</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="btn-group" role="group" aria-label="links">
                    <a href="https://github.com/djknit/Friend-Finder" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      <span>Repository</span>
                    </a>
                    <a href="https://people-matcher.herokuapp.com/" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      <span>Deployed<br />Page</span>
                    </a>
                    <a href="./assets/documents/friend-finder.html" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      <span>Readme</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="project card">
                <div class="card-header"><h3>LIRI</h3></div>
                <div class="card-body">
                  <img src="assets/images/liri.png" alt="LIRI screenshot" />
                </div>
                <div class="card-body">
                  LIRI, the Language Interpretation and Recognition Interface, is a command-line-interface (CLI) app built with Node.js.
                  LIRI accepts four commands. The "concert-this" command searches the Bandsintown API for upcoming performances by the
                  artist provided by the user. The "spotify-this-song" command queries the Spotify API for information about the
                  user-specified song. The "movie-this" command searches the OMDB API for information about the user-specified movie.
                  Results are printed in the console and also recorded in a '.txt' file.
                </div>
                <div class="card-body">
                  <h6>My Role</h6>
                  Sole developer.
                </div>
                <div class="card-body">
                  <h6>Technologies Used</h6>
                  <ul>
                    <li><a href="https://nodejs.org/en/about/" target="_blank" rel="noopener noreferrer">
                      Node</a></li>
                    <li><a href="https://www.npmjs.com/package/request" target="_blank" rel="noopener noreferrer">
                      Request (Node package)</a></li>
                    <li><a href="http://momentjs.com/" target="_blank" rel="noopener noreferrer">
                      Moment</a></li>
                    <li><a href="https://www.npmjs.com/package/dotenv" target="_blank" rel="noopener noreferrer">
                      Dotenv (Node package)</a></li>
                  </ul>
                </div>
                <div class="card-footer">
                  <div class="btn-group" role="group" aria-label="links">
                    <a href="https://github.com/djknit/liri-node-app" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      <span>Repository</span>
                    </a>
                    <a href="https://www.youtube.com/watch?v=GGi05Dj_tzY" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      <span>Demo<br />Video</span>
                    </a>
                    <a href="./assets/documents/liri.html" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      <span>Readme</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="project card">
                <div class="card-header"><h3>Food Fight RPG</h3></div>
                <div class="card-body">
                  <img src="assets/images/rpg.png" alt="Food Fight screenshot" />
                </div>
                <div class="card-body">
                  Food Fight is an RPG game written with HTML, CSS, and Javascript. The jQuery Javascript library is used for DOM
                  interaction. The player begins the game by selecting a character to play as. They must then battle their enemies one at
                  a time. The player wins when they have defeated all the enemies and loses if their character is defeated. The player's
                  character deals more damage with each attack, but the opponents' counter attack scores are not increased. The game can
                  be both won and lost when playing as any given character.
                </div>
                <div class="card-body">
                  <h6>My Role</h6>
                  Sole developer.
                </div>
                <div class="card-body">
                  <h6>Technologies Used</h6>
                  <ul>
                    <li><a href="https://jquery.com/" target="_blank" rel="noopener noreferrer">
                      jQuery</a></li>
                  </ul>
                </div>
                <div class="card-footer">
                  <div class="btn-group" role="group" aria-label="links">
                    <a href="https://github.com/djknit/Food-Fight" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      <span>Repository</span>
                    </a>
                    <a href="https://djknit.github.io/Food-Fight" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      <span>Deployed<br />App</span>
                    </a>
                    <a href="./assets/documents/rpg.html" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      <span>Readme</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default projectsSection;