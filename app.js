/* ---------- Icons ---------- */
const ICON_PATHS = {
  coffee: "M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,120,64Zm32,0a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,152,64Zm96,56v8a40,40,0,0,1-37.51,39.91,96.59,96.59,0,0,1-27,40.09H208a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H56.54A96.3,96.3,0,0,1,24,136V88a8,8,0,0,1,8-8H208A40,40,0,0,1,248,120ZM200,96H40v40a80.27,80.27,0,0,0,45.12,72h69.76A80.27,80.27,0,0,0,200,136Zm32,24a24,24,0,0,0-16-22.62V136a95.78,95.78,0,0,1-1.2,15A24,24,0,0,0,232,128Z",
  leaf: "M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,51,52.82,94a87.09,87.09,0,0,0-12.76,49c.57,15.92,5.21,32,13.79,47.85l-19.51,19.5a8,8,0,0,0,11.32,11.32l19.5-19.51C81,210.73,97.09,215.37,113,215.94q1.67.06,3.33.06A86.93,86.93,0,0,0,162,203.18C205,177.18,227.93,116.21,223.45,40.07ZM153.75,189.5c-22.75,13.78-49.68,14-76.71.77l88.63-88.62a8,8,0,0,0-11.32-11.32L65.73,179c-13.19-27-13-54,.77-76.71,22.09-36.47,74.6-56.44,141.31-54.06C210.2,114.89,190.22,167.41,153.75,189.5Z",
  forkKnife: "M72,88V40a8,8,0,0,1,16,0V88a8,8,0,0,1-16,0ZM216,40V224a8,8,0,0,1-16,0V176H152a8,8,0,0,1-8-8,268.75,268.75,0,0,1,7.22-56.88c9.78-40.49,28.32-67.63,53.63-78.47A8,8,0,0,1,216,40ZM200,53.9c-32.17,24.57-38.47,84.42-39.7,106.1H200ZM119.89,38.69a8,8,0,1,0-15.78,2.63L112,88.63a32,32,0,0,1-64,0l7.88-47.31a8,8,0,1,0-15.78-2.63l-8,48A8.17,8.17,0,0,0,32,88a48.07,48.07,0,0,0,40,47.32V224a8,8,0,0,0,16,0V135.32A48.07,48.07,0,0,0,128,88a8.17,8.17,0,0,0-.11-1.31Z",
  cookingPot: "M88,48V16a8,8,0,0,1,16,0V48a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8,8,0,0,0,128,56Zm32,0a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8,8,0,0,0,160,56Zm92.8,46.4L224,124v60a32,32,0,0,1-32,32H64a32,32,0,0,1-32-32V124L3.2,102.4a8,8,0,0,1,9.6-12.8L32,104V80a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8v24l19.2-14.4a8,8,0,0,1,9.6,12.8ZM208,88H48v96a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16Z",
  hamburger: "M48.07,104H207.93a16,16,0,0,0,15.72-19.38C216.22,49.5,176,24,128,24S39.78,49.5,32.35,84.62A16,16,0,0,0,48.07,104ZM128,40c39.82,0,74.21,20.61,79.93,48H48.07L48,87.93C53.79,60.61,88.18,40,128,40ZM229.26,152.48l-41.13,15L151,152.57a8,8,0,0,0-5.94,0l-37,14.81L71,152.57a8,8,0,0,0-5.7-.09l-44,16a8,8,0,0,0,5.47,15L40,178.69V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40v-9.67l18.73-6.81a8,8,0,1,0-5.47-15ZM200,184a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V172.88l11.87-4.32L105,183.43a8,8,0,0,0,5.94,0l37-14.81,37,14.81a8,8,0,0,0,5.7.09l9.27-3.37ZM16,128a8,8,0,0,1,8-8H232a8,8,0,0,1,0,16H24A8,8,0,0,1,16,128Z",
  bowlFood: "M224,104h-8.37a88,88,0,0,0-175.26,0H32a8,8,0,0,0-8,8,104.35,104.35,0,0,0,56,92.28V208a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16v-3.72A104.35,104.35,0,0,0,232,112,8,8,0,0,0,224,104Zm-24.46,0H148.12a71.84,71.84,0,0,1,41.27-29.57A71.45,71.45,0,0,1,199.54,104ZM173.48,56.23q2.75,2.25,5.27,4.75a87.92,87.92,0,0,0-49.15,43H100.1A72.26,72.26,0,0,1,168,56C169.83,56,171.66,56.09,173.48,56.23ZM128,40a71.87,71.87,0,0,1,19,2.57A88.36,88.36,0,0,0,83.33,104H56.46A72.08,72.08,0,0,1,128,40Zm36.66,152A8,8,0,0,0,160,199.3V208H96v-8.7A8,8,0,0,0,91.34,192a88.29,88.29,0,0,1-51-72H215.63A88.29,88.29,0,0,1,164.66,192Z",
  pizza: "M239.54,63a15.91,15.91,0,0,0-7.25-9.9,201.49,201.49,0,0,0-208.58,0,16,16,0,0,0-5.37,22l96,157.27a16,16,0,0,0,27.36,0l96-157.27A15.82,15.82,0,0,0,239.54,63ZM63.59,118.5a24,24,0,1,1,24.47,40.09Zm87.92,66.95A24,24,0,0,1,176,145.37Zm32.93-53.93a40,40,0,0,0-41.38,67.77L128,224,96.5,172.43a40,40,0,1,0-41.35-67.76L48.8,94.26a152,152,0,0,1,158.39,0Zm31.1-50.93a168.12,168.12,0,0,0-175.08,0L32,66.77a185.6,185.6,0,0,1,192,0Z",
  sunHorizon: "M240,152H199.55a73.54,73.54,0,0,0,.45-8,72,72,0,0,0-144,0,73.54,73.54,0,0,0,.45,8H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM72,144a56,56,0,1,1,111.41,8H72.59A56.13,56.13,0,0,1,72,144Zm144,56a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H208A8,8,0,0,1,216,200ZM72.84,43.58a8,8,0,0,1,14.32-7.16l8,16a8,8,0,0,1-14.32,7.16Zm-56,48.84a8,8,0,0,1,10.74-3.57l16,8a8,8,0,0,1-7.16,14.31l-16-8A8,8,0,0,1,16.84,92.42Zm192,15.16a8,8,0,0,1,3.58-10.73l16-8a8,8,0,1,1,7.16,14.31l-16,8a8,8,0,0,1-10.74-3.58Zm-48-55.16,8-16a8,8,0,0,1,14.32,7.16l-8,16a8,8,0,1,1-14.32-7.16Z",
  sun: "M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z",
  moonStars: "M240,96a8,8,0,0,1-8,8H216v16a8,8,0,0,1-16,0V104H184a8,8,0,0,1,0-16h16V72a8,8,0,0,1,16,0V88h16A8,8,0,0,1,240,96ZM144,56h8v8a8,8,0,0,0,16,0V56h8a8,8,0,0,0,0-16h-8V32a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16Zm72.77,97a8,8,0,0,1,1.43,8A96,96,0,1,1,95.07,37.8a8,8,0,0,1,10.6,9.06A88.07,88.07,0,0,0,209.14,150.33,8,8,0,0,1,216.77,153Zm-19.39,14.88c-1.79.09-3.59.14-5.38.14A104.11,104.11,0,0,1,88,64c0-1.79,0-3.59.14-5.38A80,80,0,1,0,197.38,167.86Z",
  house: "M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z",
  mapPin: "M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z",
  footprints: "M208.06,184H152a8,8,0,0,0-8,8v12a36,36,0,0,0,72.05,0V192A8,8,0,0,0,208.06,184Zm-8,20a20,20,0,0,1-40,0v-4h40ZM104,160h-56a8,8,0,0,0-8,8v12A36,36,0,0,0,112,180V168A8,8,0,0,0,104,160Zm-8,20a20,20,0,0,1-40,0v-4H96ZM76,16C64.36,16,53.07,26.31,44.2,45c-13.93,29.38-18.56,73,.29,96a8,8,0,0,0,6.2,2.93h50.55a8,8,0,0,0,6.2-2.93c18.85-23,14.22-66.65.29-96C98.85,26.31,87.57,16,76,16ZM97.15,128H54.78c-11.4-18.1-7.21-52.7,3.89-76.11C65.14,38.22,72.17,32,76,32s10.82,6.22,17.3,19.89C104.36,75.3,108.55,109.9,97.15,128Zm57.61,40h50.55a8,8,0,0,0,6.2-2.93c18.85-23,14.22-66.65.29-96C202.93,50.31,191.64,40,180,40s-22.89,10.31-31.77,29c-13.93,29.38-18.56,73,.29,96A8.05,8.05,0,0,0,154.76,168Zm8-92.11C169.22,62.22,176.25,56,180,56s10.82,6.22,17.29,19.89c11.1,23.41,15.29,58,3.9,76.11H158.85C147.45,133.9,151.64,99.3,162.74,75.89Z",
  calendar: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z",
  uploadCloud: "M240,136a48,48,0,0,1-16,89.86V226H176a8,8,0,0,1,0-16h48a32,32,0,0,0,0-64,8,8,0,0,1-7.85-6.43A56,56,0,0,0,109.85,132.61a8,8,0,0,1-7.44,6.19,32,32,0,0,0,.29,64.2H88a8,8,0,0,1,0,16H67.7a48,48,0,0,1-4.15-95.4A72,72,0,0,1,201.87,80.85,48.06,48.06,0,0,1,240,136Zm-91.31-13.31L136,110V152a8,8,0,0,1-16,0V110L107.31,122.69a8,8,0,0,1-11.31-11.31l24-24a8,8,0,0,1,11.31,0l24,24a8,8,0,0,1-11.31,11.31Z",
  plus: "M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z",
  trash: "M216,48H180V40a28,28,0,0,0-28-28H104A28,28,0,0,0,76,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM92,40a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12v8H92Zm100,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z",
  star: "M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59.24-4.83,22.87-55.61a16.4,16.4,0,0,1,29.62,0l22.87,55.61L224.92,86A16.46,16.46,0,0,1,234.29,114.85Z",
  eyeSlash: "M53.92,34.62A8,8,0,1,0,42.08,45.38L61.32,66.55C25,88.84,9.38,123.2,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.9,19.65,28.11,38.86C61.6,195,93.91,208,128,208a127.11,127.11,0,0,0,52.07-11.13l22,24.51a8,8,0,1,0,11.84-10.76Zm47.55,58.79,26.94,29.94a24,24,0,0,1-26.94-29.94ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.16,133.16,0,0,1,25,128,133.16,133.16,0,0,1,48.07,97.25C50.6,94.72,53.25,92.31,56,90.05L73,109.32a40,40,0,0,0,53.75,53.75l55.55,62A111.36,111.36,0,0,1,128,192ZM240,128a133.16,133.16,0,0,1-23.07,30.75,133.86,133.86,0,0,1-14.2,12.4A8,8,0,1,1,193,158.5,116.83,116.83,0,0,0,213.93,128,133.16,133.16,0,0,0,144,64c-4.19,0-8.36.2-12.45.6a8,8,0,1,1-1.53-15.93A128.5,128.5,0,0,1,144,48c34.09,0,66.4,13,90.31,38.38a133.16,133.16,0,0,1,23.07,30.75,8,8,0,0,1,0,6.5A133.16,133.16,0,0,1,240,128Z",
  x: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
};
function svgIcon(name, cls) {
  return `<svg class="icon${cls ? ' ' + cls : ''}" viewBox="0 0 256 256">${ICON_PATHS[name] ? `<path d="${ICON_PATHS[name]}"/>` : ''}</svg>`;
}

/* ---------- Real campus geodata (OpenStreetMap) ---------- */
const BUILDINGS = {
  pgcll:    { name: 'Peter George Centre for Living & Learning', short: 'PGCLL', lat: 43.2655106, lon: -79.9181240 },
  keyes:    { name: 'Mary E. Keyes Residence', short: 'Keyes', lat: 43.2627192, lon: -79.9227179 },
  commons:  { name: 'Commons Building', short: 'Commons', lat: 43.2655499, lon: -79.9192858 },
  musc:     { name: 'McMaster University Student Centre', short: 'MUSC', lat: 43.2634666, lon: -79.9178128 },
  degroote: { name: 'Michael DeGroote Centre for Learning & Discovery', short: 'MDCL', lat: 43.2610718, lon: -79.9168621 },
  burke:    { name: 'Burke Science Building', short: 'Burke', lat: 43.2620116, lon: -79.9203971 },
  hodgins:  { name: 'John Hodgins Engineering Bldg', short: 'Hodgins', lat: 43.2607489, lon: -79.9204265 },
  thode:    { name: 'H.G. Thode Library', short: 'Thode', lat: 43.2611035, lon: -79.9225817 },
  engtech:  { name: 'Engineering Technology Bldg', short: 'Eng Tech', lat: 43.2584826, lon: -79.9201214 },
  bourns:   { name: 'Arthur N. Bourns Building', short: 'Bourns', lat: 43.2607546, lon: -79.9218752 },
  bates:    { name: 'Bates Residence', short: 'Bates', lat: 43.2639722, lon: -79.9226555 },
  matthews: { name: 'Matthews Hall', short: 'Matthews', lat: 43.2629120, lon: -79.9221182 },
  whidden:  { name: 'Whidden Hall', short: 'Whidden', lat: 43.2650761, lon: -79.9195835 },
  edwards:  { name: 'Edwards Hall', short: 'Edwards', lat: 43.2640874, lon: -79.9189508 },
  wallingford:{ name: 'Wallingford Hall', short: 'Wallingford', lat: 43.2630431, lon: -79.9216402 },
  moulton:  { name: 'Moulton Hall', short: 'Moulton', lat: 43.2634101, lon: -79.9221408 },
  woodstock:{ name: 'Woodstock Hall', short: 'Woodstock', lat: 43.2659344, lon: -79.9191200 },
  brandon:  { name: 'Brandon Hall', short: 'Brandon', lat: 43.2659417, lon: -79.9198411 },
  hedden:   { name: 'Hedden Hall', short: 'Hedden', lat: 43.2664345, lon: -79.9183565 },
  hamiltonhall: { name: 'Hamilton Hall', short: 'Hamilton', lat: 43.2631080, lon: -79.9201267 },
  braleyathletic: { name: 'David Braley Athletic Centre', short: 'DBAC', lat: 43.2650972, lon: -79.9162741 },
  iahs:     { name: 'Institute for Applied Health Sciences', short: 'IAHS', lat: 43.2595850, lon: -79.9207270 },
  psych:    { name: 'Psychology Building', short: 'PC', lat: 43.2596734, lon: -79.9195298 },
};
const RESIDENCE_IDS = ['pgcll','keyes','bates','matthews','whidden','edwards','wallingford','moulton','woodstock','brandon','hedden'];
const CAMPUS_BOUNDS = (() => {
  const lats = Object.values(BUILDINGS).map(b => b.lat), lons = Object.values(BUILDINGS).map(b => b.lon);
  const padLat = 0.0012, padLon = 0.0015;
  return [[Math.min(...lats) - padLat, Math.min(...lons) - padLon], [Math.max(...lats) + padLat, Math.max(...lons) + padLon]];
})();
const WALK_M_PER_MIN = 75;
function haversine(a, b) {
  const R = 6371000, toRad = d => d * Math.PI / 180;
  const dLat = toRad(b.lat - a.lat), dLon = toRad(b.lon - a.lon);
  const s = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}
