import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table} from 'sequelize-typescript';
import User from './User';
import OneNews from './OneNews';
import SubComment from './SubComment';

interface CommentAttr {
    id: string;
    text: string;
    authorId: string;
    author: User;
    oneNewsId: string;
    oneNews?: OneNews;
    subComments: [SubComment];
}

@Table
class Comment extends Model implements CommentAttr {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false,
        unique: true,
    })
    id!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    text!: string;

    @ForeignKey(() => User)
    authorId!: string;

    @BelongsTo(() => User)
    author!: User;

    @ForeignKey(() => OneNews)
    oneNewsId!: string;

    @BelongsTo(() => OneNews)
    oneNews!: OneNews;

    @HasMany(() => SubComment, {onDelete: 'cascade'})
    subComments!: [SubComment];
}

export default Comment;