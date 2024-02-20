
//   let remainingSeats = 41;
//   let selectedSeats = [];
//   let totalPrice = 0;

//   function toggleSeat(seatId) {
//     const seatButton = document.getElementById(seatId);
//     if (selectedSeats.includes(seatId)) {
//       seatButton.classList.remove('selected');
//       selectedSeats = selectedSeats.filter(item => item !== seatId);
//       remainingSeats++;
//       totalPrice -= 550;
//     } else {
//       if (selectedSeats.length < 4 && remainingSeats > 0) {
//         seatButton.classList.add('selected');
//         selectedSeats.push(seatId);
//         remainingSeats--;
//         totalPrice += 550;
//       } else {
//         alert("You can only select up to four seats.");
//       }
//     }
//     document.getElementById('remainingSeats').innerText = `Remaining Seats: ${remainingSeats}`;
//     document.getElementById('totalPrice').innerText = `Total Price: ${totalPrice} TK`;
//   }

//   function applyCoupon() {
//     const couponInput = document.getElementById('couponInput').value;
//     if (couponInput === 'new50' && selectedSeats.length === 4) {
//       totalPrice *= 0.5; // Apply 50% discount
//       document.getElementById('totalPrice').innerText = `Total Price: ${totalPrice} TK (50% discount applied)`;
//     } else {
//       alert("Coupon code is not valid or you must select four seats to apply the coupon.");
//     }
//   }

let remainingSeats = 41;
  let selectedSeats = [];
  let seatPrice = 550;
  let totalPrice = 0;

  function toggleSeat(seatId) {
    const seatButton = document.getElementById(seatId);
    if (selectedSeats.includes(seatId)) {
      seatButton.classList.remove('selected');
      selectedSeats = selectedSeats.filter(item => item !== seatId);
      remainingSeats++;
      totalPrice -= seatPrice;
    } else {
      if (selectedSeats.length < 4 && remainingSeats > 0) {
        seatButton.classList.add('selected');
        selectedSeats.push(seatId);
        remainingSeats--;
        totalPrice += seatPrice;
      } else {
        alert("You can only select up to four seats.");
      }
    }
    document.getElementById('remainingSeats').innerText = `Remaining Seats: ${remainingSeats}`;
    document.getElementById('selectedSeats').innerText = `Seat: ${selectedSeats.length}`;
    document.getElementById('totalPrice').innerText = `Total Price: ${totalPrice} TK`;
}
  


// document.getElementById("seatButton").addEventListener("click", function() {
//     // Select the tags you want to hide
//     var tagsToHide = document.querySelectorAll(".fou");

//     // Loop through the selected tags and hide them
//     tagsToHide.forEach(function(tag) {
//         tag.style.visibility = "hidden";
//     });
// });