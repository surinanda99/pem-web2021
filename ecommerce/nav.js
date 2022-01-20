const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
            <img src="dark-logo.png" class="brand-logo" alt="">
            <div class="navbar-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                    <a href="#"><img src="user.png" alt=""></a>
                    <a href="#"><img src="cart.png" alt=""></a>
                </div>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">women</a></li>
            <li class="link-item"><a href="#" class="link">men</a></li>
            <li class="link-item"><a href="#" class="link">accesories</a></li>
        </ul>
    
    `;
}

createNav();