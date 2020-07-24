#import flask
from flask import Flask

#Create app
myapp=Flask(__name__)

#index route
@amyapp.route("/")
def home():#display routes
 

@myapp.route("/api/v1.0/precipitation")
def precip():



@myapp.route("/api/v1.0/tobs")
def calc_temps(start_date, end_date):



if __name__=="__main__":
     myap.run(debug=True)