/* Sample function that returns boolean in case the browser is Internet Explorer*/
function isIE() {
    ua = navigator.userAgent;
    /* MSIE used to detect old browsers and Trident used to newer ones and Edge is used for Edge*/
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1 || ua.indexOf("Edge/") > -1;
    
    return is_ie; 
}

/* Create an alert to show if the browser is IE or not */
if (isIE()){
    document.querySelector('body').style.display = "none";
    alert('This website is not supported in your current Browser. Please try some other browser.');
}