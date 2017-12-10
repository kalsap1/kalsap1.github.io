(function() {
  const moreInfo = document.getElementsByClassName('work-items');
  const lightBox = document.getElementById('lightbox');
  const pageLinks = document.getElementById('navbar');
  const navbar = document.getElementById('navbar');
  const navbarToggleButton = document.getElementById('menu-toggle');

  const lightBoxContentWrapper = document.getElementById('lightbox-content-wrapper');
  const lightBoxImage = document.getElementById('lightbox-image-container');
  const lightBoxDescription = document.getElementById('lightbox-description-container');
  const closeLightBoxButton = document.getElementById('close-lightbox');
  const lightBoxLinkButtons = document.getElementById('lightbox-link-buttons');

  let scrollUpButton = document.getElementById('scroll-up-button');
  let mediaQueryWidth = 768;
  let documentWidth = window.innerWidth;
  let pageYOffset = window.pageYOffset;
  let navbarOpen = false;
  let resizeValue = 0;

  function toggleMenu(documentWidth) {
      if (!navbarOpen) {
        navbar.style.height = '300px';
        navbarOpen = true;
      }
      else if (navbarOpen) {
        navbar.style.height = '0px';
        navbarOpen = false;
      }
  }
  navbarToggleButton.addEventListener('click', function(event){
    //let windowWidth = documentWidth;
    toggleMenu(documentWidth);
  });

  window.addEventListener('resize', function(event){
    //let windowWidth = documentWidth;

    documentWidth = window.innerWidth;

    if (documentWidth > mediaQueryWidth) {
      navbar.style.height = 'inherit';
    }
    else if (documentWidth <= mediaQueryWidth) {
      if (!navbarOpen) {
        navbar.style.height = '0';
      }
      else if (navbarOpen) {
        navbar.style.height = '300px';
      }

    }
  });
  function closeLightBox() {
    function setWidth() {
      lightBox.style.width = '0';
    }
    lightBoxContentWrapper.style.marginTop = '-100px';
    lightBoxContentWrapper.style.opacity = '0';

    let closeLight = setTimeout(setWidth, 600);
    lightBoxDescription.innerHTML = '';

  }

  for(let i = 0; i<moreInfo.length; i++) {
    let button = moreInfo[i].querySelector('.' + 'more-info');
    let shortCaption = moreInfo[i].querySelector('.' + 'captions .work-title');
    let workDescription = moreInfo[i].querySelector('.' + 'captions .work-description');
    let completeDate = moreInfo[i].querySelector('.' + 'captions .complete-date');
    let websiteUrl = moreInfo[i].querySelector('.' + 'captions .website-url');

    let imageUrl = moreInfo[i].querySelector('img');
    button.addEventListener('click', function(){

      lightBox.style.width = '100%';
      lightBoxContentWrapper.style.marginTop = '0px';
      lightBoxContentWrapper.style.opacity = '1';

      lightBoxImage.innerHTML = '<img src = "' + imageUrl.src + '" alt = "lightbox-image">';
      lightBoxImage.innerHTML += '<p id = "lightbox-main-caption">' +'Fig: '+shortCaption.innerText + '</p>';
      lightBoxDescription.innerHTML += '<p id = "lightbox-captions">' + '<span id = "caption-title">Completed: </span>' + completeDate.innerText + '</p><br>';
      lightBoxDescription.innerHTML += '<p id = "lightbox-captions">' + '<span id = "caption-title">Brief Overview: </span>'+ workDescription.innerText + '</p>';

      lightBoxLinkButtons.innerHTML = '<a class = "link-button" href = "'+websiteUrl.innerText+'"target = "_blank" >Visit website</a>';

    });
  }

  lightBox.addEventListener('click', function(event){
    if (event.target === lightBox || event.target === closeLightBoxButton) {
      closeLightBox();
    }
  });
  document.addEventListener('keyup', function(event){
    if (event.keyCode === 27) {
      closeLightBox();
    }
  });
  function setScroll(offsetY) {
    window.scroll({
      top: offsetY,
      left: 0,
      behavior: 'smooth'
    });

  }

  pageLinks.addEventListener('click', function(event){
    event.preventDefault();
    let targetPage = event.target.attributes[0].value;
    let targetElement = document.getElementById(targetPage);
    let offsetY = targetElement.offsetTop;
    setScroll(offsetY);

  });


  function setScrollUpButton(pageYOffset) {
    if (pageYOffset > 300) {
      scrollUpButton.style.display = 'block';

      scrollUpButton.addEventListener('click', function(event){
        setScroll(0);
      });

    }
    else if (pageYOffset < 400) {
      scrollUpButton.style.display = 'none';
    }
  }
  window.addEventListener('scroll', function(event){
    pageYOffset = window.pageYOffset;
    setScrollUpButton(pageYOffset);

  });


})();
