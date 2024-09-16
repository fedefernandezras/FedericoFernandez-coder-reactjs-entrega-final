const misProductos = [
  {
    id: "1",
    nombre: "Felix Adulto Megamix  15 Kg",
    stock: 7,
    precio: 49999,
    img: "../img/felixadulto.jpg",
    idCat: "gatos",
    det: "Cada porción de Purina Felix es una balanceada combinación que te ayudará a satisfacer las exigencias nutricionales de tu astuto compañero, adicionado con ácidos grasos Omega 6, Vitaminas D y E, una combinación de Minerales y Proteínas. Hecho con ingredientes de la más alta calidad.Los gatos astutos harán de todo para conseguir los alimentos de Felix. Ya sea comida seca, húmeda o bocadillos, cada uno con un sabor nuevo y delicioso.¡Que no te sorprenda que tu gato se vuelva loco por ellos!",
  },
  {
    id: "2",
    nombre: "Dog Chow Adulto Raza Mediana y Grande Carne y Pollo  21 KG",
    stock: 7,
    precio: 43999,
    img: "../img/dogchow1.jpg",
    idCat: "perros",
    det: "PURINA DOG CHOW® Sin Colorantes Adultos Medianos y Grandes ahora con ExtraLife®, una mezcla especial libre de colorantes, con antioxidantes, vitaminas y minerales que ayuda a maximizar la calidad de vida de tu perro, día tras día.",
  },
  {
    id: "3",
    nombre: "Gati Adulto Pescado y Salmon a la Primavera 15 KG",
    stock: 7,
    precio: 29999,
    img: "../img/gatiadulto.jpg",
    idCat: "gatos",
    det: "Inspirado en recetas caseras en una mezcla a la primavera con ingredientes que dan el sabor a pescado, salmón, maíz y un toque de zanahoria y espinaca que a tu gato le dará la nutrición que necesita.Cuidadosamente formulado como un alimento 100% completo y balanceado, contribuye con: vitaminas y minerales esenciales, músculos fuertes y sanos, piel y pelaje saludables, digestión sana, istema inmune Sano.Dale otras ricas recetas para variar su paladar.Con más de 90 años nutriendo mascotas, nuestros expertos y nutricionistas desarrollan recetas exclusivas adaptadas para los gatos, pasando por un riguroso control de calidad.",
  },
  {
    id: "4",
    nombre: "Holliday MV Gatos Urinary 7.5 KG",
    stock: 7,
    precio: 72999,
    img: "../img/hd1.jpg",
    idCat: "gatos",
    det: "Dieta prescripta para gatos con enfermedad de vías urinarias bajas . Esta fórmula está indicada para prevenir la formación de cristales de estruvita o de oxalato de calcio ante factores predisponentes.La manzanilla presenta acción antiinflamatoria , regenerante, calmante, bacteriostática y repitelizante. El condroitin sulfato preserva el epitelio de la vejiga y presenta acción analgésica y antiinflamatoria. Disminuye el riesgo de formación de cálculos gracias a sus bajos niveles de Magnesio y minerales y a su PH controlado.Dieta indicada en casos de: FLUTD. Cistitis. Infecciones urinarias. Situaciones de stress.",
  },
  {
    id: "5",
    nombre: "Holliday MV Perro Renal 10 KG",
    stock: 7,
    precio: 75999,
    img: "../img/hd2.jpg",
    idCat: "perros",
    det: "Dieta Prescripta para perros adultos y gerontes que padecen enfermedad renal crónica.El moderado aporte de proteínas pero de alto valor biológico , es esencial para perros con enfermedades renales y hepáticas. Colabora disminuyendo el riesgo de hiperparatiroidismo secundario con nefrocalcinosis. Detoxificante. Antioxidante. Mejora la hemodinámica renal.El apio colabora con la eliminación de toxinas y disminuye el riesgo de la formación de cálculos renales.Dieta para perros adultos y gerontes indicada para: tratamiento de patologías renales por lesiones anatómicas o funcionales: Glomerulonefritis. Hipercalcemia. Obstrucciones crónicas. Nefrolitiasis. Neoplasias. Idiopáticas. Glomearulopatías congénitas. Amiloidosis congénita.Favorece la función cardíaca y mantiene la masa muscular.  Encefalopatía hepática.",
  },
  {
    id: "6",
    nombre: "Holliday MV Perro Sensibilidad Dietaria 10 KGg",
    stock: 7,
    precio: 82999,
    img: "../img/hd3.jpg",
    idCat: "perros",
    det: "Para dieta prescripta indicada en dermatitis alérgicas e intolerancias alimentarias.La Betaína mejora la digestión de las proteínas facilitando la absorción de partículas proteicas de menor peso molecular. Formulado con proteína de pescado ( novel y con bajo nivel de histamina) e hidratos de carbono con excelente digestibilidad y reducida respuesta antigénica. Ácidos Omega 3 y 6 de acción antiinflamatoria y antioxidante. Colabora en mantener la salud dérmica.Dieta para perros de todas las edades indicada para: Tratamiento de patologías dérmicas: Intolerancias alimenticias. Alergias. Vómitos y/o diarreas debido a una intolerancia alimentaria. En perros sanos con predisposición genética a padecer dermatitis alérgicas. Para mantener piel saludable y manto brilloso.",
  },
  {
    id: "7",
    nombre: "Pro Plan Puppy - Razas Grandes 15kg",
    stock: 7,
    precio: 52999,
    img: "../img/pro-plan-puppy-raza-grande-x-15-kg.jpg",
    idCat: "perros",
    det: "Además de reforzar los sistemas naturales de protección de tu cachorro, está especialmente formulado para satisfacer las necesidades metabólicas específicas basadas en el tamaño de su raza.Los anticuerpos naturales del calostro y otras proteínas de alta calidad que ayudan a extender la protección de la madre durante el primer año de vida del cachorro. Las croquetas más grandes, con alto contenido de proteínas de alta calidad y reducidos niveles de grasa y calorías para satisfacer las necesidades metabólicas únicas de los cachorros de razas grandes.",
  },
  {
    id: "8",
    nombre: "Cat Chow Adulto Pescado Y Pollo  15 Kg",
    stock: 7,
    precio: 12800,
    img: "../img/catchow1.jpg",
    idCat: "gatos",
    det: "El nuevo PURINA® CAT CHOW® ADULTOS DELICIAS DE PESCADO CON DEFENSE PLUS ofrece los nutrientes que tu gato necesita para mantenerse bello y saludable. Contiene Pescado, rico en Omegas 3 & 6, que ayudan a tener una piel y un pelo saludables.Beneficios: ayuda a mantener una visión saludable, a combatir los radicales libres, esencial para la respuesta inmune del organismo, con la Vitamina E, actúa como antioxidante celular, sencial para una piel y pelo sano, y durante la reproducción.",
  },
  {
    id: "9",
    nombre: "Dogui Adultos Con Carne, Pollo, Cereales y Vegetales 21 KG",
    stock: 7,
    precio: 30999,
    img: "../img/dogi1.jpg",
    idCat: "perros",
    det: "Alimento completo y balanceado para perros adultos de todos los tamaños.",
  },
  {
    id: "10",
    nombre:
      "Dogui Adultos Con Carne, Pollo, Cereales y Vegetales  21 KG + 3 Kg GRATIS",
    stock: 7,
    precio: 30999,
    img: "../img/dogi2.jpg",
    idCat: "perros",
    det: "Alimento completo y balanceado para perros adultos de todos los tamaños.",
  },
  {
    id: "11",
    nombre: "Old Prince Gato Adulto Complete Care  7,5 KG",
    stock: 7,
    precio: 39999,
    img: "../img/oldprice.jpg",
    idCat: "gatos",
    det: "Alimento balanceado para gatos adultos de 1 a 7 años de edad.Colabora con el control del peso y la prevención de formación de bolas de pelo, su aporte de aceites esenciales Omega 3 y 6 fortalece el sistema inmune y estimula la salud de la piel y el pelaje de tu gato, incluye también taurina, un aminoácido que previene problemas cardiovasculares.",
  },
  {
    id: "12",
    nombre: "Pedrigree Adulto Carne, Pollo y Cereales 21 Kg",
    stock: 7,
    precio: 39999,
    img: "../img/pedi1.jpg",
    idCat: "perros",
    det: "Pedigree® Adulto Etapa 2 es alimento completo y balanceado. Elaborado con fibras naturales y proteínas de alta calidad. Para acompañar a tu perro en su etapa adulta, cubriendo las 4 necesidades universales: sistema autoinmune, salud oral optima,sistemadigestivo saludable y una salud cutanea insuperable",
  },
  {
    id: "13",
    nombre: "Pedrigree Cachorro 21 Kg",
    stock: 7,
    precio: 43999,
    img: "../img/pedi2.jpg",
    idCat: "perros",
    det: "Pedigree® Adulto Etapa 2 es alimento completo y balanceado. Elaborado con fibras naturales y proteínas de alta calidad. Para acompañar a tu perro en su etapa adulta, cubriendo las 4 necesidades universales: sistema autoinmune, salud oral optima,sistemadigestivo saludable y una salud cutanea insuperable",
  },
  {
    id: "14",
    nombre: "Sieger Criadores 20 Kg",
    stock: 7,
    precio: 58499,
    img: "../img/sieger.jpg",
    idCat: "perros",
    det: "Criadores posee una fórmula exclusiva que brinda una adecuada alimentación durante todas las etapas madurativas de la vida del perro. Si en tu hogar tenés mascotas de edades diversas, Sieger Criadores cuenta con la practicidad de poder ser ofrecida a todos para que coman del mismo producto. ",
  },
  {
    id: "15",
    nombre: "Unik Premium Gato Adulto  7,5 KG",
    stock: 7,
    precio: 45000,
    img: "../img/unik1.jpg",
    idCat: "gatos",
    det: "Ünik Alimento Premium para gato adulto cubre las necesidades del gato a partir del año de edad manteniendo su peso ideal y regulando las bolas de pelo, ofreciendo una nutrición específica y promoviendo su salud óptima y bienestar general.",
  },
  {
    id: "16",
    nombre: "Vital Can Complete Gato Senior 7,5 KG",
    stock: 7,
    precio: 30000,
    img: "../img/vital1.jpg",
    idCat: "gatos",
    det: "Indicado para gatos mayores a 7 años.Una dieta pensada para una vida plena contribuye con la protección cardíaca, renal y articular y aporta un complejo antiage",
  },
  {
    id: "17",
    nombre: "Vital Can Complete Cachorro Raza Mediana y Grande 20 KG",
    stock: 7,
    precio: 38000,
    img: "../img/vital2.jpg",
    idCat: "gatos",
    det: "Alimento para cachorros hasta 18 meses. Calidad Standar.",
  },
  {
    id: "18",
    nombre: "Whiskas Adulto Pescado 10 KG",
    stock: 7,
    precio: 36000,
    img: "../img/Wadulto.jpg",
    idCat: "gatos",
    det: "Es ideal para satisfacer las diferentes necesidades nutricionales a lo largo de toda su vida adulta: • CON VITAMINA A para una visión saludable • CON OMEGA 6 Y ZINC, ácidos grasos que ayudan a mantener su piel y pelo sanos • CON MINERALES CONTROLADOS que ayudan a mantener la salud de su tracto urinario • EXCLUSIVAS CROQUETAS con relleno cremoso para satisfacer a su exigente paladar. • ACCIÓN ANTIOXIDANTE, con Vitamina E para ayudar a proteger sus células contra la oxidación • ÓPTIMA NUTRICIÓN proporcionándole todos los nutrientes y energía necesarios para explorar el mundo.",
  },
  {
    id: "19",
    nombre: "Vital Can Therapy Gato Hypoallergenic C.  2 KG",
    stock: 7,
    precio: 20000,
    img: "../img/vital3.jpg",
    idCat: "gatos",
    det: "Vitalcan Therapy Feline Hypoallergenic Care es un alimento completo de prescripción para gatos de todas las edades que presentan alergia e intolerancia alimentaria con manifestaciones digestivas y/o cutáneas. Este alimento ha sido elaborado con proteínas hidrolizadas de bajo peso molecular y carbohidratos especialmente seleccionados para colaborar con el tratamiento de estas patologías.",
  },
  {
    id: "20",
    nombre: "Vital Can Therapy Perro Mobility Aid  15 KG",
    stock: 7,
    precio: 73200,
    img: "../img/vital4.jpg",
    idCat: "perros",
    det: "Vitalcan Therapy Canine Mobility Aid es un alimento de prescripción formulado con nutracéuticos de efecto antiinflamatorio, condroprotectores que favorecen la recuperación del cartílago articular y moderados niveles de calorías que contribuyen a prevenir el sobrepeso",
  },
  {
    id: "21",
    nombre: "Transportadora Voyageur XL 68x47x43 CM",
    stock: 7,
    precio: 36940,
    img: "../img/tv.jpg",
    idCat: "accesorios",
    det: "La línea de transportadoras Voyageur es la solución ideal para cubrir las necesidades de transporte de su mascota. Estas transportadoras son resistentes, de alta durabilidad y seguras, lo que las hace ideales para transportar a su mascota en auto, tren e inclusive en avión. ",
  },
  {
    id: "22",
    nombre: "Comedero Plastico Con Bowl Huella",
    stock: 7,
    precio: 36940,
    img: "../img/comedorplastico.jpg",
    idCat: "accesorios",
    det: "Comedero plastico con bowl huella",
  },
  {
    id: "23",
    nombre: "Cepillo Doble Con Cerda Mediano 20 CM",
    stock: 7,
    precio: 36940,
    img: "../img/cepillo1.jpg",
    idCat: "accesorios",
    det: "Práctico cepillo con doble función: desenreda, alisa y da brillo",
  },
  {
    id: "24",
    nombre: "Garra Coral 50 CM",
    stock: 7,
    precio: 36940,
    img: "../img/gc.jpg",
    idCat: "accesorios",
    det: "Cucha para gatos",
  },
  {
    id: "25",
    nombre: "Cucha Térmica Petmode XS hasta 10 KG 59x46x45 CM",
    stock: 7,
    precio: 49999,
    img: "../img/cperro.jpg",
    idCat: "accesorios",
    det: "Cucha para perros",
  },
  {
    id: "26",
    nombre: "Cat Toy Esfera",
    stock: 7,
    precio: 2100,
    img: "../img/cate.jpg",
    idCat: "accesorios",
    det: "Las Cañitas Cancat están diseñadas para despertar su instinto de cazador y son ideales para crear el vínculo de juego entre los humanos y sus mascotas.",
  },
  {
    id: "27",
    nombre: "Old Prince Premium Perro Adulto Pollo y Carne  20Kg",
    stock: 7,
    precio: 38200,
    img: "../img/opperro.jpg",
    idCat: "perros",
    det: "Old Prince Adultos Original Recipe es un Alimento Premium para perros adultos de todas las razas con delicioso sabor a carne.",
  },
  {
    id: "28",
    nombre: "Old Prince Gato Adulto Premium  7,5 KG",
    stock: 7,
    precio: 24367,
    img: "../img/opgpremium.jpg",
    idCat: "gatos",
    det: "La nueva línea para gatos Old Prince Premium es el inicio de gama para una alimentación de excelencia para tu felino.",
  },
  {
    id: "29",
    nombre: "Old Prince Gato Adulto Urinary Care x 7,5 KG",
    stock: 7,
    precio: 36400,
    img: "../img/opuri.jpg",
    idCat: "gatos",
    det: "Alimento para gatos adultos con tendencia a contraer afecciones en su sistema urinario. ",
  },
  {
    id: "30",
    nombre: "Bocaditos Finos de Carne Pollo Chocolate Golocan  500 GR",
    stock: 7,
    precio: 6580,
    img: "../img/bfinos.jpg",
    idCat: "perros",
    det: "Sabroso bocadito húmedo.",
  },
]

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos)
    }, 100)
  })
}

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = misProductos.find((item) => item.id === id)
      resolve(producto);
    }, 100)
  })
}

export const getProductosPorCategorias = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = misProductos.filter(
        (item) => item.idCat === idCategoria
      );
      resolve(producto)
    }, 100)
  })
}
