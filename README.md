# u-web
cms website for blog and e commerce, with API


1. users
	user_id
	username
	password

2. client
	client_id
	client_token
	user_id
	type (full,other)
	website

4. access_token
	access_token
	client_id
	expired
	created_at
	login_on
	active
	
request token with username and password

a. check client_token
b. check website
c. check type
d. create access token
e. response JSON token and user data

request data with token akses

a. chek access_token
b. check expired
c. check active
d. check website
e. check type

if type == full 
	next to all action
if type == other
	check with confirmation on login defice with type full
	or comfirmation with mobile number or email

