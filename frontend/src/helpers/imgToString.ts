export default function imgToString(img?: File | string) {
    if (!img) return '';
    if (typeof img === 'string') return img;
    return URL.createObjectURL(img);
}