import { Injectable ,HttpException,HttpStatus} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { profile } from 'console';
import { Admin } from 'src/typeorm/entities/back_end/Admin';
import { Degree } from 'src/typeorm/entities/back_end/Degree';
import { Faq } from 'src/typeorm/entities/back_end/FAQ';
import { Feedback } from 'src/typeorm/entities/back_end/Feed Back';
import { Free_Elective } from 'src/typeorm/entities/back_end/Free Elective';
import { Major } from 'src/typeorm/entities/back_end/Major';
import { Place } from 'src/typeorm/entities/back_end/Place';
import { Q_And_A } from 'src/typeorm/entities/back_end/Q&A';
import { Register } from 'src/typeorm/entities/back_end/Register';
import { Teacher } from 'src/typeorm/entities/back_end/Teacher';
import { Post } from 'src/typeorm/entities/test/Post';
import { Profile } from 'src/typeorm/entities/test/Profile';
import { User } from 'src/typeorm/entities/test/User';
import { CreateUserParsm, CreateUserPostParsm, CreateUserProfileParsm, UpdateUserParsm } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    
    constructor(
        //test
        @InjectRepository(User) private userRepository:Repository<User>,
        @InjectRepository(Profile) private profileRepository:Repository<Profile>,
        @InjectRepository(Post) private postRepository:Repository<Post>,
        //back_end
        @InjectRepository(Admin) private adminRepository:Repository<Admin>,   
        @InjectRepository(Degree) private degreeRepository:Repository<Degree>,   
        @InjectRepository(Faq) private faqRepository:Repository<Faq>,
        @InjectRepository(Feedback) private feedbackRepository:Repository<Feedback>,
        @InjectRepository(Free_Elective) private free_electiveRepository:Repository<Free_Elective>,
        @InjectRepository(Major) private majorRepository:Repository<Free_Elective>,
        @InjectRepository(Place) private placeRepository:Repository<Place>,      
        @InjectRepository(Q_And_A) private q_and_aRepository:Repository<Q_And_A>,  
        @InjectRepository(Register) private registerRepository:Repository<Register>,
        @InjectRepository(Teacher) private teacherRepository:Repository<Teacher>,    


    ){}

    findUsers() {
        return this.userRepository.find({relations: ['profile','posts']});
    }

    //back_end for to API GET at controllers
    findAdmin(){
        return this.adminRepository.find();
    }
    findDegree(){
        return this.degreeRepository.find();
    }
    findFaq(){
        return this.faqRepository.find();
    }
    findFeedback(){
        return this.feedbackRepository.find();
    }
    findFree_Elective(){
        return this.free_electiveRepository.find();
    }
    findMajor(){
        return this.majorRepository.find();
    }
    findPlace(){
        return this.placeRepository.find();
    }
    findQ_And_A(){
        return this.q_and_aRepository.find();
    }
    findRegister(){
        return this.registerRepository.find();
    }
    findTeacher(){
        return this.teacherRepository.find();
    }



    createUser(userDetail: CreateUserParsm) {
        const newUser = this.userRepository.create({
            ...userDetail, 
            createdAt: new Date(),
        });
        return this.userRepository.save(newUser);
    }

    updateUser(id:number, updateUserDetail: UpdateUserParsm){
        return this.userRepository.update({ id }, {...updateUserDetail});

    }
    deleteUser(id:number){
        return this.userRepository.delete({ id });
    }

    async createUserProfile(id: number,
        createUserProfileDetail: CreateUserProfileParsm) {

            const user = await this.userRepository.findOneBy({ id })
        if(!user) 
            throw new HttpException(
                'User not found. Cannot Create Profile', 
                HttpStatus.BAD_REQUEST,
        );
        const newProfile = this.profileRepository.create(createUserProfileDetail)
        const saveProfile = await this.profileRepository.save(newProfile);
        user.profile = saveProfile;
        return this.userRepository.save(user) 
    }

    async createUserPost(id: number, 
        createUserPostDetail: CreateUserPostParsm){

            const user = await this.userRepository.findOneBy({ id })
            if(!user) 
                throw new HttpException(
                    'User not found. Cannot Create Profile', 
                    HttpStatus.BAD_REQUEST,
            );

            const newPost = this.postRepository.create({
                ...createUserPostDetail,
                user,})
            return this.postRepository.save(newPost)

    }

















}
