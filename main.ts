import { Auth } from "./inheritance";
import  {UserInfoType} from "./type/type";

var userInfo:UserInfoType={
    name:'anil',
    age:30,
    email:'anil@test.com',
    password:'1234@abc'
}

class User extends Auth{

} 

var user1 = new User();

user1.login(userInfo.name,userInfo.password)


console.log(userInfo);