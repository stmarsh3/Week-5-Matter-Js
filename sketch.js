const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;
const Constraint = Matter.Constraint;



const drawBody = Helpers.drawBody;



let engine;



let rect01;
// let quad01;
// let quad01a;
let quad05;
let quad05a;

// let p1;
// let p2;

let ground;
let wallleft;
let wallright;



//CODE START
function setup() {
  createCanvas(600, 600);


  // create an engine
  engine = Engine.create();


  // create rect01
  rect01 = Bodies.rectangle(225, 105, 100, 100);


  // create quad01 as first half of triangle
  quad01 = Bodies.trapezoid(100, 105, 80, 80, 1);
  // create quad01a as second half of triangle
  quad01a = Bodies.trapezoid(100, 105, 80, 80, 1);


  // create quad05 as first half of triangle
  quad05 = Bodies.trapezoid(100, 105, 80, 80, 1);
  // create quad05 as second half of triangle
  quad05a = Bodies.trapezoid(100, 105, 80, 80, 1);



//FOR THE GROUND AND WALLS
  wallleft = Bodies.rectangle(0, 0, 10, 2000, {
    isStatic: true
  });
  wallright = Bodies.rectangle(600, 0, 10, 2000, {
    isStatic: true
  });
  ground = Bodies.rectangle(400, 600, 1000, 10, {
    isStatic: true, angle: Math.PI * 0.00

  });



  // add all of the bodies to the world
  World.add(engine.world, [wallleft, wallright, rect01, quad01, quad01a, quad05, quad05a, ground]);


  //MOUSE
  let mouse = Mouse.create(canvas.elt);
  let mouseParams = {
    mouse: mouse,
    constraint: { stiffness: 0.05, angularStiffness: 0 }
  }
  mouseConstraint = MouseConstraint.create(engine, mouseParams);
  mouseConstraint.mouse.pixelRatio = pixelDensity();
  World.add(engine.world, mouseConstraint);



  // run the engine
  Engine.run(engine);
}


    // var quad01 = new Particle(230, 100, 10);
    // var quad01a = new Particle(200, 150, 10);
    // particles.push(quad01);
    // particles.push(quad01a);
    //
    //
    // var options = {
    //   bodyA: quad01.body,
    //   bodyB: quad01a.body,
    //   length: 50,
    //   siffness: 0.4
    //
    //
    // }
    // var constraint = Constraint.create(options);
    // World.add(world, constraint);


//DRAW IN THE FUNCTIONS
function draw() {
  background(0);

    // for (var i = 0; i < particles.length; i++)
    //
    // particles[i].show();



  fill(255);
  drawBody(rect01);
  drawBody(quad01);
  drawBody(quad01a);
  drawBody(quad05);
  drawBody(quad05a);


  fill(128);
  drawBody(ground);
  drawBody(wallleft);
  drawBody(wallright);
}
