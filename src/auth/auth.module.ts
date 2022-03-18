import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './shared/auth.service';
import { LocalStrategy } from './shared/local-strategy.service';

import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './shared/constants';

@Module({
    imports: [
      UsersModule,
      PassportModule,
      JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '600s' },
      }),
    ],
    providers: [AuthService, LocalStrategy],
    exports: [AuthService],
  })
  export class AuthModule {}
