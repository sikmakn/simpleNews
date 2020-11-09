import crypto from 'crypto';

export default function () {
    return crypto.randomBytes(128).toString('base64');
}