module.exports = function (source) {
    console.log('custom loader source = ', source)
    return `export default {
        property: "value"      
    }`
}