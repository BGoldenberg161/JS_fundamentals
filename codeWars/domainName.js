//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.
const domainName = (url) => {
    let domainName = "";
    //find & remove protocol (http, ftp, etc.) and get hostname
    if (url.indexOf("//") > -1) {
        domainName = url.split('/')[2];
    }
    else {
        domainName = url.split('/')[0];
    }
    //find & www., .com, etc.

    //two .'s
    const secondDotLoc = domainName.indexOf(".", domainName.indexOf(".") + 1);
    let firstDotLoc = domainName.indexOf(".");
    if(secondDotLoc > -1){
        if(firstDotLoc > 4){
            domainName = domainName.split(".")[0];
        }else{
            domainName = domainName.split(".")[1];
        }
    }
    console.log(domainName);
    //one .
    if(domainName.indexOf(".") > -1){
        if(domainName.indexOf(".") >= 3 ){
            domainName = domainName.split(".")[0];
        }else {
            domainName = domainName.split(".")[1];
        }
    }
    
    return domainName;
}

console.log(domainName("http://google.com"));
console.log(domainName("www.xakep.ru"));
// console.log(domainName("http://www.zombie-bites.com"));
// console.log(domainName("http://github.com/carbonfive/raygun"));
