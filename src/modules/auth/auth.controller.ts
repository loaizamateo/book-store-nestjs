import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/sigin.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly _authService: AuthService){

    }

    @Post('/signup')
    @UsePipes(ValidationPipe)
    async signup(@Body() signupDto : SignupDto): Promise<void> {
        return this._authService.signup(signupDto);
    }

    @Post('/signin')
    @UsePipes(ValidationPipe)
    async signin(@Body() siginDto: SigninDto){
        return this._authService.signin(siginDto);
    }
}
