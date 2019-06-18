const shifter = new Vue({
    el: '#shape',
    data:{
        tittle: "GYM",
        tasks:[],
        newTask:""
    },
    methods:{
        addtask(){
            this.tasks.push({
                name: this.newTask,
                status: false
            });
            this.newTask="";
        },
        changeStatus(index){
            this.tasks[index].status= !this.tasks[index].status;
        },
        deletetask(index){
            this.tasks.splice(index, 1);
        }
    }
})