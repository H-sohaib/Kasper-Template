from kasper import app, db
from kasper.Models import Welcome, Service, Statistic

srv1 = Service(service="srv1")
srv2 = Service(service="srv2", description="test desjcbzpv")


with app.app_context():
    db.drop_all()
    db.create_all()

    # set default hello header
    welc = Welcome()
    db.session.add(welc)
    db.session.commit()

    db.session.add(Service())
    db.session.add(Service(service='photographe'))
    db.session.add(Service(service='Web Developement'))
    db.session.add(Service(service='front-end Developement'))
    db.session.commit()
