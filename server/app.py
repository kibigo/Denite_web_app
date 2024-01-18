from flask import Flask, make_response, request, jsonify, session
from flask_migrate import Migrate
from flask_cors import CORS
from flask_restful import Api, Resource
from flask_bcrypt import Bcrypt
from model import db, Customer, Product, Order, OrderItem, Favourite, Payment, Review, TopBrands, TopCategory, FeaturedBrands


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
                password = hashed_password
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

class GetProduct(Resource):

    @staticmethod
    def get():
        customer_list = [item.to_dict() for item in Product.query.all()]

        response = make_response(
            jsonify(customer_list)
        )

        return response

api.add_resource(GetProduct, '/products')

class Product_By_Category(Resource):

    @staticmethod
    def get():

        category_given = request.json['category']
        filtered_data = [item.to_dict() for item in Product.query.filter_by(category = category_given).all()]

        response = make_response(
            jsonify(filtered_data)
        )

        return response

api.add_resource(Product_By_Category, '/category')


class Order(Resource):

    @staticmethod
    def get():
        order_list = [item.to_dict() for item in Order.query.all()]
        response = make_response(
            jsonify(order_list)
        )
        return response
    
    @staticmethod
    def post():
        user_id = request.json['user_id']
        total_amount = request.json['total_amount']

        new_order = Order(
            user_id = user_id,
            total_amount = total_amount
        )
        db.session.add(new_order)
        db.session.commit()

        order_data = {
            "id":new_order.id,
            "user_id":new_order.user_id,
            "total_amount": new_order.total_amount,
            "order_date":new_order.order_date
        }

        response = make_response(
            jsonify(order_data)
        )

        return response

api.add_resource(Order, '/orders')


class OrderById(Resource):

    @staticmethod
    def get(id):
        single_order = Order.query.filter_by(id=id).first().to_dict()

        response = make_response(
            jsonify(single_order)
        )

        return response
    
    @staticmethod
    def patch(id):
        single_order = Order.query.filter_by(id=id).first()
        
        for attr in request.form:
            setattr(single_order, attr, request.form[attr])
        
        db.session.add(single_order)
        db.session.commit()

        response_dict = single_order.to_dict()

        response = make_response(
            jsonify(response_dict)
        )

        return response
    
    @staticmethod
    def delete(id):
        data = Order.query.filter_by(id=id).first()

        db.session.delete(data)
        db.session.commit()

        response_data = {
            "message":"Data deleted"
        }
        
        response = make_response(
            jsonify(response_data)
        )

        return response
    
api.add_resource(OrderById, '/orders/<int:id>')


class Topcategory(Resource):

    @staticmethod
    def get():
        item_list = [item.to_dict() for item in TopCategory.query.all()]

        response = make_response(
            jsonify(item_list)
        )
        return response

api.add_resource(Topcategory, '/topcategory')


class Featuredbrands(Resource):

    @staticmethod
    def get():
        item_list = [item.to_dict() for item in FeaturedBrands.query.all()]
        response = make_response(
            jsonify(item_list)
        )

        return response

api.add_resource(Featuredbrands, '/featuredbrands')




if __name__ == '__main__':
    app.run(debug=True)