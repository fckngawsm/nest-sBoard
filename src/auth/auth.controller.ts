import {
  Body,
  Controller,
  Post,
  Get,
  Request,
  UseGuards,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";
import { LoginUserDto } from "src/users/dto/login-user.dto";

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
  login(@Body() userDto: LoginUserDto) {
    return this.userService.login(userDto);
  }
  // login-check
  @UseGuards(AuthGuard)
  @Get("/me")
  loginCheck(@Request() req) {
    const { id } = req.user;
    return this.userService.currentUser(id);
  }
}
