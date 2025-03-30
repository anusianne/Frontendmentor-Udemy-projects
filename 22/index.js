function calculateLoan() {
  const loanAmount = document.getElementById("loan-amount").value;
  const interestRate = document.getElementById("interest-rate").value;
  const monthToPay = document.getElementById("months-to-pay").value;
  const payment = document.getElementById("payment");

  interest = (loanAmount * (interestRate * 0.01)) / monthToPay;
  monthlyPayment = (loanAmount / monthToPay + interest).toFixed(2);

  payment.innerHTML = `Monthly Payment: ${monthlyPayment}`;
}
