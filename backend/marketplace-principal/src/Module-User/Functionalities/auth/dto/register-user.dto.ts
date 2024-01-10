import { Exclude, Expose, Transform } from 'class-transformer';
import { IsEmail, IsString, MinLength } from 'class-validator';

@Exclude()
export class RegisterUserDto {
  @Expose()
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  public readonly name: string;

  @Expose()
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(6)
  public readonly login: string;

  @Expose()
  @IsEmail()
  public readonly email: string;

  @Expose()
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(6)
  public readonly password: string;
}
