var bycrypt = require('bcryptjs');


module.exports = {
    register: (req, res, next) => {
        const { session } = req;
        const dbInstance = req.app.get('db');
        const { username, password } = req.body;
        dbInstance.register_user([username, password, `https://robohash.org/${ username }`])
        .then( results => {
            session.userid = results[0].user_id;
            res.status(200).send(results)
        })
    },
    login: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { username, password } = req.body;
        dbInstance.login_user([username, password])
        .then( results => {
            req.session.userid = results[0].user_id;
            res.status(200).send(results)
            console.log(req.session.id)
        })
    },
    logout: (req, res, next) => {
        req.session.destroy();
    },
    getAllPosts: (req, res, next) => {
        const { userposts, search } = req.query;
        const { session } = req;
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
            dbInstance.get_all_not_user(session.userid)
            .then( results => {
                res.status(200).send(results)
            })
            .catch (err => {
                res.status(500).send(err)
            })
        } else if (userposts === 'false' && search) {
            dbInstance.search_not_user([sqlSearch, session.userid])
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
    getSinglePost: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { postId } = req.params;
        dbInstance.view_specific_post([postId])
        .then( results => {
            res.status(200).send(results)
        })
        .catch( err => {
            res.status(500).send(err)
        })
    },
    createPost: (req, res, next) => {
        const { session } = req;
        const { title, image, content } = req.body;
        const dbInstance = req.app.get('db');
        dbInstance.create_post([title, image, content, session.userid])
        .then( () => {
            res.status(200).send('Post has been added.')
        })
    },
    authMe: (req, res, next) => {
        const { session } = req;
        const dbInstance = req.app.get('db');
        dbInstance.get_user([session.userid])
        .then( results => {
            res.status(200).send(results)
            console.log(session.id)
        })
    }
}