function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
    if(nums.length === 1) {
        return nums[0];
    }

    if(nums[left] < nums[right]) {
        return nums[left];
    }

    while(left <= right) {
        const mid = Math.floor((left + right)/2);

        const leftVal = nums[left];
        const midVal = nums[mid];
        const leftOfMid = nums[mid - 1];
        const rightOfMid = nums[mid + 1];

        if(midVal > rightOfMid) {
            return rightOfMid
        } else if(leftOfMid > midVal) {
            return midVal;
        }

        if(midVal > leftVal) {
            left = mid + 1;
        } else {
            right = mid - 1
        }


    }
}

module.exports = findMin;

/*
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

*/
