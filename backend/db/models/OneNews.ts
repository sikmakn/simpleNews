import {
    BelongsTo,
    BelongsToMany,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    PrimaryKey,
    Table
} from 'sequelize-typescript';
import User from './User';
import Tag from './Tag';
import Like from './Like';
import Comment from './Comment';

interface OneNewsAttr {
    id: string;
    imgSrc?: string;
    date: Date;
    title: string;
    text: string;
    authorId: string;
    author?: User;
    tagId: string;
    tag?: Tag;
    likes: [Like];
    comments: [Comment];
}

@Table
class OneNews extends Model implements OneNewsAttr {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false,
        unique: true,
    })
    id!: string;

    @Column({
        type: DataType.STRING
    })
    imgSrc?: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    date!: Date;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title!: string;

    @Column({
        type: DataType.STRING(1000),
        allowNull: false
    })
    text!: string;


    @ForeignKey(() => User)
    authorId!: string;

    @BelongsTo(() => User)
    author!: User;


    @ForeignKey(() => Tag)
    tagId!: string;

    @BelongsTo(() => Tag)
    tag!: Tag;

    @BelongsToMany(() => User, () => Like)
    likes!: [Like];

    @HasMany(() => Comment, {onDelete: 'cascade'})
    comments!: [Comment];

}

export default OneNews;