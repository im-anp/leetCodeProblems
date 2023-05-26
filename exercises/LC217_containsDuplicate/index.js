const containsDuplicate = nums => {
    const visitedNumber = {};

    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(visitedNumber[num]) {
            return true;
        } else {
            visitedNumber[num] = true
        }
    }
    return false;
};

module.exports = containsDuplicate;