function bearingDeg(a, b) {
  const toRad = d => d * Math.PI / 180, toDeg = r => r * 180 / Math.PI;
  const y = Math.sin(toRad(b.lon - a.lon)) * Math.cos(toRad(b.lat));
  const x = Math.cos(toRad(a.lat)) * Math.sin(toRad(b.lat)) - Math.sin(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.cos(toRad(b.lon - a.lon));
  return (toDeg(Math.atan2(y, x)) + 360) % 360;
}
function walkMinutes(idA, idB) {
  if (!BUILDINGS[idA] || !BUILDINGS[idB]) return null;
  if (idA === idB) return 0;
  return Math.max(1, Math.round(haversine(BUILDINGS[idA], BUILDINGS[idB]) / WALK_M_PER_MIN));
}

/* ---------- Venues (real McMaster Hospitality Services data, Aug 2026) ---------- */
const VENUES = {
  secondcup:  { name: 'Second Cup', building: 'pgcll', icon: 'coffee', tier: 1,
    items: [{ item: 'Coffee + pastry', price: 6.75, est: true }] },
  choppedleaf:{ name: 'Chopped Leaf', building: 'pgcll', icon: 'leaf', tier: 2,
    items: [{ item: 'Half salad or wrap', price: 10.99, est: true, dietary: ['vegetarian'] }] },
  centro:     { name: 'Centro@Commons', building: 'commons', icon: 'forkKnife', tier: 2,
    items: [
      { item: 'Butter Chicken (Taste of Home)', price: 8.99 },
      { item: 'General Tso (Taste of Home)', price: 8.99 },
      { item: 'Spicy Chicken Sandwich (Crave)', price: 8.99 },
      { item: 'Paramount Mediterranean Meal', price: 14.99 },
      { item: 'Weekend Big Breakfast', price: 14.49, note: 'Weekends 10am–2:30pm only' },
    ] },
  bistromkr:  { name: 'Bistro@MKR', building: 'keyes', icon: 'cookingPot', tier: 3,
    items: [
      { item: 'Udon Noodles, lunch-bowl size', price: 10.99, note: 'Dinner served Sun–Thu only' },
      { item: 'General Tso, lunch-bowl size', price: 10.99, note: 'Dinner served Sun–Thu only' },
      { item: 'Grilled Chicken or Tilapia', price: 17.99, note: 'Dinner served Sun–Thu only' },
    ] },
  bistro2go:  { name: 'Bistro-2-Go', building: 'keyes', icon: 'hamburger', tier: 2,
    items: [
      { item: 'Harvest Bowl', price: 10.99, dietary: ['vegetarian'] },
      { item: 'Mac Wrap', price: 8.39 },
    ] },
  teriyaki:   { name: 'Teriyaki Experience', building: 'musc', icon: 'bowlFood', tier: 2,
    items: [
      { item: 'Bento Bowl', price: 8.99, note: 'Fri hours 11am–6pm' },
      { item: 'Teriyaki Veggie Tofu', price: 13.99, dietary: ['vegetarian'] },
    ] },
  lapiazza:   { name: 'La Piazza', building: 'musc', icon: 'pizza', tier: 1,
    items: [
      { item: 'Smash Burger', price: 8.99 },
      { item: 'Greek Salad', price: 7.99, dietary: ['vegetarian'] },
      { item: 'Beef Barbacoa Burrito Bowl', price: 15.49, dietary: ['halal', 'glutenfree'] },
    ] },
  timhortons: { name: 'Tim Hortons', building: 'musc', icon: 'coffee', tier: 1,
    items: [{ item: 'Breakfast wrap + coffee', price: 5.79, est: true, note: 'Mon–Fri 7:30am–4pm' }] },
  reactorcafe:{ name: 'The Reactor Café', building: 'thode', icon: 'coffee', tier: 1,
    items: [{ item: 'Quesadilla', price: 11.49, note: 'Weekday daytime hours only, approximate' }] },
  boosterjuice:{ name: 'Booster Juice', building: 'musc', icon: 'coffee', tier: 1,
    items: [{ item: 'Smoothie', price: 7.99, est: true, dietary: ['vegetarian'] }] },
  starbucks:  { name: 'Starbucks', building: 'musc', icon: 'coffee', tier: 2,
    items: [{ item: 'Coffee + pastry', price: 7.25, est: true }] },
  cafeone:    { name: 'Café One', building: 'degroote', icon: 'forkKnife', tier: 1,
    items: [{ item: 'Grab n’ go sandwich or salad', price: 8.99, est: true }] },
  caffeineelements:{ name: 'Caffeine The Elements', building: 'burke', icon: 'coffee', tier: 1,
    items: [{ item: 'Coffee + snack', price: 6.49, est: true }] },
  ecafe:      { name: 'E-Café', building: 'engtech', icon: 'forkKnife', tier: 1,
    items: [{ item: 'Grab n’ go sandwich', price: 7.49, est: true }] },
  fireballcafe:{ name: 'Fireball Café', building: 'hodgins', icon: 'coffee', tier: 1,
    items: [{ item: 'Coffee + snack', price: 6.49, est: true, note: 'Open 24/7' }] },
  mathcafe:   { name: 'Math Cafe', building: 'hamiltonhall', icon: 'coffee', tier: 1,
    items: [{ item: 'Coffee + snack', price: 5.99, est: true }] },
  refuellingstation:{ name: 'Refuelling Station', building: 'braleyathletic', icon: 'coffee', tier: 1,
    items: [{ item: 'Smoothie', price: 7.99, est: true, dietary: ['vegetarian'] }] },
  iahscafe:   { name: 'IAHS Café', building: 'iahs', icon: 'cookingPot', tier: 2,
    items: [{ item: 'Made-to-order pasta', price: 10.99, est: true }] },
};
const TIER_LABEL = { 1: '$', 2: '$$', 3: '$$$' };
const MEAL_ICON = { breakfast: 'sunHorizon', lunch: 'sun', dinner: 'moonStars' };
const MEAL_LABEL = { breakfast: 'Breakfast', lunch: 'Lunch', dinner: 'Dinner' };
const DIETARY_OPTIONS = ['vegetarian', 'vegan', 'halal', 'glutenfree'];
const DIETARY_LABEL = { vegetarian: 'Vegetarian', vegan: 'Vegan', halal: 'Halal', glutenfree: 'Gluten-Free' };

/* ---------- McMaster meal plans (2026-2027 official Budget Planner) ----------
   `visible` = the declining balance you see in MacExpress (from the official sheet).
   `weekly`  = McMaster's recommended weekly burn of that visible balance.
   Every purchase draws 50% visible + 50% overhead match, so real spending power
   is 2x: effective total = visible * 2, effective daily = (weekly / 7) * 2.       */
const PLAN_YEAR_START = '2026-08-30';
const PLAN_YEAR_END = '2027-04-18';
const MEAL_PLANS = [
  { id: 'trad-a', group: 'Traditional', label: 'Traditional A', visible: 3522.50, weekly: 103.60 },
  { id: 'trad-b', group: 'Traditional', label: 'Traditional B', visible: 3637.50, weekly: 106.99 },
  { id: 'trad-c', group: 'Traditional', label: 'Traditional C', visible: 3752.50, weekly: 110.37 },
  { id: 'trad-d', group: 'Traditional', label: 'Traditional D', visible: 3862.50, weekly: 113.60 },
  { id: 'apt-a', group: 'Apartment', label: 'Apartment A', visible: 2177.50, weekly: 64.04 },
  { id: 'apt-b', group: 'Apartment', label: 'Apartment B', visible: 2297.50, weekly: 67.57 },
  { id: 'apt-c', group: 'Apartment', label: 'Apartment C', visible: 2417.50, weekly: 71.10 },
  { id: 'apt-d', group: 'Apartment', label: 'Apartment D', visible: 2537.50, weekly: 74.63 },
];
const MEAL_PLAN_BY_ID = Object.fromEntries(MEAL_PLANS.map(p => [p.id, p]));
function activeMealPlan() { return MEAL_PLAN_BY_ID[state.mealPlan] || null; }
function planEffectiveTotal(p) { return p.visible * 2; }
function planEffectiveDaily(p) { return (p.weekly / 7) * 2; }

// The meal plan runs the whole year; one semester is half of it.
//   effective = the full 50/50 spending power   (what you can buy)
//   visible   = the MacExpress balance going down (half of effective)
// For a custom budget, state.termBudget is the year figure -> half per semester,
// and there's no separate "visible" number.
function semesterEffective() {
  const p = activeMealPlan();
  return p ? p.visible : state.termBudget / 2;   // named plan: year-effective/2 = visible; custom: half the year figure
}
function semesterVisible() { const p = activeMealPlan(); return p ? p.visible / 2 : null; }

// The 34 week-ending dates from McMaster's official 2026-2027 Budget Planner.
// At week index i the visible balance is (visible - (i+1) * weekly); before the
// first date it's the full balance. We linearly interpolate between them so the
// "recommended pace" reads the same number the official PDF shows on that week.
const PLAN_WEEK_ENDINGS = [
  '2026-08-30', '2026-09-06', '2026-09-13', '2026-09-20', '2026-09-27',
  '2026-10-04', '2026-10-11', '2026-10-18', '2026-10-25',
  '2026-11-01', '2026-11-08', '2026-11-15', '2026-11-22', '2026-11-29',
  '2026-12-06', '2026-12-13', '2026-12-20', '2026-12-27',
  '2027-01-03', '2027-01-10', '2027-01-17', '2027-01-24',
  '2027-02-01', '2027-02-07', '2027-02-14', '2027-02-21',
  '2027-03-01', '2027-03-07', '2027-03-14', '2027-03-21', '2027-03-28',
  '2027-04-04', '2027-04-11', '2027-04-18',
];
const PLAN_WEEK_TS = PLAN_WEEK_ENDINGS.map(s => new Date(s + 'T00:00:00').getTime());
const PLAN_WEEK_END_SET = new Set(PLAN_WEEK_ENDINGS);

function mcmasterVisibleRemaining(p, d) {
  const bal = i => (i >= PLAN_WEEK_TS.length - 1 ? 0 : Math.max(0, p.visible - (i + 1) * p.weekly));
  const t = d.getTime();
  if (t <= PLAN_WEEK_TS[0] - 7 * 86400000) return p.visible;
  if (t <= PLAN_WEEK_TS[0]) {
    const startT = PLAN_WEEK_TS[0] - 7 * 86400000;
    const f = (t - startT) / (PLAN_WEEK_TS[0] - startT);
    return p.visible - f * (p.visible - bal(0));
  }
  for (let i = 1; i < PLAN_WEEK_TS.length; i++) {
    if (t <= PLAN_WEEK_TS[i]) {
      const f = (t - PLAN_WEEK_TS[i - 1]) / (PLAN_WEEK_TS[i] - PLAN_WEEK_TS[i - 1]);
      return bal(i - 1) + f * (bal(i) - bal(i - 1));
    }
  }
  return 0;
}

/* ---------- Terms (Fall 2026 + Winter 2027) ---------- */
const TERMS = {
  fall:   { key: 'fall',   label: 'Fall',   defStart: '2026-09-01', defEnd: '2026-12-23', classesStart: new Date(2026, 8, 8) },
  winter: { key: 'winter', label: 'Winter', defStart: '2027-01-05', defEnd: '2027-04-30', classesStart: new Date(2027, 0, 5) },
};
const DEFAULT_TERM_START = TERMS.fall.defStart;
const DEFAULT_TERM_END = TERMS.fall.defEnd;

function activeTermKey() { return state.viewTerm === 'winter' ? 'winter' : 'fall'; }
function activeTerm() { return TERMS[activeTermKey()]; }
function termStartOf(key) { return key === 'winter' ? state.winterStart : state.termStart; }
function termEndOf(key) { return key === 'winter' ? state.winterEnd : state.termEnd; }
function scheduleOf(key) { return key === 'winter' ? state.scheduleWinter : state.schedule; }
function activeTermStart() { return termStartOf(activeTermKey()); }
function activeTermEnd() { return termEndOf(activeTermKey()); }
function activeSchedule() { return scheduleOf(activeTermKey()); }
function setActiveSchedule(list) {
  if (activeTermKey() === 'winter') state.scheduleWinter = list; else state.schedule = list;
}

// Sessional-date banners, applied per term only while that term's dates are the
// McMaster defaults (custom dates turn them off).
function specialFor(d) {
  const k = isoDate(d);
  if (state.termStart === TERMS.fall.defStart && state.termEnd === TERMS.fall.defEnd
      && d >= new Date(2026, 7, 1) && d <= new Date(2026, 11, 31)) {
    if (k === '2026-09-30') return { note: 'No classes today — National Day for Truth & Reconciliation.' };
    if (d >= new Date(2026, 9, 12) && d <= new Date(2026, 9, 18)) return { note: 'Fall Reading Week — no classes.' };
    if (d >= new Date(2026, 11, 11) && d <= new Date(2026, 11, 23)) return { note: 'Final exams — no fixed lecture schedule.' };
    if (d < TERMS.fall.classesStart) return { note: 'Before classes start (move-in week).' };
  }
  if (state.winterStart === TERMS.winter.defStart && state.winterEnd === TERMS.winter.defEnd
      && d >= new Date(2027, 0, 1) && d <= new Date(2027, 4, 31)) {
    if (k === '2027-02-15') return { note: 'Family Day — university closed.' };
    if (d >= new Date(2027, 1, 15) && d <= new Date(2027, 1, 21)) return { note: 'Winter Reading Week — no classes.' };
    if (d >= new Date(2027, 3, 7) && d <= new Date(2027, 3, 30)) return { note: 'Final exams — no fixed lecture schedule.' };
    if (d < TERMS.winter.classesStart) return { note: 'Before classes start (winter break).' };
  }
  return null;
}

/* ---------- Escape user-controlled text before it goes into innerHTML / attributes ---------- */
function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, m => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]
  ));
}

