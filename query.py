from kasper import app, db
from kasper.Models import Service, Welcome
from flask_sqlalchemy import SQLAlchemy


# query the db
with app.app_context():
    print(Welcome.query.all())
# w = db.session.execute(db.select(Welcome)).scalars()
# for i in w:
#     print(i.p)
    s = db.session.execute(db.select(Service)).scalars()
    for i in s:
        print(i)
