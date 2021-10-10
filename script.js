const tabs = document.querySelectorAll('nav ul li');
const content = document.querySelectorAll('.phone img')
tabs.forEach((t, idx) => t.addEventListener('click', () => handleClick(idx)));

function handleClick(idx) {
  tabs.forEach((t, i) => {
    if (i === idx) {
      t.classList.add('active');
      content[i].classList.add('show');
    } else {
      t.classList.remove('active');
      content[i].classList.remove('show');
    }
  });
}