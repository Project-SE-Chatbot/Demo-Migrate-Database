import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Degree } from 'src/typeorm/entities/back_end/Degree';
import { Degree_Key } from 'src/typeorm/entities/back_end/Degree_Key';
import { DegreeParam } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class DegreeService {

    constructor(
        @InjectRepository(Degree) private degreeRepository: Repository<Degree>,
        @InjectRepository(Degree_Key) private degreeKeyRepository: Repository<Degree_Key>
    ){}

    findDegree(){
        return this.degreeRepository.find()
    }

    async findDegreeByKey(findKey: string) {
        console.log(findKey);
        const findKey1 = await this.degreeKeyRepository.find({where: {key_1: findKey}})
        const findKey2 = await this.degreeKeyRepository.find({where: {key_2: findKey}})
        const findKey3 = await this.degreeKeyRepository.find({where: {key_3: findKey}})
        const findKey4 = await this.degreeKeyRepository.find({where: {key_4: findKey}})
        const findKey5 = await this.degreeKeyRepository.find({where: {key_5: findKey}})
        const findKey6 = await this.degreeKeyRepository.find({where: {key_6: findKey}})

        
    
        if(findKey1.length != 0){
            console.log(findKey1);
            
          return await this.findDegreeByName(findKey1[0].key_1)
          
        }else if(findKey2.length != 0){
          return await this.findDegreeByName(findKey2[0].key_1)
          
        }else if(findKey3.length != 0){
          console.log(findKey3);
          return await this.findDegreeByName(findKey3[0].key_1)
          
        }else if(findKey4.length != 0){
          return await this.findDegreeByName(findKey4[0].key_1)
          
        }else if(findKey5.length != 0){
          return await this.findDegreeByName(findKey5[0].key_1)
          
        }else if(findKey6.length != 0){
          return await this.findDegreeByName(findKey6[0].key_1)
          
        }
    
      }
    createDegree(degreeDetail: DegreeParam){
        const newDegree = this.degreeRepository.create(degreeDetail)
        return this.degreeRepository.save(newDegree)
    }

    updateDegree(id_degree: number, updateDegree: DegreeParam){
        return this.degreeRepository.update({id_degree}, {...updateDegree})
    }

    deleteDegree(id_degree: number){
        return this.degreeRepository.delete({id_degree})
    }

    findDegreeByName(name: string){
        return this.degreeRepository.findOne({where:{name}})
    }
}
