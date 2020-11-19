import connection from '../db/connection';
import OneNews from '../db/models/OneNews';
import {Tag} from '../types';
import {Sequelize} from 'sequelize-typescript';
import Like from '../db/models/Like';
import Comment from '../db/models/Comment';
import SubComment from '../db/models/SubComment';

const newsRepository = connection.getRepository(OneNews);
const likeRepository = connection.getRepository(Like);
const commentRepository = connection.getRepository(Comment);
const subCommentRepository = connection.getRepository(SubComment);

export function create(
    {
        img,
        ...newsParams
    }: {
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
        imgSrc: 'https://ktonanovenkogo.ru/image/priroda-gora.jpg'
    });
}

export function update(
    {
        id,
        img,
        ...newsParams
    }: {
        id: string
        img: File
        tag: string
        title: string
        text: string
    }) {
    //todo img to aws
    return newsRepository.update(newsParams, {where: {id}});
}

export function findMany(
    {
        tag,
        from = 0,
        to = 10,
        username,
    }: {
        from?: number
        to?: number
        tag?: Tag
        username?: string
    }) {
    const parameters: any = {
        offset: from,
        limit: to,
    };

    //todo
    if (tag) parameters.where = {tag};
    return newsRepository.findAll(parameters);
}

export async function findOne(
    {
        id,
        userId,
    }: {
        id: string
        userId?: string
    }) {
    const result = await newsRepository.findOne({where: {id}});
    if (userId) {
        result.userStatistic = {
            isCommented: !!await commentRepository.count({where: {oneNewsId: id, authorId: userId}}),//todo subComment
            isLiked: !!await likeRepository.count({where: {oneNewsId: id, userId}})
        };
    }
    result.statistic = {
        likesCount: await likeRepository.count({where: {oneNewsId: id}}),
        commentsCount: await commentRepository.count({where: {oneNewsId: id}}) +
            await subCommentRepository.count({where: {oneNewsId: id}})
    }
    return result;
}