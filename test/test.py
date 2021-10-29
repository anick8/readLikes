import requests
import sys

URL = "https://hashx-api-follow-read.herokuapp.com/readAllFollows"
#"http://localhost:8080/isFollow" #"https://hashx-login-service.herokuapp.com/loginWithCookie"
#"https://hashx-register-service.herokuapp.com/register"  #"http://localhost:8080/register"


Follower = '0ea9ec09c2eefe9d35b17c72b309914c16bc442990e1b44db9cfe3199a33232c'
Following = 'f7c755e928aa0d42f50c3665cbc5f9ca653f0f1e7e0995bf6009d44fe297d9dc'
#SessionUUID = 'd2f95915aeeba4a986c41f816a9e66e3fc38b49d7cf4dd8ba5d7bfbd5ba69a78'
#SessionKey = '9a927b4ec2b8094e5e0c901805c55d282dcf3d43926c8ef6962bb5c3d38ea4c5'
data = {"Follower":Follower}# "Following": Following}#,"SessionUUID":SessionUUID,"SessionKey":SessionKey,"Lat":'1.000000',"Long":'1.000000',"UserAgent":"UserAgent","IPAddress":"12.12.13.14"}

#UserUUID,SessionUUID,SessionKey,UserLocation,UserAgent,IPAddress


if len(sys.argv)==4:
	data = {"Username":sys.argv[1],"Email":sys.argv[2] ,"SaltedHash":sys.argv[3]}

r = requests.post(url = URL, data=data)

print(r.text)
