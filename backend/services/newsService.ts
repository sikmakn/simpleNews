import connection from '../db/connection';
import OneNews from '../db/models/OneNews';
import {Tag} from '../types';
import Like from '../db/models/Like';
import Comment from '../db/models/Comment';
import SubComment from '../db/models/SubComment';
import {Sequelize} from 'sequelize-typescript';

const newsRepository = connection.getRepository(OneNews);
const likeRepository = connection.getRepository(Like);
const commentRepository = connection.getRepository(Comment);
const subCommentRepository = connection.getRepository(SubComment);

export function create(
    {img, ...newsParams}:
        {
            img: File
            tag: string
            title: string
            text: string
            authorId: string
        }) {
    //todo img to aws
    return newsRepository.create({
        ...newsParams,
        date: new Date(Date.now()),
        imgSrc: 'https://ktonanovenkogo.ru/image/priroda-gora.jpg',
    });
}

export function update(
    {id, img, ...newsParams}:
        {
            id: string
            img: File
            tag: string
            title: string
            text: string
        }) {
    //todo img to aws
    return newsRepository.update(newsParams, {where: {id}});
}

export function findBasicById(id: string) {
    return newsRepository.findByPk(id);
}

export async function findManyBasic(
    {from = 0, to = 10, sort}:
        {
            from?: number
            to?: number
            sort?: 'last'
            username?: string
        }) {
    const parameters: any = {offset: from, limit: to};
    if (sort)
        parameters.order = [['date', 'ASC']];

    return newsRepository.findAll(parameters);
}

export async function findMany(
    {tag, from = 0, to = 10, username, sort}:
        {
            from?: number
            to?: number
            tag?: Tag
            sort?: 'hot' | 'last'
            username?: string
        }) {
    const parameters: any = {};
    if (sort) parameters.order =
        [[sort === 'hot' ? Sequelize.literal('likesCount') : 'date', 'ASC']];

    if (tag) parameters.where = {tag};
    return newsRepository.findAll({
        ...parameters,
        ...findAttributes(username),
        subQuery: false,
        offset: from,
        limit: to,
    });
}

export async function findOne(
    {id, userId}: {
        id: string
        userId?: string
    }) {
    const news = await newsRepository.findOne({
        where: {id},
        ...findAttributes(userId)
    });
    return news.dataValues;
}

function findAttributes(userId?: string) {
    const userAttr: any[] = [];
    if (userId)
        userAttr.push(
            [Sequelize.fn('count', Sequelize.literal(`likes.oneNewsId and likes.authorId=\'${userId}\'`)), 'userLikesCount'],
            [Sequelize.fn('count', Sequelize.literal(`comments.id and comments.authorId=\'${userId}\'`)), 'userCommentsCount'],
            [Sequelize.fn('count', Sequelize.literal(`subComments.id and subComments.authorId=\'${userId}\'`)), 'userSubCommentsCount'],
        );
    return {
        attributes: [
            'id', 'title', 'text', 'date', 'imgSrc', 'tag', 'authorId',
            [Sequelize.fn('count', Sequelize.col('likes.oneNewsId')), 'likesCount'],
            [Sequelize.fn('count', Sequelize.col('comments.id')), 'commentsCount'],
            [Sequelize.fn('count', Sequelize.col('subComments.id')), 'subCommentsCount'],
            ...userAttr
        ],
        include: [
            {model: likeRepository, attributes: []},
            {model: commentRepository, attributes: []},
            {model: subCommentRepository, attributes: []},
        ],
        group: ['id']
    };
}