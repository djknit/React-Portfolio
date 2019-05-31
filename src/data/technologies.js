class Technology {
  constructor(name, informationLink) {
    this.name = name;
    this.infoLink = informationLink;
  }
}

const technologies = {
  react: new Technology('React', 'https://reactjs.org/'),
  bulma: new Technology('Bulma', 'https://bulma.io/'),
  node: new Technology('Node', 'https://nodejs.org/en/about/'),
  axios: new Technology('Axios', 'https://www.npmjs.com/package/axios/'),
  moment: new Technology('Moment', 'http://momentjs.com/'),
  express: new Technology('Express', 'https://expressjs.com/'),
  passport: new Technology('Passport', 'http://www.passportjs.org/'),
  mongo: new Technology('MongoDB', 'https://www.mongodb.com/what-is-mongodb/'),
  mongoose: new Technology('Mongoose', 'https://mongoosejs.com/'),
  nodemailer: new Technology('Nodemailer', 'https://nodemailer.com/about/'),
  bcrypt: new Technology('Bcrypt', 'https://www.npmjs.com/package/bcrypt/'),
  vue: new Technology('Vue', 'https://vuejs.org/'),
  bootstrap: new Technology('Bootstrap', 'https://getbootstrap.com/'),
  veeValidate: new Technology('VeeValidate', 'https://baianat.github.io/vee-validate/'),
  vueCroppa: new Technology('Vue Croppa', 'https://zhanziyang.github.io/vue-croppa/#/'),
  meetupApi: new Technology('Meetup API', 'https://www.meetup.com/meetup_api/'),
  linkPreviewApi: new Technology('LinkPreview API', 'https://www.linkpreview.net/'),
  googleBooksApi: new Technology('Google Books API', 'https://developers.google.com/books/'),
  jQuery: new Technology('jQuery', 'https://jquery.com/'),
  mySql: new Technology('MySQL', 'https://dev.mysql.com/doc/refman/8.0/en/introduction.html'),
  sequelize: new Technology('Sequelize', 'http://docs.sequelizejs.com/'),
  handlebars: new Technology('Handlebars', 'https://handlebarsjs.com/'),
  cheerio: new Technology('Cheerio', 'https://github.com/cheeriojs/cheerio#readme'),
  request: new Technology('Request', 'https://www.npmjs.com/package/request'),
  dotenv: new Technology('Dotenv', 'https://www.npmjs.com/package/dotenv')
};

export default technologies;