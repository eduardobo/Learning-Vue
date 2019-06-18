const pp = new Vue({
    el: '#app',
    data:{
        titulo: "This is a Title",
        recibe: '',
        arregloChingon:[
            {nombre:"servilletas", cantidad:500},
            {nombre:"Papel", cantidad:20},
            {nombre:"Baño", cantidad:2}
        ],
        changeQuantiti: 0
    },
    methods:{
        nuevoMetodo(){
            if(this.recibe !== ""){
                this.arregloChingon.push({nombre:this.recibe, cantidad : this.changeQuantiti});
            }
            this.recibe = "";
            this.changeQuantiti = 0;
        }
    },
    computed: {
        sumarInventario (){
            total = 0;
            for(objetos of this.arregloChingon){
                total += objetos.cantidad;
            }
            return total;
        }
    }
})