import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { SharedModule } from '../../shared/shared.module';
import { UserController } from './user.controller';
import { MapperService } from '../../shared/mapper.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserRepository]), SharedModule],
    providers: [UserService, MapperService],
    controllers: [UserController],
})
export class UserModule {}
