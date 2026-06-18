document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Header Scroll Effect
  // ==========================================
  const header = document.getElementById('main-header');
  
  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check initially


  // ==========================================
  // 2. Mobile Nav Toggle
  // ==========================================
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navItems = document.querySelectorAll('.nav-item');

  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
  });

  // Close menu when clicking a link
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      mobileToggle.classList.remove('open');
      navMenu.classList.remove('open');
    });
  });


  // ==========================================
  // 3. Service Card Mouse Move Spotlight
  // ==========================================
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    });
  });


  // ==========================================
  // 4. Interactive Cost Estimator
  // ==========================================
  const serviceCheckboxes = document.querySelectorAll('.calc-card-checkbox');
  const scopeSlider = document.getElementById('scope-slider');
  const scopeLabel = document.getElementById('scope-label');
  const radioButtons = document.querySelectorAll('.calc-radio');
  const summaryItems = document.getElementById('summary-items');
  const calcTotal = document.getElementById('calc-total');
  const calcTimeline = document.getElementById('calc-timeline');

  // Helper to format currency in Indian Rupees
  function formatINR(amount) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  }

  // Service pricing configurations
  const basePrices = {
    ads: 5000,
    web: 15000,
    devops: 12000,
    seo: 6000
  };

  const serviceNames = {
    ads: 'Online Advertisements',
    web: 'Full-Stack Web Dev',
    devops: 'DevOps & CI/CD Setup',
    seo: 'SEO & Optimization'
  };

  // State
  let selectedServices = ['web']; // Default active service
  let scopeValue = 3;
  let selectedTimeline = 'standard';
  let timelineMultiplier = 1.0;

  // Initialize Estimator
  updateCalculator();

  // Handle service checkbox clicks
  serviceCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
      const serviceId = checkbox.dataset.service;
      
      if (selectedServices.includes(serviceId)) {
        // Prevent deselecting the last remaining service
        if (selectedServices.length > 1) {
          selectedServices = selectedServices.filter(id => id !== serviceId);
          checkbox.classList.remove('active');
        }
      } else {
        selectedServices.push(serviceId);
        checkbox.classList.add('active');
      }
      updateCalculator();
    });
  });

  // Handle scope slider input
  scopeSlider.addEventListener('input', (e) => {
    scopeValue = parseInt(e.target.value);
    
    // Update label text based on units
    let unitText = 'Pages / Assets';
    if (scopeValue === 1) unitText = 'Page / Asset';
    
    scopeLabel.textContent = `Project Scope: ${scopeValue} ${unitText}`;
    updateCalculator();
  });

  // Handle timeline selection
  radioButtons.forEach(radio => {
    radio.addEventListener('click', () => {
      radioButtons.forEach(btn => btn.classList.remove('active'));
      radio.classList.add('active');
      selectedTimeline = radio.dataset.timeline;
      timelineMultiplier = parseFloat(radio.dataset.mult);
      updateCalculator();
    });
  });

  function updateCalculator() {
    let subtotal = 0;
    summaryItems.innerHTML = '';

    // 1. Calculate services subtotal
    selectedServices.forEach(serviceId => {
      const basePrice = basePrices[serviceId];
      subtotal += basePrice;

      // Add service to line items in UI
      const itemElement = document.createElement('div');
      itemElement.className = 'summary-item';
      itemElement.innerHTML = `
        <span class="item-label">${serviceNames[serviceId]}</span>
        <span class="item-val">${formatINR(basePrice)}</span>
      `;
      summaryItems.appendChild(itemElement);
    });

    // 2. Apply Scope Multiplier
    // Slider starts at 1. Baseline is 3 pages (x1.0).
    // Scaling factor: 1 page = x0.8, 3 pages = x1.0, 10 pages = x1.7, 15 pages = x2.2
    const scopeMultiplier = 0.7 + (scopeValue - 1) * 0.1;
    const scopeCost = Math.round(subtotal * (scopeMultiplier - 1));
    
    // Update multiplier label in header
    const multiplierLabel = document.querySelector('.slider-multiplier');
    if (multiplierLabel) {
      multiplierLabel.textContent = `x${scopeMultiplier.toFixed(1)} Scope`;
    }

    if (scopeCost !== 0) {
      const scopeElement = document.createElement('div');
      scopeElement.className = 'summary-item';
      scopeElement.innerHTML = `
        <span class="item-label">Scope Scaling (${scopeValue} units)</span>
        <span class="item-val">${scopeCost >= 0 ? '+' : ''}${formatINR(scopeCost)}</span>
      `;
      summaryItems.appendChild(scopeElement);
    }

    const priceAfterScope = subtotal + scopeCost;

    // 3. Apply Timeline Urgency Multiplier
    const speedFee = Math.round(priceAfterScope * (timelineMultiplier - 1));
    
    if (speedFee > 0) {
      const speedElement = document.createElement('div');
      speedElement.className = 'summary-item';
      
      let speedLabel = 'Expedited Service (+25%)';
      if (selectedTimeline === 'rush') speedLabel = 'Priority Rush Service (+50%)';
      
      speedElement.innerHTML = `
        <span class="item-label">${speedLabel}</span>
        <span class="item-val">+${formatINR(speedFee)}</span>
      `;
      summaryItems.appendChild(speedElement);
    }

    // 4. Calculate Final Estimated Total
    const finalTotal = priceAfterScope + speedFee;
    calcTotal.textContent = formatINR(finalTotal);

    // 5. Calculate Timelines (Days)
    // Baseline duration: 10 days for base dev, +3 days per page scope
    let baseDays = 8 + (scopeValue * 2);
    
    // Scale timeline down for speed options
    if (selectedTimeline === 'expedited') {
      baseDays = Math.max(5, Math.round(baseDays * 0.5));
    } else if (selectedTimeline === 'rush') {
      baseDays = Math.max(3, Math.round(baseDays * 0.25));
    }

    // Formatting duration output
    let durationString = '';
    if (baseDays <= 3) {
      durationString = 'Estimated: 2 - 3 Days (Rush)';
    } else if (baseDays <= 7) {
      durationString = `Estimated: 5 - 7 Days (Expedited)`;
    } else {
      durationString = `Estimated: ${baseDays - 3} - ${baseDays + 2} Days`;
    }
    calcTimeline.textContent = durationString;

    // 6. Pre-populate contact form values dynamically
    const formBudgetInput = document.getElementById('form-budget');
    const formScopeInput = document.getElementById('form-scope');
    if (formBudgetInput) {
      formBudgetInput.value = formatINR(finalTotal);
    }
    if (formScopeInput) {
      const selectedNames = selectedServices.map(id => {
        if (id === 'ads') return 'Ads';
        if (id === 'web') return 'Web Dev';
        if (id === 'devops') return 'DevOps';
        if (id === 'seo') return 'SEO';
        return id;
      }).join(' + ');
      formScopeInput.value = `${selectedNames} (${scopeValue} units, ${selectedTimeline})`;
    }
  }

  // Smooth scroll and focus on contact form from Estimator
  const estimatorCta = document.getElementById('estimator-cta');
  if (estimatorCta) {
    estimatorCta.addEventListener('click', (e) => {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
      setTimeout(() => {
        const nameInput = document.getElementById('form-name');
        if (nameInput) nameInput.focus();
      }, 800);
    });
  }


  // ==========================================
  // 5. Portfolio Category Filter
  // ==========================================
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Set active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.dataset.filter;

      portfolioCards.forEach(card => {
        const category = card.dataset.category;
        
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hidden');
          // Add quick fade in
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease';
            card.style.opacity = '1';
          }, 50);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });


  // ==========================================
  // 6. Copy-to-Clipboard Email Functionality
  // ==========================================
  const emailCard = document.getElementById('email-card');
  const copyBtn = document.getElementById('copy-email-btn');
  const emailText = document.getElementById('email-text').textContent;
  const tooltip = document.getElementById('email-tooltip');
  
  const copySvg = document.getElementById('copy-svg');
  const checkSvg = document.getElementById('check-svg');

  emailCard.addEventListener('click', () => {
    copyEmail();
  });

  function copyEmail() {
    navigator.clipboard.writeText(emailText).then(() => {
      // Toggle SVGs
      copySvg.classList.add('hidden');
      checkSvg.classList.remove('hidden');
      
      // Update Tooltip
      tooltip.textContent = 'Copied!';
      tooltip.classList.add('show');

      // Revert states
      setTimeout(() => {
        copySvg.classList.remove('hidden');
        checkSvg.classList.add('hidden');
        tooltip.classList.remove('show');
        tooltip.textContent = 'Copy email';
      }, 2000);
    }).catch(err => {
      console.error('Could not copy email: ', err);
    });
  }


  // ==========================================
  // 7. Form Submission & Direct Email (Mailto)
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('form-submit-btn');
  const successAlert = document.getElementById('form-success');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Extract input values
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const budget = document.getElementById('form-budget').value;
    const scope = document.getElementById('form-scope').value;
    const message = document.getElementById('form-message').value;

    // Visual Submission State
    const originalBtnHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Opening Email Client...</span>';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';

    // Construct email subject and body
    const subject = `LI-devops Project Quote Request from ${name}`;
    const emailBody = `Hello LI-devops Team,

I would like to consult with you on a project build. Here are my requirements:

- Contact Name: ${name}
- Contact Email: ${email}
- Estimated Budget: ${budget}
- Services & Scope: ${scope}

Message & Additional Details:
--------------------------------------------------
${message}
--------------------------------------------------

Please get back to me to finalize the scope and timeline.

Best regards,
${name}`;

    // Create mailto link
    const mailtoLink = `mailto:premwork1806@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Simulate sending progress and trigger email
    setTimeout(() => {
      // Re-enable submit button in background
      submitBtn.innerHTML = originalBtnHTML;
      submitBtn.disabled = false;
      submitBtn.style.opacity = '1';
      submitBtn.classList.add('hidden');
      
      // Show Success Alert
      successAlert.classList.remove('hidden');
      
      // Redirect to trigger local email client
      window.location.href = mailtoLink;

      // Reset form
      contactForm.reset();
    }, 800);
  });
});
