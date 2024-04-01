function sendEmail() {
  window.location.href = "mailto:agldro@gmail.com";
}

function scrollProjects(direction, position) {
  const scrollAmount = 400;
  const options = {
    behavior: 'smooth'
  };

  if (position === 'top') {
    const projectsTop = document.querySelector('.projects-top');
    if (direction === 'left') {
      projectsTop.scrollTo({
        left: projectsTop.scrollLeft - scrollAmount,
        ...options
      });
    } else if (direction === 'right') {
      projectsTop.scrollTo({
        left: projectsTop.scrollLeft + scrollAmount,
        ...options
      });
    }
  } else if (position === 'bottom') {
    const projectsBottom = document.querySelector('.projects-bottom');
    if (direction === 'left') {
      projectsBottom.scrollTo({
        left: projectsBottom.scrollLeft - scrollAmount,
        ...options
      });
    } else if (direction === 'right') {
      projectsBottom.scrollTo({
        left: projectsBottom.scrollLeft + scrollAmount,
        ...options
      });
    }
  }
}
    
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
