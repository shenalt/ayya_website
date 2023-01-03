export const getProperDay = () => {
    let day;
    const theDate = new Date();

    if(theDate.getDay() < 1 || theDate.getDay() > 3){
        day = theDate.getDate();
    } else if(theDate.getDate() < 29){
        if(theDate.getDay() === 1){
            day = theDate.getDate() + 2;
        }
        if(theDate.getDay() === 2){
            day = theDate.getDate() + 1;
        }
    } else {
        day = theDate.getDate();
    }

    return day;
};