/* ---------- Schedule engine (generic, from state.schedule) ---------- */
function minutesOf(hhmm) { const [h, m] = hhmm.split(':').map(Number); return h * 60 + m; }
function fmtTime(hhmm) {
  const [h, m] = hhmm.split(':').map(Number);
  const ap = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, '0')} ${ap}`;
}
function classesForDay(schedule, dow) {
  return schedule.filter(c => c.day === dow).slice().sort((a, b) => minutesOf(a.start) - minutesOf(b.start));
}
function dayMeta(schedule, dow) {
  const classes = classesForDay(schedule, dow);
  // Everyone eats three meals -- the slots are always the same. `lunch` below is
  // only the *class-gap* timing info, used when lunch is sandwiched between two
  // classes; on a light day it's null and lunch is just "flexible".
  const mealSlots = ['breakfast', 'lunch', 'dinner'];
  let lunch = null;
  for (let i = 0; i < classes.length - 1; i++) {
    const gapStart = classes[i].end, gapEnd = classes[i + 1].start;
    const mins = minutesOf(gapEnd) - minutesOf(gapStart);
    if (mins >= 25 && minutesOf(gapStart) >= minutesOf('10:00') && minutesOf(gapStart) <= minutesOf('15:00')) {
      if (!lunch || mins > lunch.gapMinutes) {
        lunch = { start: gapStart, end: gapEnd, gapMinutes: mins, from: classes[i].building, to: classes[i + 1].building };
      }
    }
  }
  return { classes, mealSlots, lunch };
}
function dayMetaForDate(d) {
  const isSpecial = !!specialFor(d);
  return dayMeta(isSpecial ? [] : activeSchedule(), d.getDay());
}

/* ---------- Candidate venue engine ---------- */
function candidateOptions(anchorBuilding, dietary, favoriteVenues, hiddenVenues) {
  const out = [];
  Object.entries(VENUES).forEach(([id, v]) => {
    if (hiddenVenues.includes(id)) return;
    let item = v.items.find(it => dietary.length && it.dietary && dietary.every(d => it.dietary.includes(d)));
    if (!item && dietary.length === 0) item = v.items[0];
    if (!item) return;
    const walk = walkMinutes(anchorBuilding, v.building);
    out.push({ venue: id, item, walk: walk ?? 99, isFavorite: favoriteVenues.includes(id) });
  });
  out.sort((a, b) => (b.isFavorite - a.isFavorite) || (a.walk - b.walk));
  return out.slice(0, 6);
}

/* ---------- Multi-tenant identity ---------- */
function uuid() {
  if (crypto.randomUUID) return crypto.randomUUID();
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
function getUserId() {
  const url = new URL(window.location.href);
  let u = url.searchParams.get('u');
  if (u) { try { localStorage.setItem('mmp-uid', u); } catch (e) {} return u; }
  try { u = localStorage.getItem('mmp-uid'); } catch (e) {}
  if (!u) {
    u = uuid();
    try { localStorage.setItem('mmp-uid', u); } catch (e) {}
  }
  url.searchParams.set('u', u);
  window.history.replaceState({}, '', url.toString());
  return u;
}
const URL_HAD_U = new URL(window.location.href).searchParams.has('u');
const USER_ID = getUserId();

/* ---------- State ---------- */
let state = {
  residence: 'pgcll', termBudget: 3522.50,
  termStart: TERMS.fall.defStart, termEnd: TERMS.fall.defEnd,
  winterStart: TERMS.winter.defStart, winterEnd: TERMS.winter.defEnd,
  viewTerm: 'fall',
  dietary: [], favoriteVenues: [], hiddenVenues: [],
  schedule: [], scheduleWinter: [],
  homeDays: [], venueChoices: {}, onboarded: false,
  mealPlan: 'custom',
};
function setSyncStatus(mode) {
  const dot = document.getElementById('syncDot');
  const label = document.getElementById('syncLabel');
  dot.className = 'dot' + (mode === 'offline' ? ' offline' : mode === 'syncing' ? ' syncing' : '');
  label.textContent = mode === 'offline' ? 'Offline — saved on this device only' : mode === 'syncing' ? 'Syncing…' : 'Synced';
}
let LOCKED = false;

// This planner belongs to an account and we don't have that session. Hide the
// planner, wipe the local copy, and force the login screen.
function showLocked() {
  LOCKED = true;
  try { localStorage.removeItem('mmp-state-' + USER_ID); } catch (e) {}
  document.getElementById('mainWrap').style.display = 'none';
  document.getElementById('settingsOverlay').classList.add('hidden');
  authOverlay.classList.remove('hidden');
  syncOverlayLock();
  renderAuthForm('login', true);
}

async function loadState() {
  const localKey = 'mmp-state-' + USER_ID;
  try { const raw = localStorage.getItem(localKey); if (raw) state = { ...state, ...JSON.parse(raw) }; } catch (e) {}
  try {
    const res = await fetch(`/api/state?u=${USER_ID}`);
    if (res.status === 401) { showLocked(); return; }
    if (res.ok) { const server = await res.json(); state = { ...state, ...server }; setSyncStatus('ok'); }
    else setSyncStatus('offline');
  } catch (e) { setSyncStatus('offline'); }
}
let saveTimer = null;
function persist() {
  if (LOCKED) return;
  try { localStorage.setItem('mmp-state-' + USER_ID, JSON.stringify(state)); } catch (e) {}
  renderAll();
  clearTimeout(saveTimer);
  setSyncStatus('syncing');
  saveTimer = setTimeout(async () => {
    try {
      const res = await fetch(`/api/state?u=${USER_ID}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(state) });
      if (res.status === 401) { showLocked(); return; }
      setSyncStatus(res.ok ? 'ok' : 'offline');
    } catch (e) { setSyncStatus('offline'); }
  }, 400);
}

/* ---------- Term calendar ---------- */
function isoDate(d) { return d.toISOString().slice(0, 10); }
function termDates() {
  const start = new Date(activeTermStart() + 'T00:00:00');
  const end = new Date(activeTermEnd() + 'T00:00:00');
  const arr = [];
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) arr.push(new Date(d));
  return arr;
}

/* ---------- Real map (Leaflet + OpenStreetMap tiles + real building footprints) ---------- */
const BUILDING_POLYGONS = {"bates":[[43.2635,-79.92257],[43.263515,-79.923002],[43.26362,-79.923006],[43.263625,-79.922752],[43.263849,-79.922759],[43.26385,-79.922656],[43.26408,-79.922663],[43.264078,-79.922784],[43.264358,-79.922764],[43.264396,-79.922834],[43.264448,-79.922836],[43.264471,-79.92247],[43.264354,-79.922443],[43.264351,-79.922596],[43.264196,-79.922621],[43.264175,-79.922322],[43.264101,-79.92232],[43.264061,-79.922516],[43.263887,-79.92251],[43.263891,-79.922309],[43.263772,-79.922305],[43.263737,-79.922578],[43.2635,-79.92257]],"matthews":[[43.262698,-79.922199],[43.262731,-79.92242],[43.263123,-79.922429],[43.263126,-79.922267],[43.262806,-79.922243],[43.262854,-79.922078],[43.26284,-79.92181],[43.262728,-79.921808],[43.262698,-79.922199]],"whidden":[[43.264845,-79.919834],[43.26497,-79.919934],[43.265082,-79.919699],[43.265302,-79.919697],[43.265307,-79.9195],[43.265101,-79.919491],[43.264981,-79.919232],[43.264854,-79.919319],[43.26495,-79.919586],[43.264845,-79.919834]],"edwards":[[43.263876,-79.919062],[43.264294,-79.919077],[43.264299,-79.918828],[43.264193,-79.918824],[43.264191,-79.918928],[43.263879,-79.918916],[43.263876,-79.919062]],"wallingford":[[43.262855,-79.921725],[43.263228,-79.921741],[43.263231,-79.921592],[43.262859,-79.921539],[43.262855,-79.921725]],"moulton":[[43.263218,-79.922398],[43.26331,-79.922402],[43.263312,-79.922337],[43.26337,-79.92234],[43.263369,-79.922401],[43.263597,-79.922411],[43.263602,-79.922202],[43.263374,-79.922192],[43.263381,-79.921877],[43.26323,-79.921871],[43.263218,-79.922398]],"woodstock":[[43.265757,-79.919037],[43.265923,-79.919045],[43.265921,-79.919124],[43.265981,-79.919127],[43.265975,-79.919364],[43.266076,-79.919369],[43.266112,-79.919001],[43.266062,-79.918885],[43.265761,-79.918871],[43.265757,-79.919037]],"brandon":[[43.265686,-79.919949],[43.265988,-79.91999],[43.266019,-79.919872],[43.266194,-79.91988],[43.266197,-79.919729],[43.265865,-79.919693],[43.265863,-79.919807],[43.26569,-79.9198],[43.265686,-79.919949]],"degroote":[[43.261512,-79.916458],[43.261491,-79.91685],[43.26141,-79.91685],[43.261406,-79.916901],[43.261242,-79.916894],[43.26124,-79.917008],[43.261376,-79.917088],[43.261457,-79.917294],[43.260632,-79.917239],[43.260638,-79.91683],[43.260728,-79.916833],[43.260734,-79.916475],[43.260813,-79.916479],[43.260813,-79.916431],[43.261512,-79.916458]],"burke":[[43.261492,-79.920305],[43.261535,-79.920031],[43.262504,-79.920057],[43.262532,-79.92013],[43.262493,-79.920337],[43.262357,-79.920332],[43.262348,-79.920764],[43.262135,-79.920755],[43.262144,-79.920268],[43.261944,-79.920255],[43.261934,-79.920718],[43.2619,-79.920748],[43.26172,-79.92071],[43.26173,-79.920245],[43.261599,-79.920239],[43.261598,-79.920309],[43.261492,-79.920305]],"hodgins":[[43.260183,-79.920658],[43.260405,-79.920665],[43.260428,-79.919873],[43.260584,-79.919873],[43.260577,-79.92021],[43.260779,-79.920183],[43.260782,-79.920072],[43.260868,-79.920055],[43.260956,-79.920079],[43.260954,-79.920187],[43.261106,-79.920193],[43.261106,-79.920232],[43.261152,-79.920234],[43.261159,-79.919904],[43.26132,-79.91991],[43.261304,-79.920739],[43.261143,-79.920733],[43.261149,-79.920434],[43.260941,-79.920427],[43.260934,-79.92076],[43.260732,-79.920753],[43.260733,-79.920694],[43.260689,-79.920693],[43.260686,-79.920816],[43.260636,-79.920814],[43.260631,-79.921006],[43.260178,-79.920987],[43.260183,-79.920658]],"thode":[[43.260875,-79.922233],[43.260845,-79.922454],[43.260905,-79.922486],[43.260867,-79.922486],[43.260866,-79.9228],[43.261037,-79.922949],[43.261207,-79.922922],[43.261318,-79.922791],[43.261358,-79.922663],[43.261298,-79.922332],[43.261268,-79.922283],[43.261033,-79.922278],[43.261024,-79.922325],[43.261012,-79.922238],[43.260875,-79.922233]],"hedden":[[43.266201,-79.918811],[43.266091,-79.918695],[43.266295,-79.918435],[43.266244,-79.918177],[43.26674,-79.917901],[43.266769,-79.918081],[43.266348,-79.918333],[43.266445,-79.918481],[43.266201,-79.918811]],"keyes":[[43.26252,-79.922434],[43.262428,-79.922446],[43.262429,-79.922365],[43.262272,-79.922381],[43.262265,-79.92266],[43.262151,-79.922655],[43.262149,-79.922769],[43.2622,-79.922807],[43.262185,-79.922933],[43.262536,-79.922949],[43.262547,-79.922898],[43.262732,-79.922937],[43.262751,-79.923035],[43.262802,-79.923056],[43.263121,-79.923072],[43.263286,-79.922968],[43.263276,-79.922768],[43.263164,-79.922767],[43.263176,-79.922884],[43.262798,-79.92286],[43.262815,-79.922747],[43.26276,-79.922745],[43.262759,-79.922781],[43.262527,-79.922738],[43.26252,-79.922434]],"engtech":[[43.258812,-79.919948],[43.258161,-79.919928],[43.258153,-79.920272],[43.258806,-79.920308],[43.258812,-79.919948]],"commons":[[43.265424,-79.919104],[43.265419,-79.9193],[43.265366,-79.919298],[43.265412,-79.919613],[43.265454,-79.919615],[43.265453,-79.919661],[43.265678,-79.919684],[43.265672,-79.919575],[43.265734,-79.919578],[43.265738,-79.919408],[43.265728,-79.919282],[43.265676,-79.91928],[43.265681,-79.919025],[43.265604,-79.919022],[43.265606,-79.918895],[43.265428,-79.918888],[43.265424,-79.919104]],"musc":[[43.263113,-79.918438],[43.263125,-79.91759],[43.263162,-79.917593],[43.263131,-79.917548],[43.263174,-79.917416],[43.26327,-79.917319],[43.263322,-79.917302],[43.26335,-79.91735],[43.263351,-79.917297],[43.263408,-79.917299],[43.263409,-79.917185],[43.263739,-79.917198],[43.263737,-79.917314],[43.26379,-79.917314],[43.263821,-79.9174],[43.263774,-79.91785],[43.263213,-79.917836],[43.26321,-79.918041],[43.263328,-79.918044],[43.263327,-79.91811],[43.263209,-79.918109],[43.263204,-79.91844],[43.263113,-79.918438]],"pgcll":[[43.265772,-79.918537],[43.265787,-79.917734],[43.265262,-79.917711],[43.265242,-79.918514],[43.265772,-79.918537]],"bourns":[[43.260991,-79.921858],[43.260716,-79.921842],[43.260727,-79.921323],[43.26081,-79.921325],[43.260814,-79.921089],[43.26032,-79.921074],[43.260316,-79.921307],[43.260365,-79.921308],[43.260363,-79.921377],[43.260283,-79.921374],[43.260278,-79.921623],[43.260146,-79.921662],[43.260139,-79.921909],[43.260154,-79.922087],[43.260325,-79.922095],[43.26033,-79.921847],[43.260408,-79.921829],[43.260398,-79.922419],[43.26034,-79.922417],[43.260336,-79.92267],[43.260621,-79.922654],[43.260625,-79.922462],[43.260568,-79.92246],[43.260576,-79.922034],[43.26068,-79.922038],[43.260679,-79.922083],[43.261028,-79.922093],[43.261027,-79.92216],[43.26137,-79.922182],[43.261333,-79.921892],[43.260991,-79.921858]],"hamiltonhall":[[43.262949,-79.920462],[43.262958,-79.920462],[43.263259,-79.920472],[43.263266,-79.920047],[43.263267,-79.920028],[43.263248,-79.920027],[43.263249,-79.919969],[43.263258,-79.919969],[43.263259,-79.919924],[43.263252,-79.919924],[43.263253,-79.919844],[43.263164,-79.919841],[43.263165,-79.919784],[43.263107,-79.919782],[43.263103,-79.919971],[43.263098,-79.91998],[43.263097,-79.919997],[43.263101,-79.920004],[43.2631,-79.920031],[43.263095,-79.920031],[43.263094,-79.920054],[43.26308,-79.920054],[43.26308,-79.920082],[43.263079,-79.920108],[43.263097,-79.920108],[43.263096,-79.920175],[43.263095,-79.920256],[43.263036,-79.920254],[43.263015,-79.920253],[43.262979,-79.920252],[43.262978,-79.920274],[43.262978,-79.920284],[43.262952,-79.920283],[43.262951,-79.920357],[43.262949,-79.920462]],"braleyathletic":[[43.265326,-79.91709],[43.265085,-79.917081],[43.265086,-79.917019],[43.26482,-79.917009],[43.264753,-79.917006],[43.264769,-79.916172],[43.264773,-79.915997],[43.264833,-79.915999],[43.264838,-79.91573],[43.26514,-79.915741],[43.265146,-79.915458],[43.265326,-79.915465],[43.265313,-79.916087],[43.265441,-79.916091],[43.265437,-79.916324],[43.265341,-79.91632],[43.265339,-79.916421],[43.265326,-79.91709]],"iahs":[[43.259834,-79.921326],[43.259809,-79.921326],[43.259725,-79.921321],[43.259665,-79.921318],[43.259665,-79.921233],[43.259665,-79.921219],[43.259665,-79.921203],[43.259635,-79.921202],[43.259637,-79.9211],[43.2596,-79.921097],[43.259604,-79.920958],[43.259634,-79.920956],[43.259638,-79.920828],[43.259618,-79.920827],[43.259619,-79.92078],[43.259615,-79.920777],[43.25961,-79.92077],[43.259609,-79.920762],[43.259614,-79.920635],[43.259647,-79.920635],[43.25965,-79.920537],[43.259633,-79.920509],[43.259623,-79.920494],[43.259603,-79.920469],[43.259595,-79.920452],[43.259519,-79.920451],[43.259519,-79.920485],[43.259415,-79.920485],[43.259416,-79.92044],[43.259264,-79.920433],[43.259267,-79.920313],[43.259282,-79.920314],[43.259282,-79.920188],[43.259295,-79.920156],[43.259315,-79.920135],[43.259337,-79.920128],[43.259626,-79.920139],[43.259868,-79.920146],[43.25988,-79.920151],[43.259893,-79.920161],[43.259901,-79.920176],[43.259906,-79.920192],[43.259906,-79.92021],[43.259903,-79.920225],[43.259897,-79.920241],[43.259885,-79.920252],[43.259822,-79.920303],[43.259832,-79.92033],[43.259839,-79.920363],[43.259841,-79.920375],[43.259844,-79.920395],[43.259844,-79.920423],[43.259881,-79.920427],[43.259866,-79.921216],[43.259838,-79.921216],[43.259834,-79.921326]],"psych":[[43.259398,-79.919741],[43.259418,-79.919741],[43.259418,-79.919763],[43.259454,-79.919767],[43.259454,-79.919741],[43.25947,-79.919742],[43.259483,-79.919743],[43.259497,-79.919743],[43.259558,-79.919745],[43.259557,-79.919853],[43.259614,-79.919854],[43.259614,-79.919868],[43.259666,-79.919869],[43.259667,-79.919835],[43.259755,-79.919837],[43.259754,-79.919872],[43.259788,-79.919873],[43.259841,-79.919874],[43.259841,-79.919841],[43.259924,-79.919843],[43.259927,-79.919621],[43.259947,-79.919621],[43.259947,-79.919613],[43.259948,-79.919558],[43.259949,-79.9195],[43.259949,-79.919487],[43.259828,-79.919484],[43.259832,-79.919188],[43.259788,-79.919187],[43.259729,-79.919185],[43.259728,-79.919281],[43.259726,-79.919446],[43.259677,-79.919444],[43.259678,-79.919373],[43.259702,-79.919374],[43.259703,-79.919279],[43.259704,-79.919264],[43.259641,-79.919263],[43.259563,-79.919261],[43.25946,-79.919258],[43.259459,-79.919309],[43.259458,-79.919406],[43.259435,-79.919405],[43.259403,-79.919404],[43.259398,-79.919741]]};

