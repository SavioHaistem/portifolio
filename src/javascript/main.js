class Menu {
    constructor(Home, Projetos, Sobre) {
        this.Home = Home
        this.Projetos = Projetos
        this.Sobre = Sobre
    }
}

const navbar = new Menu(
    document.querySelectorAll('.home'),
    document.querySelectorAll('.projects'),
    document.querySelectorAll('.about')
)
