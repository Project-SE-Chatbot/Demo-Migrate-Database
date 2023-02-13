import { Admin } from "src/typeorm/entities/back_end/Admin";
import { Degree } from "src/typeorm/entities/back_end/Degree";
import { Faq } from "src/typeorm/entities/back_end/FAQ";
import { Feedback } from "src/typeorm/entities/back_end/Feed Back";
import { Free_Elective } from "src/typeorm/entities/back_end/Free Elective";
import { Major } from "src/typeorm/entities/back_end/Major";
import { Place } from "src/typeorm/entities/back_end/Place";
import { Plan } from "src/typeorm/entities/back_end/Plan";
import { Q_And_A } from "src/typeorm/entities/back_end/Q&A";
import { Register } from "src/typeorm/entities/back_end/Register";
import { Teacher } from "src/typeorm/entities/back_end/Teacher";
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
              Feedback,Free_Elective,
              Major,Place,Plan,
              Q_And_A,Register,Teacher],

    synchronize: true,
    // migrations: ['src/migration/**/*.ts'],
    // migrationsTableName: "custom_migration_table",

}

const dataSource = new DataSource(dataSourceOptions)
export default dataSource;
