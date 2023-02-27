module.exports = towelSort;
function towelSort (matrix) {
    if (!matrix) {
        return [];
    }
    return matrix.map((e, i) => (i % 2 === 0 || i === 0) ? e : e.reverse() ).flat();
}
