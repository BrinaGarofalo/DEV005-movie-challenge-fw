
export interface IMovie {
    title: string;
    poster_path: string;
    gender: string;
    popularity:number;
    overview:string;
    genre_id:number [];
    id:number;
    realese_date:string;
    original_title:string;
    original_language:string;
    adult:boolean;
    backdrop_path:string;
    vote_average:number;
    vote_count:number;
    results:[];

 }
export interface  LoginRequest{
    email:string;
    password:string;
 }




