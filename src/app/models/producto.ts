export class Producto {
    id?:number     //?:significa que no es obligatorio este dato
    nombre:string
    precio:number
    constructor (nombre: string,precio:number){
        this.nombre=nombre
        this.precio=precio
    }
}

