const {createApp} = Vue; 

createApp({
   data () {
    return{
   //   name : "Ahmad",
   //   age : 23,
     link : "https://google.com",
     num : 0,
    };
   },
   methods:{
      sayHi( name , fram){
           return "Hello" + " " + name + " , " + " my frameWork is " + fram; 
      },
      write(){
         console.log("new project");
      },
      increase(){
         this.num++;
      },
      testme(){
         console.log("once");
      }
   },
   
}).mount("#app-root");