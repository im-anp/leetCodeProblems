const productExceptSelf = nums => {
    let output = new Array(nums.length).fill(1);
    let product = 1;

    //Multiple from the left
    for(let i = 0; i < nums.length; i++) {
        output[i] = output[i] * product;
        product = product * nums[i]
    }
    /*
    iteration 1 : output = [1,1,1,1], product = 1
    iteration 2: output = [1, 1, 1,1], product = 2
    iteration 3: output = [1, 1, 2,1], product = 6
    iteration 4: output = [1, 1, 2, 6], product = 24
    */

    //Multiple from the right
    product = 1;
    for(let j = nums.length - 1; j >= 0; j-- ) {
        output[j] = output[j] * product;
        product = product * nums[j]
    }

     /*
    iteration 1 : output = [1, 1, 2, 6], product = 4
    iteration 2: output = [1,1, 8, 6], product = 12
    iteration 3: output = [1, 12, 8,6], product = 24
    iteration 4: output = [24, 12, 8,6],, product = 24
    */

    return product

};

module.exports = productExceptSelf;


/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

*/


