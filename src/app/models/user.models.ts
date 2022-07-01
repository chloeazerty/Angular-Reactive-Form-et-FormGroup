export class User{
    username:string | null;
    email:string | null;
    password:string | null;
    streetName:string | null;
    zipCode:number | null;
    city:string | null;

    constructor(username:string, email:string, password:string, streetName:string, zipCode:number, city:string) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.streetName = streetName;
        this.zipCode = zipCode;
        this.city = city;
    }
}