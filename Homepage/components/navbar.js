const navbar = () => {
  return `<div id="navbar">
    <div id="logo">
      <a href="./index.html">
        <img
          src="./images/Navbar logo.png"
          alt="TripAdvisor logo"
        />
      </a>
    </div>
    <div id="navRight-section">
      <a href="#"><i class="fa-solid fa-pencil"></i>Review</a>
      <a href="#"><i class="fa-regular fa-heart"></i>Trips</a>
      <a href="#"><i class="fa-regular fa-bell"></i>Alerts</a>
      <a href="#" id="sign-in">Sign in</a>
      <a href="#"><i class="fa-solid fa-cart-shopping"></i>Baskets</a>
    </div>
  </div>`;
};

export { navbar };
