Vue.component('hijo', {
    template: //html
    `
    <div class="py-5 bg-success">
        <h3>Componente hijo</h3>
        <h4>numero: {{numero}}</h4>
        <h4>Nombre: {{name}}</h4>
    </div>
    `,
    props: ['numero'],
    data(){
        return{
            name: "Alberto"
        }
    },
    mounted(){
        this.$emit('nameHijo', this.name);
    }
})