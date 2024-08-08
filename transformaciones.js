function escalar(V0,num)//El primer parametro es un arreglo de coordenadas cartecianas el segundo, el porcentaje que se agranda o disminuye 
{
const arreglo1 = [1, 2];
const arreglo2 = [3, 4];

const suma = arreglo1.map((num, index) => num * arreglo2[index]);

console.log(escala); // Resultado: [4, 6]
}

function traslacion(V0,V1)//Los dos parametros son un arreglo de coordenadas cartecianas
{
const arreglo1 = [1, 2];
const arreglo2 = [3, 4];

const suma = arreglo1.map((num, index) => num + arreglo2[index]);

console.log(suma); // Resultado: [4, 6]
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


