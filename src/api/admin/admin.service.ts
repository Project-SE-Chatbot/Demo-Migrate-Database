import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from 'src/typeorm/entities/back_end/Admin';
import { AdminParam } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {

    constructor(
        @InjectRepository(Admin) private adminRepository: Repository<Admin>
    ){}

    findAdmin(){
        return this.adminRepository.find()
    }

    createAdmin(adminDetail: AdminParam){
        const newAdmin = this.adminRepository.create(adminDetail)
        return this.adminRepository.save(newAdmin)
    }
}
