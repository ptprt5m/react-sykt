const WeatherData = {
    windDeg: {
        0: 'северо-восток',
        1: 'юго-восток',
        2: 'юго-запад',
        3: 'северо-запад',
        4: 'все четыре стороны :)'
    }
}

export function declOfNum(n, text_forms) {
    n = Math.abs(n) % 100;
    let n1 = n % 10;

    if (n > 10 && n < 20) { return text_forms[0]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 === 1) { return text_forms[2]; }
    return text_forms[0];
}

export function windDegMaker(windDeg) {
    if (0 < windDeg < 90) {
        return WeatherData.windDeg[0]
    } else if (91 < windDeg < 180) {
        return WeatherData.windDeg[1]
    } else if (181 < windDeg < 270) {
        return WeatherData.windDeg[2]
    } else if (271 < windDeg < 360) {
        return WeatherData.windDeg[3]
    } else {
        return WeatherData.windDeg[4]
    }
}

export function getTodayDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    return today = yyyy + '-' + mm + '-' + dd;
}

export function getTomorrowDate() {
    let today = new Date()
    let tomorrow = new Date(today)

    let dd = String(tomorrow.getDate() + 1).padStart(2, '0');
    let mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    let yyyy = tomorrow.getFullYear();

    return tomorrow = yyyy + '-' + mm + '-' + dd;
}

export function getFiveDays() {
    const date = new Date();
    const dates = [];
    for (let i = 0; i < 5; i++) {
        dates.push(date.toLocaleDateString('en-CA'));
        date.setDate(date.getDate() + 1);
    }
    return dates
}

export default WeatherData