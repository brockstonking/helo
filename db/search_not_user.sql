select * 
from helo_posts hp
join helo_users hu on hp.user_id = hu.user_id
where upper(hp.title) like upper($1)
and hu.user_id != $2
