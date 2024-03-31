function sendEmail() {
  window.location.href = "mailto:agldro@gmail.com";
}

projectsDescription = [
  {
   id: 'glossary',
   href: 'glossary.html',
   img: 'index_images/7M4A9200.jpeg',
   title: 'The glossary of the untranslatable...',
   type: 'Publication',
   date: 'December 2023',
   video: false
  },

  {
   id: 'magazine',
   href: 'magazine.html',
   img: 'index_images/C88A8370.jpeg',
   title: 'Achromatic',
   type: 'Magazine',
   date: 'May 2023',
   video: false
  },

  {
   id: 'spatial',
   href: 'spatial.html',
   img: 'index_images/Spacial. Website version.mov',
   title: 'Spatial. Issue #1',
   type: 'Performance',
   date: 'May 2023',
   video: true
  },

  {
   id: 'ol',
   href: 'ol.html',
   img: 'index_images/C88A8307.jpeg',
   title: 'Here i am. i am here. am i here.',
   type: 'Publication',
   date: 'December 2022',
   video: false
  },

  {
   id: 'time',
   href: 'time.html',
   img: 'index_images/C88A5651.jpeg',
   title: 'How the time stopped',
   type: 'Publication',
   date: 'December 2022',
   video: false
  },
  
  {
   id: 'water',
   href: 'water.html',
   img: 'index_images/IMG_3073.jpeg',
   title: 'My water is not pure...',
   type: 'Conversational game',
   date: 'May 2023',
   video: false
  }
];

projectsDescriptionBottom = [
  {
   id: 'mturk',
   href: 'mturk.html',
   img: 'index_images/7M4A9014.jpeg',
   title: '1, 13, 25, 49, 113, and 585',
   type: 'Publication',
   date: 'December 2023',
   video: false
  },

  {
    id: 'dama',
    href: 'dama.html',
    img: 'index_images/7M4A9509.jpeg',
    title: 'Digital. Manual. Analogue. Automated.',
    type: 'Publication',
    date: 'December 2023',
    video: false
  },

  {
    id: 'ongoing',
    href: 'ongoing.html',
    img: 'index_images/Ongoing. Website version.mp4',
    title: 'The Ongoing',
    type: 'Video',
    date: 'May 2023',
    video: true
  },

  {
    id: 'coloringbook',
    href: 'coloringbook.html',
    img: 'index_images/Coloring book. Website version.mov',
    title: 'In my mother tongue there is a word...',
    type: 'Publication',
    date: 'December 2022',
    video: true
 },

 {
  id: 'punctuation',
  href: 'punctuation.html',
  img: 'index_images/C88A8582.jpeg',
  title: 'Home. Night. Warmth.',
  type: 'Poster',
  date: 'October 2022',
  video: false
 },
];

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  
  while (currentIndex > 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
  
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  
  return array;
}

// shuffledProjectsDescription = shuffle(projectsDescription);

const scrollContainer = document.getElementById('scrollContainer');
const scrollContainerBottom = document.getElementById('scrollContainer-bottom')
const projects = [];
const projects_bottom = [];
let scrollPos = 0;
let reverse = 1;
let currentProject = 0;
let needScroll = true;
const scrollSpeed = 8;
projects.push(Math.ceil(document.getElementById('portfolio-info').offsetWidth / scrollSpeed))


projectsDescription.forEach(function(item, i, arr) {
  const div = document.createElement('div');
  div.className = 'item-top';
  div.id = item.id;
  if (item.video === true) {
    div.innerHTML = '<a href="' + item.href + 
    '"><video width="100%" height="auto" loop autoplay muted playsinline preload="auto" webkit-playsinline><source src="' + 
    item.img + '" type="video/mp4"></video></a> <div class="wrapper"> <p id="title">' + item.title + 
    '</p> <p id="type">' + item.type + '</p> <p id="date" width="auto">' + item.date + '</p> </div>';
    scrollContainer.appendChild(div);
  }

  else {
    div.innerHTML = '<a href="' + item.href + 
    '"><img src="' + item.img + '"></a> <div class="wrapper"> <p id="title">' + item.title + 
    '</p> <p id="type">' + item.type + '</p> <p id="date" width="auto">' + item.date + '</p> </div>';
    scrollContainer.appendChild(div);
  }
});

projectsDescriptionBottom.forEach(function(item, i, arr) {
  const div = document.createElement('div');
  div.className = 'item-bottom';
  div.id = item.id;
  if (item.video === true) {
    div.innerHTML = '<a href="' + item.href + 
    '"><video width="100%" height="auto" loop autoplay muted playsinline preload="auto" webkit-playsinline><source src="' + 
    item.img + '" type="video/mp4"></video></a> <div class="wrapper"> <p id="title">' + item.title + 
    '</p> <p id="type">' + item.type + '</p> <p id="date" width="auto">' + item.date + '</p> </div>';
    scrollContainerBottom.appendChild(div);
  }

  else {
    div.innerHTML = '<a href="' + item.href + 
    '"><img src="' + item.img + '"></a> <div class="wrapper"> <p id="title">' + item.title + 
    '</p> <p id="type">' + item.type + '</p> <p id="date" width="auto">' + item.date + '</p> </div>';
    scrollContainerBottom.appendChild(div);
  }
});

