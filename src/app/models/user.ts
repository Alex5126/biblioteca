export interface User{
    user:UserData;
    token:string;
}

export interface UserData{
    id:number;
    name:string;
    type:string;
}