function spiralOrder(matrix) {
    const spiralArr = [];
    if(matrix.length === 0) {
        return spiralArr;
    }

    let top = 0;
    let bottom = matrix.length -1;
    let left = 0;
    let right = matrix[0].length - 1;
    let dir = "right"

    while(top <= bottom && left <= right) {
        switch(dir) {
            case 'right':
                for(let i = left; i <= right; i++) {
                    spiralArr.push(matrix[top][i])
                }
                top++;
                dir = "down"
                break;
            case "down":
                for(let i = top; i <= bottom; i++) {
                    spiralArr.push(matrix[i][right])
                }
                right--;
                dir = "left"
                break;
            case "left":
                for(let i = right; i >= left; i--) {
                    spiralArr.push(matrix[bottom][i])
                }
                bottom--;
                dir = "up"
                break;
            case "up":
                for(let i = bottom; i >= top; i--) {
                    spiralArr.push(matrix[i][left])
                }
                left++;
                dir = "right"
                break;

        }
    }
    return spiralArr
}

module.exports = spiralOrder;
