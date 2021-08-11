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
      menuQuite: 'menu-quite',
      hamburger: '.hamburger',
      panel: '.panel',
      hamburgerMenu: '.menu-left',
      clickMenu: '.menu-list',
      topMenuBar: '.top-menu-bar',
      sidebarHeight: '.sidebar',
    }

  };

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

  // MODALE

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


  class Menu {
    constructor() {
      const thisMenu = this;
      thisMenu.getElements();
      thisMenu.initActions();
      thisMenu.listListener();
    }

    getElements() {
      const thisMenu = this;

      thisMenu.dom = {};
      thisMenu.dom.general = document.querySelector(select.containerOf.general);
      thisMenu.dom.banners = document.querySelector(select.containerOf.banners);
      thisMenu.dom.links = document.querySelector(select.containerOf.links);
      thisMenu.dom.personalData = document.querySelector(select.containerOf.personalData);
      thisMenu.dom.payout = document.querySelector(select.containerOf.payout);

      //modal-quite
      thisMenu.dom.modalQuite = document.getElementById(select.containerOf.menuQuite);

      //hamburger
      thisMenu.dom.hamburger = document.querySelector(select.containerOf.hamburger);

      //hamburger container - menu
      thisMenu.dom.hamburgerMenu = document.querySelector(select.containerOf.hamburgerMenu);

      //hamburger container - menuTOP
      thisMenu.dom.topMenuBar = document.querySelector(select.containerOf.topMenuBar);

      //hamburger - sidebar height
      thisMenu.dom.sidebarHeight = document.querySelector(select.containerOf.sidebarHeight);

      //panele
      thisMenu.dom.panels = document.querySelectorAll(select.containerOf.panel);

      //menu
      thisMenu.dom.clickMenu = document.querySelectorAll(select.containerOf.clickMenu);

    }

    initActions() {
      const thisMenu = this;

      thisMenu.dom.hamburger.addEventListener('click', function (e) {
        e.preventDefault();
        thisMenu.toggleMenu();
      });

      thisMenu.dom.modalQuite.addEventListener('click', function (e) {
        e.preventDefault();
        thisMenu.openModal('#quit');
      });
    }

    listListener() {
      const thisMenu = this;
      const list = thisMenu.dom.clickMenu;

      for (let link of list) {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          const click = this;
          const activeLinks = document.querySelectorAll('.menu-left li.active');

          for (let activeLink of activeLinks) {
            activeLink.classList.remove('active');
          }

          click.classList.add('active');
          const activeSections = document.querySelectorAll('.panel.show');

          for (let activeSection of activeSections) {
            activeSection.classList.remove('show');
          }

          const hrefAttribute = click.querySelector('a').getAttribute('href');

          const correctSection = document.querySelector(hrefAttribute);

          if (hrefAttribute !== '#blank')
            correctSection.classList.add('show');

        });
      }
    }

    toggleMenu(visible) {
      const thisMenu = this;
      thisMenu.dom.hamburgerMenu.classList.toggle('show', visible);
      thisMenu.dom.topMenuBar.classList.toggle('show', visible);
      thisMenu.dom.sidebarHeight.classList.toggle('sidebar-height', visible);
    }
    // OTWIERANIE Pop-upa
    openModal(modal) {
      //const thisMenu = this;
      document.querySelectorAll('#overlay > *').forEach(function (modal) {
        modal.classList.remove('show');
      });
      document.querySelector('#overlay').classList.add('show');
      document.querySelector(modal).classList.add('show');
    }

  }


  const app = new Menu();
  console.log(app);
  console.log(chart);

}