var typed=new Typed(".text",{
strings:["Frontend Developer" , "Blogger" , "Youtuber" , "Video Editor"],
typeSpeed:100,
backSpeed:100,
backDelay:1000,
loop:true
}
)

// Check if the visitor count is already in localStorage
if (localStorage.getItem('visitorCount')) {
    // If it's in localStorage, retrieve and display it
    document.getElementById('visitor-count').textContent = localStorage.getItem('visitorCount');
  } else {
    // If not, initialize it to 0
    localStorage.setItem('visitorCount', '0');
  }

// Function to increment the visitor count
function incrementVisitorCount() {
    const countElement = document.getElementById('visitor-count');
    let currentCount = parseInt(countElement.textContent, 10);
    currentCount++;
    countElement.textContent = currentCount;
    // Update the count in localStorage
    localStorage.setItem('visitorCount', currentCount.toString());
  }
  // Example: Increment count when a button is clicked
  document.getElementById('increment-button').addEventListener('click', incrementVisitorCount);
  


  
