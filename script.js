
const { createApp } = Vue;

const data ={
         name:"sedra",
         age:23,
}
const my_component = {
   template: `
   <h2> Hello my first time in Vue</h2>
   <p> my name is {{name}}</p>
   <p> my age is {{age}}</p>
   <button @click='changeAge'> increase age </button>`,
   data(){
      return data;
   },
   methods:{
      changeAge(){
         this.age++;
      }
   }
};
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
   data() {
      return {
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
         numberTwo: 0,

         myColor: "",
         font: 15,

         name: "ahmad",
         students: [{ name: "ahmad", age: 10, id: 1 },
         { name: "amr", age: 12, id: 2 },
         { name: "zain", age: 13, id: 3 }],
         age: 26,
         // v-for:
         Products: [
            {
               id: 1,
               title: "Shose",
               descrption: "this is a cool shose",
               brand: "Adidass",
               price: "50$",
               image: "./images/shoes.jfif",
               colors: ["gray", "silver", "pink", "black"],
            },
            {
               id: 2,
               title: "Bag",
               descrption: "this is a cool bag",
               brand: "Hermis",
               price: "100$",
               image: "./images/bag.jpg",
               colors: ["gray", "silver", "pink", "black"],
            },
            {
               id: 3,
               title: "Laptop",
               descrption: "this is a good laptop",
               brand: "Lenovo",
               price: "800$",
               image: "./images/lap.jpg",
               colors: ["black", "silver", "pink", "gray"],
            },
            {
               id: 4,
               title: "Keyboard",
               descrption: "this is a good Keyboard",
               brand: "tech",
               price: "50$",
               image: "./images/kes.jpg",
               colors: ["black", "silver", "gray"],
            },
         ]
      };
   },
   methods: {
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
   computed: {
      // 10 :
      numberOneChange() {
         return this.numberOne * 2;
      },
      numberTwoChange() {
         return this.numberTwo + 10;
      }
   },
   components: {
      my_component,
   }

}).mount("#app-root");

createApp({
   data() {
      return {
         name: "Ahmad",
         students: ["Ahmad", "Samir", "Hazem"],
         age: 10,
      }
   },
   methods: {
      checkRefs() {
         this.age = this.$refs.myInp.value;
      }
   },
   components: {
      my_component,
   }
}).mount("#app-root-2");