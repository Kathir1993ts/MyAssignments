let browserName = "Chrome"
let testType = "regression"

launchBrowser(browserName)
runTests(testType)

function launchBrowser (browserName){  
    if (browserName == "Chrome") {
        console.log("The browser name is Chrome")
    }
    else{
        console.log("The browser name is " +browserName)
    }
}

function runTests(testType) {
 switch (testType) {
    case "smoke":
        console.log("The test type is smoke")
        break;
    case "sanity":
        console.log("The test type is sanity")
        break;
    case "regression":
        console.log("The test type is regression")
        break;
    default:
        console.log("The test type is smoke")
        break;
 }   
}

