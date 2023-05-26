const threeSum = nums => {
    nums.sort((a,b) => a - b);
    let res = [];

    for(let i = 0; i < nums.length; i++) {
        const target = 0 - nums[i];
        let left = i + 1;
        let right = nums.length - 1;

        if(i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        while(left < right) {
            if(nums[left] + nums[right] === target) {
                res.push([num[i], nums[left], nums[right]])
                left++
                while(nums[left] === nums[left - 1]) {
                    left++
                }
            }
            else if(nums[left] + nums[right] < target) {
                left++
            } else {
                right--
            }
        }
    }
    return res;

};

module.exports = threeSum;

/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

*/
