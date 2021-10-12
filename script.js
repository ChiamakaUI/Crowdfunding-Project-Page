let backProject = document.getElementById("back");
let closeBtn = document.getElementById("close_modal");
// let pledge_footer_button = document.querySelectorAll(".pledge_footer_button");
let bamboo = document.getElementById("bamboo");
let black = document.getElementById("black");
let pledge_buttons = document.querySelectorAll(".pledge-buttons");
let successBtn = document.getElementById("successBtn");
let mobileMenuButton = document.getElementById("first_child_img");
let mobileMenu = document.getElementById("mobile_menu");

// pledge_buttons.forEach((btn) =>
//   btn.addEventListener("click", calculatePledges)
// );

// function calculatePledges(e) {
//   e.preventDefault()
//   // let pledgeInput = document.querySelectorAll(".pledge-value-input");
//   let btnSibling = pledge_buttons[i].previousElementSibling;

//   // pledgeInput.forEach((input) => {
//   //   console.log(input.value);
//   //   if (input.value == 0) {
//   //     console.log('enter a value')

//   //   }
//   // })

//   // for (let index = 0; index < pledgeInput.length; index++) {
//   //   const element = pledgeInput[index];
//   //   console.log(element)
//   // }

//   console.log(btnSibling);

// }

for (let i = 0; i < pledge_buttons.length; i++) {
  pledge_buttons[i].addEventListener("click", function (e) {
    e.preventDefault();
    let btnSibling = pledge_buttons[i].previousElementSibling;
    let amount = document
      .getElementById("amount_backed")
      .innerHTML.replace(/,/g, "");
    let amountBacked = parseInt(amount, 10);
    let backers = document
      .getElementById("total_backers")
      .innerHTML.replace(/,/g, "");

    let backer = parseInt(backers, 10);

    let btnSiblingChild = btnSibling.querySelector(".pledge-value-input").value;

    let pledgeInput = parseInt(btnSiblingChild, 10);

    if (btnSiblingChild == 0) {
      alert("Please, enter an amount to continue");
      return;
    } else {
      let totalAmount = amountBacked + pledgeInput;
      let totalBackers = backer++;

      // console.log(totalBackers);

      document.getElementById("amount_backed").innerHTML = totalAmount;
      document.getElementById("total_backers").innerHTML = backer++;
    }

    if (e.target.id == "bamboo_continue") {
      decreaseBambooAmountleft();
    } else if (e.target.id == "black_continue") {
      decreaseBlackAmountLeft();
    }

    openSuccessModal(e);
  });
}

function decreaseBambooAmountleft() {
  let bambooAmount = document.querySelectorAll(".amount_left_bamboo");

  for (let i = 0; i < bambooAmount.length; i++) {
    let amount = bambooAmount[i].innerText;

    let amountNumber = parseInt(amount, 10);

    bambooAmount[i].innerText = amountNumber - 1;
  }
}

function decreaseBlackAmountLeft() {
  let blackAmount = document.querySelectorAll(".amount_left_black");

  for (let j = 0; j < blackAmount.length; j++) {
    let amount = blackAmount[j].innerText;

    let amountNumber = parseInt(amount, 10);

    blackAmount[j].innerText = amountNumber - 1;
  }
}

function openSuccessModal(e) {
  closeProductModal(e);
  e.preventDefault();
  // console.log("hey");

  let successModal = document.getElementsByClassName("success_modal")[0];
  successModal.style.display = "block";
}

successBtn.addEventListener("click", function () {
  let successModal = document.getElementsByClassName("success_modal")[0];
  successModal.style.display = "none";
});

bamboo.addEventListener("click", function () {
  showProductModal();

  let bambooPledge = document.getElementById("bamboo-stand");
  // console.log(bambooPledge)
  bambooPledge.classList.add("active_pledge");
  let checkMark = bambooPledge.querySelector(".checkmark");
  // console.log(checkMark)
  checkMark.classList.add("active");

  let bambooPledgeForm = bambooPledge.querySelector(".enter-pledge");
  // console.log(bambooPledgeForm)
  bambooPledgeForm.style.display = "block";
});

black.addEventListener("click", function () {
  showProductModal();

  let blackPledge = document.getElementById("black-stand");
  // console.log(blackPledge);
  blackPledge.classList.add("active_pledge");

  let checkMark = blackPledge.querySelector(".checkmark");
  // console.log(checkMark);
  checkMark.classList.add("active");

  let blackPledgeForm = blackPledge.querySelector(".enter-pledge");
  // console.log(blackPledgeForm);
  blackPledgeForm.style.display = "block";
});

backProject.addEventListener("click", showProductModal);

function showProductModal(e) {
  //   e.preventDefault();

  let modal = document.getElementsByClassName("product_modal")[0];
  modal.style.display = "block";

  openForm();
}

function openForm() {
  let pledge = document.getElementsByClassName("pledge_card_title");
  let i;

  for (i = 0; i < pledge.length; i++) {
    let container = pledge[i].parentElement;
    let checkMark = pledge[i].querySelector(".checkmark");

    pledge[i].addEventListener("click", function (e) {
      console.log(e.target);

      // let emptyPledge = container.getElementsByClassName("enter-pledge");
      checkMark.classList.add("active");
      container.classList.add("active_pledge");

      // let emptyPledge = container.querySelector(".enter-pledge");

      for (let j = 0; j < pledge.length; j++) {
        // const element = pledge[j];

        if (pledge[j] !== e.target) {
          let emptyPledge =
            pledge[j].parentElement.querySelector(".enter-pledge");
          if (emptyPledge) {
            emptyPledge.style.display = "none";
          }
        }
      }

      e.target.parentElement.querySelector(".enter-pledge").style.display =
        "block";
      // e.target.parentElement.classList.add("active_pledge");
    });
  }
}

closeBtn.addEventListener("click", closeProductModal);

function closeProductModal(e) {
  e.preventDefault();

  let modal = document.getElementsByClassName("product_modal")[0];
  modal.style.display = "none";
}

// pledge_footer_button.forEach((btn) =>
//   btn.addEventListener("click", openPledgeForm)
// );

// function openPledgeForm() {
//     console.log('hey')
// }

mobileMenuButton.addEventListener("click", displayMobileMenu, { once: true });

function displayMobileMenu(e) {
  e.preventDefault();
  console.log('heyy')

  let menu = document.createElement("ul");
  let menuItem1 = document.createElement("li");
  let menuItemText1 = document.createTextNode("About");
  let menuItem2 = document.createElement("li");
  let menuItemText2 = document.createTextNode("Discover");
  let menuItem3 = document.createElement("li");
  let menuItemText3 = document.createTextNode("Get Started");
 

  menuItem1.appendChild(menuItemText1);
  menuItem2.appendChild(menuItemText2);
  menuItem3.appendChild(menuItemText3);

  menu.appendChild(menuItem1);
  menu.appendChild(menuItem2);
  menu.appendChild(menuItem3);
  

  menu.classList.add("mobileMenuList");

  mobileMenu.appendChild(menu);
}