let leafletMapInstance = null;

function renderMap(containerId, anchorBuilding, venueBuilding, relevantIds, returnBuilding) {
  const el = document.getElementById(containerId);
  if (!el) return;
  if (leafletMapInstance) { leafletMapInstance.remove(); leafletMapInstance = null; }
  const ids = [...new Set(relevantIds)].filter(id => BUILDINGS[id]);
  if (!ids.length) return;

  const map = L.map(containerId, { scrollWheelZoom: true, attributionControl: true, zoomControl: true, minZoom: 16, maxBounds: CAMPUS_BOUNDS, maxBoundsViscosity: 1.0 });
  leafletMapInstance = map;
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
  }).addTo(map);

  const bounds = [];
  ids.forEach(id => {
    const isFood = Object.values(VENUES).some(v => v.building === id);
    const isAnchor = id === anchorBuilding;
    const isTarget = id === venueBuilding;
    const color = isAnchor ? '#E8B355' : (isFood || isTarget) ? '#DD4B1F' : '#6E5C64';
    const fill = isAnchor ? '#E8B355' : (isFood || isTarget) ? '#8A2C10' : '#2A1820';
    const poly = BUILDING_POLYGONS[id];
    let layer;
    if (poly) {
      layer = L.polygon(poly, { color, weight: isAnchor ? 2.5 : 1.5, fillColor: fill, fillOpacity: 0.75 }).addTo(map);
      poly.forEach(p => bounds.push(p));
    } else {
      const c = [BUILDINGS[id].lat, BUILDINGS[id].lon];
      layer = L.circle(c, { radius: 18, color, weight: 2, fillColor: fill, fillOpacity: 0.75 }).addTo(map);
      bounds.push(c);
    }
    layer.bindTooltip(`${BUILDINGS[id].short}${BUILDINGS[id].approx ? ' (approx.)' : ''}`, { permanent: true, direction: 'center', className: 'bldg-tag', opacity: 1 });
  });

  const drawLeg = (fromId, toId, color, label) => {
    if (!fromId || !toId || fromId === toId || !BUILDINGS[fromId] || !BUILDINGS[toId]) return;
    const fb = BUILDINGS[fromId], tb = BUILDINGS[toId];
    const a = [fb.lat, fb.lon], v = [tb.lat, tb.lon];
    L.polyline([a, v], { color, weight: 2.5, dashArray: '5 6' }).addTo(map);
    const mid = [(a[0] + v[0]) / 2, (a[1] + v[1]) / 2];
    const bearing = bearingDeg(fb, tb);
    L.marker(mid, {
      icon: L.divIcon({
        className: '', iconSize: null,
        html: `<span class="path-dist-label" style="color:${color};border-color:${color}"><span class="path-arrow" style="border-bottom-color:${color};transform:rotate(${bearing}deg)"></span>${label ? label + ' · ' : ''}${walkMinutes(fromId, toId)} min</span>`,
      }), interactive: false,
    }).addTo(map);
  };
  const legDefs = [[anchorBuilding, venueBuilding], [venueBuilding, returnBuilding]];
  const numberLegs = legDefs.filter(([f, t]) => f && t && f !== t && BUILDINGS[f] && BUILDINGS[t]).length > 1;
  drawLeg(anchorBuilding, venueBuilding, '#E8B355', numberLegs ? '1' : null);
  drawLeg(venueBuilding, returnBuilding, '#DD4B1F', numberLegs ? '2' : null);

  ids.forEach(id => {
    const venuesHere = Object.entries(VENUES).filter(([vid, v]) => v.building === id);
    venuesHere.forEach(([vid, v], i) => {
      const isSelected = id === venueBuilding;
      const offsetLat = BUILDINGS[id].lat + 0.00012 + i * 0.00009;
      const html = `<div class="venue-pin${isSelected ? ' selected' : ''}" data-venue="${vid}">${svgIcon(v.icon)}${TIER_LABEL[v.tier]}</div>`;
      const marker = L.marker([offsetLat, BUILDINGS[id].lon], { icon: L.divIcon({ className: '', html, iconSize: null, iconAnchor: [20, 12] }) }).addTo(map);
      marker.on('click', () => { if (typeof window.__onVenuePinClick === 'function') window.__onVenuePinClick(vid); });
    });
  });

  if (bounds.length) map.fitBounds(bounds, { padding: [28, 28], maxZoom: 18 });
}

/* ---------- Calendar UI ---------- */
let activeMonth = 0;
let selectedDate = null;
let activeMealKey = 'breakfast';
let selectedClassIdx = null;
function monthsInTerm() {
  const start = new Date(activeTermStart() + 'T00:00:00');
  const end = new Date(activeTermEnd() + 'T00:00:00');
  const list = [];
  let cur = new Date(start.getFullYear(), start.getMonth(), 1);
  while (cur <= end) {
    list.push({ y: cur.getFullYear(), m: cur.getMonth(), label: cur.toLocaleDateString('en-CA', { month: 'long', year: 'numeric' }), short: cur.toLocaleDateString('en-CA', { month: 'short' }) });
    cur = new Date(cur.getFullYear(), cur.getMonth() + 1, 1);
  }
  return list;
}

function renderCalendar() {
  const months = monthsInTerm();
  if (!selectedDate) selectedDate = new Date(activeTermStart() + 'T00:00:00');
  const monthTabsEl = document.getElementById('monthTabs');
  monthTabsEl.innerHTML = '';
  months.forEach((mo, i) => {
    const b = document.createElement('button');
    b.className = 'month-btn' + (i === activeMonth ? ' active' : '');
    b.textContent = mo.short;
    b.addEventListener('click', () => { activeMonth = i; renderCalendar(); });
    monthTabsEl.appendChild(b);
  });
  if (!months[activeMonth]) activeMonth = 0;
  const mo = months[activeMonth];
  const calGridEl = document.getElementById('calGrid');
  calGridEl.innerHTML = '';
  if (!mo) { renderStats(); return; }
  const termStart = new Date(activeTermStart() + 'T00:00:00'), termEnd = new Date(activeTermEnd() + 'T00:00:00');
  const first = new Date(mo.y, mo.m, 1);
  const startOffset = first.getDay();
  const daysInMonth = new Date(mo.y, mo.m + 1, 0).getDate();
  for (let i = 0; i < startOffset; i++) {
    const blank = document.createElement('div'); blank.className = 'cal-cell blank'; calGridEl.appendChild(blank);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const d = new Date(mo.y, mo.m, day);
    const key = isoDate(d);
    const inRange = d >= termStart && d <= termEnd;
    const cell = document.createElement('div');
    cell.className = 'cal-cell';
    if (!inRange) cell.classList.add('disabled');
    const special = specialFor(d);
    const isHome = state.homeDays.includes(key);
    if (special) cell.classList.add('special');
    if (isHome) cell.classList.add('home');
    if (key === isoDate(selectedDate)) cell.classList.add('selected');
    const isMilestone = activeMealPlan() && PLAN_WEEK_END_SET.has(key);
    if (isMilestone) cell.classList.add('milestone');
    cell.innerHTML = `<span class="num mono">${day}</span>${isHome ? svgIcon('house') : '<span class="dot"></span>'}`;
    if (inRange) cell.addEventListener('click', () => { selectedDate = d; renderCalendar(); renderConsole(); });
    calGridEl.appendChild(cell);
  }
  renderStats();
}

function renderStats() {
  renderTermSwitch();
  const dates = termDates();
  const tStart = new Date(activeTermStart() + 'T00:00:00'), tEnd = new Date(activeTermEnd() + 'T00:00:00');
  const homeInTerm = state.homeDays.filter(k => {
    const d = new Date(k + 'T00:00:00');
    return d >= tStart && d <= tEnd;
  }).length;
  const onCampus = Math.max(1, dates.length - homeInTerm);
  const semEff = semesterEffective();
  const semVis = semesterVisible();
  const perDay = semEff / onCampus;
  const tLabel = activeTerm().label;
  document.getElementById('cmdStats').innerHTML = `
    <div class="cmd-stat"><div class="n mono">$${semEff.toFixed(2)}</div><div class="l">to spend &middot; ${tLabel}${semVis != null ? `<span class="sub">$${semVis.toFixed(2)} off visible balance</span>` : ''}</div></div>
    <div class="cmd-stat"><div class="n mono">${onCampus}</div><div class="l">on-campus days</div></div>
    <div class="cmd-stat"><div class="n mono">$${perDay.toFixed(2)}</div><div class="l">your target / day${semVis != null ? `<span class="sub">$${(perDay / 2).toFixed(2)} off visible</span>` : ''}</div></div>
    <div class="cmd-stat"><div class="n mono">${homeInTerm}</div><div class="l">days marked home</div></div>
  `;
  document.getElementById('placeSub').textContent = `${BUILDINGS[state.residence] ? BUILDINGS[state.residence].name : 'McMaster'}`;

  let plannedTotal = 0;
  dates.forEach(d => {
    if (state.homeDays.includes(isoDate(d))) return;
    const meta = dayMetaForDate(d);
    meta.mealSlots.forEach(mk => {
      const anchor = anchorForMeal(meta, mk);
      const opts = candidateOptions(anchor.building, state.dietary, state.favoriteVenues, state.hiddenVenues);
      if (!opts.length) return;
      const key = `${d.getDay()}_${mk}`;
      const chosen = state.venueChoices[key];
      const pick = opts.find(o => o.venue === chosen) || opts[0];
      plannedTotal += pick.item.price;
    });
  });
  const semBudget = semesterEffective();
  const diff = semBudget - plannedTotal;
  const note = document.getElementById('termBufferNote');
  const lbl = activeTerm().label;
  note.innerHTML = diff >= 0
    ? `Following your current picks every on-campus day, you'd spend <b>$${plannedTotal.toFixed(2)}</b> of your $${semBudget.toFixed(2)} for ${lbl} — banking <b>$${diff.toFixed(2)}</b> of buffer.`
    : `Following your current picks every on-campus day, you'd spend <b>$${plannedTotal.toFixed(2)}</b> of your $${semBudget.toFixed(2)} for ${lbl} — that's <b class="over">$${Math.abs(diff).toFixed(2)} over</b>.`;
}

