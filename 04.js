const pp = new Vue({
    el:'#app',
    data:{
        tasks:[],
        newTask:"",
        gym: "GYM"
    },
    methods:{
        addTask(){
            this.tasks.push({
                name: this.newTask, status : false
            })
            localStorage.setItem('gym-local', JSON.stringify(this.tasks));
        },
        changeStatus(index){
            this.tasks[index].status = !this.tasks[index].status;
            localStorage.setItem('gym-local', JSON.stringify(this.tasks));
        },
        deleteTask(index){
            this.tasks.splice(index,1);
            localStorage.setItem('gym-local', JSON.stringify(this.tasks));
        }
    },
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('gym-local'));
        if (datosDB === null) {
            this.tasks = [];
        }
        else{
            this.tasks = datosDB;
        }
    }
})