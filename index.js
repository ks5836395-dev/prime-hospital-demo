/* ===== Prime Hospital — JavaScript ===== */

// ---------- Data ----------
const DEPT_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`;
const departments = [
  'Ambulance Service','Anaesthesiology','Cancer Care','Cardiology','Dermatology',
  'Diagnostic Imaging','Emergency Care','Gastroenterology','General Check-ups','General Surgery',
  'Hospice Care','Laboratory Services','Maternity Care','Mental Health Care','Neurology',
  'Nursing Services','Oncology','Orthopaedics','Outpatient Services','Paediatrics',
  'Pharmacy Services','Physical Therapy','Psychiatry','Psychology','X-ray & Radiology'
];

const doctors = [
  {name:'Dr. Rajesh Patel',spec:'Cardiologist',exp:'18 Years Experience'},
  {name:'Dr. Meera Shah',spec:'Neurologist',exp:'15 Years Experience'},
  {name:'Dr. Arjun Desai',spec:'Orthopaedic Surgeon',exp:'20 Years Experience'},
  {name:'Dr. Priya Nair',spec:'Paediatrician',exp:'12 Years Experience'},
  {name:'Dr. Sanjay Mehta',spec:'Oncologist',exp:'22 Years Experience'},
  {name:'Dr. Kavita Sharma',spec:'Dermatologist',exp:'10 Years Experience'}
];

const whyCards = [
  {title:'Experienced Medical Specialists',desc:'Our team of 200+ doctors brings decades of expertise across every medical specialty.'},
  {title:'Advanced Diagnostic Equipment',desc:'State-of-the-art MRI, CT, PET-CT scanners and a fully digital laboratory for precise diagnostics.'},
  {title:'24/7 Emergency Care',desc:'Round-the-clock emergency services with rapid response ambulances and trauma specialists.'},
  {title:'Patient-Focused Treatment',desc:'Personalized treatment plans crafted around each patient\'s unique needs and comfort.'},
  {title:'Affordable Healthcare Services',desc:'Transparent pricing and cashless insurance processing to make quality care accessible.'},
  {title:'Modern Operation Theatres',desc:'Modular, HEPA-filtered OTs with robotic-assisted surgery and live monitoring systems.'}
];

const testimonials = [
  {name:'Ankit Sharma',text:'Prime Hospital provided exceptional cardiac care for my father. The doctors were incredibly skilled and the nursing staff was so supportive throughout our stay. Highly recommended!',rating:5,role:'Cardiac Patient\'s Family'},
  {name:'Priyanka Joshi',text:'I had my delivery at Prime Hospital and the entire experience was wonderful. The maternity ward is clean, modern and the doctors made me feel completely safe and cared for.',rating:5,role:'Maternity Patient'},
  {name:'Ramesh Desai',text:'After my knee replacement surgery, the physiotherapy team helped me recover faster than expected. The whole process was smooth and professional.',rating:5,role:'Orthopaedic Patient'},
  {name:'Fatima Shaikh',text:'The diagnostic services are outstanding. Results were quick and the doctors explained everything clearly. Prime Hospital truly puts patients first.',rating:4,role:'Diagnostic Patient'}
];

const facilities = [
  {title:'ICU',icon:'monitor'},
  {title:'Emergency Room',icon:'alert'},
  {title:'Laboratory',icon:'flask'},
  {title:'Radiology',icon:'scan'},
  {title:'Pharmacy',icon:'pill'},
  {title:'Operation Theatre',icon:'scalpel'}
];

const facilityIcons = {
  monitor:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
  alert:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  flask:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3h6M12 3v7l-5.5 8.5a2 2 0 001.7 3h7.6a2 2 0 001.7-3L12 10V3"/></svg>`,
  scan:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg>`,
  pill:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v8M8 12h8"/></svg>`,
  scalpel:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2l4 4M7.5 20.5L19 9l-4-4L3.5 16.5 2 22l5.5-1.5z"/></svg>`
};

const DOC_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
const STAR = `<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
const WHY_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>`;

