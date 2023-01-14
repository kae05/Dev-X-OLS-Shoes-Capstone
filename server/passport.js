const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
        scope:['profile','email'],
    },

    function(accessToken, refreshToken, profile, callback) {
        callback(null, accessToken, refreshToken, profile)
    }
)
);

passport.serializeUser(function(user, callback) {
    done(null,user); 
})

passport.deserializeUser(function(user, done) {
    done(null,user);
})
