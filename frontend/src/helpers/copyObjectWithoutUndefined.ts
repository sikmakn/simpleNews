export default function copyObjectWithoutUndefined(object: any) {
    const result: any = {};
    Object.keys(object).forEach(key => {
        if (object[key] !== undefined) result[key] = object[key];
    })
    return result;
}