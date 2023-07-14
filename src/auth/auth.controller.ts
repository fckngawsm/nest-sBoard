import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { AuthService } from "./auth.service";

@ApiTags("Авторизация")
@Controller("auth")
export class AuthController {
  constructor(private readonly userService: AuthService) {}
  // registration
  @Post("/sign-up")
  registration(@Body() userDto: CreateUserDto) {
    return this.userService.registration(userDto);
  }
  // login
  @Post("/sign-in")
  login(@Body() userDto: CreateUserDto) {
    return this.userService.login(userDto);
  }
}
