
export default class user {
    id = 0;
    userName = "";
    password = "";
    permission = 0;
    firstName = "";
    lastName = "";
    phone = "";
    city = "";
    street = "";
    numOfHouse = 0;
    dateOfBirth = new Date().toLocaleDateString();
    days = [0];
    startHour = 0
    endHour = 0
    constructor(id: number, userName: string, pass: string, permission: number, first: string, last: string, phone: string,
        city: string, street: string, numOfHouse: number, date: string, days: number[], start: number, end: number) {
        this.id = id;
        this.password = pass;
        this.userName = userName;
        this.permission = permission;
        this.firstName = first;
        this.lastName = last;
        this.phone = phone;
        this.city = city;
        this.street = street;
        this.numOfHouse = numOfHouse;
        this.dateOfBirth = date;
        this.days = days;
        this.startHour = start
        this.endHour = end
    }

}