const root = document.querySelector('body');
const target = root.appendChild(document.createElement('div'));
const imgSet = () => Math.floor(Math.random() * (300));
const url = 'https://source.unsplash.com/collection/';
const getImage = () => {
  const photo = document.createElement('img');
  photo.src = `${url}${imgSet()}`;
  photo.loading = 'lazy';
  root.appendChild(photo);
};
const limitObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      getImage();
      root.appendChild(target);
    }
  });
});
limitObserver.observe(target);
const preload = new MutationObserver(() => {
  if (root.childElementCount % 2 !== 0) {
    preload.disconnect();
  }
  getImage();
});
preload.observe(root, { childList: true });
