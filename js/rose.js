function surface(a, b) {

    var x = a * 100,

        y = b * 100,

        radius = 50,

        x0 = 50,

        y0 = 50;

    if ((x - x0) * (x - x0) + (y - y0) * (y - y0) < radius * radius) {

        // inside the circle

        return {

            x: x,

            y: y

        };

    } else {

        // outside the circle

        return null;

    }

}

if (position = surface(a, b)) {

    context.fillRect(position.x, position.y, 1, 1);

}

var canvas = document.body.appendChild(document.createElement("canvas")),

    context = canvas.getContext("2d"),

    a, b, position;

// Now I'm going to sample the surface at .1 intervals for a and b parameters:

for (a = 0; a < 1; a += .1) {

    for (b = 0; b < 1; b += .1) {

        position = surface(a, b);

        context.fillRect(position.x, position.y, 1, 1);

    }

}