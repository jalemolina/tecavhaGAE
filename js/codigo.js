function mostrar(obj, n) {
    elem=obj.parentNode;
    ocultartodo(obj);
    alejandron = document.getElementById('oculto' + String(n));
    if(alejandron.style.display  == 'none'){
        alejandron.style.display  = 'block';
    }
}


function ocultartodo(obj) {
    elem=obj.parentNode;
    for(var i = 0; i<10; i++){
        alejandron = document.getElementById('oculto' + String(i));
        alejandron.style.display = 'none';
    }
}


var asignaturas_1 = new Array("---", "Biología", "Biología E Higiene", "Castellano", "Castellano Y Literatura", "Ciencias Naturales", "Ciencias Sociales", "Dibujo", "Dibujo Técnico", "Dibujo Técnico - Cad", "Educación Artística","Educación Artística: Plástica","Educación Artística: Expresión Corporal","Educación Artística: Teatro","Educación Artística: Música", "Educación Cívica", "Educación Física", "Educación Tecnológica", "Físico-Química", "Formación Ética Y Ciudadana", "Geografía", "Historia", "Lengua", "Lengua Extranjera", "Lengua Y Literatura", "Matemática", "Taller", "Taller - Computación", "Taller - Estenografía", "Taller - Laboratorio De Ensayos", "Taller - Mecanografía", "Taller - Oficina Comercial", "Taller - Práctica Contable","Taller: Electricidad", "Taller: Proyecto Tecnológico", "Tecnología")
var asignaturas_2 = new Array("---", "Biología", "Biología E Higiene", "Castellano", "Castellano Y Literatura", "Ciencias Naturales", "Ciencias Sociales", "Dibujo", "Dibujo Técnico", "Dibujo Técnico - Cad", "Educación Artística","Educación Artística: Plástica","Educación Artística: Expresión Corporal","Educación Artística: Teatro","Educación Artística: Música", "Educación Cívica", "Educación Física", "Educación Tecnológica", "Física", "Físico-Química", "Formación Ética Y Ciudadana", "Geografía", "Historia", "Inglés", "Lengua", "Lengua Extranjera", "Lengua Y Literatura", "Matemática", "Sistemas De Informacion", "Taller", "Taller - Computación", "Taller - Estenografía", "Taller - Laboratorio De Ensayos", "Taller - Mecanografía", "Taller - Oficina Comercial", "Taller - Práctica Contable","Taller: Electricidad", "Taller: Proyecto Tecnológico", "Tecnología")
var asignaturas_3 = new Array("---", "Biología", "Castellano", "Castellano Y Literatura", "Ciencias Naturales", "Ciencias Sociales", "Dibujo", "Dibujo Técnico", "Dibujo Técnico - Cad", "Educación Artística","Educación Artística: Plástica","Educación Artística: Expresión Corporal","Educación Artística: Teatro","Educación Artística: Música", "Educación Cívica", "Educación Física", "Educación Tecnológica", "Física", "Físico-Química", "Formación Ética Y Ciudadana", "Geografía", "Historia", "Inglés", "Instrucción Cívica", "Lengua", "Lengua Extranjera", "Lengua Y Literatura", "Matemática", "Química", "Sistemas De Informacion Contable", "Taller", "Taller - Computación", "Taller - Estenografía", "Taller - Laboratorio De Ensayos", "Taller - Mecanografía", "Taller - Oficina Comercial", "Taller - Práctica Contable", "Tecnología")
var asignaturas_4 = new Array("---", "Castellano", "Computación", "Dibujo", "Economía", "E. D. I.", "Educación Cívica", "Educación Física", "Estenografía", "Física", "Física Aplicada", "Geografía", "Historia", "Inglés", "Laboratorio De Aplicaciones I", "Laboratorio De Hardware I", "Laboratorio De Programación I", "Laboratorio De Sistemas Operativos I", "Lengua", "Lengua Extranjera", "Lengua Y Literatura", "Matemática", "Matemática Aplicada", "Mecanografía", "Práctica Contable", "Química", "Tecnología Electrónica", "Tecnologías De Gestión", "Tecnologías De La Información Y La Comunicación I", "Teoría Y Gestión De Las Organizaciones")
var asignaturas_5 = new Array("---", "Análisis Matemático", "Computación", "Contabilidad I", "Cultura Emprendedora", "Dirección Empresaria", "Economía", "E. D. I.", "Educación Física", "Estudio De Productos I", "Geografía", "Geografía Argentina", "Geografía Y Economía Regional", "Historia De La Industria Y El Comercio", "Inglés", "Inglés Técnico", "Instrucción Cívica", "Laboratorio De Aplicaciones II", "Laboratorio De Hardware II", "Laboratorio De Programación II", "Laboratorio De Sistemas Operativos II", "Lengua", "Lengua Extranjera", "Lengua Y Literatura", "Literatura", "Matemática", "Principios Del Derecho Usual", "Procesos Productivos", "Psicología General", "Química", "Seguridad E Higiene", "Sistema Asministrativo Contable", "Sistemas De Información Contable", "Sistemas Digitales I", "Tecnologías De La Información Y La Comunicación II")
var asignaturas_6 = new Array("---", "Bases De Datos I", "Comercialización De Productos Y Sistemas Informáticos", "Computación", "Contabilidad II", "Derecho", "Derecho Comercial Y Administrativo", "E. D. I.", "Educación Física", "Elementos De Economía", "Estadística Y Probabilidad", "Estudio De Productos II", "Formación Ética Y Ciudadana", "Geografía Económica Argentina", "Gestión Financiera Y Cálculo Financiero", "Gestión Organizacional", "Historia De La Cultura E Instituciones Argentinas", "Inglés", "Inglés Técnico", "Laboratorio De Hardware III", "Laboratorio De Programación III", "Laboratorio De Redes", "Laboratorio De Sistemas Operativos III", "Lengua", "Lengua Extranjera", "Lenguajes Artísticos Y Comucacionales", "Matemática Técnica", "Microemprendimiento", "Organización De La Producción I", "Psicología", "Psicología Industrial", "Seguridad Informática", "Sistema Administrativo Contable", "Sistema De Información Contable", "Sistemas Digitales II", "Teoría Y Práctica Impositiva")
var asignaturas_7 = new Array("---", "Álgebra Lineal", "Bases De Datos II", "Computación", "Costos", "Derechos Del Trabajo", "Derecho Social", "Dirección Y Administración De Personal", "Diseo E Implementación De Sistemas Computacionales", "Educación Física", "Inglés Técnico", "Instalación, Mantenimiento Y Reparación De Redes Computacionales", "Instalación, Mantenimiento Y Reparación De Sistemas Computacionales", "Interpretación De Balances", "Investigación Del Mercado", "Investigación Y Análisis De La Micro Y Macro Economía", "Modelos Y Sistemas", "Nociones De Administración Financiera", "Nociones De Auditoría", "Organización De La Producción II", "Política Y Ciudadanía", "Prácticas Profesionalizantes", "Técnica Bancaria Y Seguros", "Técnica De La Comercialización", "Teoría Y Técnica Impositiva")

function cambiar_asignaturas(origen, fin){
   //tomo el valor del select del anio elegido
   var anio;
   anio = document.getElementById(origen).value;
   //miro a ver si el anio está definido
   if (anio > 0) {
       //si estaba definido, entonces coloco las opciones de la asignaturas correspondiente.
       //selecciono el array de asignatura adecuado
       asignaturas=eval("asignaturas_" + anio);
       //calculo el numero de provincias
       num_asignaturas = asignaturas.length;
       //marco el número de asignaturas en el select
       document.getElementById(fin).length = num_asignaturas;
       //para cada provincia del array, la introduzco en el select
       for(i=0;i<num_asignaturas;i++){
          document.getElementById(fin).options[i].value=asignaturas[i];
          document.getElementById(fin).options[i].text=asignaturas[i];
       }
   }else{
       //si no había anio seleccionada, elimino las asignaturas del select
       document.getElementById(fin).length = 1;
       //coloco un guión en la única opción que he dejado
       document.getElementById(fin).options[0].value = "---";
       document.getElementById(fin).options[0].text = "---";
   }
   //marco como seleccionada la opción primera de asignatura
   document.getElementById(fin).options[0].selected = true;
}
