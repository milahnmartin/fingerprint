let namee:string;


let user:number;





class Orbit{
user:string;
userother:string;

 constructor(name:string,surname:string){
     this.user = name;
     this.userother = surname;
 }

 showName(){
     let output:string;
     output = this.user + " helped me fuck a dinosour !!!";

     return output;
 }

 showValue(){
     let value = false;

     if (this.user === 'Matthew'){
         value = true;
     }else{
         value = false
     }

    
    return value;
    
 }

 
}




let ultra = new Orbit('Ultrafy','Martin')


ultra.showValue();