// ---------- Render Functions ----------
function renderDepts() {
  const g = document.getElementById('deptGrid');
  if (!g) return;
  g.innerHTML = departments.map(d => `
    <div class="dept-card reveal">
      <div class="icon">${DEPT_ICON}</div>
      <h4>${d}</h4>
    </div>`).join('');
}

function renderDoctors() {
  const g = document.getElementById('docGrid');
  if (!g) return;
  g.innerHTML = doctors.map(d => `
    <div class="doc-card reveal">
      <div class="doc-photo">${DOC_SVG}</div>
      <div class="doc-info">
        <h4>${d.name}</h4>
        <div class="spec">${d.spec}</div>
        <div class="exp">${d.exp}</div>
        <a href="#appointment" class="btn btn-primary btn-sm">Book Appointment</a>
      </div>
    </div>`).join('');
}

function renderWhy() {
  const g = document.getElementById('whyGrid');
  if (!g) return;
  g.innerHTML = whyCards.map(c => `
    <div class="why-card reveal">
      <div class="icon">${WHY_ICON}</div>
      <div><h4>${c.title}</h4><p>${c.desc}</p></div>
    </div>`).join('');
}

function renderTestimonials() {
  const g = document.getElementById('testimonialGrid');
  if (!g) return;
  const quoteIcon = `<svg class="quote-icon" viewBox="0 0 24 24" fill="currentColor" opacity=".15"><path d="M14.017 21v-7.391C14.017 10.577 16.42 8 19.647 8l.51.017V11.1c-1.97.056-2.747 1.066-2.747 2.122V15h3.59v6h-7m-9 0v-7.391C5.017 10.577 7.42 8 10.647 8l.51.017V11.1c-1.97.056-2.747 1.066-2.747 2.122V15h3.59v6h-7z"/></svg>`;
  g.innerHTML = testimonials.map(t => {
    const stars = Array(5).fill(0).map((_,i) => `<svg viewBox="0 0 24 24" style="color:${i < t.rating ? '#f59e0b' : '#e2e8f0'}"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`).join('');
    return `<div class="testimonial-card reveal">
      ${quoteIcon}
      <div class="stars">${stars}</div>
      <blockquote>"${t.text}"</blockquote>
      <div class="author">
        <div class="avatar">${t.name[0]}</div>
        <div class="author-info"><h5>${t.name}</h5><span>${t.role}</span></div>
      </div>
    </div>`;
  }).join('');
}

function renderFacilities() {
  const g = document.getElementById('facilitiesGrid');
  if (!g) return;
  g.innerHTML = facilities.map(f => `
    <div class="facility-card reveal">
      <div class="icon">${facilityIcons[f.icon]}</div>
      <h4>${f.title}</h4>
    </div>`).join('');
}

// ---------- Interactions ----------
// Sticky nav
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  document.getElementById('scrollTop').classList.toggle('show', window.scrollY > 500);
});

// Mobile menu
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
  document.getElementById('navCta').classList.toggle('open');
}
// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => {
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('navCta').classList.remove('open');
}));

// Intersection Observer for reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('active'); observer.unobserve(e.target); }});
}, { threshold: 0.15 });

function observeReveals() {
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Stats counter
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = +el.dataset.target;
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const tick = () => {
      current += step;
      if (current >= target) { el.textContent = target.toLocaleString() + '+'; return; }
      el.textContent = Math.floor(current).toLocaleString() + '+';
      requestAnimationFrame(tick);
    };
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { tick(); obs.unobserve(el); }
    }, { threshold: 0.5 });
    obs.observe(el);
  });
}

// Form
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('#fname').value.trim();
  const phone = form.querySelector('#phone').value.trim();
  if (!name || !phone) { alert('Please fill in all required fields.'); return; }
  alert(`Thank you, ${name}! Your appointment request has been submitted. We will contact you at ${phone} shortly.`);
  form.reset();
}

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    const top = s.offsetTop - 100;
    if (window.scrollY >= top) current = s.getAttribute('id');
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', () => {
  renderDepts();
  renderDoctors();
  renderWhy();
  renderTestimonials();
  renderFacilities();
  observeReveals();
  animateCounters();
  // Set min date for appointment
  const dateInput = document.getElementById('date');
  if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];
});
