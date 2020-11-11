import {ValueObj} from '../components/checkInput';

export default function checkValue(valueObj?: ValueObj): boolean {
    return Boolean(valueObj && !valueObj.errors && valueObj.value);
}

export function checkManyValue(valueObjs: (ValueObj | undefined)[]) {
    return valueObjs.reduce((check, v) => check && checkValue(v), true);
}