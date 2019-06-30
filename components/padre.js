Vue.component('padre', {
    template: //html
    `
    <div class="p-5 bg-dark text-white">
        <h2>Componente padre</h2>
        <button class="btn btn-danger" @click="numeroPadre++">+</button>
        <hijo :numero="numeroPadre" @nameHijo="nameFromSon = $event"></hijo>
        <h3>Nombre desde hijo: {{nameFromSon}}</h3>
    </div>
    `,
    data(){
        return{
            numeroPadre: 0,
            nameFromSon:''
        }
    }
})