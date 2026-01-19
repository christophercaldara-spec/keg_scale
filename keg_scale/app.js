/**
 * KegScale Dashboard Application logic
 */

const exampleKegs = [
    {
        id: 1,
        name: "Midnight Stout",
        flavor: "Stout",
        lastReplaced: "2026-01-10",
        maxOunces: 1984, // 15.5 Gallons
        currentOunces: 1450,
        type: "Premium"
    },
    {
        id: 2,
        name: "Golden Haze IPA",
        flavor: "IPA",
        lastReplaced: "2026-01-15",
        maxOunces: 1984,
        currentOunces: 420,
        type: "Specialty"
    },
    {
        id: 3,
        name: "Summer Breeze Ale",
        flavor: "Pale Ale",
        lastReplaced: "2026-01-12",
        maxOunces: 1984,
        currentOunces: 1800,
        type: "Seasonal"
    },
    {
        id: 4,
        name: "Crisp Lager",
        flavor: "Lager",
        lastReplaced: "2026-01-05",
        maxOunces: 1984,
        currentOunces: 120,
        type: "Standard"
    },
    {
        id: 5,
        name: "Ruby Cider",
        flavor: "Cider",
        lastReplaced: "2026-01-18",
        maxOunces: 1984,
        currentOunces: 1950,
        type: "Specialty"
    }
];

function renderKegs() {
    const dashboard = document.getElementById('dashboard');
    dashboard.innerHTML = '';

    exampleKegs.forEach(keg => {
        const percentage = ((keg.currentOunces / keg.maxOunces) * 100).toFixed(1);
        const card = document.createElement('div');
        card.className = 'keg-card';

        // Choose fill color based on level
        let fillColor = 'var(--md-sys-color-primary)';
        let badgeClass = '';

        if (percentage < 15) {
            fillColor = 'var(--keg-low)';
        } else if (percentage < 40) {
            fillColor = 'var(--keg-medium)';
        } else {
            fillColor = 'var(--keg-full)';
        }

        card.innerHTML = `
      <div class="keg-header">
        <div class="keg-info">
          <span class="keg-type">${keg.type} • ${keg.flavor}</span>
          <span class="keg-name">${keg.name}</span>
        </div>
        <div class="percentage-badge">${percentage}%</div>
      </div>
      
      <div class="keg-visual-container">
        <div class="keg-visual">
          <div class="keg-fill" style="height: ${percentage}%; background: ${fillColor}"></div>
        </div>
      </div>
      
      <div class="keg-stats">
        <div class="stat-item">
          <span class="stat-label">Volume Left</span>
          <span class="stat-value">${keg.currentOunces.toLocaleString()} oz</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Total Capacity</span>
          <span class="stat-value">${keg.maxOunces.toLocaleString()} oz</span>
        </div>
      </div>
      
      <div class="last-replaced">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        <span>Last replaced: ${formatDate(keg.lastReplaced)}</span>
      </div>
    `;

        dashboard.appendChild(card);
    });
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderKegs();
});
