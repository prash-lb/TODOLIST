export interface FormTODO{
    label:string;
    date : Date;
}

export interface TODO {
    id:number;
    label : string;
    done: boolean;
    date : Date;
    user : string // pour relier le user à ces taches 
}

export interface TODOResponse{
    todo : TODO[]
}

export interface UserResponse{
    users : USER[]
}

export interface USER {
    id : number;
    name : string ; 
    password : string
    
}
