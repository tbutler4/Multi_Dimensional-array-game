class Field{
	constructor(dimension) {
		this.dimension  = dimension
		this.space = []
		for(var i = 0; i < dimension; i++){
			var row = []
			for (var j = 0; j < dimension; j++){
				row.push(0)
			}
			this.space.push(row)
		}
	}

	printField(){
		for(var i = 0; i < this.dimension; i++){
			console.log(this.space[i])
		}

	}

  
  printIlluminatedPoints() {
    for (var i = 0; i < this.dimension; i++) {
      for (var j = 0; j < this.dimension; j++){
        if (this.space[i][j] == 1) {
          console.log("illuminated spat at Y:", i, "X:", j)
        }
      }
    }
  }

}

class Lamp {
	constructor(field, x, y) {
		this.field = field
		this.x = x
		this.y = y
	}

	illuminate(){

			let increment = function(start) { return start + 1}
			let decrement = function(start) { return start - 1}
			let stayStill = function(start) { return start }
            
			// travel horizontally right
			this.travelRecursive(this.x,this.y,increment,stayStill)
            // travel horizontally left
            this.travelRecursive(this.x,this.y,decrement,stayStill)
            // travel up
            this.travelRecursive(this.x,this.y,stayStill,decrement)
            // travel down
            this.travelRecursive(this.x,this.y,stayStill,increment)
            // diagnal northwest
            this.travelRecursive(this.x,this.y,decrement,decrement)
            // diagnal northeast
            this.travelRecursive(this.x,this.y,increment,decrement)
            // diagnal southwest
            this.travelRecursive(this.x,this.y,decrement,increment)
            // diagnal southeast
            this.travelRecursive(this.x,this.y,increment,increment)
            
            
	}

	travelRecursive(startX, startY, travelfunctionX, travelfunctionY) {
		if(startX < 0 || startY < 0 || startX >= this.field.dimension || startY >= this.field.dimension){
			return
		}


	// set spot at coordinate to be 1
	this.field.space[startY][startX] = 1
	var nextX = travelfunctionX(startX)
	var nextY = travelfunctionY(startY)
	this.travelRecursive(nextX, nextY, travelfunctionX, travelfunctionY)
	}
}

var field = new Field(10)
var lamp = new Lamp(field=field, x=2, y=2)
var lamp2 = new Lamp(field=field, x=3, y=6)
lamp.illuminate()
lamp2.illuminate()
field.printField()
field.printIlluminatedPoints()

