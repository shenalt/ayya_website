export const getProperDay = () => {
    let day;
    const theDate = new Date();

    if(theDate.getDay() > 3){
        day = theDate.getDate();
    } else if(theDate.getDate() < 27){
        if(theDate.getDay() === 0){
            day = theDate.getDate() + 4;
        }
        if(theDate.getDay() === 1){
            day = theDate.getDate() + 3;
        }
        if(theDate.getDay() === 2){
            day = theDate.getDate() + 2;
        }
        if(theDate.getDay() === 3){
            day = theDate.getDate() + 1;
        }
        else {
            day = theDate.getDate();
        }
    } else {
        day = theDate.getDate();
    }

    return day;
};