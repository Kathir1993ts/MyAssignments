let number = -26
numbertype (number)
function numbertype(number)
{
    if (number > 0) {
        console.log ("The number " +number+ " is a Positive number")
    }
    else if (number < 0) {
        console.log ("The number " +number+ " is a Negative number")
    }
    else if (number == 0) {
        console.log ("The number " +number+ " is a Neutral number")
    }
    else{
        console.log ("Enter valid input")
    }
}