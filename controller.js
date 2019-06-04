var bycrypt = require('bcryptjs');


module.exports = {
    register: async (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { username, password } = req.body;
        dbInstance.register_user([username, password, `https://robohash.org/${ username }`])
        .then( results => {
            res.status(200).send(results)
        })
    },
    login: async (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { username, password } = req.body;
        dbInstance.login_user([username, password])
        .then( results => {
            res.status(200).send(results)
        })
    },
    getAllPosts: async (req, res, next) => {
        const { userposts, search } = req.query;
        const { user_id } = req.params;
        const dbInstance = req.app.get('db');
            if (userposts && search) {
                dbInstance.search_all_posts(search)
                .then( results => {
                    res.status(200).send(results)
                })
            } else if (userposts === 'false' && search === '') {
                dbInstance.get_all_not_user(user_id)
                .then( results => {
                    res.status(200).send(results)
                })
            }
    }

    }