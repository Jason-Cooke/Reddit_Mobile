/*
Used to display relative time i.e 
Input: time post was created
Output: relative time to now. created => 4 hours ago, 10 minutes ago, 2 months ago
*/

export const timeDifference = (previous) => {
    current = Date.now();
    previous = previous * 1000;
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
         return Math.round(elapsed/1000) + ' seconds ago';   
    }

    else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + ' minutes ago';   
    }

    else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + ' hours ago';   
    }

    else if (elapsed < msPerMonth) {
        var days = Math.round(elapsed/msPerDay)
        if (days < 2) {
          return days + ' day ago'; 
        } else {
          return days + ' days ago';
        }
    }

    else if (elapsed < msPerYear) {
        return Math.round(elapsed/msPerMonth) + ' months ago';   
    }

    else {
        return Math.round(elapsed/msPerYear ) + ' years ago';   
    }
}


export const validateImage = (thumbnail) => {
    // const { thumbnail } = this.props.item.data;
    let len = thumbnail.length;
    let hasJpgOrPng = thumbnail.slice(len - 3, len) === 'jpg' || thumbnail.slice(len - 3, len) === 'png'
    if (hasJpgOrPng) {
        return {uri: thumbnail}
    } else {
        return require('../images/camera-icon-33.png');
    }
}