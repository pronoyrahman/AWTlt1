

import {Type} from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';


export class CreateFacultyDto 
{
    @IsString()
    @IsNotEmpty()
    @MaxLength(10)
    id:string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name:string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    expertise:string;

    @Type(() => Number)
    @IsInt()
    @IsNotEmpty()
    @Min(0)  

    noOFPublication:number;
}