Vue.directive('img', function(url) {
  var img = new Image(50,100);
  img.src = url;
  img.onload = function() {
    this.el.src = url;
  }.bind(this); 
});

var cart = [];

var items=[
    
     {
        id: 1,
        company: "WKND",
        img: 'koston.jpg',
        name: 'Eric Koston Pro Model',
        price: 50.00,
        quantity: 3
    },
    
    {
        id: 2,
        company: "Thunder",
        img: 'thunder.jpg',
        name: 'Thunder lights',
        price: 60.00,
        quantity: 8
    },
    
    {
        id: 3,
        company: "Bones",
        img: 'bones.jpg',
        name: 'Bones STF',
        price: 32.00,
        quantity: 5
    }
    
]

new Vue({
   el: "#app",
   data:{items,
        cart,
    },
   components:{
       item:{
       template:'#item-template',
       props: ['item'],
       methods:{
        addToCart: function(item){
           this.item.quantity > 0 ? this.item.quantity -=1 : false;
           cart.push(item);
           
       }
        }
     }
      
   }
  
});
