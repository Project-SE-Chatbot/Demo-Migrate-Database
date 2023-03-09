import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Q_And_A } from 'src/typeorm/entities/back_end/Q&A';
import { Q_And_AParam } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class QaService {
  constructor(
    @InjectRepository(Q_And_A) private QARepository: Repository<Q_And_A>,
  ) {}

  findQA() {
    return this.QARepository.find();
  }

  createQA(QADetail: Q_And_AParam) {
    const newQA = this.QARepository.create(QADetail);
    return this.QARepository.save(newQA);
  }

  updateQA(id_q_and_a: number, updateQA: Q_And_AParam) {
    return this.QARepository.update({ id_q_and_a }, { ...updateQA });
  }

  deleteQA(id_q_and_a: number) {
    return this.QARepository.delete({ id_q_and_a });
  }

  findQAByID(id_q_and_a: number) {
    return this.QARepository.findOne({ where: { id_q_and_a } });
  }
}
