export default function makeFriendlyNumber(num: number) {
    if (num >= 1000000)
        return intlFormat(num / 1000000) + ' млн';
    if (num >= 1000)
        return intlFormat(num / 1000) + ' тыс';
    return intlFormat(num);

    function intlFormat(num: number) {
        return new Intl.NumberFormat().format(Math.round(num * 10) / 10);
    }
}