function renderTermSwitch() {
  const el = document.getElementById('termSwitch');
  if (!el) return;
  el.innerHTML = ['fall', 'winter'].map(k =>
    `<button data-term="${k}" class="${activeTermKey() === k ? 'active' : ''}">${TERMS[k].label} ${k === 'fall' ? '2026' : '2027'}</button>`
  ).join('');
  el.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
    if (b.dataset.term === activeTermKey()) return;
    state.viewTerm = b.dataset.term;
    activeMonth = 0;
    selectedDate = new Date(activeTermStart() + 'T00:00:00');
    persist();
  }));
}

function anchorForMeal(meta, mealKey) {
  if (mealKey === 'lunch') {
    if (meta.lunch) return { building: meta.lunch.from, label: `${fmtTime(meta.lunch.start)}–${fmtTime(meta.lunch.end)}`, window: `${meta.lunch.gapMinutes} min window`, to: meta.lunch.to };
    // No class gap today -- flexible lunch. Anchor to a class near midday if there
    // is one (so walk times are useful), otherwise to the residence.
    const midday = meta.classes.find(c => minutesOf(c.end) >= minutesOf('11:00') && minutesOf(c.start) <= minutesOf('14:30'));
    return { building: midday ? midday.building : state.residence, label: 'Flexible', to: null };
  }
  if (mealKey === 'breakfast') return { building: state.residence, label: meta.classes.length ? `Before ${fmtTime(meta.classes[0].start)}` : 'Flexible', to: meta.classes.length ? meta.classes[0].building : null };
  return { building: meta.classes.length ? meta.classes[meta.classes.length - 1].building : state.residence, label: meta.classes.length ? `After ${fmtTime(meta.classes[meta.classes.length - 1].end)}` : 'Flexible' };
}

// A trailing note for the parse status line when the parser couldn't map a
// class to a known building. Not an error -- the user just fills those in.
function missingLocNote(classes) {
  const n = classes.filter(c => !BUILDINGS[c.building]).length;
  if (!n) return '';
  return ` Couldn't find a location for ${n} of them — please set ${n === 1 ? 'it' : 'them'} manually in the table below (marked in gold).`;
}

/* ---------- Day console ---------- */
function renderConsole() {
  const d = selectedDate;
  const key = isoDate(d);
  const wk = d.getDay();
  const special = specialFor(d);
  const meta = dayMetaForDate(d);
  const isHome = state.homeDays.includes(key);
  const dateLabel = d.toLocaleDateString('en-CA', { weekday: 'long', month: 'long', day: 'numeric' });
  const refPlan = activeMealPlan();
  let mcmasterRefHtml = '';
  if (refPlan) {
    const vis = mcmasterVisibleRemaining(refPlan, d);
    const dLabel = d.toLocaleDateString('en-CA', { month: 'short', day: 'numeric' });
    mcmasterRefHtml = PLAN_WEEK_END_SET.has(key)
      ? `<div class="mcmaster-ref milestone">${svgIcon('calendar')}<span><b>Weekly checkpoint &middot; ${dLabel}</b><br>McMaster's plan: <b>$${vis.toFixed(2)}</b> left on your visible balance (<b>$${(vis * 2).toFixed(2)}</b> of real spending power).</span></div>`
      : `<div class="mcmaster-ref">${svgIcon('calendar')}<span>McMaster's pace by ${dLabel}: <b>$${vis.toFixed(2)}</b> visible left &middot; <b>$${(vis * 2).toFixed(2)}</b> real.</span></div>`;
  } else {
    mcmasterRefHtml = `<div class="mcmaster-ref muted">${svgIcon('calendar')}<span>Pick your meal plan in Settings to see McMaster's recommended balance for each week.</span></div>`;
  }
  const el = document.getElementById('console');
  if (!meta.mealSlots.includes(activeMealKey)) activeMealKey = meta.mealSlots[0];

  let scheduleHtml = `<div class="timeline">`;
  const brk = anchorForMeal(meta, 'breakfast');
  scheduleHtml += mealRow('breakfast', brk.label, brk.window);
  let lunchEmitted = false;
  const emitLunch = () => {
    const lk = anchorForMeal(meta, 'lunch');
    scheduleHtml += mealRow('lunch', lk.label, lk.window);
    lunchEmitted = true;
  };
  // With no class-gap lunch, drop a flexible lunch just before the first
  // class that starts at/after 11:00; if there's no such class it goes after
  // the last class (or right after breakfast on a class-free day).
  const flexLunchBefore = meta.lunch ? -1 : meta.classes.findIndex(c => minutesOf(c.start) >= minutesOf('11:00'));
  meta.classes.forEach((c, i) => {
    if (!lunchEmitted && flexLunchBefore === i) emitLunch();
    const locName = BUILDINGS[c.building] ? BUILDINGS[c.building].name : (c.loc || '');
    const locHtml = locName
      ? `${svgIcon('footprints')} ${esc(locName)}`
      : `<span class="tl-noloc">Location not found — set it in Settings</span>`;
    scheduleHtml += `<div class="tl-row tl-class${selectedClassIdx === i ? ' active' : ''}" data-class-idx="${i}"><div class="tl-time mono">${fmtTime(c.start)}</div><div class="tl-rail"><div class="tl-dot"></div><div class="tl-line"></div></div><div class="tl-body"><b>${esc(c.course)}</b><div class="tl-loc">${locHtml}</div></div></div>`;
    if (meta.lunch && c.end === meta.lunch.start) emitLunch();
  });
  if (!lunchEmitted) emitLunch();
  const dnr = anchorForMeal(meta, 'dinner');
  scheduleHtml += mealRow('dinner', dnr.label, dnr.window);
  scheduleHtml += `</div>`;
  if (!meta.classes.length && !special) scheduleHtml = `<div class="banner">${svgIcon('house')} No classes today — meals below are flexible.</div>` + scheduleHtml;
  if (special) scheduleHtml += `<div class="banner">${svgIcon('mapPin')} ${special.note}</div>`;

  if (selectedClassIdx !== null && !meta.classes[selectedClassIdx]) selectedClassIdx = null;
  const classSel = selectedClassIdx !== null ? meta.classes[selectedClassIdx] : null;
  const classFromBuilding = classSel ? (selectedClassIdx === 0 ? state.residence : meta.classes[selectedClassIdx - 1].building) : null;

  let bodyHtml;
  if (isHome) {
    bodyHtml = `<div class="panel"><div class="home-state">${svgIcon('house')}<div>Marked as a home day — no campus meals planned. This day drops out of the budget math.</div></div></div>`;
  } else {
    const anchor = anchorForMeal(meta, activeMealKey);
    const opts = candidateOptions(anchor.building, state.dietary, state.favoriteVenues, state.hiddenVenues);
    const choiceKey = `${wk}_${activeMealKey}`;
    const chosenVenue = state.venueChoices[choiceKey];
    const curIdx = Math.max(0, opts.findIndex(o => o.venue === chosenVenue));
    const cur = opts[curIdx];

    let eatTimeHtml = '';
    if (activeMealKey === 'lunch' && meta.lunch && cur) {
      const walkThere = walkMinutes(meta.lunch.from, VENUES[cur.venue].building);
      const walkBack = walkMinutes(VENUES[cur.venue].building, meta.lunch.to);
      const eatTime = Math.max(0, meta.lunch.gapMinutes - walkThere - walkBack);
      eatTimeHtml = `<div class="eat-time"><span class="n mono">${eatTime} min</span><span class="l">at the table — ${meta.lunch.gapMinutes} min gap minus ${walkThere}+${walkBack} min walking</span></div>`;
    } else if (activeMealKey === 'lunch' && cur) {
      eatTimeHtml = `<div class="eat-time"><span class="l">No class gap today — lunch is flexible, eat whenever works.</span></div>`;
    } else if (activeMealKey === 'breakfast' && cur) {
      const firstBuilding = meta.classes.length ? meta.classes[0].building : state.residence;
      const direct = walkMinutes(state.residence, firstBuilding) || 0;
      const viaVenue = (walkMinutes(state.residence, VENUES[cur.venue].building) || 0) + (walkMinutes(VENUES[cur.venue].building, firstBuilding) || 0);
      const detour = Math.max(0, viaVenue - direct);
      eatTimeHtml = `<div class="eat-time"><span class="n mono">${svgIcon('footprints')} +${detour} min</span><span class="l">detour vs walking straight to your first class</span></div>`;
    } else if (cur) {
      const lastBuilding = meta.classes.length ? meta.classes[meta.classes.length - 1].building : state.residence;
      const w = walkMinutes(lastBuilding, VENUES[cur.venue].building) || 0;
      eatTimeHtml = `<div class="eat-time"><span class="n mono">${svgIcon('footprints')} ${w} min</span><span class="l">walk from your last class — evening's open after</span></div>`;
    }

    const optionsHtml = opts.length ? opts.map((o, i) => {
      const v = VENUES[o.venue];
      return `<button class="option-row${i === curIdx ? ' selected' : ''}" data-venue="${o.venue}">
        <div class="opt-icon">${svgIcon(v.icon)}</div>
        <div class="opt-mid">
          <div class="venue">${o.isFavorite ? svgIcon('star', 'star') : ''}${esc(v.name)}</div>
          <div class="item">${esc(o.item.item)}</div>
          <div class="meta">
            <span>${svgIcon('mapPin')} ${esc(BUILDINGS[v.building] ? BUILDINGS[v.building].name : v.building)}</span>
            <span>${svgIcon('footprints')} ${o.walk} min</span>
            <span>${TIER_LABEL[v.tier]}</span>
          </div>
          ${o.item.note ? `<div class="note">${esc(o.item.note)}</div>` : ''}
        </div>
        <div class="opt-price mono">$${o.item.price.toFixed(2)}${o.item.est ? '*' : ''}</div>
      </button>`;
    }).join('') : `<div class="no-options">No venues match your current filters for this meal. Loosen your dietary filter or unhide a venue in Settings.</div>`;

    let total = 0;
    meta.mealSlots.forEach(mk => {
      const a = anchorForMeal(meta, mk);
      const o = candidateOptions(a.building, state.dietary, state.favoriteVenues, state.hiddenVenues);
      if (!o.length) return;
      const ck = `${wk}_${mk}`;
      const pick = o.find(x => x.venue === state.venueChoices[ck]) || o[0];
      total += pick.item.price;
    });
    const TARGET = state.termBudget / Math.max(1, termDates().length - state.homeDays.length);
    let pillClass = 'pill-good', pillTxt = 'under today’s target';
    if (total > TARGET + 3) { pillClass = 'pill-over'; pillTxt = 'over today’s target'; }
    else if (total > TARGET) { pillClass = 'pill-warn'; pillTxt = 'slightly over'; }

    bodyHtml = `
      <div class="panel map-panel">
        <div class="map-head"><span class="map-title">${svgIcon('mapPin')} Campus map</span>${classSel
          ? `<span class="map-title" style="color:var(--fireball)">${svgIcon('footprints')} ${walkMinutes(classFromBuilding, classSel.building) ?? 0} min to ${esc(classSel.course)}</span>`
          : ''}</div>
        <div class="map-svg-wrap"><div id="campusMapEl"></div></div>
      </div>
      <div class="panel">
        <div class="meal-tabs">${meta.mealSlots.map(k => `<button class="meal-tab${k === activeMealKey ? ' active' : ''}" data-meal="${k}">${svgIcon(MEAL_ICON[k])} ${MEAL_LABEL[k]}</button>`).join('')}</div>
        ${eatTimeHtml}
        <div class="options">${optionsHtml}</div>
        <div class="day-total ${pillClass}"><span class="lbl">Day total &middot; ${pillTxt}</span><span class="amt">$${total.toFixed(2)}</span></div>
      </div>
    `;
  }

  el.innerHTML = `
    <div class="panel">
      <div class="day-head">
        <div>
          <div class="day-date">${dateLabel}</div>
          ${mcmasterRefHtml}
        </div>
        <button class="home-toggle ${isHome ? 'is-home' : ''}" id="homeToggleBtn">${svgIcon('house')} ${isHome ? 'Mark on-campus' : 'Mark home (skip this day)'}</button>
      </div>
      ${scheduleHtml}
    </div>
    ${bodyHtml}
  `;

  document.getElementById('homeToggleBtn').addEventListener('click', () => {
    if (state.homeDays.includes(key)) state.homeDays = state.homeDays.filter(x => x !== key);
    else state.homeDays.push(key);
    persist();
  });
  el.querySelectorAll('.meal-tab').forEach(btn => btn.addEventListener('click', () => { activeMealKey = btn.dataset.meal; selectedClassIdx = null; renderConsole(); }));
  el.querySelectorAll('.tl-meal').forEach(row => row.addEventListener('click', () => {
    activeMealKey = row.dataset.meal; selectedClassIdx = null; renderConsole();
    document.querySelector('.meal-tabs')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }));
  el.querySelectorAll('.tl-class').forEach(row => row.addEventListener('click', () => {
    const idx = Number(row.dataset.classIdx);
    selectedClassIdx = selectedClassIdx === idx ? null : idx;
    renderConsole();
    document.querySelector('.map-panel')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }));
  el.querySelectorAll('.option-row').forEach(btn => btn.addEventListener('click', () => {
    state.venueChoices[`${wk}_${activeMealKey}`] = btn.dataset.venue; persist();
  }));
  window.__onVenuePinClick = (vid) => {
    state.venueChoices[`${wk}_${activeMealKey}`] = vid; persist();
  };
  if (!isHome && classSel) {
    const relevantIdsC = [classFromBuilding, classSel.building].filter(Boolean);
    renderMap('campusMapEl', classFromBuilding, classSel.building, relevantIdsC);
  } else if (!isHome) {
    const meta2 = meta;
    const anchor2 = anchorForMeal(meta2, activeMealKey);
    const opts2 = candidateOptions(anchor2.building, state.dietary, state.favoriteVenues, state.hiddenVenues);
    const choiceKey2 = `${wk}_${activeMealKey}`;
    const chosen2 = opts2.find(o => o.venue === state.venueChoices[choiceKey2]) || opts2[0];
    const relevantIds2 = [state.residence, anchor2.building, anchor2.to, ...opts2.map(o => VENUES[o.venue].building)].filter(Boolean);
    renderMap('campusMapEl', anchor2.building, chosen2 ? VENUES[chosen2.venue].building : null, relevantIds2, anchor2.to);
  }
}
function mealRow(key, label, windowText) {
  return `<div class="tl-row tl-meal${activeMealKey === key ? ' active' : ''}" data-meal="${key}">
    <div class="tl-time mono"></div>
    <div class="tl-rail"><div class="tl-dot"></div><div class="tl-line"></div></div>
    <div class="tl-body"><b>${svgIcon(MEAL_ICON[key])} ${MEAL_LABEL[key]}</b><div class="tl-window">${label}${windowText ? ' &middot; ' + windowText : ''}</div></div>
  </div>`;
}

