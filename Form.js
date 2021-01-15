class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    
   this.option1=createButton("option 1");
   this.option2=createButton("option 2");

   this.option3=createButton("option 3");
   this.option4=createButton("option 4");


  }
  hide(){
   
    this.button.hide();
    this.input.hide();
  }

  display(){
    textSize(50);
fill("yellow");
text("My Quiz Game",250,50);
    
    textSize(30);
fill("black");
text("Question :- Who is the God of thunder in Avangers ;",30,100);


textSize(20);
fill("black");
text(":- Captain America",110,164);


textSize(20);
fill("black");
text(":- thor",557,164);

textSize(20);
fill("black");
text(":- Hulk",110,204);

textSize(20);
fill("black");
text(":- Captain Marvel",557,204);





    this.input.position(230, 360);
    this.button.position(300, 400);
   
    this.option1.position(50,160);
   this.option2.position(500,160);

   this.option3.position(50,200);
   this.option4.position(500,200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();

      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
     
    });

  }
}
