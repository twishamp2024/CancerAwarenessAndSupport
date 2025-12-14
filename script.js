// Quote API
async function getQuote() {
  try {
    const res = await fetch("https://zenquotes.io/api/random");
    const data = await res.json();
    document.getElementById("quote").innerText = `"${data[0].q}"`;
    document.getElementById("author").innerText = `— ${data[0].a}`;
  } catch (error) {
    document.getElementById("quote").innerText =
      "Stay strong. Every step forward is progress.";
    document.getElementById("author").innerText = "";
  }
}


// Load quote on page load
getQuote();

// Contact form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for reaching out. We will get back to you soon.");
  this.reset();
});
