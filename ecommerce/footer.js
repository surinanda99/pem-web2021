const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = ` 
    <div class="footer-content">
    <img src="light-logo.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">men</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">women</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
        </ul>
    </div>
</div>
<p class="footer-title">about company</p>
<p class="info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem soluta, quaerat ipsa aliquam voluptates ex officiis nihil earum, nemo dignissimos accusamus nisi ut illum sit hic saepe, dolores voluptate iste iusto tempore. Temporibus ex commodi provident? Voluptas magni aliquam error repellat et, cum maiores. Quia reiciendis esse voluptatem veritatis omnis alias possimus laborum repellendus dolorum tempora quisquam odit quam magni reprehenderit temporibus quos non nesciunt corrupti quaerat atque aliquam, officia modi, similique saepe. Ullam corrupti dolores veritatis magnam iusto velit facere deserunt optio placeat quos repellendus sapiente, esse cum expedita eveniet, minus iure. Ut quae doloribus quis asperiores eligendi iure.</p>
<p class="info">email store - @clothingstore.com</p>
<p class="info">telephone - 123 123 123 123</p>
<div class="footer-social-container">
    <div>
        <a href="#" class="social-link">terms & services</a>
        <a href="#" class="social-link">privacy page</a>
    </div>
    <div>
        <a href="#" class="social-link">instagram</a>
        <a href="#" class="social-link">twitter</a>
    </div>
</div>
<p class="footer-credit">surinanda 2022</p>
    
    `;
}

createFooter();