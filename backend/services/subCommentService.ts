import connection from '../db/connection';
import SubComment from '../db/models/SubComment';
import User from '../db/models/User';

const subCommentRepository = connection.getRepository(SubComment);
const userRepository = connection.getRepository(User);

export function findMany(commentId: string) {
    return subCommentRepository.findAll({
        where: {commentId},
        include: [
            {
                model: userRepository,
                attributes: ['username', 'firstName', 'lastName', 'imgSrc'],
                as: 'author',
            },
            {
                model: userRepository,
                attributes: ['username', 'firstName', 'lastName', 'imgSrc'],
                as: 'answerTo',
            },
        ],
    });
}

export function create(subComment: {
    text: string;
    authorId: string;
    oneNewsId: string;
    commentId: string;
    answerToId?: string;
}) {
    return subCommentRepository.create(subComment);
}

export function update(comment: {
    id: string
    text: string
}) {
    return subCommentRepository.update(comment, {where: {id: comment.id}});
}

export function findById(id: string) {
    return subCommentRepository.findByPk(id, {
        include: [
            {
                model: userRepository,
                attributes: ['username', 'firstName', 'lastName', 'imgSrc'],
                as: 'author',
            },
            {
                model: userRepository,
                attributes: ['username', 'firstName', 'lastName', 'imgSrc'],
                as: 'answerTo',
            },
        ],
    });
}

export function findBasicById(id: string) {
    return subCommentRepository.findByPk(id);
}