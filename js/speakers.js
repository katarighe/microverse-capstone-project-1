const speakers = [
  {
    id: 1,
    image: './images/speakers/mohamed-aden-ighe.png',
    name: 'Mohamed Aden Ighe',
    organization: 'Founder & CEO of laxACT Ltd.',
    background:
          'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 2,
    image: './images/speakers/john-almeda-jefferson-jr.png',
    name: 'John Almeda Jefferson Jr.',
    organization: 'Chief Executive Officer (CEO) of Buzz TV Ltd.',
    background:
          'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 3,
    image: './images/speakers/diego-garcia-gonzalez.png',
    name: 'Diego Garcia Gonzalez',
    organization: 'Founder & CEO of Formuler Inc.',
    background:
          'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 4,
    image: './images/speakers/robert-j-anderson.png',
    name: 'Robert J. Anderson',
    organization: 'Chief Financial Officer (CFO) of Apollo Group TV Ltd.',
    background:
          'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 5,
    image: './images/speakers/reza-shah-ahmadi.png',
    name: 'Reza Shah Ahmadi',
    organization: 'Founder & CEO of Jadoo TV Inc.',
    background:
          'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 6,
    image: './images/speakers/arvinder-singh.png',
    name: 'Arvinder Singh',
    organization: 'Marketing Director of IPTV Smarters Ltd.',
    background:
          'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
];

const featuredSpeakers = document.querySelector('.speakers-list');
const speakersButton = document.querySelector('.speakers-btn');

function loadSpeakers() {
  speakers.forEach((speaker, index) => {
    const speakerContainer = document.createElement('article');
    speakerContainer.className = index > 1 ? 'flex-row-center speakers-display' : 'flex-row-center';
    featuredSpeakers.appendChild(speakerContainer);

    const speakerImage = document.createElement('img');
    speakerImage.src = `${speaker.image}`;
    speakerImage.alt = `Image of ${speaker.name}`;
    speakerImage.className = 'speaker-image';
    speakerContainer.appendChild(speakerImage);

    const speakerInfos = document.createElement('div');
    speakerInfos.className = 'speaker-infos';
    speakerContainer.appendChild(speakerInfos);

    const speakerName = document.createElement('h3');
    speakerName.className = 'light-black heading-medium speaker-heading';
    speakerName.textContent = `${speaker.name}`;
    speakerInfos.appendChild(speakerName);

    const speakerOrganization = document.createElement('h4');
    speakerOrganization.className = 'dark-orange';
    speakerOrganization.textContent = `${speaker.organization}`;
    const hr = document.createElement('hr');
    speakerInfos.append(speakerOrganization, hr);

    const speakerBackground = document.createElement('h4');
    speakerBackground.className = 'light-black';
    speakerBackground.textContent = `${speaker.background}`;
    speakerInfos.appendChild(speakerBackground);
  });
}

function toggleSpeakers() {
  const displayedItems = document.querySelectorAll('.speakers-display');
  const toggledItems = document.querySelectorAll('.toggle');

  if (toggledItems.length === 0) {
    displayedItems.forEach((item) => {
      item.className = 'flex-row-center toggle';
    });

    speakersButton.textContent = 'LESS';
    const arrow = document.createElement('i');
    arrow.className = 'fas fa-angle-up down-arrow';
    speakersButton.appendChild(arrow);
  }

  if (toggledItems.length) {
    toggledItems.forEach((item) => {
      item.className = 'flex-row-center speakers-display';
      speakersButton.textContent = 'MORE';
      const arrow = document.createElement('i');
      arrow.className = 'fas fa-angle-down down-arrow';
      speakersButton.appendChild(arrow);
    });
  }
}

featuredSpeakers.addEventListener('DOMContentLoaded', loadSpeakers());
speakersButton.addEventListener('onclick', toggleSpeakers);

function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

openNav();
closeNav();
