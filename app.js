
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
  