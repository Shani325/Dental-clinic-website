export default class patient{
    tz="";
    firstName="";
    lastName="";
    phone="";
    dateOfBirth=new Date().toLocaleDateString();
    idDoctor=0;

    constructor (tz:string,firstName:string,lastName:string,phone:string,dateOfBirth:string,idDoctor:number){
        this.tz=tz;
        this.firstName=firstName;
        this.lastName=lastName;
        this.phone=phone;
        this.dateOfBirth=dateOfBirth;
        this.idDoctor=idDoctor;
    }
}