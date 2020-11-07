import {Column, DataType, HasMany, Model, PrimaryKey, Table} from 'sequelize-typescript';
import OneNews from './OneNews';

interface TagAttr {
    id: string;
    name: string;
    news: [OneNews];
}

@Table
class Tag extends Model implements TagAttr {
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
    name!: string;

    @HasMany(() => OneNews)
    news!: [OneNews];
}

export default Tag;