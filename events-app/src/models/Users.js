const Users = [
    { Name: 'pranay', Password: 'hi', Email: 'lotlap1@hawkmail.newpaltz.edu' },
    { Name: 'reddy', Password: 'hello', Email: 'lotla.pranay@gmail.com' },
    
];

export let CurrentUser = null;

export function Login(email, password) {

    const user = Users.find(x => x.Email == email);
    if(!user) throw Error('User not found');
    if(user.Password != password) throw Error('Wrong Password');

    return CurrentUser = user;
}