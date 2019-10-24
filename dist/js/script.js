// Hamburger

function toggleMenu(visible) {
  document.querySelector('.menu').classList.toggle('show', visible);
}

document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
  console.log('Link was clicked!');
});


// Modal

//zamykanie modala poprzez usunięcie klasy show z overlaya

function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

// podpinamy funkcję pod przyciski zamykające z klasą js--close-modal

document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });
});

// dodanie możliwości zamknięcia modala po kliknięciu w tło overlaya.
document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal();
  }
});

// zamykanie poprzez kliknięcie w przycisk Escape na klawiaturze
document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal();
  }
});

//Otwieranie modala będzie polegać na zamknięciu wszystkich modali, 
// które są wewnątrz overlay, a następnie otwarciu wskazanego modala oraz pokazania overlay.
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

document.querySelector('#quit').addEventListener('click', function() {
  openModal('#myModal');
});

document.querySelector('#profile').addEventListener('click', function() {
  openModal('#myModalProfile');
});


chart

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {

  type: 'bar',
  data: {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    datasets: [{
      label: 'Signups',
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      data: [ 352, 201, 241, 364, 426, 406, 272, 269, 301 ],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [ 406, 172, 321, 290, 447, 111, 250, 504, 363 ],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48 ],
      hidden: true,
    }]
  },
  options: {
    legend: {
      labels: {
        usePointStyle: true,
        fontSize: 16,
        padding: 45,
      }
    }
  }
});

chart.render();
