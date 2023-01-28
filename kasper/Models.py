from kasper import db

# default value of Welcomme Table
h1HelloDefault = "HELLO WORLD!"
h1Default = "WE ARE KASPER,WE MAKE ART."
pDefault = '''Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur
        aliquet quam. Accumsan id imperdiet et, porttitor at sem. Mauris
        blandit aliquet elit, eget tincidunt.'''

# default value of Services Table
srv_default = "Vorem amet intuitive"
descp_default = "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam"


class Welcome(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    h1Hello = db.Column(db.Text, nullable=False, default=h1HelloDefault)
    h1 = db.Column(db.Text, nullable=False, default=h1Default)
    p = db.Column(db.Text, nullable=False, default=pDefault)

    def __repr__(self):
        return f" {self.h1Hello}"


class Service(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    service = db.Column(db.String(100), nullable=False, default=srv_default)
    description = db.Column(db.Text, nullable=False, default=descp_default)

    def __repr__(self):
        return f" {self.service} "


class Portfolio(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False, default='Awesome Image')
    description = db.Column(
        db.String(100), nullable=False, default='paragraphe')
    images = db.Column(db.String(100), nullable=False,
                       default='portfolio-1.png')

    def __repr__(self):
        return f" {self.title} , {self.images} "


class Statistic(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False, default='Award Won')
    calc = db.Column(db.Integer, nullable=False, default=0)

    def __repr__(self):
        return f" {self.title} , {self.calc} "
