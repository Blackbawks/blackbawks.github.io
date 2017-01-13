library(TurtleGraphics)

fractal_tree <- function(s=200, n=5) {
  if (n <= 1) {
    turtle_forward(s)
    turtle_up()
    turtle_backward(s)
    turtle_down()
  }
  else {
    turtle_forward(s)
    a1 <- runif(1, 10, 60)
    turtle_left(a1)
    fractal_tree(s*runif(1, 0.5, 1), n-1)
    turtle_right(a1)
    a2 <- runif(1, 10, 60)
    turtle_right(a2)
    fractal_tree(s*runif(1, 0.5, 1), n-1)
    turtle_left(a2)
    turtle_up()
    turtle_backward(s)
    turtle_down()
  }
}
set.seed(123)
turtle_init(400, 300, "clip")
turtle_do({
  turtle_up()
  turtle_backward(250)
  turtle_down()
  turtle_col("darkgreen")
  fractal_tree(100, 12)
})

library(tensorflow)
sess = tf$Session()
hello <- tf$constant('Hello, TensorFlow!')
sess$run(hello)