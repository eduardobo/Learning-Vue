const pp = new Vue({
    el: '#app',
    data:{
        message: 'Hi this is a message',
        cont: 0,
        color: "bg-primary"
    },
    computed:{
        invertido(){
            return this.message.split('').reverse().join('');
        },
        changeColor(){
            if(this.cont <10 && this.cont >= 0){
                this.color ="bg-primary";
            }
            else if (this.cont >=10 && this.cont < 20){
                this.color ="bg-success";
            }
            else if(this.cont >=20 && this.cont < 30){
                this.color ="bg-warning";
            }
            else {
                this.color ="bg-danger";
            }
            return this.color;
        },
        changeColorShort(){
            return{
                'bg-primary' : this.cont <= 10,
                'bg-success' : this.cont >10 && this.cont <=20,
                'bg-warning' : this.cont >20 && this.cont  <=30,
                'bg-danger' : this.cont > 30
            }
        }
    }
})