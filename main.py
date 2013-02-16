import cgi
import os
import math
#import datetime
from google.appengine.api import users
from google.appengine.ext.webapp import template
from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app
from google.appengine.ext import db


class Preceptor(db.Model):
    nombre = db.StringProperty(required=True, multiline=False)
    apellido = db.StringProperty(required=True, multiline=False)
    dni = db.IntegerProperty()
    email = db.EmailProperty(required=True)


class Alumno(db.Model):
    nombre = db.StringProperty(required=True, multiline=False)
    apellido = db.StringProperty(required=True, multiline=False)
    dni = db.IntegerProperty(required=True)
    curso = db.IntegerProperty(required=True)
    division = db.StringProperty(required=True)
    asignatura = db.StringProperty(required=True, multiline=False)
    examen = db.StringProperty(required=True,
                                multiline=False,
                                choices=set(["LIBRES",
                                            "PREVIOS",
                                            "EQUIVALENCIAS",
                                            "COMPLEMENTARIOS",
                                            "REGULARES"]))
    fecha_insc = db.DateTimeProperty(auto_now_add=True)
    inscripto_por = db.UserProperty(required=True)


class MainPage(webapp.RequestHandler):
    def get(self):
        if users.get_current_user():
            estado = "Salir"
            diracceso = users.create_logout_url(self.request.uri)
        else:
            estado = "Acceder"
            diracceso = users.create_login_url(self.request.uri)
        template_values = {
                            'usuario': users.get_current_user(),
                            'estado': estado,
                            'diracceso': diracceso,
            }
        path = os.path.join(os.path.dirname(__file__), "index.html")
        self.response.out.write(template.render(path, template_values))


class Preceptores(webapp.RequestHandler):
    def get(self):
        if users.get_current_user():
            estado = "Salir"
            diracceso = users.create_logout_url('/')
            plantilla = "preceptores.html"
        else:
            estado = "Acceder"
            diracceso = users.create_login_url('/')
            plantilla = "error.html"
        contenido = ""
        valores_plantilla = {
                            'usuario': users.get_current_user(),
                            'estado': estado,
                            'diracceso': diracceso,
            }
        valores_plantilla['contenido'] = contenido
        path = os.path.join(os.path.dirname(__file__), plantilla)
        self.response.out.write(template.render(path, valores_plantilla))


class Inscribir(webapp.RequestHandler):
    def post(self):
        alumno = Alumno(nombre=cgi.escape(self.request.get('nombre')),
                        apellido=cgi.escape(self.request.get('apellido')),
                        dni=int(cgi.escape(self.request.get('dni'))),
                        curso=int(cgi.escape(self.request.get('curso'))),
                        division=cgi.escape(self.request.get('division')),
                        examen=cgi.escape(self.request.get('examen')),
                        asignatura=cgi.escape(self.request.get('asignatura')),
                        inscripto_por=users.get_current_user())
        alumno.put()
        self.redirect('/preceptores#1')


class ActaVolante(webapp.RequestHandler):
    def post(self):
        examenA = cgi.escape(self.request.get('examen_acta'))
        cursoA = int(cgi.escape(self.request.get('curso_acta')))
        asignaturaA = cgi.escape(self.request.get('asignatura_acta'))

        def Uno():
            return 'Primer'

        def Dos():
            return 'Segundo'

        def Tres():
            return 'Tercer'

        def Cuatro():
            return 'Cuarto'

        def Cinco():
            return 'Quinto'

        def Seis():
            return 'Sexto'

        def Siete():
            return 'Septimo'

        cursoT = {1: Uno,
                2: Dos,
                3: Tres,
                4: Cuatro,
                5: Cinco,
                6: Seis,
                7: Siete}

        Alumnos_consulta = Alumno.all()
        Alumnos_consulta.filter("examen =", examenA)
        Alumnos_consulta.filter("curso =", cursoA)
        Alumnos_consulta.filter("asignatura =", asignaturaA)
        Alumnos_consulta.order("apellido")
        Alumnos = Alumnos_consulta.fetch(300)

        cant = len(Alumnos)
        cantL = range(int(math.ceil(cant/30.0))*30 - cant)

        valores_plantilla = {'Alumnos': Alumnos,
                                'examen': examenA,
                                'asignatura': asignaturaA,
                                'curso': cursoT[cursoA](),
                                'cant': cant,
                                'cantL': cantL,
                                'num': len(Alumnos)}

        path = os.path.join(os.path.dirname(__file__), "actavolante.html")
        self.response.out.write(template.render(path, valores_plantilla))


class ListaActas(webapp.RequestHandler):
    def get(self):
        Alumnos_consulta = Alumno.all()
        Alumnos_consulta.order("examen")
        Alumnos_consulta.order("curso")
        Alumnos_consulta.order("asignatura")
        Lista = []
        Temp = {"examen": "---", "curso": 0, "asignatura": "---"}
        for A in Alumnos_consulta:
            if A.examen != Temp["examen"] or A.curso != Temp["curso"] \
            or A.asignatura != Temp["asignatura"]:
                Lista.append(A)
                Temp["examen"] = A.examen
                Temp["curso"] = A.curso
                Temp["asignatura"] = A.asignatura

        valores_plantilla = {'Lista': Lista}

        path = os.path.join(os.path.dirname(__file__), "listaactas.html")
        self.response.out.write(template.render(path, valores_plantilla))

application = webapp.WSGIApplication(
                                     [('/', MainPage),
                                     ('/preceptores', Preceptores),
                                     ('/inscribir', Inscribir),
                                     ('/listaactas', ListaActas),
                                     ('/actavolante', ActaVolante)
                                      ],
                                     debug=True)


def main():
    run_wsgi_app(application)

if __name__ == "__main__":
    main()
