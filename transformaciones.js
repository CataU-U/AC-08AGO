function escalar(V0, porcentaje) {
    // Convertir el porcentaje a un factor de escala
    const factor = 1 + (porcentaje / 100);
    
    // Escalar cada coordenada en el arreglo V0
    const resultado = V0.map(coord => coord * factor);
    
    return resultado;
}

function trasladar(coordenadas, nuevaPosicion) {
    // Asegurarse de que ambos arreglos tengan la misma longitud
    if (coordenadas.length !== nuevaPosicion.length) {
        throw new Error("Los arreglos deben tener la misma longitud.");
    }

    // Trasladar cada coordenada sumando las correspondientes
    const resultado = coordenadas.map((coord, index) => coord + nuevaPosicion[index]);
    
    return resultado;
}

function conARec(x, y) {
    const r = Math.sqrt(x * x + y * y);
    const theta = Math.atan2(y, x) * (180 / Math.PI); // Convertir a grados
    return [r.toFixed(2), theta.toFixed(2)]; // Devolver un arreglo con R y θ
}

function rotacion(arreglo1, angulo) {
    const [r, theta] = conARec(arreglo1[0], arreglo1[1]);
    const nuevoTheta = (parseFloat(theta) + angulo) % 360; // Asegurarse de que esté en el rango [0, 360)
    return [r, nuevoTheta.toFixed(2)];
}

function convertirACartesianas(arreglo1, angulo) {
    const [r, theta] = rotacion(arreglo1, angulo);
    
    // Convertir de coordenadas polares a cartesianas
    const x = r * Math.cos(theta * (Math.PI / 180)); // Convertir θ a radianes
    const y = r * Math.sin(theta * (Math.PI / 180)); // Convertir θ a radianes

    return { x: x.toFixed(2), y: y.toFixed(2) }; // Devolver un objeto con las coordenadas cartesianas
}
