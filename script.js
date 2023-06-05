const bill_amt = document.getElementById("amt")
const tip_percentage = document.getElementById("tip_per")
const final_amt = document.getElementById("each_split_amt")

const folks_main = document.getElementById("adj_main")

increasePeople = () =>
{
    let c = folks_main.innerText
    c++
    folks_main.innerText = c
    calculateBill()
}

decreasePeople = () =>
{
    let c = folks_main.innerText
    c--
    if(c<1)
        c = 01
    folks_main.innerText = c
    calculateBill()
}

calculateBill = () =>
{
    let amt = bill_amt.value
    let percentage = tip_percentage.value
    let tip = (percentage/100) * amt
    console.log("original_amt: ", amt)
    console.log("tip: ", tip)

    let folks = folks_main.innerText
    let pre_dutch = Number(amt) + Number(tip)
    console.log("pre: ",pre_dutch)
    let dutch = pre_dutch/folks
    dutch = dutch.toFixed(2)

    final_amt.innerText = dutch
}