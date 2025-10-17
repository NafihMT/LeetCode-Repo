/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const merge = [...nums1, ...nums2].sort((a, b) => a - b)
    let len = Math.floor(merge.length / 2)

    if (merge.length % 2 === 0) {
        return (merge[len - 1] + merge[len]) / 2
    }
    else {
        return merge[len]
    }



    // let n = [...nums1, ...nums2].sort((a, b) => a - b)
    // let m = Math.floor(n.length / 2)
    // if (n.length % 2 == 0) {
    //     return (n[m - 1] + n[m]) / 2
    // }
    // else {
    //     return n[m]
    // }

};