document.getElementById('clearHomeBtn').addEventListener('click', () => { state.homeDays = []; persist(); });

function renderAll() {
  if (LOCKED) return;
  document.getElementById('mainWrap').style.display = state.onboarded ? '' : 'none';
  if (state.onboarded) { renderCalendar(); renderConsole(); }
}

/* ---------- Settings panel ---------- */
document.getElementById('openSettingsBtn').innerHTML = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><circle cx="15" cy="7" r="2.3" fill="currentColor" stroke="none"/><line x1="4" y1="17" x2="20" y2="17"/><circle cx="9" cy="17" r="2.3" fill="currentColor" stroke="none"/></svg> Settings`;
document.getElementById('openSettingsBtn').addEventListener('click', () => openSettings(false));

/* ---------- Account (login / signup) ---------- */
let sessionUser = null;
const accountBtn = document.getElementById('accountBtn');
const authOverlay = document.getElementById('authOverlay');
const authPanel = document.getElementById('authPanel');

async function checkSession() {
  try {
    const res = await fetch('/api/auth/me');
    sessionUser = res.ok ? await res.json() : null;
  } catch (e) { sessionUser = null; }
  renderAccountBtn();
  return sessionUser;
}

function renderAccountBtn() {
  if (sessionUser) {
    const short = sessionUser.email.length > 20 ? sessionUser.email.slice(0, 18) + '…' : sessionUser.email;
    accountBtn.textContent = short;
    accountBtn.title = sessionUser.email;
  } else {
    accountBtn.textContent = 'Log in';
    accountBtn.title = '';
  }
}

function syncOverlayLock() {
  const settingsOpen = !document.getElementById('settingsOverlay').classList.contains('hidden');
  const authOpen = !authOverlay.classList.contains('hidden');
  document.body.classList.toggle('overlay-open', settingsOpen || authOpen);
}
function closeAuth() { authOverlay.classList.add('hidden'); syncOverlayLock(); }

function renderAccountPanel() {
  authPanel.innerHTML = `
    <div class="settings-head"><h2>Account</h2><button class="close-btn" id="closeAuthBtn">${svgIcon('x')}</button></div>
    <p class="settings-intro">Logged in as <b>${esc(sessionUser.email)}</b>. This link's data is tied to your account, so logging in on another device will bring you here.</p>
    <button class="btn secondary" id="logoutBtn">Log out</button>
  `;
  document.getElementById('closeAuthBtn').addEventListener('click', closeAuth);
  document.getElementById('logoutBtn').addEventListener('click', async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    try {
      localStorage.removeItem('mmp-state-' + USER_ID);
      localStorage.removeItem('mmp-uid');
    } catch (e) {}
    // Drop ?u= and start fresh -- important on a shared computer.
    window.location.href = window.location.pathname;
  });
}

function renderAuthForm(mode, locked) {
  const isSignup = mode === 'signup';
  const looksEmpty = isSignup && !state.schedule.length && !state.scheduleWinter.length && !Object.keys(state.venueChoices).length;
  authPanel.innerHTML = `
    <div class="settings-head"><h2>${isSignup ? 'Create account' : 'Log in'}</h2>${locked ? '' : `<button class="close-btn" id="closeAuthBtn">${svgIcon('x')}</button>`}</div>
    <p class="settings-intro">${locked
      ? "This planner is tied to an account. Log in to open it."
      : isSignup
        ? "Save this planner to an account so you can log in and get back to it from any device."
        : 'Log in to reach the planner tied to your account.'}</p>
    ${looksEmpty ? `<div class="auth-error">This planner doesn't have a schedule or picks saved yet. If you already have a Mac Meal Planner link, open that one first — creating an account now will save THIS empty planner, not that one.</div>` : ''}
    <div id="authErr"></div>
    <div class="field-row"><label>Email</label><input type="email" id="authEmail" autocomplete="email"></div>
    <div class="field-row"><label>Password</label><input type="password" id="authPassword" autocomplete="${isSignup ? 'new-password' : 'current-password'}"></div>
    <button class="btn" id="authSubmitBtn" style="width:100%;margin-top:6px;">${isSignup ? 'Create account' : 'Log in'}</button>
    ${locked ? '' : `<div class="auth-switch">${isSignup ? 'Already have an account?' : "Don't have an account?"} <button id="authSwitchBtn">${isSignup ? 'Log in' : 'Create one'}</button></div>`}
  `;
  if (!locked) document.getElementById('closeAuthBtn').addEventListener('click', closeAuth);
  if (!locked) document.getElementById('authSwitchBtn').addEventListener('click', () => renderAuthForm(isSignup ? 'login' : 'signup'));
  document.getElementById('authSubmitBtn').addEventListener('click', async () => {
    const email = document.getElementById('authEmail').value.trim();
    const password = document.getElementById('authPassword').value;
    const errEl = document.getElementById('authErr');
    errEl.innerHTML = '';
    try {
      const res = await fetch(`/api/auth/${isSignup ? 'signup' : 'login'}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(isSignup ? { email, password, claimUuid: USER_ID } : { email, password }),
      });
      if (!res.ok) { errEl.innerHTML = `<div class="auth-error">${esc(await res.text())}</div>`; return; }
      const data = await res.json();
      if (locked) {
        // We were blocked out of this planner; reload now that we have the session.
        const url = new URL(window.location.href);
        url.searchParams.set('u', data.uuid);
        window.location.href = url.toString();
        return;
      }
      closeAuth();
      if (data.uuid !== USER_ID) {
        const url = new URL(window.location.href);
        url.searchParams.set('u', data.uuid);
        window.location.href = url.toString();
      } else {
        sessionUser = data;
        renderAccountBtn();
      }
    } catch (e) {
      errEl.innerHTML = `<div class="auth-error">Couldn't reach the server — try again.</div>`;
    }
  });
}

accountBtn.addEventListener('click', () => {
  authOverlay.classList.remove('hidden');
  syncOverlayLock();
  if (sessionUser) renderAccountPanel(); else renderAuthForm('signup');
});
renderAccountBtn();

function openSettings(forced) {
  const overlay = document.getElementById('settingsOverlay');
  overlay.classList.remove('hidden');
  syncOverlayLock();
  renderSettings(forced);
}
function closeSettings() {
  if (!state.onboarded) return;
  document.getElementById('settingsOverlay').classList.add('hidden');
  syncOverlayLock();
}

