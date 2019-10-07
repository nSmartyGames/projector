x = 0;
theta = 0;
function setup()
{
  createCanvas(300,300,WEBGL);
  s = createSlider(0,255,100);
  s.position(10,10);
  bro = loadModel('../assets/me3d.obj');
}
function draw()
{
  background(100);
  //theta++;
  //rotateX(theta*0.1);
  ambientLight(100,0,0);
  //box(100);
  model(bro);
}