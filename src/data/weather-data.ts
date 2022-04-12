const WeatherData = {
    windDeg: {
        0: 'северо-восток',
        1: 'юго-восток',
        2: 'юго-запад',
        3: 'северо-запад',
        4: 'все четыре стороны :/'
    }
}

export function declOfNum(n: number, text_forms: Array<any>) {
    n = Math.abs(n) % 100;
    let n1 = n % 10;

    if (n > 10 && n < 20) { return text_forms[0]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 === 1) { return text_forms[2]; }
    return text_forms[0];
}

export function windDegMaker(windDeg: number | null): string {
    // @ts-ignore
    if (0 < windDeg < 90) {
        return WeatherData.windDeg[0]
        // @ts-ignore
    } else if (91 < windDeg < 180) {
        return WeatherData.windDeg[1]
        // @ts-ignore
    } else if (181 < windDeg < 270) {
        return WeatherData.windDeg[2]
        // @ts-ignore
    } else if (271 < windDeg < 360) {
        return WeatherData.windDeg[3]
    } else {
        return WeatherData.windDeg[4]
    }
}

export function getTodayDate() {
    let today: Date | string = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    return today = yyyy + '-' + mm + '-' + dd;
}

export function getTomorrowDate() {
    let today = new Date()
    let tomorrow: Date | string = new Date(today)

    let dd = String(tomorrow.getDate() + 1).padStart(2, '0');
    let mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    let yyyy = tomorrow.getFullYear();

    return tomorrow = yyyy + '-' + mm + '-' + dd;
}

export function getFiveDays() {
    const date = new Date(getTomorrowDate());
    const dates = [];
    for (let i = 0; i < 5; i++) {
        dates.push(date.toLocaleDateString('en-CA'));
        date.setDate(date.getDate() + 1);
    }
    return dates
}

export default WeatherData