/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov) {
  /* Completar constructor a partir de Enemigo */
  //Enemigo.call(/* ... */);
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
  Enemigo.call(this,sprite, x, y, ancho, alto, velocidad, rangoMov);
}

ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

/* Completar creacion del ZombieConductor */

/* Completar metodos para el movimiento y el ataque */

ZombieConductor.prototype.mover = function(){
 	
 	if(this.rangoMov.direccion === "h"){
 		(Math.random() < 0.5) ? this.x -= this.velocidad : this.x -= this.velocidad;
 		if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
    		this.velocidad *= -1;
  		}
 	}

 	if(this.rangoMov.direccion === "v"){
		(Math.random() < 0.5) ? this.y -= this.velocidad : this.y -= this.velocidad;
 		if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
    		this.velocidad *= -1;
 		 }
 	}
 
 ZombieConductor.prototype.atacar = function(jugador){
 	jugador.perderVidas(5);
 }
}