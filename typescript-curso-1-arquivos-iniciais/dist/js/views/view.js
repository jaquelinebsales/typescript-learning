export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const element = document.querySelector(seletor);
        if (element) {
            this.element = element;
        }
        else {
            throw Error(`Seletor ${seletor} não existe no DOM`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        const t1 = performance.now();
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/script[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
        const t2 = performance.now();
        console.log(`Tempo de execução do método update: ${(t2 - t1) / 1000}`);
    }
}
