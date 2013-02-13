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


var asignaturas_1=new Array("---","Lengua","Lengua extranjera","Matemática","Geografía","Historia","Biología","Formación ética y ciudadana","Educación física","Educación Artística","Educación Artística: Plástica","Educación Artística: Expresión Corporal","Educación Artística: Teatro","Educación Artística: Música","Educación Tecnológica","Dibujo Técnico - Cad","Taller","Taller: Electricidad","Taller: Proyecto Tecnológico")
var asignaturas_2=new Array("---","Lengua","Lengua extranjera","Matemática","Geografía","Historia","Biología","Físico-Química","Formación ética y ciudadana","Educación física","Educación Artística","Educación Artística: Plástica","Educación Artística: Expresión Corporal","Educación Artística: Teatro","Educación Artística: Música","Educación Tecnológica","Dibujo Técnico - Cad","Taller","Taller: Electricidad","Taller: Proyecto Tecnológico")
var asignaturas_3=new Array("---","Lengua","Lengua extranjera","Matemática","Geografía","Historia","Física","Química","Formación ética y ciudadana","Educación física","Educación Artística","Educación Artística: Plástica","Educación Artística: Expresión Corporal","Educación Artística: Teatro","Educación Artística: Música","Educación Tecnológica","Dibujo Técnico - Cad","Taller","Taller: Oficina Comercial","Taller: Computación")
var asignaturas_4=new Array("---","Lengua","Inglés","Historia","Educación física","Economía","Matemática aplicada","Física aplicada","Tecnologías de la información y la comunicación I","Tecnología electrónica","Laboratorio de programación I","Laboratorio de hardware I","Laboratorio de sistemas operativos I","Laboratorio de aplicaciones I")
var asignaturas_5=new Array("---","Lengua","Inglés","Educación física","Geografía y economía regional","Análisis matemático","Cultura emprendedora","Sistemas digitales I","Tecnologías de la información y la comunicación II","Seguridad e higiene","Laboratorio de programación II","Laboratorio de hardware II","Laboratorio de sistemas operativos II","Laboratorio de aplicaciones II")
var asignaturas_6=new Array("---","Lengua","Inglés","Educación física","Gestión organizacional","Estadística y probabilidad","Sistemas digitales II","Bases de datos I","Seguridad informática","Comercialización de productos y sistemas informáticos","Laboratorio de programación III","Laboratorio de hardware III","Laboratorio de sistemas operativos III","Laboratorio de redes")
var asignaturas_7=new Array("---","Política y ciudadanía","Educación física","Bases de datos II","Álgebra lineal","Modelos y sistemas","Derechos del trabajo","Prácticas profesionalizantes","Diseo e implementación de sistemas computacionales","Instalación, mantenimiento y reparación de sistemas computacionales","Instalación, mantenimiento y reparación de redes computacionales")


function cambiar_asignaturas(origen, fin){
   //tomo el valor del select del anio elegido
   var anio;
   anio = document.getElementById(origen).value;
   //miro a ver si el anio está definido
   if (anio > 0) {
       //si estaba definido, entonces coloco las opciones de la asignatura correspondiente.
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
