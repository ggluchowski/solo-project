/* global Chart */
{
  'use strict;';

  const select = {
    containerOf: {
      general: '.general-statistic',
      banners: '.section-banners',
      links: '.section-links',
      personalData: '.section-personal-data',
      payout: '.section-payout',
      chartEarnings: 'earningsChart',
    }

  };

  class Menu {
    constructor() {
      const thisMenu = this;
      thisMenu.getElements();
      thisMenu.initActions();
    }

    getElements() {
      const thisMenu = this;

      thisMenu.dom = {};
      thisMenu.dom.general = document.querySelector(select.containerOf.general);
      thisMenu.dom.banners = document.querySelector(select.containerOf.banners);
      thisMenu.dom.links = document.querySelector(select.containerOf.links);
      thisMenu.dom.personalData = document.querySelector(select.containerOf.personalData);
      thisMenu.dom.payout = document.querySelector(select.containerOf.payout);

    }

    initActions() {

    }



  }

  // Modale

  // ZAMYKANIE
  function closeModal() {
    document.getElementById('overlay').classList.remove('show');
  }

  // zamkniecie za pomoca btn
  document.querySelectorAll('#overlay .js--close-modal').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      closeModal();
    });
  });

  // zamkniecie za pomoca klikniecia na tlo
  document.querySelector('#overlay').addEventListener('click', function (e) {
    if (e.target === this) {
      closeModal();
    }
  });

  // zamkniecie za pomoca przycisku ESC
  document.addEventListener('keyup', function (e) {
    if (e.keyCode === 27) {
      closeModal();
    }
  });

  // OTWIERANIE
  function openModal(modal) {
    document.querySelectorAll('#overlay > *').forEach(function (modal) {
      modal.classList.remove('show');
    });
    document.querySelector('#overlay').classList.add('show');
    document.querySelector(modal).classList.add('show');
  }

  // WYKRES
  const ctx = document.getElementById(select.containerOf.chartEarnings).getContext('2d');

  var chart = new Chart(ctx, {
    // 1
    type: 'bar',
    data: {
      // 2
      labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
      // 3
      datasets: [{
        // 4
        label: 'Signups',
        // 5
        backgroundColor: '#8DBEC8',
        borderColor: '#8DBEC8',
        // 6
        data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
      },
      {
        label: 'FTD',
        backgroundColor: '#F29E4E',
        borderColor: '#F29E4E',
        data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
      },
      {
        label: 'Earned',
        backgroundColor: '#71B374',
        borderColor: '#71B374',
        data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
        // 7
        hidden: true,
      }]
    },
  });

  function toggleMenu(visible) {
    document.querySelector('.xxx').classList.toggle('show', visible);
  }

  document.querySelector('.hamburger').addEventListener('click', function (e) {
    e.preventDefault();
    toggleMenu();
  });

  const app = new Menu();
  console.log(app);
  console.log(chart);
  openModal('#quit');


}