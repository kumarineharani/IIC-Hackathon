const defaultBlockedSites = [];  // Start with no sites blocked by default

const blockPage = `
<!DOCTYPE html>
<html>
<head>
  <title>Focus Time Active</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      background: linear-gradient(135deg, #e8f0ff 0%, #f5f7ff 100%);
      color: #2c3e50;
    }
    .container {
      text-align: center;
      padding: 2.5rem;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(79, 156, 255, 0.2);
      max-width: 500px;
      width: 90%;
    }
    h1 { 
      color: #3b82f6; 
      margin-bottom: 1rem;
      font-size: 1.75rem;
    }
    p { 
      color: #2c3e50;
      line-height: 1.6;
      margin-bottom: 1rem;
    }
    .icon {
      font-size: 3rem;
      margin-bottom: 1rem;
      color: #3b82f6;
    }
    .domain {
      font-weight: bold;
      color: #3b82f6;
      background: rgba(59, 130, 246, 0.1);
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      display: inline-block;
    }
    .timer {
      font-family: 'SF Mono', monospace;
      font-size: 2rem;
      color: #3b82f6;
      margin: 1rem 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="icon">🎯</div>
    <h1>Stay Focused!</h1>
    <p>Access to <span class="domain">{DOMAIN}</span> is currently blocked.</p>
    <div class="timer">{TIMER}</div>
    <p>Keep going! Your focus time will end in <span class="domain">{REMAINING}</span>.</p>
  </div>
</body>
</html>
`;

// Initialize storage with default values
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    isEnabled: false,
    blockedSites: defaultBlockedSites,  // Start with empty list
    endTime: null
  });
});

// Listen for web navigation
chrome.webNavigation.onBeforeNavigate.addListener(async (details) => {
  // Only handle main frame navigation
  if (details.frameId !== 0) return;

  const { isEnabled, blockedSites, endTime } = await chrome.storage.local.get(['isEnabled', 'blockedSites', 'endTime']);
  
  // Check if blocking is enabled and timer is running
  if (!isEnabled || !endTime || endTime <= Date.now()) return;

  const url = new URL(details.url);
  const domain = url.hostname.replace('www.', '');

  // Check if the domain matches any blocked sites
  const isBlocked = blockedSites?.some(site => domain.includes(site)) ?? false;

  if (isBlocked) {
    const remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;
    const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Replace placeholders with actual values
    let customBlockPage = blockPage
      .replace('{DOMAIN}', domain)
      .replace('{TIMER}', timeString)
      .replace('{REMAINING}', `${minutes} minutes and ${seconds} seconds`);
    
    // Redirect to the block page
    chrome.tabs.update(details.tabId, {
      url: `data:text/html,${encodeURIComponent(customBlockPage)}`
    });
  }
});