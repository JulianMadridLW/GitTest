//Tag 3.0
        // This is a comment from JS, later I will find the code that I need
        // Right now I started practice to JS

        //Class

        class Car{
            constructor(company, engine){
                this.company = company;
                this.engine = engine;
            }
            getInfo(){
                return(
                    `${this.company} has ${this.engine} engine`
                );
            }
        }

        //First Instance

        const firstCar = new Car('Bugatti', 'W16');
        console.log(firstCar);
        console.log(firstCar.getInfo());

        const secondCar = new Car('Bently', 'V12');
        console.log(secondCar);
        console.log(secondCar.getInfo());

        //Inheritance

        class Sportscar extends Car{
            constructor(company, engine, doors){
                super(company, engine);
                this.doors = doors;
            }
            speed(){
                return '267mph';
            }
        }
        const mySportCar = new Sportscar('Bugatti', 'W16', 2);

        //Polymorphism

        class Sedan extends Car{
            constructor(company, engine, model){
                super(company, engine);
                this.model = model
            }
            speed(){
                return '150mph';
            }
        }

       const mySedan = new Sedan('Mercedes', 'V12', 'S-Class');

       console.log(mySportCar);

       console.log(mySportCar.speed());

       console.log(mySedan);

       console.log(mySedan.speed());