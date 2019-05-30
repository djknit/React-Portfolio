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
  linkPreviewApi: new Technology('LinkPreview API', 'https://www.linkpreview.net/')
};

export default technologies;