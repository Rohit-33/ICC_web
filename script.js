document.addEventListener('DOMContentLoaded', function() {
  // Carousel for Events section
  const carouselTrack = document.querySelector('.carousel-track');
  const leftBtn = document.querySelector('.carousel-btn.left');
  const rightBtn = document.querySelector('.carousel-btn.right');
  if (carouselTrack && leftBtn && rightBtn) {
    leftBtn.onclick = () => carouselTrack.scrollBy({left: -250, behavior: 'smooth'});
    rightBtn.onclick = () => carouselTrack.scrollBy({left: 250, behavior: 'smooth'});
  }

  // Testimonials carousel
  const testimonials = document.querySelectorAll('.testimonial');
  let testimonialIdx = 0;
  const testimonialPrev = document.getElementById('testimonial-prev');
  const testimonialNext = document.getElementById('testimonial-next');
  if (testimonialPrev && testimonialNext && testimonials.length) {
    testimonialPrev.onclick = function() {
      testimonials[testimonialIdx].classList.remove('active');
      testimonialIdx = (testimonialIdx - 1 + testimonials.length) % testimonials.length;
      testimonials[testimonialIdx].classList.add('active');
    };
    testimonialNext.onclick = function() {
      testimonials[testimonialIdx].classList.remove('active');
      testimonialIdx = (testimonialIdx + 1) % testimonials.length;
      testimonials[testimonialIdx].classList.add('active');
    };
  }

  // RSVP Modal
  const rsvpBtns = document.querySelectorAll('.rsvp-btn');
  const rsvpModal = document.getElementById('rsvp-modal');
  const closeRsvp = document.getElementById('close-rsvp');
  const rsvpEventName = document.getElementById('rsvp-event-name');
  const rsvpForm = document.getElementById('rsvpForm');
  const rsvpMessage = document.getElementById('rsvp-message');
  if (rsvpBtns && rsvpModal && closeRsvp && rsvpEventName && rsvpForm && rsvpMessage) {
    rsvpBtns.forEach(btn => {
      btn.onclick = () => {
        rsvpEventName.textContent = btn.dataset.event;
        rsvpModal.style.display = 'flex';
        rsvpMessage.textContent = '';
      };
    });
    closeRsvp.onclick = () => rsvpModal.style.display = 'none';
    rsvpForm.onsubmit = function(e) {
      e.preventDefault();
      const name = document.getElementById('rsvp-name').value.trim();
      const email = document.getElementById('rsvp-email').value.trim();
      if (!name || !email) {
        rsvpMessage.textContent = "Please enter your name and email.";
        return;
      }
      rsvpMessage.textContent = `Thank you, ${name}! Your RSVP for ${rsvpEventName.textContent} is confirmed.`;
      rsvpForm.reset();
    };
    window.onclick = function(event) {
      if (event.target === rsvpModal) rsvpModal.style.display = 'none';
    };
  }

  // Calendar Implementation
  const monthYear = document.getElementById('month-year');
  const calendarWeekdays = document.getElementById('calendar-weekdays');
  const calendarDays = document.getElementById('calendar-days');
  const prevMonthBtn = document.getElementById('prev-month');
  const nextMonthBtn = document.getElementById('next-month');
  const calendarMsg = document.getElementById('calendar-message');
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  let today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();
  let selectedDate = null;
  function renderCalendar(month, year) {
    if (!monthYear || !calendarWeekdays || !calendarDays) return;
    monthYear.textContent = `${months[month]} ${year}`;
    calendarWeekdays.innerHTML = weekdays.map(d => `<div>${d}</div>`).join('');
    calendarDays.innerHTML = '';
    let firstDay = new Date(year, month, 1).getDay();
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let i = 0; i < firstDay; i++) calendarDays.innerHTML += `<div></div>`;
    for (let d = 1; d <= daysInMonth; d++) {
      let dateObj = new Date(year, month, d);
      let isToday = d === today.getDate() && month === today.getMonth() && year === today.getFullYear();
      let isSelected = selectedDate &&
        d === selectedDate.getDate() &&
        month === selectedDate.getMonth() &&
        year === selectedDate.getFullYear();
      calendarDays.innerHTML += `<div class="${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}" data-date="${dateObj.toISOString()}">${d}</div>`;
    }
  }
  function handleDateClick(e) {
    if (e.target.dataset.date) {
      let date = new Date(e.target.dataset.date);
      selectedDate = date;
      renderCalendar(currentMonth, currentYear);
      if (calendarMsg) calendarMsg.textContent = `You selected: ${date.toDateString()}. See you at the club!`;
    }
  }
  if (prevMonthBtn && nextMonthBtn && calendarDays) {
    prevMonthBtn.onclick = () => {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      renderCalendar(currentMonth, currentYear);
      if (calendarMsg) calendarMsg.textContent = '';
      selectedDate = null;
    };
    nextMonthBtn.onclick = () => {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      renderCalendar(currentMonth, currentYear);
      if (calendarMsg) calendarMsg.textContent = '';
      selectedDate = null;
    };
    calendarDays.addEventListener('click', handleDateClick);
    renderCalendar(currentMonth, currentYear);
  }

  // Join Us Form (with backend integration)
  const joinForm = document.getElementById('joinForm');
  if (joinForm) {
    joinForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const messageDiv = document.getElementById('formMessage');
      if (!name || !email) {
        messageDiv.textContent = "Please enter your name and email.";
        return;
      }
      messageDiv.textContent = "Submitting...";
      try {
        const response = await fetch('http://localhost:3000/api/join', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ name, email })
        });
        const data = await response.json();
        if (response.ok) {
          messageDiv.textContent = data.message || "Thank you for joining!";
          joinForm.reset();
        } else {
          messageDiv.textContent = data.message || "Submission failed.";
        }
      } catch (err) {
        messageDiv.textContent = "Server error. Try again later.";
      }
    });
  }

  // Newsletter Form (frontend only)
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('newsletter-email').value.trim();
      const messageDiv = document.getElementById('newsletter-message');
      if (!email) {
        messageDiv.textContent = "Please enter your email.";
        return;
      }
      messageDiv.textContent = `Thank you for subscribing!`;
      this.reset();
    });
  }
});
