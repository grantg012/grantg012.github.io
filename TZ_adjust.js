function tzToOffset(tzStr) {
    if(tzStr == "EST") {
        return "-05:00";
    } else if(tzStr == "CST") {
        return "-06:00";
    } else if(tzStr == "MST") {
        return "-07:00";
    } else if(tzStr == "PST") {
        return "-08:00";
    } else {
        const isDST = new Date().getTimezoneOffset() != new Date("1970-01-01").getTimezoneOffset();
        if(tzStr == "EDT") {
            return isDST ? "-04:00" : "-05:00";
        } else if(tzStr == "CDT") {
            return isDST ? "-05:00" : "-06:00";
        } else if(tzStr == "MDT") {
            return isDST ? "-06:00" : "-07:00";
        } else if(tzStr == "PDT") {
            return isDST ? "-07:00" : "-08:00";
        } else {
            return "INVALID"
        }
    }
}


function formatTime(givenDate) {
    const rawHours = givenDate.getHours();
    const hours = rawHours == 0 ? "12" : (rawHours % 12).toString();
    return hours + ":" + givenDate.getMinutes() + (rawHours >= 12 ? " PM " : " AM ") +
        givenDate.toLocaleDateString(undefined, {day:'2-digit',timeZoneName: 'long' }).substring(4)
}

function nowBase() {
    const now = new Date();
    return now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + 'T';
}

function thing() {
    const url = new URL(window.location.href);
    if(url.search.startsWith('?')) {
        const query = url.search.substring(1);
        const givenDateStr = nowBase() + query.substring(0, 5) + ":00" + tzToOffset(query.substring(5));
        // console.log(givenDateStr);
        const givenDate = new Date(givenDateStr);
        // console.log(givenDate);

        if(!isNaN(givenDate)) {
            const formattedTime = formatTime(givenDate);
            document.getElementById("pDatetimeOutput").innerHTML = formattedTime;
            document.getElementById('meta_description').setAttribute('content', formattedTime);
        } else {
            document.getElementById("pDatetimeOutput").innerHTML = "Sorry, the date entered is invalid.";
        }
    }
}

function newDatetimePreview() {
    const urlBase = window.location.href.split('?')[0];
    const date = new Date(document.getElementById("inpDatetime").value);
    location.href = urlBase + "?" + date.toISOString();
}

window.onload = thing;
