import React, { Component } from 'react';
import './App.css';
var wisdoms = [
  "always wear underwear:)",
  "floss her teeth every day.",
  "has butterfiner..",
  "is watching you now.",
  "doesn't know how to spell.",
  "doesn't like math.",
  "sleep-in everymorning."
]

var names =[
 "---Jieying Yang",
"---Jieying Yang",
"---Jieying Yang",
"---Jieying Yang",
"---Sharron Lam",
"---Stephanie Lang",
"---Natalia Chou"
]

var id= [
"193758",
"293648",
"239574",
"203975",
"209384",
"203756",
"236565"
]

var min=20000;
var max=80000;
var id=0;
var initial=0;

function ListWisdoms(props){
  return <li>{props.value}</li>;
}

function WisdomList(props){
  var wisdoms= props.wisdoms;
  var listWisdoms = wisdoms.map((wisdoms)=>
       <ListWisdoms  value={wisdoms}/> );
 var index=Math.floor(Math.random()*wisdoms.length); 
var SliceWisdoms = listWisdoms.slice(index,index+3);                                
   return(
                          
     <ul> {SliceWisdoms}</ul>);
  
}



class App extends Component {
  constructor(props) {
    super(props);
    
    var index = Math.floor(Math.random() * wisdoms.length);
    var id=Math.floor(Math.random()*(max-min));
    this.state = {
    wisdom: wisdoms[index],
    author: names[index],
   // Id: id[index],
   // Id: id
   // value: 0
 };
    
    this.setRandomWisdom = this.setRandomWisdom.bind(this);
    this.addWisdom = this.addWisdom.bind(this);
    setInterval(this.setRandomWisdom,15000);
  }


  
  setRandomWisdom() {
   var index = Math.floor(Math.random()*wisdoms.length); 
   var id=Math.floor(Math.random()*(max-min));
   var randomNum=Math.floor(Math.random()*wisdoms.length);
   console.log("previous index num is: "+initial);

  
   console.log("current index num is: " +index);
   if(initial !=index){

       if(index>= wisdoms.length){
           index =0; 
	console.log("reset initial to 0");
           this.setState({
              wisdom: wisdoms[index],
	      author: names[index],
	     Id: id[randomNum]
            //   Id: id
           });  
    console.log(" output wisdom index is "+index);
         }else{
		this.setState({
		wisdom: wisdoms[index],
		author: names[index],
	       // Id :id 	
	      Id: id[randomNum]
		});
     console.log(" output wisdom index is "+index);
	}

        initial=index;
 
    }else{

       if(index<wisdoms.length-1){
      index++;
      }else{
        index=0;
      }
     console.log("previous=current num,  so new current index= "+index);
     this.setState({
     wisdom: wisdoms[index],
     author: names[index], 
     // Id: id[randomNum]
     //Id: id
     });

      console.log(" output wisdom index is "+index);
      initial=index;
      }

   }
  
  addWisdom() {
var randomNum=Math.floor(Math.random()*wisdoms.length);

    wisdoms.push(prompt("What new wisdom do you offer?"));
    names.push(prompt("What is your name?"));
   this.forceUpdate();
  }

  
  removeCurrentWisdom() {
    var index = wisdoms.indexOf(this.state.wisdom);
    wisdoms.splice(index, 1);
  }


  
  render() {


    return (
      <div className="App">
       <h2> Jieying Yang is a girl who</h2>
       
       {this.state.wisdom}
        <WisdomList wisdoms={wisdoms} /> 
       <h4><i>{this.state.author}</i></h4>
        <button className="more" onClick={this.setRandomWisdom}>Another</button>
	<button className="new-wisdom" onClick={this.addWisdom}> Add your own </button>     
 
 </div>
)

}
}
export default App;
