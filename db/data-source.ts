import { Admin } from "src/typeorm/entities/back_end/Admin";
import { Degree } from "src/typeorm/entities/back_end/Degree";
import { Degree_Key } from "src/typeorm/entities/back_end/Degree_Key";
import { Faq } from "src/typeorm/entities/back_end/FAQ";
import { Feedback } from "src/typeorm/entities/back_end/Feed Back";
import { Free_Elective_Key } from "src/typeorm/entities/back_end/Free_Elective_Key";
import { Free_Elective_New } from "src/typeorm/entities/back_end/Free_Elective_New";
import { Major } from "src/typeorm/entities/back_end/Major";
import { Major_Elective } from "src/typeorm/entities/back_end/Major_Elective";
import { Major_Elective_Key } from "src/typeorm/entities/back_end/Major_Elective_Key";
import { Major_Key } from "src/typeorm/entities/back_end/Major_Key";
import { Place } from "src/typeorm/entities/back_end/Place";
import { Place_Key } from "src/typeorm/entities/back_end/Place_Key";
import { Plan } from "src/typeorm/entities/back_end/Plan";
import { Q_And_A } from "src/typeorm/entities/back_end/Q&A";
import { Register } from "src/typeorm/entities/back_end/Register";
import { Register_Key } from "src/typeorm/entities/back_end/Register_key";
import { Teacher } from "src/typeorm/entities/back_end/Teacher";
import { Teacher_Key } from "src/typeorm/entities/back_end/Teacher_Key";
import { Post } from "src/typeorm/entities/test/Post";
import { Profile } from "src/typeorm/entities/test/Profile";
import { User } from "src/typeorm/entities/test/User";
import {DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username:'root',
    password:'',
    database:'chat_bot_cpe',
    entities:[User,Post,Profile,
              Admin,Degree,Faq,
              Feedback,
              Major,Place,Plan,
              Q_And_A,Register,Teacher,
              Degree_Key,
              Free_Elective_Key,Major_Elective,
              Major_Elective_Key,Major_Key,
              Place_Key,Register_Key,Teacher_Key,
              Free_Elective_New],

    synchronize: true,
    // migrations: ['src/migration/**/*.ts'],
    // migrationsTableName: "custom_migration_table",

}

const dataSource = new DataSource(dataSourceOptions)
export default dataSource;
