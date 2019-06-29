Vue.component('saludo',{
    template: //html
        `<div>
        <h1>Saludo desde template</h1><br>
        <h1>{{saludo}}</h1>
        </div>`,
    data(){
        return{
            saludo: "Hola desde componente con data"
        }
    }
});