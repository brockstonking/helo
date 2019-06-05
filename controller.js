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
        const sqlSearch = '%' + search + '%'
        const dbInstance = req.app.get('db');
        if (userposts === 'true' && search) {
            dbInstance.search_all_posts(sqlSearch)
            .then( results => {
                res.status(200).send(results)
            })
            .catch (err => {
                res.status(500).send(err)
            })
        } else if (userposts === 'false' && search === '') {
            dbInstance.get_all_not_user(user_id)
            .then( results => {
                res.status(200).send(results)
            })
            .catch (err => {
                res.status(500).send(err)
            })
        } else if (userposts === 'false' && search) {
            dbInstance.search_not_user([sqlSearch, user_id])
            .then( results => {
                res.status(200).send(results)
            })
            .catch (err => {
                res.status(500).send(err)
            })
        } else if (userposts === 'true' && search === '') {
            dbInstance.get_posts()
            .then( results => {
                res.status(200).send(results)
            })
            .catch (err => {
                res.status(500).send(err)
            })
        }  
    },
    getSinglePost: async (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { postId } = req.params;
        dbInstance.view_specific_post([postId])
        .then( results => {
            res.status(200).send(results)
        })
        .catch( err => {
            res.status(500).send(err)
        })
    }
}