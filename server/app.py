from flask import Flask, make_response, request, jsonify, session
from flask_migrate import Migrate
from flask_cors import CORS
from flask_restful import Api, Resource
from flask_bcrypt import Bcrypt
from model import db, Customer, Product, Order, OrderItem, Favourite, Payment, Review


app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = b'Y\xf1Xz\x00\xad|eQ\x80t \xca\x1a\x10K'
app.json.compact = False

bcrypt = Bcrypt(app)

CORS(app, supports_credentials=True)

migrate = Migrate(app, db)

db.init_app(app)

class Register(Resource):

    @staticmethod
    def post():

        firstname = request.json['firstname']
        lastname = request.json['lastname']
        phone = request.json['phone']
        email = request.json['email']
        password = request.json['password']
        is_admin = request.json['is_admin']

        user = Customer.query.filter_by(email=email).first()

        if user:
            message = {
                "error":"User already exist"
            }
            response = make_response(
                jsonify(message)
            )
            return response
        else:
            hashed_password = bcrypt.generate_password_hash(password)

            new_user = Customer(
                firstname = firstname,
                lastname = lastname,
                phone = phone,
                email = email,
                password = hashed_password,
                is_admin = is_admin
            )

            db.session.add(new_user)
            db.session.commit()

            response = {
                "id":new_user.id,
                "firstname":new_user.firstname,
                "lastname":new_user.lastname,
                "phone":new_user.phone,
                "email":new_user.email,
                "is_admin":new_user.is_admin
            }

            return make_response(
                jsonify(response)
            )

api.add_resource(Register, '/register')


class Login(Resource):

    @staticmethod
    def post():
        email = request.json['email']
        password = request.json['password']

        user_existing = Customer.query.filter_by(email=email).first()

        if user_existing is None:
            message = {
                "error":"Unauthorized"
            }
            response = make_response(
                jsonify(message)
            )
            return response
        
        if not bcrypt.check_password_hash(user_existing.password, password):
            message = {
                "error":"Unauthorized"
            }
            response = make_response(
                jsonify(message)
            )
            return response
        
        session['user_id'] = user_existing.id
        
        response_data = {
            "id":user_existing.id,
            "email":user_existing.email,
            "is_admin":user_existing.is_admin
        }

        response = make_response(
            jsonify(response_data)
        )

        return response
    
api.add_resource(Login, '/login')

if __name__ == '__main__':
    app.run(debug=True)