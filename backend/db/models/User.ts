import {BelongsToMany, Column, DataType, HasMany, Model, PrimaryKey, Table} from 'sequelize-typescript';
import OneNews from './OneNews';
import Like from './Like';
import Comment from './Comment';
import SubComment from './SubComment';

interface UserAttr {
    id: string;
    username: string;
    password: string;
    salt: string;
    firstName: string;
    lastName: string;
    imgSrc?: string;
    news: [OneNews];
    comments: [Comment];
    subComments: [SubComment];
    likes: [Like];
}

@Table
class User extends Model implements UserAttr {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false,
    })
    id!: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
        unique: true,
    })
    username!: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    password!: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    salt!: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    firstName!: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    lastName!: string;

    @Column({
        type: DataType.STRING
    })
    imgSrc?: string;


    @HasMany(() => OneNews, {onDelete: 'cascade'})
    news!: [OneNews];

    @HasMany(() => Comment, {onDelete: 'cascade'})
    comments!: [Comment];

    @HasMany(() => SubComment, {onDelete: 'cascade'})
    subComments!: [SubComment];

    @BelongsToMany(() => OneNews, () => Like)
    likes!: [Like];
}

export default User;