function renderSettings(forced) {
  const panel = document.getElementById('settingsPanel');
  const residenceOpts = RESIDENCE_IDS.map(id => `<option value="${id}" ${state.residence === id ? 'selected' : ''}>${BUILDINGS[id].name}</option>`).join('');
  const activePlan = activeMealPlan();
  const planOpts = `<option value="custom"${state.mealPlan === 'custom' ? ' selected' : ''}>Custom amount</option>` +
    ['Traditional', 'Apartment'].map(g =>
      `<optgroup label="${g} full meal plans">` +
      MEAL_PLANS.filter(p => p.group === g).map(p =>
        `<option value="${p.id}"${state.mealPlan === p.id ? ' selected' : ''}>${p.label} &mdash; $${p.visible.toFixed(2)} visible</option>`
      ).join('') + `</optgroup>`
    ).join('');
  const paceLine = activePlan
    ? `<p class="pace-line"><b>${activePlan.label}</b> &mdash; $${activePlan.visible.toFixed(2)} visible balance for the year + a matching 50% overhead bucket, so <b>$${planEffectiveTotal(activePlan).toFixed(2)}</b> of real spending power. Per semester that's <b>$${(activePlan.visible / 2).toFixed(2)} visible / $${activePlan.visible.toFixed(2)} real</b>. McMaster's recommended pace: about $${planEffectiveDaily(activePlan).toFixed(2)}/day real ($${(activePlan.weekly / 7).toFixed(2)}/day off visible).</p>`
    : '';
  const dietaryChips = DIETARY_OPTIONS.map(d => `<button class="chip${state.dietary.includes(d) ? ' active' : ''}" data-dietary="${d}">${DIETARY_LABEL[d]}</button>`).join('');
  const venueRows = Object.entries(VENUES).map(([id, v]) => {
    const isFav = state.favoriteVenues.includes(id), isHidden = state.hiddenVenues.includes(id);
    return `<div class="venue-settings-row">
      <span class="name">${svgIcon(v.icon)} ${v.name}</span>
      <span class="toggles">
        <button class="icon-toggle fav${isFav ? ' on' : ''}" data-fav="${id}" title="Favorite">${svgIcon('star')}</button>
        <button class="icon-toggle hide${isHidden ? ' on' : ''}" data-hide="${id}" title="Hide">${svgIcon('eyeSlash')}</button>
      </span>
    </div>`;
  }).join('');
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const buildingOpts = Object.entries(BUILDINGS).map(([id, b]) => `<option value="${id}">${b.short}</option>`).join('');
  const schedRows = activeSchedule().map((c, i) => `
    <tr>
      <td><select data-sf="day" data-i="${i}">${dayNames.map((n, di) => `<option value="${di}" ${c.day === di ? 'selected' : ''}>${n}</option>`).join('')}</select></td>
      <td><input type="time" data-sf="start" data-i="${i}" value="${esc(c.start)}"></td>
      <td><input type="time" data-sf="end" data-i="${i}" value="${esc(c.end)}"></td>
      <td><input type="text" data-sf="course" data-i="${i}" value="${esc(c.course || '')}" placeholder="Course"></td>
      <td><select data-sf="building" data-i="${i}" class="${BUILDINGS[c.building] ? '' : 'needs-loc'}"><option value="">— set location</option>${Object.entries(BUILDINGS).map(([id, b]) => `<option value="${id}" ${c.building === id ? 'selected' : ''}>${b.short}</option>`).join('')}</select></td>
      <td><button class="row-del" data-del="${i}">${svgIcon('trash')}</button></td>
    </tr>`).join('');

  panel.innerHTML = `
    <div class="settings-head"><h2>Settings</h2>${forced ? '' : `<button class="close-btn" id="closeSettingsBtn">${svgIcon('x')}</button>`}</div>
    <p class="settings-intro">${forced ? "Quick setup — this is what makes the planner yours. You can change any of this later." : "Your setup, saved under this private link."}</p>
    ${forced ? `<p class="settings-disclaimer"><b>Unofficial</b> — not affiliated with or endorsed by McMaster University. A student-built planning aid; always check your real balance in MacExpress.</p>` : ''}

    <div class="field-group">
      <h3>Residence</h3>
      <div class="field-row"><select id="residenceSelect">${residenceOpts}</select></div>
    </div>

    <div class="field-group">
      <h3>Meal plan &amp; budget</h3>
      <div class="field-row"><label>Your meal plan</label><select id="planSelect">${planOpts}</select></div>
      <div class="field-row"><label>${activePlan ? 'Real spending power &mdash; whole year (set by your plan)' : 'Food budget for the whole year &mdash; what you plan to actually spend'}</label><input type="number" step="0.01" id="budgetInput" value="${state.termBudget.toFixed(2)}"${activePlan ? ' readonly' : ''}></div>
      ${paceLine}
      <div class="field-inline">
        <div class="field-row"><label>Fall term start</label><input type="date" id="fallStartInput" value="${state.termStart}"></div>
        <div class="field-row"><label>Fall term end</label><input type="date" id="fallEndInput" value="${state.termEnd}"></div>
      </div>
      <div class="field-inline">
        <div class="field-row"><label>Winter term start</label><input type="date" id="winterStartInput" value="${state.winterStart}"></div>
        <div class="field-row"><label>Winter term end</label><input type="date" id="winterEndInput" value="${state.winterEnd}"></div>
      </div>
      <details class="explainer">
        <summary>How McMaster meal plans actually work</summary>
        <div>
          <p>Every McMaster meal plan is <b>one balance for the whole year</b> (roughly $7,000), split 50/50 into two buckets:</p>
          <ul>
            <li><b>Visible balance</b> &mdash; the number in MacExpress. Traditional A starts at $3,522.50.</li>
            <li><b>Overhead match</b> &mdash; an equal hidden amount you never see directly.</li>
          </ul>
          <p>Every purchase pulls <b>half from each bucket</b>, so $100 of food only costs $50 of visible balance. Your real spending power is <b>double</b> the visible number.</p>
          <p>Split over two semesters, Traditional A is about <b>$1,761 visible / $3,522 real per term</b> &mdash; roughly <b>$15/day off your visible balance, $30/day of real spending</b>.</p>
          <p><b>Traditional</b> plans are for dorm residents; <b>Apartment</b> plans (cheaper) are for units with a kitchen. The letter A&ndash;D sets the starting amount.</p>
          <p>The gold "weekly checkpoint" markers show McMaster's own recommended pace; your projection is based on the meals you actually pick and the days you mark home.</p>
        </div>
      </details>
    </div>

    <div class="field-group">
      <h3>Dietary filter</h3>
      <div class="chip-row">${dietaryChips}</div>
    </div>

    <div class="field-group">
      <h3>Venues — favorite or hide</h3>
      ${venueRows}
    </div>

    <div class="field-group">
      <h3>${activeTerm().label} class schedule</h3>
      <div class="term-switch" id="settingsTermSwitch" style="margin-bottom:12px;">
        <button data-term="fall" class="${activeTermKey() === 'fall' ? 'active' : ''}">Fall 2026</button>
        <button data-term="winter" class="${activeTermKey() === 'winter' ? 'active' : ''}">Winter 2027</button>
      </div>
      <div class="upload-zone" id="uploadZone">${svgIcon('uploadCloud')}<div>Upload your ${activeTerm().label} timetable PDF</div><div style="font-size:11px;margin-top:2px;">Best-effort parse — review the table below before saving</div></div>
      <input type="file" accept="application/pdf" id="pdfInput" style="display:none">
      <p class="parse-note" id="parseNote"></p>
      <div class="field-row">
        <label>Or paste your schedule text instead (more reliable than the PDF) — go to <a href="https://applicants.mcmaster.ca/psp/prcsprd/EMPLOYEE/SA/c/SA_LEARNER_SERVICES.SSS_STUDENT_CENTER.GBL?mcm=APPL" target="_blank" rel="noopener" style="color:var(--gold)">Mosaic Student Center</a>, copy your schedule (it's in the middle of the page), and paste it below</label>
        <textarea id="scheduleTextInput" rows="5" placeholder="Paste the plain-text class schedule list here…" style="font-family:'Overpass Mono',monospace; font-size:11.5px; resize:vertical;"></textarea>
        <button class="btn secondary small" id="parseTextBtn" style="align-self:flex-start; margin-top:6px;">Enter schedule</button>
      </div>
      <div class="sched-table-wrap">
        <table class="sched-table">
          <thead><tr><th>Day</th><th>Start</th><th>End</th><th>Course</th><th>Building</th><th></th></tr></thead>
          <tbody id="schedBody">${schedRows}</tbody>
        </table>
      </div>
      <button class="btn secondary small" id="addRowBtn">${svgIcon('plus')} Add class</button>
    </div>

    ${forced ? '' : `
    <div class="field-group danger-zone">
      <h3>Delete everything</h3>
      <p>Permanently removes this planner${sessionUser ? ' and your account' : ''} from the server and this device. This can't be undone.</p>
      <button class="btn danger-btn" id="deleteDataBtn">Delete my data</button>
    </div>`}

    <div class="save-bar">
      ${forced ? '' : `<button class="btn secondary" id="cancelSettingsBtn">Cancel</button>`}
      <button class="btn" id="saveSettingsBtn">${forced ? 'Start planning' : 'Save'}</button>
    </div>
  `;

  if (!forced) document.getElementById('closeSettingsBtn').addEventListener('click', closeSettings);
  if (!forced) document.getElementById('cancelSettingsBtn').addEventListener('click', closeSettings);

  document.getElementById('planSelect').addEventListener('change', (e) => {
    // keep the number field in sync with what the user has typed before we re-render
    if (!activeMealPlan()) state.termBudget = parseFloat(document.getElementById('budgetInput').value) || state.termBudget;
    state.mealPlan = e.target.value;
    const p = activeMealPlan();
    if (p) state.termBudget = planEffectiveTotal(p);
    renderSettings(forced);
  });
  document.querySelectorAll('#settingsTermSwitch button').forEach(btn => btn.addEventListener('click', () => {
    if (btn.dataset.term === activeTermKey()) return;
    // stash any typed date edits for the term we're leaving
    saveTermDateInputs();
    state.viewTerm = btn.dataset.term;
    renderSettings(forced);
  }));

  document.querySelectorAll('[data-dietary]').forEach(chip => chip.addEventListener('click', () => {
    const d = chip.dataset.dietary;
    state.dietary = state.dietary.includes(d) ? state.dietary.filter(x => x !== d) : [...state.dietary, d];
    renderSettings(forced);
  }));
  document.querySelectorAll('[data-fav]').forEach(btn => btn.addEventListener('click', () => {
    const id = btn.dataset.fav;
    state.favoriteVenues = state.favoriteVenues.includes(id) ? state.favoriteVenues.filter(x => x !== id) : [...state.favoriteVenues, id];
    state.hiddenVenues = state.hiddenVenues.filter(x => x !== id);
    renderSettings(forced);
  }));
  document.querySelectorAll('[data-hide]').forEach(btn => btn.addEventListener('click', () => {
    const id = btn.dataset.hide;
    state.hiddenVenues = state.hiddenVenues.includes(id) ? state.hiddenVenues.filter(x => x !== id) : [...state.hiddenVenues, id];
    state.favoriteVenues = state.favoriteVenues.filter(x => x !== id);
    renderSettings(forced);
  }));
  document.querySelectorAll('[data-sf]').forEach(inp => inp.addEventListener('change', () => {
    const i = parseInt(inp.dataset.i, 10), f = inp.dataset.sf;
    activeSchedule()[i][f] = f === 'day' ? parseInt(inp.value, 10) : inp.value;
  }));
  document.querySelectorAll('[data-del]').forEach(btn => btn.addEventListener('click', () => {
    activeSchedule().splice(parseInt(btn.dataset.del, 10), 1);
    renderSettings(forced);
  }));
  document.getElementById('addRowBtn').addEventListener('click', () => {
    activeSchedule().push({ day: 1, start: '09:30', end: '10:20', course: '', building: '' });
    renderSettings(forced);
  });

  const delBtn = document.getElementById('deleteDataBtn');
  if (delBtn) {
    let armed = false, armTimer = null;
    delBtn.addEventListener('click', async () => {
      if (!armed) {
        armed = true;
        delBtn.textContent = 'Click again to permanently delete';
        delBtn.classList.add('armed');
        armTimer = setTimeout(() => {
          armed = false;
          delBtn.textContent = 'Delete my data';
          delBtn.classList.remove('armed');
        }, 4000);
        return;
      }
      clearTimeout(armTimer);
      delBtn.disabled = true;
      delBtn.textContent = 'Deleting…';
      try {
        await fetch(`/api/state?u=${USER_ID}`, { method: 'DELETE' });
      } catch (e) { /* fall through -- still clear local + reload */ }
      try {
        localStorage.removeItem('mmp-state-' + USER_ID);
        localStorage.removeItem('mmp-uid');
      } catch (e) {}
      window.location.href = window.location.pathname;
    });
  }

  document.getElementById('uploadZone').addEventListener('click', () => document.getElementById('pdfInput').click());
  document.getElementById('pdfInput').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    e.target.value = '';
    if (!file) return;
    const note = document.getElementById('parseNote');
    note.textContent = 'Parsing…';
    try {
      const found = await parseTimetablePdf(file);
      if (!found.length) {
        note.textContent = "Couldn't find any class blocks in that PDF — McMaster's PDF layout is irregular. Your existing schedule below is untouched; try the paste-text option above instead, or add classes manually.";
        return;
      }
      setActiveSchedule(found);
      const msg = `Found ${found.length} class block${found.length === 1 ? '' : 's'} — check every row below, McMaster's PDF layout is irregular and this is a best-effort read.${missingLocNote(found)}`;
      renderSettings(forced);
      document.getElementById('parseNote').textContent = msg;
    } catch (err) {
      note.textContent = 'Could not read that PDF — your existing schedule below is untouched. Try the paste-text option above instead, or add classes manually.';
    }
  });
  document.getElementById('parseTextBtn').addEventListener('click', () => {
    const raw = document.getElementById('scheduleTextInput').value;
    const note = document.getElementById('parseNote');
    if (!raw.trim()) { note.textContent = 'Paste your schedule text first.'; return; }
    const found = parseScheduleText(raw);
    if (!found.length) {
      note.textContent = "Couldn't find any class blocks in that text — make sure you copied the full \"Class Schedule\" list, or add classes manually below.";
      return;
    }
    setActiveSchedule(found);
    const msg = `Found ${found.length} class block${found.length === 1 ? '' : 's'} from pasted text — check every row below before saving.${missingLocNote(found)}`;
    renderSettings(forced);
    document.getElementById('parseNote').textContent = msg;
  });
  document.getElementById('saveSettingsBtn').addEventListener('click', () => {
    state.residence = document.getElementById('residenceSelect').value;
    state.mealPlan = document.getElementById('planSelect').value;
    const plan = activeMealPlan();
    if (plan) {
      state.termBudget = planEffectiveTotal(plan);
    } else {
      state.termBudget = parseFloat(document.getElementById('budgetInput').value) || state.termBudget;
    }
    saveTermDateInputs();
    state.onboarded = true;
    activeMonth = 0; selectedDate = null;
    document.getElementById('settingsOverlay').classList.add('hidden');
    syncOverlayLock();
    persist();
  });
}

function saveTermDateInputs() {
  const g = id => (document.getElementById(id) || {}).value;
  state.termStart = g('fallStartInput') || state.termStart;
  state.termEnd = g('fallEndInput') || state.termEnd;
  state.winterStart = g('winterStartInput') || state.winterStart;
  state.winterEnd = g('winterEndInput') || state.winterEnd;
}

/* ---------- PDF parsing (best-effort, two strategies) ---------- */
if (window.pdfjsLib) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = '/vendor/pdf.worker.min.js';
}
const DAY_ABBR = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const DAY_NAMES_RE = /(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)/i;
const TIME_RANGE_RE = /(\d{1,2}:\d{2}\s*[AP]M)\s*(?:[-–]|to)\s*(\d{1,2}:\d{2}\s*[AP]M)/i;
const DAYTIME_LINE_RE = /((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)(?:\s*,\s*(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun))*)\s*:\s*(\d{1,2}:\d{2}\s*[AP]M)\s*to\s*(\d{1,2}:\d{2}\s*[AP]M)/i;
/* A section that meets on alternating (biweekly) dates prints its OWN per-date-range line
   instead of the plain "Day : Time to Time" summary form, e.g.
   "Wed Sep 14 - Sep 18: 2:30 PM to 5:20 PM". Same day+time info, just with a date-range clause
   wedged before the colon - matched separately so the summary regex doesn't need to change. */
const DAYTIME_DATERANGE_LINE_RE = /((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun))\s+[A-Za-z]+\s+\d{1,2}\s*[-–]\s*[A-Za-z]+\s+\d{1,2}\s*:\s*(\d{1,2}:\d{2}\s*[AP]M)\s*to\s*(\d{1,2}:\d{2}\s*[AP]M)/i;
function matchDayTime(text) {
  return text.match(DAYTIME_LINE_RE) || text.match(DAYTIME_DATERANGE_LINE_RE);
}
const COURSE_RE = /^[A-Z]{2,10}\s?\d[\w]{1,4}/;
const SECTION_RE = /\b(LEC|LAB|TUT)\s*[A-Z]?\d+/i;
const BUILDING_CODE_MAP = {
  PGCLL: 'pgcll', MKR: 'keyes', ETB: 'engtech', JHE: 'hodgins', ABB: 'bourns',
  MDCL: 'degroote', BSB: 'burke', THDL: 'thode', MUSC: 'musc', CNH: 'degroote',
  PC: 'psych',
};
function to24h(t) {
  const m = t.match(/(\d{1,2}):(\d{2})\s*([AP]M)/i);
  if (!m) return null;
  let h = parseInt(m[1], 10); const min = m[2]; const ap = m[3].toUpperCase();
  if (ap === 'PM' && h !== 12) h += 12;
  if (ap === 'AM' && h === 12) h = 0;
  return `${String(h).padStart(2, '0')}:${min}`;
}
function matchBuilding(text) {
  const codeMatch = text.match(/-\s*([A-Z]{2,5})_?\w*\s*$/) || text.match(/\b([A-Z]{2,5})_\w+/);
  if (codeMatch && BUILDING_CODE_MAP[codeMatch[1]]) return BUILDING_CODE_MAP[codeMatch[1]];
  const t = text.toLowerCase();
  let best = null, bestLen = 0;
  Object.entries(BUILDINGS).forEach(([id, b]) => {
    [b.name, b.short].forEach(name => {
      const n = name.toLowerCase();
      if (t.includes(n) && n.length > bestLen) { best = id; bestLen = n.length; }
    });
  });
  if (!best) {
    if (t.includes('peter george')) best = 'pgcll';
    else if (t.includes('degroote')) best = 'degroote';
    else if (t.includes('eng technology')) best = 'engtech';
    else if (t.includes('john hodgins') || t.includes('hodgins')) best = 'hodgins';
    else if (t.includes('bourns')) best = 'bourns';
    else if (t.includes('keyes')) best = 'keyes';
    else if (t.includes('burke')) best = 'burke';
    else if (t.includes('thode')) best = 'thode';
  }
  return best;
}
function groupIntoLines(items) {
  const sorted = [...items].sort((a, b) => a.y - b.y || a.x - b.x);
  const lineGroups = [];
  let curLine = [], lastY = null;
  sorted.forEach(it => {
    if (lastY !== null && Math.abs(it.y - lastY) > 4) { lineGroups.push(curLine); curLine = []; }
    curLine.push(it); lastY = it.y;
  });
  if (curLine.length) lineGroups.push(curLine);
  return lineGroups.map(g => ({ text: g.map(it => it.str).join(' ').trim(), x: g[0].x, y: g[0].y }));
}
async function pdfLines(file) {
  const buf = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: buf }).promise;
  const pages = [];
  for (let p = 1; p <= pdf.numPages; p++) {
    const page = await pdf.getPage(p);
    const content = await page.getTextContent();
    const viewport = page.getViewport({ scale: 1 });
    const items = content.items.map(it => ({ str: it.str, x: it.transform[4], y: viewport.height - it.transform[5], w: it.width || 0 }))
      .filter(it => it.str.trim());
    pages.push({ lines: groupIntoLines(items), items });
  }
  return pages;
}

