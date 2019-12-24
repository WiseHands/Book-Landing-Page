let feedbackUrl = 'js/feedback.json';
let feedbackList;
let index = 0;
fetch(feedbackUrl, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
}).then(function (response) {
    console.log(response)
    return response.json();
}).then(function (data) {
    console.log(data);
    feedbackList = data;
    renderFeedback(index);
});

function showPrevious() {
    console.log('clicked')
    console.log(feedbackList);
    if (index === 0) {
        index = feedbackList.length - 1;
    } else {
        index = index - 1;
    }

    renderFeedback(index);
}

function showNext() {
    console.log('clicked')
    console.log(feedbackList);
    if (index === feedbackList.length - 1) {
        index = 0;
    } else {
        index = index + 1;
    }
    renderFeedback(index);
}

function renderFeedback(index) {
    document.querySelector(".review-sign p").innerHTML = feedbackList[index].authorName;
    document.getElementById("reviewOne").style.background = "url('" + feedbackList[index].authorPhoto + "') no-repeat";
    document.getElementById("reviewOne").style.backgroundSize = "cover";
    document.querySelector(".review-sign p:nth-child(2)").innerHTML = feedbackList[index].authorDesc;
    document.querySelector(".review1 p").innerHTML = feedbackList[index].authorReview;
}