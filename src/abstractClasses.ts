// the idea here is to see the difference between interfaces and abstract classes.
// so pay attention to how with abstract classes, i can implement the same function as second.ts 

abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void // because of the abstract keyword, i do not have to prov9de a method definition.
    getReelTime(): number{
        // some complex calculations
        return 8
    }
}

// abstract classes are only blueprints. you can not create a new class with them
// const hc = new TakePhoto('test', 'Test')
// but i can extend it using another class definition

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("sepia")
    }
}

const hc = new Instagram('test', 'Test', 3)

hc.getReelTime() // this is allowed because it has already being defined in the abstract class