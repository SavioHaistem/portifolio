class NavBar {
    constructor(Menu, navlist, navlink) {
        this.Menu = document.querySelector(Menu);
        this.navList = document.querySelector(navlist);
        this.navLinks = document.querySelectorAll(navlink)
        this.activeClass = 'active'
    }

    addClickEvent() {
        this.Menu.addEventListener("click", () => console.log('foi'))
    }

    init() {
        if( this.Menu ) {
            this.addClickEvent();
        }
    }
}

const navbar = new NavBar(
    '#navbar',
    '#navlist',
    '.navlink',
);

navbar.init();