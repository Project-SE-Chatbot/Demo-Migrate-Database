import { Body, Controller,Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { CreateUserPostDto } from 'src/users/dtos/CreateUserPost.dto';
import { CreateUserProfileDto } from 'src/users/dtos/CreateUserProfile.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';
import { DeleteDateColumn } from 'typeorm';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}
    //-------------------------------------------------test--------------------------------------------------------------
    @Get()
     getUsers(){
        return this.userService.findUsers();
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
       return this.userService.createUser(createUserDto);
    }
    
    @Put(':id')
    async updateUserById(
        @Param('id',ParseIntPipe) id: number , 
        @Body() updateUserDto: UpdateUserDto,
        ) {
           await this.userService.updateUser(id, updateUserDto);
        }

    @Delete(':id')
    async deleteUserById(@Param('id',ParseIntPipe) id: number ) {
           await this.userService.deleteUser(id);
        }

    @Post(':id/profile')
        createUserProfile(
            @Param ('id', ParseIntPipe) id : number, 
            @Body() createUserProfileDto: CreateUserProfileDto)
            {
                return this.userService.createUserProfile(id,createUserProfileDto);
        }   

    @Post(':id/posts')
        createUserPost(
            @Param('id',ParseIntPipe) id: number,
            @Body() createUserPostDto: CreateUserPostDto)
            {
                return this.userService.createUserPost(id, createUserPostDto)
            }
    //-------------------------------------------------test--------------------------------------------------------------

    //-------------------------------------------------backend-----------------------------------------------------------
    // GET faq => /users/faq




    @Get('/admin')
        getAdmin(){
        return this.userService.findAdmin();
    }

    @Get('/degree')
        getDegree(){
        return this.userService.findDegree();
    }

    // GET faq => /users/faq
    @Get('/faq')
        getFaq(){
        return this.userService.findFaq();
    }

    @Get('/feedback')
        getFeedback(){
        return this.userService.findFeedback();
    }

    @Get('/free_elective')
        getFree_Elective(){
        return this.userService.findFree_Elective();
    }

    @Get('/major')
        getMajor(){
        return this.userService.findMajor();
    }

    @Get('/place')
        getPlace(){
        return this.userService.findPlace();
    }

    @Get('/q_and_a')
        getQ_And_A(){
        return this.userService.findQ_And_A();
    }

    @Get('/register')
        getRegister(){
        return this.userService.findRegister();
    }

    @Get('/teacher')
        getTeacher(){
        return this.userService.findTeacher();
    }






    }



// @Controller('faq')
// export class FaqController{
//     constructor(private faqService: UsersService){
//     }

//     @Get()
//     getFaq(){
//         return this.faqService.findFaq;
//     }
// }