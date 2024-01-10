import { Exclude, Expose, Transform } from 'class-transformer';
import { IsEmail, IsString, MinLength } from 'class-validator';

@Exclude()
export class LoginUserDto {
  @Expose()
  @IsEmail()
  public readonly email: string;

  @Expose()
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(6)
  public readonly password: string;
}