// projectsDescription.forEach(function(item, i, arr) {
//   projects.push(Math.ceil(document.getElementById(item.id).offsetWidth / scrollSpeed));
//   //console.log(item.id, Math.ceil(document.getElementById(item.id).offsetWidth / scrollSpeed));
// }
// );

// projectsDescriptionBottom.forEach(function(item, i, arr) {
//   projects_bottom.push(Math.ceil(document.getElementById(item.id).offsetWidth / scrollSpeed));
//   //console.log(item.id, Math.ceil(document.getElementById(item.id).offsetWidth / scrollSpeed));
// }
// );

// let currentProjectBottom = projects_bottom.length;
// let scrollPosBottom = scrollContainerBottom.scrollWidth - scrollContainerBottom.clientWidth;
// //console.log(scrollPosBottom);

// if (needScroll) {
//   scrollContainerBottom.scrollLeft = scrollPosBottom;
//   needScroll = false;
//   //console.log('scrolled')
// }

//console.log(currentProjectBottom);

// function callFunctionMultipleTimes(func, times) {
//   let count = 0;
//   let interval = setInterval(() => {
//         func();
//         count++;
//         if (count === times) {
//             clearInterval(interval);
//         }
//     }, 50);
// }

// function scrollMoment() {
//   if (reverse === 1) {
//     if (scrollPos < scrollContainer.scrollWidth - scrollContainer.clientWidth) {
//       //console.log('plus')
//       scrollPos += scrollSpeed;
//       scrollContainer.scrollLeft = scrollPos;
//     }
//   }

//   if (reverse === -1) {
//     if (scrollPos > 0) {
//       scrollPos -= scrollSpeed;
//       scrollContainer.scrollLeft = scrollPos;
//     }
//   }
// }

// function scrollMomentBottom() {
//   if (reverse === -1) {
//     if (scrollPosBottom < scrollContainerBottom.scrollWidth - scrollContainerBottom.clientWidth) {
//       scrollPosBottom += scrollSpeed;
//       scrollContainerBottom.scrollLeft = scrollPosBottom;
//       //console.log('plus');
//     }
//   }

//   if (reverse === 1) {
//     if (scrollPosBottom > 0) {
//       scrollPosBottom -= scrollSpeed;
//       scrollContainerBottom.scrollLeft = scrollPosBottom;
//       //console.log(scrollPosBottom);
//       //console.log('minus');
//     }
//   }
// }

// bottomTurn = false;

// function scrollDivs() {
//   if (scrollPos >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
//     reverse = -1;
//     currentProject = projects.length;
//     if (scrollPosBottom <= 0) {
//       currentProjectBottom = -1;
//     }
//   }

//   if (scrollPos === 0) {
//     reverse = 1;
//     currentProject = -1;
//     if (scrollPosBottom >= scrollContainerBottom.scrollWidth - scrollContainerBottom.clientWidth) {
//       currentProjectBottom = projects_bottom.length;
//     }
//   }

//   if (reverse === 1) {
//     if (bottomTurn) {
//       if (currentProjectBottom > 0) { 
//         currentProjectBottom--;
//       }
//       bottomTurn = false;
//       //console.log('bottom');
//       //console.log(currentProjectBottom);
//       callFunctionMultipleTimes(scrollMomentBottom, projects_bottom[currentProjectBottom]);
//     }

//     else {
//       currentProject++;
//       bottomTurn = true;
//       callFunctionMultipleTimes(scrollMoment, projects[currentProject]);
//     }
//   }

//   else {
//     if (bottomTurn) {
//       if (currentProjectBottom < projects_bottom.length) { 
//         currentProjectBottom++;
//       }
//       bottomTurn = false;
//       //console.log('bottom');
//       //console.log(currentProjectBottom);
//       callFunctionMultipleTimes(scrollMomentBottom, projects_bottom[currentProjectBottom]);
//     }

//     else {
//       currentProject--;
//       bottomTurn = true;
//       callFunctionMultipleTimes(scrollMoment, projects[currentProject]);
//     }
//   }

// }

// setInterval(scrollDivs, 8000);

// window.addEventListener('resize', function(event) {
//   projectsDescription.forEach(function(item, i, arr) {
//     projects[i+1] = Math.ceil(document.getElementById(item.id).offsetWidth / scrollSpeed);
//   }
//   );
//   console.log(projects)
// }, true);

const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('a');

document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
    $hoverables[i].addEventListener('mouseenter', onMouseHover);
    $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
  }

function onMouseMove(e) {
  try {
    TweenMax.to($bigBall, .4, {
      x: e.clientX - 15,
      y: e.clientY - 15
    });

    TweenMax.to($smallBall, .1, {
      x: e.clientX - 5,
      y: e.clientY - 7
    });
  }

  catch {
      
  }
}

function onMouseHover() {
  TweenMax.to($bigBall, .3, {
  scale: 2.7
  });
}

function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
  scale: 1
  });
}
