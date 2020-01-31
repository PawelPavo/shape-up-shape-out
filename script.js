const maxArea = 600;
function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min));
}

$('#start-btn').click(() => {
    $('.side-bar').css('width', '350px')
    $('#display-area').css('height', '600px')
});
$('#close-btn').click(() => {
    $('.side-bar').css('width', '0px')
    $('#display-area').css('height', '0px')

});


class Shape {
    constructor(height, width) {
        this.div = height;
        this.div = width;
        this.height = height
        this.width = width
        this.updateLocation();
    }
    updateLocation() {
        let locationX = randomVal(this.width, maxArea)
        let locationY = randomVal(this.height, maxArea)
        this.div = $('.shape').css({
            'left': `${locationX}px`,
            'top': `${locationY}px`,
        })
    }
}

class Square extends Shape {
    constructor(height) {
        super(height, height)
        this.div = $('#display-area').append('<div class="shape" id="square"></div>')
        this.width = $('#square').css({
            'width': `${height}px`,
            'height': `${height}px`
        })
        this.div = $('#square').dblclick(() => {
            $('#name-output').val('Square')
            $('#area-output').val(height * height)
            $('#height-output').val(height)
            $('#width-output').val(height)
            $('#radius-output').val('N/A')
            $('#perm-output').val(height * 4)
        })
    }
}
class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width);
        this.div = $('#display-area').append('<div class="shape" id="rectangle"></div>')
        this.width = $('#rectangle').css({
            'height': `${height}px`,
            'width': `${width}px`
        })
        this.div = $('#rectangle').dblclick(() => {
            $('#name-output').val('Rectangle')
            $('#area-output').val(height * width)
            $('#height-output').val(height)
            $('#width-output').val(width)
            $('#radius-output').val('N/A')
            $('#perm-output').val((height * 2) + (width * 2))
        })
    }
}
class Circle extends Shape {
    constructor(radius) {
        super(radius*2, radius*2);
        this.radius = radius
        this.div = $('#display-area').append('<div class="shape" id="circle"></div>')
        this.width = $('#circle').css({
            'width': `${this.radius * 2}px`,
            'height': `${this.radius * 2}px`
        })
        this.div = $('#circle').dblclick(() => {
            $('#name-output').val('Circle')
            $('#area-output').val(3.14 * (this.radius * this.radius))
            $('#height-output').val('N/A')
            $('#width-output').val('N/A')
            $('#radius-output').val(this.radius)
            $('#perm-output').val(2 * 3.14 * this.radius)
        })
    }
}
class Triangle extends Shape {
    constructor(height) {
        super(height, height)
        this.div = $('#display-area').append('<div class="shape" id="triangle"></div>')
        this.right = $('#triangle').css({
            'border-right': `${height}px solid transparent`,
        })
        this.bottom = $('#triangle').css({
            'border-bottom': `${height}px solid yellow`
        })
        this.div = $('#triangle').dblclick(() => {
            $('#name-output').val('Triangle')
            $('#area-output').val((height * height) / 2)
            $('#height-output').val(height)
            $('#width-output').val(height)
            $('#radius-output').val('N/A')
            let perm = ((Math.sqrt(2 * (Math.pow(height, 2)))) + (height * 2))
            $('#perm-output').val(perm)
        })
    }
}

$('#square-btn').click(() => {
    let squareHeight = $('#square-input').val()
    new Square(squareHeight);
});

$('#rectangle-btn').click(() => {
    let rectangleHeight = $('#rectangle-input-1').val()
    let rectangleWidth = $('#rectangle-input-2').val()
    new Rectangle(rectangleHeight, rectangleWidth);
});

$('#circle-btn').click(() => {
    let circleHeight = $('#circle-input').val()
    new Circle(circleHeight);
});

$('#triangle-btn').click(() => {
    let triangleHeight = $('#triangle-input').val()
    new Triangle(triangleHeight)
});