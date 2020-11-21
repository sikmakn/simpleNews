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

    @BelongsTo(() => User)
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
    answerToId?: string;

    @BelongsTo(() => User)
    answerTo?: User;
}

export default SubComment;