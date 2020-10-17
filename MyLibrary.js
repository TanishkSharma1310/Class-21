function istouching(p1,p2){
    p1.x = World.mouseX;
    p1.y = World.mouseY;
    if(Math.abs(p2.x-p1.x)<=((p1.width/2) +(p2.width/2))
    && Math.abs(p2.y-p1.y)<=((p1.height/2) +(p2.height/2)))
    {
      return true;
    }
    
    else
    {
  
      return false;
    }
  
  }