INSERT INTO helo_users (username, password, profile_picture)
VALUES ($1, $2, $3)
returning *;