import {BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table} from 'sequelize-typescript';
import User from './User';
import OneNews from './OneNews';

interface LikeAttr {
    authorId: string;
    author?: User;
    oneNewsId: string;
    oneNews?: OneNews;
}

@Table
class Like extends Model implements LikeAttr {
    @ForeignKey(() => User)
    @PrimaryKey
    @Column({allowNull: false})
    authorId!: string;

    @BelongsTo(() => User)
    author!: User;

    @PrimaryKey
    @ForeignKey(() => OneNews)
    @Column({
        allowNull: false,
        type: DataType.UUID,
    })
    oneNewsId!: string;

    @BelongsTo(() => OneNews)
    oneNews!: OneNews;
}

export default Like;