const checkSite = async () => {
  try {
    const response = await fetch('https://www.igbadun.co.uk');
    console.log(`Status: ${response.status} ${response.statusText}`);
    if (response.ok) {
      console.log('Site is accessible!');
      clearInterval(intervalId);
    }
  } catch (error) {
    console.log('Site not accessible yet:', error.message);
  }
};

const intervalId = setInterval(checkSite, 300000); // Check every 5 minutes
checkSite(); // Initial check