// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

function formatDuration (seconds) {
    if(seconds == 0) return "now";
    
    let result = [];
    let plural = ["years", "days", "hours", "minutes", "seconds"];
    let singular = ["year", "day", "hour", "minute", "second"];
    const years = Math.floor(seconds/(60*60*24*365));
    const days = Math.floor((seconds - (years*(60*60*24*365)))/(60*60*24));
    const hours = Math.floor((seconds - (years*(60*60*24*365)) - days * (60*60*24))/(60*60));
    const minutes = Math.floor((seconds - (years*(60*60*24*365)) - days * (60*60*24) - hours * (60*60))/60);
    const Fseconds = seconds - (years*(60*60*24*365)) - days*(60*60*24) - hours*(60*60) - minutes*(60);
    let values = [years, days, hours, minutes, Fseconds];

    let counter = 0;
    values.forEach((v, i) => {
        if(v == 1){
            result[counter] = v + " " + singular[i];
            counter++;
        }
        if(v > 1){
            result[counter] = v + " " + plural[i];
            counter++;
        }  
    });
    let output = "";
    if(result.length > 1){
        result.forEach((r, i) => {
            if(r != ""){
                if(i == 0){
                    output += r;
                }else if(i == result.length - 1){
                    output += " and " + r;
                }else {
                    output += ", " + r;
                }
            }
            console.log(output);
        })
    }else{
        return result[0];
    }

    return output.trim();
}

console.log(formatDuration(366));