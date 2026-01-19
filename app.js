/**
 * KegScale Dashboard Application logic - v2
 */

const exampleKegs = [
    {
        id: 1,
        name: "Midnight Stout",
        flavor: "Stout",
        lastReplaced: "2026-01-10",
        maxOunces: 1984,
        currentOunces: 1450,
        type: "Premium",
        distributor: "Global Brews Co.",
        avgServedPerDay: 45,
        batteryPercent: 82,
        lastSync: "2026-01-19T11:45:00",
        signalStrength: 90,
        calibrationStatus: "Calibrated",
        errorFlags: []
    },
    {
        id: 2,
        name: "Golden Haze IPA",
        flavor: "IPA",
        lastReplaced: "2026-01-15",
        maxOunces: 1984,
        currentOunces: 420,
        type: "Specialty",
        distributor: "Coastal Distributors",
        avgServedPerDay: 120,
        batteryPercent: 45,
        lastSync: "2026-01-19T11:50:00",
        signalStrength: 65,
        calibrationStatus: "Calibrated",
        errorFlags: ["Low Battery"]
    },
    {
        id: 3,
        name: "Summer Breeze Ale",
        flavor: "Pale Ale",
        lastReplaced: "2026-01-12",
        maxOunces: 1984,
        currentOunces: 1800,
        type: "Seasonal",
        distributor: "Local Craft Hub",
        avgServedPerDay: 85,
        batteryPercent: 95,
        lastSync: "2026-01-19T11:55:00",
        signalStrength: 98,
        calibrationStatus: "Calibrated",
        errorFlags: []
    },
    {
        id: 4,
        name: "Crisp Lager",
        flavor: "Lager",
        lastReplaced: "2026-01-05",
        maxOunces: 1984,
        currentOunces: 120,
        type: "Standard",
        distributor: "Global Brews Co.",
        avgServedPerDay: 60,
        batteryPercent: 12,
        lastSync: "2026-01-19T10:30:00",
        signalStrength: 30,
        calibrationStatus: "Needs Calibration",
        errorFlags: ["Critical Low Level", "Low Battery"]
    },
    {
        id: 5,
        name: "Ruby Cider",
        flavor: "Cider",
        lastReplaced: "2026-01-18",
        maxOunces: 1984,
        currentOunces: 1950,
        type: "Specialty",
        distributor: "Orchard Supply",
        avgServedPerDay: 35,
        batteryPercent: 99,
        lastSync: "2026-01-19T12:00:00",
        signalStrength: 100,
        calibrationStatus: "Calibrated",
        errorFlags: []
    },
    {
        id: 6,
        name: "Dark Roast Porter",
        flavor: "Porter",
        lastReplaced: "2026-01-08",
        maxOunces: 1984,
        currentOunces: 600,
        type: "Premium",
        distributor: "Global Brews Co.",
        avgServedPerDay: 40,
        batteryPercent: 70,
        lastSync: "2026-01-19T11:40:00",
        signalStrength: 85,
        calibrationStatus: "Calibrated",
        errorFlags: []
    },
    {
        id: 7,
        name: "Hoppy Nomad",
        flavor: "Double IPA",
        lastReplaced: "2026-01-14",
        maxOunces: 1984,
        currentOunces: 1100,
        type: "Specialty",
        distributor: "Coastal Distributors",
        avgServedPerDay: 150,
        batteryPercent: 88,
        lastSync: "2026-01-19T11:58:00",
        signalStrength: 92,
        calibrationStatus: "Calibrated",
        errorFlags: []
    },
    {
        id: 8,
        name: "Classic Pilsner",
        flavor: "Pilsner",
        lastReplaced: "2026-01-02",
        maxOunces: 1984,
        currentOunces: 300,
        type: "Standard",
        distributor: "Local Craft Hub",
        avgServedPerDay: 75,
        batteryPercent: 35,
        lastSync: "2026-01-19T11:42:00",
        signalStrength: 55,
        calibrationStatus: "Calibrated",
        errorFlags: []
    },
    {
        id: 9,
        name: "Belgian Wit",
        flavor: "Wheat",
        lastReplaced: "2026-01-16",
        maxOunces: 1984,
        currentOunces: 1600,
        type: "Seasonal",
        distributor: "Global Brews Co.",
        avgServedPerDay: 90,
        batteryPercent: 92,
        lastSync: "2026-01-19T12:01:00",
        signalStrength: 95,
        calibrationStatus: "Calibrated",
        errorFlags: []
    },
    {
        id: 10,
        name: "Sour Power",
        flavor: "Sour",
        lastReplaced: "2026-01-11",
        maxOunces: 1984,
        currentOunces: 850,
        type: "Specialty",
        distributor: "Coastal Distributors",
        avgServedPerDay: 110,
        batteryPercent: 75,
        lastSync: "2026-01-19T11:35:00",
        signalStrength: 80,
        calibrationStatus: "Calibrated",
        errorFlags: []
    },
    {
        id: 11,
        name: "Rye Not?",
        flavor: "Rye Ale",
        lastReplaced: "2026-01-09",
        maxOunces: 1984,
        currentOunces: 200,
        type: "Specialty",
        distributor: "Orchard Supply",
        avgServedPerDay: 20,
        batteryPercent: 55,
        lastSync: "2026-01-19T11:20:00",
        signalStrength: 70,
        calibrationStatus: "Calibrated",
        errorFlags: []
    },
    {
        id: 12,
        name: "Amber Waves",
        flavor: "Amber Ale",
        lastReplaced: "2026-01-13",
        maxOunces: 1984,
        currentOunces: 1200,
        type: "Standard",
        distributor: "Local Craft Hub",
        avgServedPerDay: 65,
        batteryPercent: 80,
        lastSync: "2026-01-19T11:48:00",
        signalStrength: 88,
        calibrationStatus: "Calibrated",
        errorFlags: []
    },
    {
        id: 13,
        name: "Nitro Cold Brew",
        flavor: "Coffee",
        lastReplaced: "2026-01-17",
        maxOunces: 1984,
        currentOunces: 1850,
        type: "Specialty",
        distributor: "Orchard Supply",
        avgServedPerDay: 55,
        batteryPercent: 98,
        lastSync: "2026-01-19T12:02:00",
        signalStrength: 99,
        calibrationStatus: "Calibrated",
        errorFlags: []
    },
    {
        id: 14,
        name: "Honey Kolsch",
        flavor: "Kolsch",
        lastReplaced: "2026-01-07",
        maxOunces: 1984,
        currentOunces: 450,
        type: "Seasonal",
        distributor: "Coastal Distributors",
        avgServedPerDay: 50,
        batteryPercent: 62,
        lastSync: "2026-01-19T11:38:00",
        signalStrength: 78,
        calibrationStatus: "Calibrated",
        errorFlags: []
    },
    {
        id: 15,
        name: "Winter Warmer",
        flavor: "Stout",
        lastReplaced: "2026-01-04",
        maxOunces: 1984,
        currentOunces: 150,
        type: "Seasonal",
        distributor: "Local Craft Hub",
        avgServedPerDay: 95,
        batteryPercent: 20,
        lastSync: "2026-01-19T11:15:00",
        signalStrength: 45,
        calibrationStatus: "Calibrated",
        errorFlags: ["Low Battery"]
    }
];

