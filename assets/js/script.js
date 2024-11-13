// List of image URLs and captions for the carousel
const imageUrls = [
    {
      src: './assets/images/pexels-mikebirdy-242258.jpg',
      label: 'First slide label',
      content: 'Some representative placeholder content for the first slide.'
    },
    {
      src: './assets/images/pexels-pth686817-24524484.jpg',
      label: 'Second slide label',
      content: 'Some representative placeholder content for the second slide.'
    },
    {
      src: './assets/images/pexels-anastasia-shuraeva-5126445.jpg',
      label: 'Third slide label',
      content: 'Some representative placeholder content for the third slide.'
    },
    {
      src: './assets/images/pexels-advaith-nair-1838650-6363742.jpg',
      label: 'Fourth slide label',
      content: 'Some representative placeholder content for the fourth slide.'
    },
    {
      src: './assets/images/pexels-cheezuptg-1247023.jpg',
      label: 'Fifth slide label',
      content: 'Some representative placeholder content for the fifth slide.'
    },
    {
      src: './assets/images/pexels-gustavo-fring-5163419.jpg',
      label: 'Sixth slide label',
      content: 'Some representative placeholder content for the sixth slide.'
    },
    {
      src: './assets/images/pexels-heyho-6032280.jpg',
      label: 'Seventh slide label',
      content: 'Some representative placeholder content for the seventh slide.'
    },
    {
      src: './assets/images/pexels-heyho-7061659.jpg',
      label: 'Eighth slide label',
      content: 'Some representative placeholder content for the eighth slide.'
    },
    {
      src: './assets/images/pexels-zahid-12887876.jpg',
      label: 'Ninth slide label',
      content: 'Some representative placeholder content for the ninth slide.'
    },
    {
      src: './assets/images/pexels-stitch-24595770.jpg',
      label: 'Tenth slide label',
      content: 'Some representative placeholder content for the tenth slide.'
    },
  ];

  // Reference to the carousel inner and indicator containers
const carouselInner = document.getElementById('carouselInner');
const carouselIndicators = document.querySelector('.carousel-indicators');

// Generate carousel items and indicators dynamically
imageUrls.forEach((image, index) => {
  // Create a new div element for the carousel item
  const carouselItem = document.createElement('div');
  carouselItem.classList.add('carousel-item');
  if (index === 0) carouselItem.classList.add('active'); // Make the first item active
  carouselItem.setAttribute('data-bs-interval', '3000');

  // Add the image element
  const img = document.createElement('img');
  img.src = image.src;
  img.classList.add('d-block', 'w-100');
  img.alt = `Slide ${index + 1}`;
  carouselItem.appendChild(img);

  // Add caption container
  const caption = document.createElement('div');
  caption.classList.add('carousel-caption', 'd-none', 'd-md-block', 'opaque-background');

  // Add caption title
  const title = document.createElement('h5');
  title.textContent = image.label;
  caption.appendChild(title);

  // Add caption text
  const text = document.createElement('p');
  text.textContent = image.content;
  caption.appendChild(text);

  // Append caption to carousel item
  carouselItem.appendChild(caption);

  // Append the carousel item to the carousel inner container
  carouselInner.appendChild(carouselItem);

  // Create a new indicator button
  const indicator = document.createElement('button');
  indicator.type = 'button';
  indicator.dataset.bsTarget = '#myCarousel';
  indicator.dataset.bsSlideTo = index;
  indicator.setAttribute('aria-label', `Slide ${index + 1}`);
  if (index === 0) {
    indicator.classList.add('active');
    indicator.setAttribute('aria-current', 'true');
  }

  // Append the indicator to the carousel indicators container
  carouselIndicators.appendChild(indicator);
});

// Initialize the Bootstrap carousel
const myCarouselElement = document.querySelector('#myCarousel');
const carousel = new bootstrap.Carousel(myCarouselElement, {
  ride: 'carousel', // Automatically start sliding
  touch: true // Enable touch for better UX on mobile
});