import React from 'react';


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
    role: 1,  // the number '1' will signify that I am the sole developer
    notes: [<>
      Many of the features of this app can used without an account. If you wish to create an account, you
      can do so with only a username and password. For these reasons, there is no guest account for this app.
    </>],
    tech: [

    ],
    links: {
      repo: '',
      deployed: '',
      readme: ''
    }
  },
  {

  }
];

export default projects;