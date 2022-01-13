import {IsNotEmpty, IsString, Length} from 'class-validator';

export class CreateUserDto{

  @IsNotEmpty()
  @IsString()
  @Length(4,25,{message:'user code must be at least 4 a 25 characters'})
  readonly username:string;

  @IsNotEmpty()
  @IsString()
  @Length(4,35,{message:'user code must be at least 4 a 25 characters'})
  readonly password:string;

  

}