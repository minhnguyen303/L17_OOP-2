class Apple{
    constructor() {
        this.weight = 10;
    }

    decrease(){
        this.weight--;
    }

    isEmpty(){
        if (this.getWeight())
            return false;
        else
            return true;
    }

    getWeight(){
        return this.weight;
    }
}

class Human{
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    isMale(){
        return this.gender;
    }

    setGender(g){
        this.gender = g;
    }

    checkApple(A){
        if (A.isEmpty()){
            return false;
        }
        else{
            return true;
        }
    }

    eat(A){
        if (this.checkApple(A)){
            A.decrease();
            this.setWeight(this.weight++);
        }
    }

    say(str){
        console.log(str);
    }

    getName(){
        return this.name;
    }

    setName(str){
        this.name =name;
    }

    getWeight(){
        return this.weight;
    }

    setWeight(i){
        this.weight = i;
    }
}