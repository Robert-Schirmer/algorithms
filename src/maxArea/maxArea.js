/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {
    let max = 0;
    let i = 0, j = height.length - 1;
    let minHeight, width;
    
    if (height.length === 2) return Math.min(height[0], height[1]);
    
    while (i < j) {
        minHeight = Math.min(height[i], height[j]);
        width = j - i;
        
        max = Math.max(max, minHeight * width);
        
        height[i] < height[j] ? i++ : j--;
        }
    
    return max;
};

export default maxArea;