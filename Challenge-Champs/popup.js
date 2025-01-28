document.addEventListener('DOMContentLoaded', () => {
  const timerButtons = document.querySelectorAll('.timer-button');
  const startButton = document.getElementById('startTimer');
  const timerDisplay = document.getElementById('timerDisplay');
  const customMinutesInput = document.getElementById('customMinutes');
  const toggleButtons = document.querySelectorAll('.toggle-button');
  
  let selectedMinutes = 0;
  let timerInterval = null;
  let endTime = null;

  // Load saved state
  chrome.storage.local.get(['isEnabled', 'blockedSites', 'endTime'], (result) => {
    if (result.blockedSites) {
      toggleButtons.forEach(button => {
        const siteId = button.parentElement.dataset.site;
        const isBlocked = result.blockedSites.includes(siteId);
        updateToggleButton(button, isBlocked);
      });
    }
    
    if (result.endTime && result.endTime > Date.now()) {
      endTime = result.endTime;
      startTimer(Math.floor((endTime - Date.now()) / 1000));
      disableControls(true);
    } else {
      enableControls();
    }
  });

  // Custom minutes input
  customMinutesInput.addEventListener('input', () => {
    if (endTime && endTime > Date.now()) return;
    
    const minutes = parseInt(customMinutesInput.value);
    if (minutes > 0) {
      selectedMinutes = minutes;
      timerButtons.forEach(btn => btn.classList.remove('active'));
      startButton.disabled = false;
    } else {
      startButton.disabled = true;
    }
  });

  // Timer button selection
  timerButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (endTime && endTime > Date.now()) return;
      
      timerButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      selectedMinutes = parseInt(button.dataset.minutes);
      customMinutesInput.value = '';
      startButton.disabled = false;
    });
  });

  // Start timer
  startButton.addEventListener('click', () => {
    if (selectedMinutes <= 0) return;
    
    const seconds = selectedMinutes * 60;
    endTime = Date.now() + (seconds * 1000);
    
    // Get currently blocked sites
    const blockedSites = Array.from(toggleButtons)
      .filter(button => button.classList.contains('blocked'))
      .map(button => button.parentElement.dataset.site);
    
    chrome.storage.local.set({ 
      isEnabled: true,
      endTime: endTime,
      blockedSites: blockedSites
    });
    
    startTimer(seconds);
    disableControls(true);
  });

  // Toggle site blocking
  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (endTime && endTime > Date.now()) return;
      
      const isCurrentlyBlocked = button.classList.contains('blocked');
      updateToggleButton(button, !isCurrentlyBlocked);
      
      // Save current blocked sites state
      const blockedSites = Array.from(toggleButtons)
        .filter(btn => btn.classList.contains('blocked'))
        .map(btn => btn.parentElement.dataset.site);
      
      chrome.storage.local.set({ blockedSites });
    });
  });

  function updateToggleButton(button, blocked) {
    button.classList.remove('blocked', 'unblocked');
    button.classList.add(blocked ? 'blocked' : 'unblocked');
    button.textContent = blocked ? 'Blocked' : 'Unblocked';
  }

  function startTimer(seconds) {
    if (timerInterval) clearInterval(timerInterval);
    
    updateTimerDisplay(seconds);
    
    timerInterval = setInterval(() => {
      const remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
      
      if (remaining <= 0) {
        clearInterval(timerInterval);
        chrome.storage.local.set({ 
          isEnabled: false,
          endTime: null
        });
        enableControls();
        updateTimerDisplay(0);
        chrome.action.setBadgeText({ text: '' });
        return;
      }
      
      updateTimerDisplay(remaining);
    }, 1000);
  }

  function updateTimerDisplay(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    timerDisplay.textContent = timeString;
    
    // Update extension badge
    chrome.action.setBadgeText({ text: `${minutes}:${remainingSeconds.toString().padStart(2, '0')}` });
    chrome.action.setBadgeBackgroundColor({ color: '#3b82f6' });
  }

  function disableControls(disabled) {
    timerButtons.forEach(button => button.disabled = disabled);
    startButton.disabled = disabled;
    customMinutesInput.disabled = disabled;
    toggleButtons.forEach(button => button.disabled = disabled);
    
    if (disabled) {
      startButton.textContent = 'Focus Time Active';
      document.querySelectorAll('.site-item').forEach(item => {
        item.style.opacity = '0.7';
      });
    } else {
      startButton.textContent = 'Start Focus Time';
      document.querySelectorAll('.site-item').forEach(item => {
        item.style.opacity = '1';
      });
    }
  }

  function enableControls() {
    disableControls(false);
    timerButtons.forEach(btn => btn.classList.remove('active'));
    selectedMinutes = 0;
    customMinutesInput.value = '';
    startButton.disabled = true;
  }
});