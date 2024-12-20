const coding = ["js", "rb", "c++", "py", "java", "cpp"]
coding.forEach( function (val) {
    //console.log(val)
} )

coding.forEach( (item) => {
    //console.log(item)
} )

function printme (item){
    console.log(item)
}
//coding.forEach(printme)

coding.forEach((item, indexe, arr) => {
    //console.log(item, indexe, arr)
})

const mycoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    }    
]
mycoding.forEach( (item) => {
    console.log(item.languageName)
})