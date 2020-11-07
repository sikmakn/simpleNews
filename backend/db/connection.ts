import {Sequelize} from 'sequelize-typescript';
import Tag from './models/Tag';
import SubComment from './models/SubComment';
import Comment from './models/Comment';
import OneNews from './models/OneNews';
import User from './models/User';
import Like from './models/Like';

const {DB_NAME, MYSQL_USER, MYSQL_PASSWORD, DB_HOST} = process.env;

const sequelize = new Sequelize(DB_NAME as string, MYSQL_USER as string, MYSQL_PASSWORD, {
    dialect: 'mysql',
    host: DB_HOST,
    repositoryMode: true,
});

sequelize.addModels([
    Tag,
    SubComment,
    Comment,
    OneNews,
    User,
    Like,
])

export default sequelize;