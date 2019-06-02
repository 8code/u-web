# u-web
cms website for blog and e commerce, with API
<br>

#1. users
<br>user_id
<br>username
<br>password

#2. client
<br>client_id
<br>client_token
<br>user_id
<br>type (full,other)
<br>website

#4. access_token
<br>access_token
<br>client_id
<br>expired
<br>created_at
<br>login_on
<br>active
	
<br>request token with username and password

<br>a. check client_token
<br>b. check website
<br>c. check type
<br>d. create access token
<br>e. response JSON token and user data

<br>request data with token akses

<br>a. chek access_token
<br>b. check expired
<br>c. check active
<br>d. check website
<br>e. check type

<br>if type == full 
<br>	next to all action
<br>if type == other
<br> check with confirmation on login defice with type full
<br> or comfirmation with mobile number or email

