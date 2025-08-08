function parseCount(value){
    let parseResult = Number.parseFloat(value);
    if(Number.isNaN(parseResult)){
        throw new Error("Невалидное значение")
    }
    return parseResult;
}
function validateCount(value){
    try{
        return parseCount(value);
    } catch(Error){
        return Error;
    }
}
class Triangle{
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
        if(a + b < c || a + c < b || c + b < a){
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    get perimeter(){
        return (this.a + this.b + this.c);
    }
    get area(){
        let p = 0.5 * (this.a + this.b + this.c);
        let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return +s.toFixed(3);
    }
}
function getTriangle(a, b, c){
    try{
        return new Triangle(a, b, c);
    } catch(error){
            return {
                get area(){ 
                    return "Ошибка! Треугольник не существует" 
                },
                get perimeter(){ 
                    return "Ошибка! Треугольник не существует" 
                }
            }
        }
}