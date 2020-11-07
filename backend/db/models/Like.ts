import {BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table} from 'sequelize-typescript';
import User from './User';
import OneNews from './OneNews';

interface LikeAttr {
    userId: string;
    user?: User;
    oneNewsId: string;
    oneNews?: OneNews;
}

@Table
class Like extends Model implements LikeAttr {
    @ForeignKey(() => User)
    @PrimaryKey
    @Column({allowNull: false})
    userId!: string;

    @BelongsTo(() => User)
    user!: User;

    @ForeignKey(() => OneNews)
    @PrimaryKey
    @Column({allowNull: false})
    oneNewsId!: string;

    @BelongsTo(() => OneNews)
    oneNews!: OneNews;
}

export default Like;