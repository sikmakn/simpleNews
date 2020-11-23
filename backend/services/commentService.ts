import connection from '../db/connection';
import Comment from '../db/models/Comment';
import User from '../db/models/User';

const commentRepository = connection.getRepository(Comment);
const userRepository = connection.getRepository(User);

export function findMany(oneNewsId: string) {
    return commentRepository.findAll({
        where: {oneNewsId},
        raw: true,
        include:[{
            model:userRepository,
            attributes: ['username', 'firstName', 'lastName', 'imgSrc'],
        }],
    });
}

export function create(comment: {
    authorId: string
    text: string
    oneNewsId: string
}) {
    return commentRepository.create(comment);
}

export function update(comment: {
    id: string
    text: string
}) {
    return commentRepository.update(comment, {where: {id: comment.id}});
}

export function findById(id: string) {
    return commentRepository.findByPk(id, {
        include:[{
            model:userRepository,
            attributes: ['username', 'firstName', 'lastName', 'imgSrc'],
        }]
    });
}

export function findByIdBasic(id:string){
    return commentRepository.findByPk(id);
}