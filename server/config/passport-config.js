
const userModel = require('../models/user-model');

module.exports = function initializePassport(passport, LocalStrategy) {
    passport.use(new LocalStrategy({ usernameField: 'email' },
        function (email, password, done) {
           userModel.findOne({email},(error,user) => {
            if (error) {
                return done(error);
            }
            
            if (!user) { 
				return done(null, false, { message: 'Incorrect username.' })
			}

            if (user.password != password) {
                return done(null, false, { message: 'Incorrect password.' });
            }

            return done(null, user);

           });
            
        }
    ));

    passport.serializeUser((user, done) => {

        done(null, user._id)
    })
    passport.deserializeUser(async function (id, done) {
        const user = await userModel.findById(id);

        if (user) {

            return done(null, user);
        }
        done('error', false)
    });


}