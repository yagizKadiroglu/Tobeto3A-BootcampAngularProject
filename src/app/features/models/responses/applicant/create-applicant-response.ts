export interface CreateApplicantResponse {
    userName: string;
    firstName:string;
    lastName:string;
    about:string;
    dateOfBirth: Date;
    nationalIdentity:string;
    email:string;
    password:string;
    createdDate: Date;
}