let currentKegs = [...exampleKegs];

function init() {
    renderNotifications();
    handleSort();

    // Set up event listeners for sorting
    document.getElementById('sort-select').addEventListener('change', (e) => {
        handleSort(e.target.value);
    });
}

function handleSort(criteria = "default") {
    switch (criteria) {
        case "top-selling":
            currentKegs.sort((a, b) => b.avgServedPerDay - a.avgServedPerDay);
            break;
        case "lowest-selling":
            currentKegs.sort((a, b) => a.avgServedPerDay - b.avgServedPerDay);
            break;
        case "highest-volume":
            currentKegs.sort((a, b) => b.currentOunces - a.currentOunces);
            break;
        case "lowest-volume":
            currentKegs.sort((a, b) => a.currentOunces - b.currentOunces);
            break;
        case "distributor":
            currentKegs.sort((a, b) => a.distributor.localeCompare(b.distributor));
            break;
        default:
            currentKegs = [...exampleKegs];
    }
    renderKegs();
}

function renderNotifications() {
    const container = document.getElementById('notifications-container');
    const alertList = exampleKegs.filter(keg => (keg.currentOunces / keg.maxOunces) < 0.3);

    if (alertList.length === 0) {
        container.style.display = 'none';
        return;
    }

    container.style.display = 'block';
    container.innerHTML = `
    <div class="alert-banner">
      <div class="alert-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        <span>Critical: ${alertList.length} Keg${alertList.length > 1 ? 's' : ''} running low (under 30%)</span>
      </div>
      <div class="alert-items">
        ${alertList.map(keg => `
          <div class="alert-item">
            <strong>${keg.name}</strong> is at ${((keg.currentOunces / keg.maxOunces) * 100).toFixed(1)}%
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderKegs() {
    const dashboard = document.getElementById('dashboard');
    dashboard.innerHTML = '';

    currentKegs.forEach(keg => {
        const percentage = ((keg.currentOunces / keg.maxOunces) * 100).toFixed(1);
        const daysLeft = (keg.currentOunces / keg.avgServedPerDay).toFixed(1);
        const card = document.createElement('div');
        card.className = 'keg-card';

        let fillColor = 'var(--keg-full)';
        if (percentage < 15) fillColor = 'var(--keg-low)';
        else if (percentage < 40) fillColor = 'var(--keg-medium)';

        const batteryColor = keg.batteryPercent < 20 ? 'var(--keg-low)' : (keg.batteryPercent < 50 ? 'var(--keg-medium)' : 'var(--keg-full)');
        const signalIcon = getSignalIcon(keg.signalStrength);

        card.innerHTML = `
      <div class="keg-header">
        <div class="keg-info">
          <span class="keg-type">${keg.type} • ${keg.flavor}</span>
          <span class="keg-name">${keg.name}</span>
          <span class="keg-distributor">${keg.distributor}</span>
        </div>
        <div class="percentage-badge" style="background: ${fillColor}22; color: ${fillColor}; border: 1px solid ${fillColor}44;">
          ${percentage}%
        </div>
      </div>
      
      <div class="status-row">
        <div class="status-pill battery">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="${batteryColor}" stroke-width="2.5"><rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line></svg>
          <span style="color: ${batteryColor}">${keg.batteryPercent}%</span>
        </div>
        <div class="status-pill signal">
          ${signalIcon}
          <span>${keg.signalStrength}%</span>
        </div>
        <div class="status-pill sync">
          <span>${formatTime(keg.lastSync)}</span>
        </div>
      </div>

      <div class="keg-visual-container">
        <div class="keg-visual">
          <div class="keg-fill" style="height: ${percentage}%; background: ${fillColor}"></div>
        </div>
        <div class="days-indicator">
          <div class="days-value">${daysLeft}</div>
          <div class="days-label">DAYS LEFT</div>
        </div>
      </div>
      
      <div class="metrics-grid">
        <div class="metric-box">
          <span class="m-label">Daily Avg</span>
          <span class="m-value">${keg.avgServedPerDay} oz</span>
        </div>
        <div class="metric-box">
          <span class="m-label">Remaining</span>
          <span class="m-value">${keg.currentOunces} oz</span>
        </div>
      </div>

      <div class="card-footer">
        <div class="footer-row">
          <div class="calibration-status ${keg.calibrationStatus === 'Calibrated' ? 'status-ok' : 'status-warn'}">
            ${keg.calibrationStatus}
          </div>
          <div class="error-flags">
            ${keg.errorFlags.length > 0 ? `<span class="error-pill">! ${keg.errorFlags.length}</span>` : ''}
          </div>
        </div>
        <div class="last-replaced">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
          <span>Replaced: ${formatDate(keg.lastReplaced)}</span>
        </div>
      </div>
    `;

        dashboard.appendChild(card);
    });
}

function getSignalIcon(strength) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 20V4"></path></svg>`;
}

function formatDate(dateString) {
    const options = { month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

function formatTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

document.addEventListener('DOMContentLoaded', init);
