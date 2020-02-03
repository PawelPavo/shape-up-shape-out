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
        this.height = height;
        this.width = width;
        this.render()
        this.div.dblclick(() => this.remove());
        this.div.click(() => this.describe());
    }

    render() {
        this.div = $('<div class="shape"></div>')
        this.div.css({
            height: `${this.height}`,
            width: `${this.width}`,
            top: this.randomLocation(this.height),
            left: this.randomLocation(this.width)
        })
        $('#display-area').append(this.div)
    }

    randomLocation(offset) {
        return Math.floor(Math.random() * (600 - offset))
    }

    describe() {
        $('#name-output').val(this.div.attr('id'));
        $('#radius-output').val('N/A')
        $('#height-output').val(this.height)
        $('#width-output').val(this.width)
        $('#area-output').val(this.area = this.height * this.width)
        $('#perm-output').val(this.perm = 2 * this.height + 2 * this.width)
    }

    remove() {
        $(this.div).remove()
        $('#name-output').val('')
        $('#area-output').val('')
        $('#height-output').val('')
        $('#width-output').val('')
        $('#radius-output').val('')
        $('#perm-output').val('')
        $('#triangle-input').val('')
    }

}

class Square extends Shape {
    constructor(height) {
        super(height, height)
        this.div.attr('id', 'square')
    }
    remove() {
        super.remove();
        $('#square-input').val('')
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width)
        this.div.attr('id', 'rectangle')
    }
    remove() {
        super.remove();
        $('#rectangle-input-1').val('')
        $('#rectangle-input-2').val('')
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(radius * 2, radius * 2);
        this.div.attr('id', 'circle')
        this.radius = radius
    }

    describe() {
        super.describe();
        $('#area-output').val(Math.PI * Math.pow(this.radius, 2))
        $('#radius-output').val(this.radius)
        $('#perm-output').val(2 * Math.PI * this.radius)
    }

    remove() {
        super.remove();
        $('#circle-input').val('')
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(height, height)
        this.div.attr('id', 'triangle')
        $('#triangle').css({
            'border-right': `${this.height}px solid transparent`,
            'border-bottom': `${this.width}px solid yellow`
        })
    }

    render() {
        super.render()
        this.div.css({
            height: `0px`,
            width: `0px`,
        })
    }

    describe() {
        super.describe();
        $('#area-output').val((this.height * this.width) / 2)
        $('#perm-output').val(2 * this.height + Math.sqrt(2) * this.height)
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
