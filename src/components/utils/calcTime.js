export function calcTime(time) {
    const hours = Math.floor(time/60);
    const min = (time-(hours*60));
    return `${hours}ч ${min}мин`;
}
