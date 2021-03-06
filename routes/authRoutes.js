const passport = require('passport');

module.exports = (app) => {
  app.get('/auth/google', passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );
  /*This route handler assumes that the user will already have the
    code in the URL that's required to obtain user information.*/
  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get('/api/current_user', (req,res) => {
    res.send(req.user);
  });

};
