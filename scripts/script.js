const filterItems = document.querySelectorAll('.cars-filter li');
const carItems = document.querySelectorAll('.car');
const carsContent = document.getElementById('cars-content');

filterItems.forEach((item) => {
  item.onclick = () => {
    filterItems.forEach((el) => el.classList.remove('active'));
    item.classList.add('active');

    const filterText = item.textContent.toLowerCase();
    carItems.forEach((car) => {
      if (
        filterText === 'все марки' ||
        car.querySelector('h4').textContent.toLowerCase().includes(filterText)
      ) {
        car.style.display = 'flex';
      } else {
        car.style.display = 'none';
      }
    });
    carsContent.scrollIntoView({ behavior: 'instant' });
  };
});
document
  .getElementById('order-action')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const fields = ['car', 'name', 'phone'];
    let isValid = true;

    fields.forEach((id) => {
      const input = document.getElementById(id);
      const value = input.value.trim();

      if (!value) {
        input.style.borderColor = 'red';
        isValid = false;
      } else if (id === 'phone' && value.length < 10) {
        input.style.borderColor = 'red';
        isValid = false;
      } else {
        input.style.borderColor = 'white';
      }
    });

    if (isValid) {
      alert('Спасибо за заявку! Мы скоро свяжемся с вами');

      fields.forEach((id) => {
        const input = document.getElementById(id);
        input.value = '';
        input.style.borderColor = 'white';
      });
    }
  });
