const {createApp} = Vue; 

createApp({
   // from 1 to 7:
   // data () {
   //  return{
   // name : "Ahmad",
   //  age : 23,
   //   link : "https://google.com",
   //   num : 0,
   //  };
   // },
   // methods:{
   //    sayHi( name , fram){
   //         return "Hello" + " " + name + " , " + " my frameWork is " + fram; 
   //    },
   //    write(){
   //       console.log("new project");
   //    },
   //    increase(){
   //       this.num++;
   //    },
   //    testme(){
   //       console.log("once");
   //    }
   // },
   // from 8 to :
   data(){
      return{
         // 8 and 9 :
      //   age : 23,
      //   isActive : false,
      //   newUser :{
      //   name : "",
      //   email: "",
      //   password:"",
      //   },
      //   myArr : [
      //    {food : "banana" , price : 300}, 
      //    {food : "apple" , price : 400},
      // ],
      numberOne: 0,
      numberTwo : 0,
      };
   },
   methods:{
      //8 and 9:
      // sendInfo(){
      //   const userInfo = {
      //    name : this.newUser.name,
      //    email : this.newUser.email,
      //    password : this.newUser.password,
      //   }
      //   console.log(userInfo);
      // }
   },
   computed:{
   // 10 :
      numberOneChange(){
         return this.numberOne * 2;
      },
      numberTwoChange(){
         return this.numberTwo +10;
      }
   },
   
}).mount("#app-root");