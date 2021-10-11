


$("#clear").animate(
  {
    "margin-left": "0.5px",
    "transition": "5s",
  }

).animate({ "transition": "0s" })

$("#divide").animate(
  {
    "margin-left": "0.5px",
    "transition": "2s",
  }

).animate({ "transition": "0s" })

$("#deletenumber").animate(
  {
    "margin-left": "0.5px",
    "transition": "4s",
  }

).animate({ "transition": "0s" })


$("#multiply").animate(
  {
    "margin-left": "0.5px",
    "transition": "3s",
  }

).animate({ "transition": "0s" })


$("#one").animate(
  {
    "margin-left": "0.5px",
    "transition": "2s",

  }

).animate({ "transition": "0s" })

$("#two").animate(
  {
    "margin-left": "0.5px",
    "transition": "4s",
  }

).animate({ "transition": "0s" })

$("#three").animate(
  {
    "margin-left": "0.5px",
    "transition": "3s",
  }

).animate({ "transition": "0s" })


$("#add").animate(
  {
    "margin-left": "0.5px",
    "transition": "5s",
  }

).animate({ "transition": "0s" })

$("#four").animate(
  {
    "margin-left": "0.5px",
    "transition": "4s",
  }

).animate({ "transition": "0s" })

$("#five").animate(
  {
    "margin-left": "0.5px",
    "transition": "2s",
  }

).animate({ "transition": "0s" })

$("#six").animate(
  {
    "margin-left": "0.5px",
    "transition": "5s",
  }

).animate({ "transition": "0s" })


$("#deduct").animate(
  {
    "margin-left": "0.5px",
    "transition": "3s",
  }

).animate({ "transition": "0s" })


$("#seven").animate(
  {
    "margin-left": "0.5px",
    "transition": "4s",
  }

).animate({ "transition": "0s" })

$("#eight").animate(
  {
    "margin-left": "0.5px",
    "transition": "5s",
  }

).animate({ "transition": "0s" })

$("#nine").animate(
  {
    "margin-left": "0.5px",
    "transition": "3s",
  }

).animate({ "transition": "0s" })

$("#equal").animate(
  {
    "margin-left": "0.5px",
    "transition": "2s",
  }

).animate({ "transition": "0s" })


$("#zero").animate(
  {
    "margin-left": "0.5px",
    "transition": "3s",
  }

).animate({
  "width": "284px",
  "transition": "8s",


}).animate({ "transition": "0s" })


$(".windows").animate(
  {
    "margin-left": "494px",
    "transition": "2s",
  }

).animate({
  "width": "380px",
  "transition": "8s",

})





let operatorA = "";
let operatorB = "";
let operation = "";


$("#one").click(() => {
  $("#text").append("1")

})

$("#two").click(() => {

  $("#text").append("2")
})

$("#three").click(() => {

  $("#text").append("3")
})

$("#four").click(() => {

  $("#text").append("4")
})

$("#five").click(() => {

  $("#text").append("5")
})

$("#six").click(() => {

  $("#text").append("6")
})

$("#seven").click(() => {

  $("#text").append("7")
})

$("#eight").click(() => {

  $("#text").append("8")
})

$("#nine").click(() => {

  $("#text").append("9")

})

$("#zero").click(() => {

  $("#text").append("0")
})

$("#clear").click(() => {
  $("#text").html("")
})

$("#deletenumber").click(() => {
  let text = $("#text").html()
  let textfinish = text.slice(0, -1)
  $("#text").html(textfinish)

})

$("#add").click(() => {
  operatorA = $("#text").html()
  operation = "+"
  clean()
})

$("#deduct").click(() => {
  operatorA = $("#text").html()
  operation = "-"
  clean()
})

$("#multiply").click(() => {
  operatorA = $("#text").html()
  operation = "*"
  clean()
})

$("#divide").click(() => {
  operatorA = $("#text").html()
  operation = "/"
  clean()
})
$("#equal").click(() => {
  operatorB = $("#text").html()
  result()
  oldtext()
  operatorA = $("#text").html()
})

const oldtext = () => {
  $("#textold").append(operatorA, operation, operatorB)

}
const clean = () => {

  $("#text").html("")
  $("#textold").html("")

}


const result = () => {
  resultaccount = 0
  switch (operation) {
    case "+":
      resultaccount = parseFloat(operatorA) + parseFloat(operatorB)
      break;
    case "-":
      resultaccount = parseFloat(operatorA) - parseFloat(operatorB)
      break;
    case "/":
      resultaccount = parseFloat(operatorA) / parseFloat(operatorB)
      break;
    case "*":
      resultaccount = parseFloat(operatorA) * parseFloat(operatorB)
      break;



  }

  $("#text").html(resultaccount)
}






