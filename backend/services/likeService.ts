import connection from '../db/connection';
import Like from '../db/models/Like';

const likeRepository = connection.getRepository(Like);

export function find(
    {authorId, oneNewsId}: {
        authorId: string
        oneNewsId: string
    }) {
    return likeRepository.findOne({where: {authorId, oneNewsId}});
}

export async function updateLike(
    likeData: {
        authorId: string
        oneNewsId: string
    }
) {
    if (await likeRepository.findOne({where: likeData})) {
        await likeRepository.destroy({where: likeData});
        return false;
    }
    await likeRepository.create(likeData);
    return true;
}