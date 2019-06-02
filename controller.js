var bycrypt = require('bcryptjs');


module.exports = {
    register: async (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { username, password } = req.body;
        dbInstance.register_user([username, password, `https://robohash.org/${ username }.png`])
        .then( results => {
            res.status(200).send(results)
        })
    }
}