/* Strategy A: McMaster's "MyTimetable" detail export. Real structure (confirmed against
   an actual export, not assumed): each course block is a term-date line carrying the course
   code ("2026 Fall: Sep 8 - Dec 10 ENGINEER 1P13A"), followed by a block of "Day(s) : Time to
   Time" summary lines with NO building (one per section, in section order), THEN the section
   headers (LEC/LAB/TUT + code) in that same order — each followed by its building, and
   SOMETIMES its own inline "Day : Time to Time Building" line(s) that override/expand the
   summary (e.g. a lab meeting on two different days in two different buildings). */
const TERM_LINE_RE = /\b(Fall|Winter|Spring|Summer)\b.{0,25}\b20\d{2}\b|\b20\d{2}\b.{0,25}\b(Fall|Winter|Spring|Summer)\b/i;
function courseCodeIn(text) {
  const m = text.match(/\b([A-Z]{2,10}\s\d[A-Z0-9]{1,4})\b/);
  return m ? m[1] : null;
}
function parseDetailFormat(pages) {
  const found = [];
  // A course's own section list can be cut off by a page break (its term-line lands near the
  // bottom of one page, its LEC/LAB/TUT headers start the next). Processing each page in
  // isolation loses that course's sections entirely once cut off, since course context doesn't
  // carry across the page boundary. Flatten into one continuous stream instead - stray
  // header/footer lines from each page (timestamps, page-number URLs) don't match any of the
  // patterns below, so they're harmless no-ops in the scan.
  const lines = pages.flatMap(page => page.lines);
  let i = 0;
  while (i < lines.length) {
    const text = lines[i].text;
    if (!TERM_LINE_RE.test(text) || !courseCodeIn(text)) { i++; continue; }
    const course = courseCodeIn(text);
    i++;
    // Course-level summary lines (before any section header) list every distinct day/time
    // pattern for the course, but NOT which section owns each one - that has to be inferred.
    const summary = [];
    while (i < lines.length && !SECTION_RE.test(lines[i].text) && !(TERM_LINE_RE.test(lines[i].text) && courseCodeIn(lines[i].text))) {
      const dt = matchDayTime(lines[i].text);
      if (dt) summary.push({ dt, isDateRange: DAYTIME_DATERANGE_LINE_RE.test(lines[i].text), dayCount: dt[1].split(',').length, used: false });
      i++;
    }
    const sections = [];
    while (i < lines.length && !(TERM_LINE_RE.test(lines[i].text) && courseCodeIn(lines[i].text))) {
      const secMatch = lines[i].text.match(SECTION_RE);
      if (!secMatch) { i++; continue; }
      const section = secMatch[0].toUpperCase().replace(/\s+/, ' ');
      i++;
      const sectionLines = [];
      while (i < lines.length && !SECTION_RE.test(lines[i].text) && !(TERM_LINE_RE.test(lines[i].text) && courseCodeIn(lines[i].text))) {
        sectionLines.push(lines[i].text); i++;
      }
      const inlineEntries = [];
      sectionLines.forEach(t => {
        const dt = matchDayTime(t);
        if (!dt) return;
        const start = to24h(dt[2]), end = to24h(dt[3]);
        if (!start || !end || start === end) return;
        const building = matchBuilding(t);
        dt[1].split(',').map(d => d.trim().toLowerCase().slice(0, 3)).forEach(abbr => {
          const day = DAY_ABBR.indexOf(abbr);
          if (day < 0) return;
          inlineEntries.push({ day, start, end, building: building || '' });
        });
      });
      sections.push({ section, sectionLines, inlineEntries, claimed: [] });
    }
    sections.forEach(s => {
      s.inlineEntries.forEach(e => found.push({ day: e.day, start: e.start, end: e.end, course: `${course} ${s.section}`, building: e.building }));
    });
    // Sections with their own inline day/time (above) never touch the course-level summary.
    // For the rest, matching a leftover summary line to the RIGHT section is genuinely
    // ambiguous from text alone - McMaster's summary widget just lists every distinct pattern,
    // not which section it belongs to. Two real signals narrow it down: a LAB/TUT section is
    // far more likely to be the one with an alternating (biweekly, date-ranged) pattern than a
    // LEC is, and a LAB/TUT's single distinct weekly slot is far more likely to be the LAST
    // listed pattern than one of the LEC's several. Neither is proof, just a tiebreaker for the
    // (rare) genuinely unresolvable case - anything still ambiguous after these two passes
    // defaults to the non-LAB/TUT section, same as before.
    const pending = sections.filter(s => !s.inlineEntries.length);
    pending.forEach(s => {
      if (!/^(LAB|TUT)/.test(s.section)) return;
      const cand = summary.find(e => !e.used && e.isDateRange);
      if (cand) { cand.used = true; s.claimed.push(cand); }
    });
    pending.forEach(s => {
      if (!/^(LAB|TUT)/.test(s.section) || s.claimed.length) return;
      for (let k = summary.length - 1; k >= 0; k--) {
        if (summary[k].used) continue;
        if (summary[k].dayCount === 1) { summary[k].used = true; s.claimed.push(summary[k]); }
        break;
      }
    });
    const catchAll = pending.find(s => !/^(LAB|TUT)/.test(s.section)) || pending[0];
    if (catchAll) summary.forEach(e => { if (!e.used) { e.used = true; catchAll.claimed.push(e); } });
    pending.forEach(s => {
      s.claimed.forEach(({ dt }) => {
        const start = to24h(dt[2]), end = to24h(dt[3]);
        if (!start || !end || start === end) return;
        let building = '';
        for (const t of s.sectionLines) { const b = matchBuilding(t); if (b) { building = b; break; } }
        dt[1].split(',').map(d => d.trim().toLowerCase().slice(0, 3)).forEach(abbr => {
          const day = DAY_ABBR.indexOf(abbr);
          if (day < 0) return;
          found.push({ day, start, end, course: `${course} ${s.section}`, building });
        });
      });
    });
  }
  return found;
}

/* Strategy B: a pure weekly-grid render with no explicit "Day : Time" text (e.g. McMaster's
   "My Weekly Schedule" print view). Every day's column sits in the same y-band per row, so
   grouping into lines by y alone (as Strategy A's format needs) merges 5+ different days'
   course blocks into one unreadable line. Fix: bucket the RAW items by day-column (real
   x-position) FIRST, using the header row's x-positions as column boundaries, THEN group
   each column's own items into lines — column-first, not line-first. */
function parseGridFormat(pages) {
  const found = [];
  pages.forEach(page => {
    const items = page.items;
    const dayHeaders = items.filter(it => DAY_NAMES_RE.test(it.str) && it.y < 200);
    if (dayHeaders.length < 2) return;
    const dayCols = dayHeaders.map(it => ({
      day: DAY_ABBR.findIndex(a => it.str.toLowerCase().includes({ sun: 'sunday', mon: 'monday', tue: 'tuesday', wed: 'wednesday', thu: 'thursday', fri: 'friday', sat: 'saturday' }[a])),
      x: it.x,
    })).sort((a, b) => a.x - b.x);
    const gap0 = dayCols.length > 1 ? dayCols[1].x - dayCols[0].x : 40;
    const bounds = [dayCols[0].x - gap0 / 2, ...dayCols.slice(1).map((c, i) => (c.x + dayCols[i].x) / 2), Infinity];
    const colFor = x => { for (let i = 0; i < dayCols.length; i++) if (x >= bounds[i] && x < bounds[i + 1]) return dayCols[i].day; return dayCols[dayCols.length - 1].day; };
    const headerY = Math.min(...dayHeaders.map(it => it.y));
    // Left of the first day column is the "Time" axis (8:00AM, 9:00AM, ...) - not day-column
    // content, and its labels sit at the same y as real cells so they'd otherwise get glued
    // onto whichever day happens to be leftmost.
    const body = items.filter(it => it.y > headerY + 15 && it.x >= bounds[0]);
    const byCol = {};
    body.forEach(it => { const c = colFor(it.x); (byCol[c] = byCol[c] || []).push(it); });
    Object.entries(byCol).forEach(([dayStr, colItems]) => {
      const day = parseInt(dayStr, 10);
      const rawLines = groupIntoLines(colItems);
      // A long subject name ("ENGINEER", "PHYSICS") can wrap onto its own line, separate from
      // the "1P13A - C02" code line that follows - rejoin any bare all-caps word with the next
      // line so COURSE_RE (which needs the code on the same line) can see the whole thing.
      const colLines = [];
      for (let k = 0; k < rawLines.length; k++) {
        if (/^[A-Z]+$/.test(rawLines[k].text) && k + 1 < rawLines.length) {
          colLines.push({ text: rawLines[k].text + ' ' + rawLines[k + 1].text, x: rawLines[k].x, y: rawLines[k].y });
          k++;
        } else {
          colLines.push(rawLines[k]);
        }
      }
      for (let i = 0; i < colLines.length; i++) {
        if (!COURSE_RE.test(colLines[i].text)) continue;
        let block = colLines[i].text;
        const course = colLines[i].text.match(COURSE_RE)[0];
        let j = i + 1;
        for (; j < Math.min(i + 6, colLines.length) && !TIME_RANGE_RE.test(block); j++) {
          if (COURSE_RE.test(colLines[j].text) && j > i + 1) break;
          block += ' ' + colLines[j].text;
        }
        // The building/room can span a few lines after the one that completed the time range
        // (e.g. "Michael G." / "DeGroote Cntr" / "1305") - grab up to 3, stopping at the next course.
        for (let bn = 0; bn < 3 && j < colLines.length && !COURSE_RE.test(colLines[j].text); bn++, j++) {
          block += ' ' + colLines[j].text;
        }
        const timeMatch = block.match(TIME_RANGE_RE);
        if (!timeMatch) continue;
        const start = to24h(timeMatch[1]), end = to24h(timeMatch[2]);
        if (!start || !end || start === end) continue;
        const typeMatch = block.match(/\b(Lecture|Tutorial|Laboratory)\b/i);
        const typeAbbr = typeMatch ? { lecture: 'LEC', tutorial: 'TUT', laboratory: 'LAB' }[typeMatch[1].toLowerCase()] : '';
        found.push({ day, start, end, course: `${course} ${typeAbbr}`.trim(), building: matchBuilding(block) || '' });
      }
    });
  });
  return found;
}

function dedupeAndFinalize(found) {
  const seen = new Set();
  const deduped = found.filter(f => {
    const k = `${f.day}_${f.start}_${f.end}_${f.course}_${f.building}`;
    if (seen.has(k)) return false;
    seen.add(k); return true;
  });
  // Same-day overlapping blocks (e.g. a lab and tutorial that alternate biweekly, both
  // exported as if weekly) can't be represented by this one-pattern-per-weekday model.
  // Keep the longer, more conservative commitment and drop the shorter one it conflicts with.
  const out = [];
  deduped.forEach(f => {
    const i = out.findIndex(o => o.day === f.day && minutesOf(f.start) < minutesOf(o.end) && minutesOf(o.start) < minutesOf(f.end));
    if (i < 0) { out.push(f); return; }
    const fLen = minutesOf(f.end) - minutesOf(f.start), oLen = minutesOf(out[i].end) - minutesOf(out[i].start);
    if (fLen > oLen) out[i] = f;
  });
  return out.sort((a, b) => a.day - b.day || a.start.localeCompare(b.start));
}

async function parseTimetablePdf(file) {
  const pages = await pdfLines(file);
  let found = parseDetailFormat(pages);
  if (found.length < 3) found = found.concat(parseGridFormat(pages));
  return dedupeAndFinalize(found);
}

/* Strategy C: McMaster's plain-text "Class Schedule" list view (copy-pasted, not a PDF).
   Far more reliable than PDF extraction — lines come in clean logical order already:
   "COURSE CODE-SECTION" / "TYPE (ClassNumber)" / "Day(s) H:MM AM - H:MM AM" / "BLDG ROOM",
   repeated per meeting pattern, or "ONLINE Class" for no fixed time. */
function parseScheduleText(text) {
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  const COURSE_LINE_RE = /^([A-Z]{2,10}\s\d[A-Z0-9]{1,4})-([A-Z0-9]+)$/;
  const TYPE_LINE_RE = /^(LEC|LAB|TUT)\s*\(\d+\)$/i;
  const DAYTIME_LIST_RE = /^((?:Mo|Tu|We|Th|Fr|Sa|Su)+)\s+(\d{1,2}:\d{2}\s*[AP]M)\s*-\s*(\d{1,2}:\d{2}\s*[AP]M)$/i;
  const BUILDING_LINE_RE = /^([A-Z]{2,6})\s+([A-Z0-9]+)$/;
  const DAY2 = { mo: 1, tu: 2, we: 3, th: 4, fr: 5, sa: 6, su: 0 };
  const found = [];
  let course = '', section = '';
  let i = 0;
  while (i < lines.length) {
    const cm = lines[i].match(COURSE_LINE_RE);
    if (cm) { course = cm[1]; section = ''; i++; continue; }
    const tm = lines[i].match(TYPE_LINE_RE);
    if (tm) { section = tm[1].toUpperCase(); i++; continue; }
    if (/^ONLINE/i.test(lines[i])) { i++; continue; }
    const dt = lines[i].match(DAYTIME_LIST_RE);
    if (dt && course) {
      const start = to24h(dt[2]), end = to24h(dt[3]);
      const days = (dt[1].match(/Mo|Tu|We|Th|Fr|Sa|Su/gi) || []).map(d => DAY2[d.toLowerCase()]);
      let building = '';
      const bm = i + 1 < lines.length ? lines[i + 1].match(BUILDING_LINE_RE) : null;
      if (bm && BUILDING_CODE_MAP[bm[1]]) { building = BUILDING_CODE_MAP[bm[1]]; i++; }
      if (start && end && start !== end) {
        days.forEach(day => found.push({ day, start, end, course: `${course} ${section}`.trim(), building }));
      }
    }
    i++;
  }
  return dedupeAndFinalize(found);
}

/* ---------- Boot ---------- */
checkSession().then(user => {
  if (user && !URL_HAD_U && user.uuid !== USER_ID) {
    const url = new URL(window.location.href);
    url.searchParams.set('u', user.uuid);
    window.location.href = url.toString();
    return;
  }
  loadState().then(() => {
    if (LOCKED) return;
    if (!state.onboarded) { openSettings(true); }
    renderAll();
  });
});
