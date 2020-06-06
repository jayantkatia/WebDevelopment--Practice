const app = new Vue({
    el: "#app",
    data: {
        heading: "TODO App",
        username: '',
        title: '',
        type: '',
        details: '',
        deadline: '',
        tasks: ['']
    },
    methods:{
        submitForm:function(){
            // event.preventDefault();
            this.tasks.push({
                username: this.username,
                title: this.title,
                type:this.type,
                details: this.details,
                deadline: this.deadline
            });
            console.log(this.tasks);
        },
        resetForm:function(){

        },
        display:function(){

        }   
        
    }

});