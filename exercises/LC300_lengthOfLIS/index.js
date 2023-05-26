
// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

function lengthOfLIS(nums) {
    if(nums.length === 0) {
        return 0;
    }

    let dpsubeqence = new Array(nums.length).fill(1);
    let maxSoFar = 1;

    for(let j = 1; j < nums.length; j++) {
        for (let i = 0; i < j; i++) {
            if(nums[j] > nums[i]) {
                dpsubeqence[j] = Math.max(dpsubeqence[i] + 1, dpsubeqence[j])
            }
        }
        maxSoFar = Math.max(maxSoFar, dpsubeqence[j]);
    }

    return maxSoFar;
}

module.exports = lengthOfLIS;

/*
Suppose we have an input array of integers nums = [10, 9, 2, 5, 3, 7, 101, 18]. We want to find the length of the longest increasing subsequence in this array.

First, the function checks if the length of the input array is zero. Since the length of nums is not zero, the function proceeds.

Next, the function initializes a new array dpsubeqence with the same length as the input array nums, which is 8. The dpsubeqence array is filled with the value 1. This array will be used to keep track of the length of the longest increasing subsequence that ends at each position in the input array. So, the dpsubeqence array at this point is [1, 1, 1, 1, 1, 1, 1, 1].

The function then initializes a variable maxSoFar to 1, which will be used to keep track of the maximum length of any increasing subsequence seen so far.

Now, the function loops over each element in the input array, starting from the second element (index 1). For each element at index j, the function loops over all the previous elements in the input array, from index 0 to j-1. For example, when j=1, the inner loop will run from i=0 to i=1-1=0.

At j=1 and i=0, the function checks if nums[j] > nums[i], which is 9 > 10, which is false, so nothing happens.

At j=2, the function compares nums[j] which is 2 with nums[i] for each i in 0, 1, and since 2 > 10 is false, and 2 > 9 is false, nothing happens.

At j=3, the function compares nums[j] which is 5 with nums[i] for each i in 0, 1, 2. The comparison 5 > 2 is true, so the function updates the dpsubeqence array at index j=3 to be 2 (the maximum of dpsubeqence[0] + 1 and dpsubeqence[1] + 1), so the dpsubeqence array is now [1, 1, 1, 2, 1, 1, 1, 1].

Similarly, at j=4, the function updates dpsubeqence[4] to 2, since 3 > 2 and 3 > 5 are both false.

At j=5, the function compares nums[j] which is 7 with nums[i] for each i in 0, 1, 2, 3, 4. The comparison 7 > 2 is true, so the function updates dpsubeqence[5] to 3, which is the maximum of dpsubeqence[0] + 1, dpsubeqence[1] + 1, dpsubeqence[2] + 1, dpsubeqence[3] + 1, and */
