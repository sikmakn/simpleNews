import AWS from 'aws-sdk';
import bufferToStream from 'buffer-to-stream';

const {AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, AWS_BUCKET_NAME} = process.env;

AWS.config = new AWS.Config({
    region: AWS_REGION,
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
});
const s3 = new AWS.S3();

export async function saveFile({key, stream}: { stream: any, key: string }): Promise<string> {
    const {Location} = await s3.upload({
        Body: stream,
        Key: key,
        Bucket: AWS_BUCKET_NAME as string
    }).promise();
    return Location;
}

export async function create({key, file}: { key: string, file: Express.Multer.File }) {
    return await saveFile({key, stream: bufferToStream(file.buffer)});
}

export async function update({key, file}: { key: string, file?: Express.Multer.File }) {
    if (!file) return;

    await removeFile(key);
    return await create({key, file});
}

export async function saveFiles(filesData: { stream: any, key: string }[]): Promise<string[]> {
    const promises = filesData.map(({key, stream}) => {
        const writeStream = new stream.PassThrough();
        stream.pipe(writeStream);
        return s3.upload({
            Body: writeStream,
            Key: key,
            Bucket: AWS_BUCKET_NAME as string
        }).promise();
    });
    return (await Promise.all(promises)).map(({Location}) => (Location));
}

export async function removeFiles(keys: string[]) {
    // @ts-ignore
    return await s3.deleteObjects({
        Bucket: AWS_BUCKET_NAME as string,
        Delete: keys.map(key => ({Key: key}))
    }).promise();
}

export async function removeFile(key: string) {
    // @ts-ignore
    return await s3.deleteObject({
        Bucket: AWS_BUCKET_NAME as string,
        Key: key
    }).promise();
}