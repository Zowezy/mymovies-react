export function calcAge(date,type) {
    const year = (new Date()).getFullYear();
    const age = year - date.substr(0,4);
    return {
        date,
        age
    }
}