document.addEventListener('DOMContentLoaded', function() {
  const options = document.querySelectorAll('.bundle-option');
  const total = document.querySelector('.total');

  // Initially set total to $0.00
  total.textContent = "Total : $0.00 USD";

  options.forEach(option => {
    option.addEventListener('click', () => {
      // Close all bundles first
      options.forEach(o => {
        o.classList.remove('active');
        o.querySelector('input').checked = false;
      });

      // Open clicked bundle
      option.classList.add('active');
      option.querySelector('input').checked = true;

      // Update total price
      total.textContent = "Total : " + option.dataset.price;
    });
  });
});