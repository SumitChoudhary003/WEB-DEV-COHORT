function countofoccurences(str){
    const originalLength = str.length;
    const modifiedstr = str.replaceAll("Alpha", "");
    const newLength = modifiedstr.length;
    const count = (originalLength -newLength) / "Alpha".length;
    return count;
}
const input = "Aplha is better. Alpha loves coding. Alpha";
console.log(countofoccurences(input));
//ans 2