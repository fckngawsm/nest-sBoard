import {
  Injectable,
  HttpException,
  HttpStatus,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bycrypt from "bcryptjs";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { LoginUserDto } from "src/users/dto/login-user.dto";
import { User } from "src/users/users.model";
import { UsersService } from "src/users/users.service";
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService
  ) {}
  private async generationToken(user: User) {
    const { password, ...userData } = user;
    return {
      user: userData,
      token: this.jwtService.sign({ id: user.id }),
    };
  }
  private async checkDataUser(userDto: LoginUserDto) {
    const user = await this.userService.getUsersByEmail(userDto.email);
    const passwordEqual = await bycrypt.compare(
      userDto.password,
      user.password
    );

    if (user && passwordEqual) {
      return user;
    }

    throw new UnauthorizedException({ message: "Некорректно введены данные" });
  }
  async registration(userDto: CreateUserDto) {
    const candidate = await this.userService.getUsersByEmail(userDto.email);
    if (candidate) {
      throw new HttpException(
        "Пользователь с таким email уже сущуествует",
        HttpStatus.BAD_REQUEST
      );
    }
    const hashPassword = await bycrypt.hash(userDto.password, 10);
    const user = await this.userService.createUser({
      ...userDto,
      password: hashPassword,
    });
    return this.generationToken(user);
  }

  async login(userDto: LoginUserDto) {
    const user = await this.checkDataUser(userDto);
    return this.generationToken(user);
  }

  async currentUser(id: string) {
    const user = await this.userService.getUsersById(id);
    return user;
  }
}
