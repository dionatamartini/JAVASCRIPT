class Component {
    #element
    constructor(comp){
        this.#element = comp
    }
    
    readComp() {
        const element = document.createElement('div');
        element.textContent = 'Componente Genérico';
        return element;
    }
}

console.log(readComp())



