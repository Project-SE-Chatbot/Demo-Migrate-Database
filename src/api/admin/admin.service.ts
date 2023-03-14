import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

    login(login: AdminParam){
        const loginAdmin = this.adminRepository.findOne({where: {name: login.name, password: login.password}})
        if (!loginAdmin)
            throw new HttpException('Admin not found', HttpStatus.BAD_REQUEST)
        else
            throw new HttpException('Login Success', HttpStatus.OK)
      
    }

    createAdmin(adminDetail: AdminParam){
        const newAdmin = this.adminRepository.create(adminDetail)
        return this.adminRepository.save(newAdmin)
    }

    updateAdmin(name: string, updateAdmin: AdminParam){
        return this.adminRepository.update({name}, {...updateAdmin})
    }

    deleteAdmin(name: string){
        return this.adminRepository.delete({name})
    }

    findAdminByName(name: string){
        return this.adminRepository.findOne({where:{name}})
    }


}
