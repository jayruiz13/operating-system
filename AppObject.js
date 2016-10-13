function App(){

    //Declare your instance variables here.
    this.name=n;
    this.memory=m;
    this.state=s;

    //Declare the instance function open here.
    this.open = function(){
      this.state= "active"


    };
    //Declare the instance function sleep here.
    this.sleep= function(){
      if(this.state== "active"){
        this.state= "sleep"
      }
    };


    //Declare the instance functionhis active here.
    this.active= function(){
      if(this.state == "sleep"){
        this.sleep == "active"
        this.memory = this.memory*2
      }
    };


    //Declare the instance function close here.
    this.close= functon(){
      if(this.state != null){
        this.state = null
        this.memory = 0
      }
    };



}

//Use the constructor to create 4 App objects below.
var firstapp = new App();
var newapp = new App();
var coolapp = new App();
var niceapp = new App();
var appList = [firstapp,newapp,coolapp,niceapp]

//Declare an array named appList, and place all 4 of your apps in that array.
//The order does not matter.
