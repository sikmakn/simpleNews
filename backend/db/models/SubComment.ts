import {BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table} from 'sequelize-typescript';
import User from './User';
import OneNews from './OneNews';
import Comment from './Comment';

interface SubCommentAttr {
    id: string;
    text: string;
    authorId: string;
    author: User;
    oneNewsId: string;
    oneNews?: OneNews;
    commentId: string;
    comment?: Comment;
    answerToId?: string;
    answerTo?: User;
}

@Table
class SubComment extends Model implements SubCommentAttr {
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

    @BelongsTo(() => User, {foreignKey: {field: 'authorId', name: 'authorId'}})
    author!: User;

    @ForeignKey(() => OneNews)
    oneNewsId!: string;

    @BelongsTo(() => OneNews)
    oneNews!: OneNews;

    @ForeignKey(() => Comment)
    commentId!: string;

    @BelongsTo(() => Comment)
    comment!: Comment;

    @ForeignKey(() => User)
    @Column({
        allowNull: true,
        type: DataType.STRING,

    })
    answerToId?: string;

    @BelongsTo(() => User, {foreignKey: {field: 'answerToId', name: 'answerToId'}})
    answerTo?: User;
}

export default SubComment;