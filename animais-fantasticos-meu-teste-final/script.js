function initScrollSuave() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

  function scrollSuave(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollSuave);
  });
}
initScrollSuave();

function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu img");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((item) => {
        item.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((imagem, index) => {
      imagem.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAccordionList() {
  const accordionList = document.querySelectorAll(".js-faq dt");
  if (accordionList.length) {
    accordionList[0].classList.add("ativo");
    accordionList[0].nextElementSibling.classList.add("ativo");

    function initAccordion() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", initAccordion);
    });
  }
}
initAccordionList();

function initAnimaScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const metadeTela = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTopo = section.getBoundingClientRect().top - metadeTela;
        if (sectionTopo < 0) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
initAnimaScroll();
