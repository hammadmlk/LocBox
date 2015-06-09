function GameController(){
  var self = this;
  this.toString = function(){return "GameController";};
  this.gameModel;
  this.View;
  
  this.create = function (){
    self.gameModel = new GameModel();
    self.View = new View();
    self.View.create();
    
    //data binding by observing model
    Object.observe(self.gameModel, function(changes){
        changes.forEach(function(change) {
            console.log(change.type, change.name, change.oldValue);
        });
    });
    
    self.initGame();
  
  };

  this.initGame = function(){
    // Models and views are created, so we can start game here.
    
  
  };
  

}


function GameModel(){
  var self = this;
  
  this.toString = function() {return "GameModel";};
  
  this.something;
  
  this. getSomething = function(){
    return self.something;
  };
  
  this.setSometing = function(data){
    self.something = data;
  };

};

function View(){
  var self = this;
  this.toString = function () { return "View"; };
  
  this.someUIElement;
  
  this.create = function(){
    game.gameModel.getSomething();
  };
  
  this.destroy = function (data){
    //unload assets and vars
  };

};



