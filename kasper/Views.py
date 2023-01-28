from kasper import app, db
from flask import render_template, request
from kasper.Models import Welcome, Service

@app.route("/", methods=['GET','POST'])
def home():
    welc = db.session.execute(db.select(Welcome)).scalars()
    srv1 = db.session.execute(db.select(Service).filter_by(id=1)).one()
    srv2 = db.session.execute(db.select(Service).filter_by(id=2)).one()
    srv3 = db.session.execute(db.select(Service).filter_by(id=3)).one()
    srv4 = db.session.execute(db.select(Service).filter_by(id=4)).one()
    return render_template("home.html", welc=welc,
                           srv1=srv1, srv2=srv2, srv3=srv3, srv4=srv4)
