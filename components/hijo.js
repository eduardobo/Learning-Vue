Vue.component('hijo', {
    template: //html
    `
    <div class="py-5 bg-success">
        <h3>Componente hijo</h3>
        <h5>{{numero}}</h5>
    </div>
    `,
    props: ['numero']
})