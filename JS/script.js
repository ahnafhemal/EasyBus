//====common  Use  all variables ====//

const availableSeat =document.getElementById('availableSeat');
const selectedTotalSeat=document.getElementById('selectedSeatCount');

const seats=document.getElementsByClassName('seat');
const tBody=document.getElementById('tbody')
const totalPriceElement=document.getElementById('totalPrice');
const grandTotalPriceElement=document.getElementById('grandTotal');
const nextButton=document.getElementById('processBtn');
const couponInputField=document.getElementById('couponInput');
const couponButton=document.getElementById('couponButton')
const phoneNumber=document.getElementById('phoneNumber');
const couponDiv=document.getElementById('couponDiv');
const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modalCloseBtn");

//====common Use  all variables  ====//


let totalAvailableSeat=parseInt(availableSeat.innerText);



let seatCounter=0;
let totalPrice=0;
let grandTotalPrice=0;


for(const seat of seats) {
   seat.addEventListener('click',function(e){

    if(seatCounter<4){

      seat.classList.add("bg-[#1dd100]", "text-white");
      seat.classList.remove("bg-[#F7F8F8]", "text-black");
      seat.disabled=true;

      const seatNumber =e.target.innerText;

      seatCounter++;  
     
      selectedTotalSeat.innerText=seatCounter;

      totalAvailableSeat--;

      availableSeat.innerText=totalAvailableSeat;


    // ticket details list 


      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");

      td1.innerText = seatNumber ;
      td2.innerText = "Economy";
      td3.innerText= 550;
      td3.classList.add("text-right");

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);

      tBody.appendChild(tr);

// ticket details list 

// ticket price count

     let tickets =550;
    
     const totalTicketPrice=parseFloat(totalPriceElement.innerText);
     const totalPrice=totalTicketPrice+tickets

     totalPriceElement.innerText=totalPrice;
   grandTotalPriceElement.innerText=totalPrice;


    // ticket price count

// coupon Element Active
     if(seatCounter===4){
        couponInputField.disabled=false;
        couponButton.disabled=false;
        couponButton.classList.add("btn");  
     }


      // coupon Element Active


         if(seatCounter>0 && phoneNumber.value !== "" ){
            activateNextButton()
         }else{
            disableNextButton()
         }
        
    } else if(seatCounter>=4){
      alert("You already booked 4 seats")
    }
   })
}

// coupon field & button setup

couponButton.addEventListener("click",function(){
   couponNumber=couponInputField.value;
   if (couponNumber === "NEW15") {
      applyDiscount(15);
   } else if (couponNumber === "Couple 20") {
      applyDiscount(20);
   } else {
      alert("Invalid Coupon Code");
   }
})

// coupon field & button setup

// next button functionality start

function activateNextButton(){
   nextButton.disabled=false;
   nextButton.classList.add(
      "bg-[#1dd100]",
      "text-black"
   )
}

function disableNextButton(){
   nextButton.disabled=true;
   nextButton.classList.remove(
      "bg-[#1dd100]",
      "text-black"
   )
}

function checkOut(){
   console.log('Hi')
}

phoneNumber.addEventListener("keyup", function (e) {
   if (seatCounter > 0 && phoneNumber.value !== "") {
      activateNextButton();
   } else {
      disableNextButton();
   }
});


// next button functionality end


// coupon calculation

function applyDiscount(discountPercent){
   const totalPrice=totalPriceElement.innerText;
  const discount=discountPercent/100;
  const discountAmount=totalPrice*discount;
  const withDiscountTotalPrice=totalPrice-discountAmount;

  grandTotalPriceElement.innerText=withDiscountTotalPrice

  couponDiv.classList.add("hidden") 
}



// modal open close

function showModal() {
   modal.classList.remove("hidden");
   modal.classList.add("fixed");

}

// for closing the modal
function closeModal() {
   modal.classList.remove("fixed");
   modal.classList.add("hidden");
   location.reload();
}