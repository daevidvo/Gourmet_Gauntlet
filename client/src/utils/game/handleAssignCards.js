export const handleAssignCards = (handArr) => {
    let fieldArray = [];

    //need to edit to implement spices
    const selectCard = (card) => {
        if (fieldArray.length < 4) {
            fieldArray.push(card);
            handArr.splice(handArr.indexOf(card), 1);
        }
    }

    return fieldArray;
};