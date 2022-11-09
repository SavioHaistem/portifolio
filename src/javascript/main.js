var redes = [
    {
        name: 'whatsapp',
        link: 'https://wa.me/+5584999918236'
    },
    {
        name: 'github',
        link: 'https://github.com/SavioHaistem'
    },
    {
        name: 'email',
        link: 'mailto:savio.dantas.5858@gmail.com'
    }
]

class links {
    constructor(nome, link) {
        this.nome = nome;
        this.link = link;
    };
    
    putLink() {
        let nome = this.nome
        let link = this.link

        redes.push({ name: nome, link: link})
    }
}

const linker = (nome) => open( redes.find(element => element.name == nome).link )