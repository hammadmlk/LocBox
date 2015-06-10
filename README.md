##Server:
###Install Instruction:
Setup (asuming nodejs installed)

Go to the folder where you want to put the app
> git clone https://github.com/hammadmlk/LocBox.git

> cd LocBox

###Running
> node index.js

** see it online at: http://moodrhythm.com:8880/ (server may be offline.) **


##Files

Static folder has all the files

> /static/index.html

> /static/js

> -----------/GameModel.js 

> -----------/GameView.js

> -----------/GameController.js

##GameModel

####public function
.getCanvas()

.getContext()

.getCanvasWidth()

.getCanvasHeight()

.getWhoseTurn()

.setWhoseTurn()

.getMatrixVal()

.setMatrixVal()

.hasGameEnded()

.endGame()

.getWinner()


##GameController

####public function
.create()

####private function
._initGame()

._takeTurn()

._whatHappenedOnThisMove()
 
._getRowCol()
 
._getRelativeCoordinates()
  
  
  
  
##GameView

####public function

.draw()

####private function

._drawMatrix

._drawGrid

._drawLine

._drawCross

._drawTick

._drawWhoseTurn

._writeText

._drawWinner



## Data binding

._initGame() binds the GameModel with GameView. On every chance to GameModel, the view is recreated.



