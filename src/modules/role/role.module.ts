import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleRepository } from './role.repository';
import { RoleService } from './role.service';
import { SharedModule } from '../../shared/shared.module';
import { RoleController } from './role.controller';
import { MapperService } from '../../shared/mapper.service';

@Module({
    imports: [TypeOrmModule.forFeature([RoleRepository]), SharedModule],
    providers: [RoleService, MapperService],
    controllers: [RoleController],
})
export class RoleModule {}
