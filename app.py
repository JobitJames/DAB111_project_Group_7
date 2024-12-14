from flask import Flask, render_template, jsonify
import credentials
import sqlite3

app = Flask(__name__, static_folder='static')

def get_db_connection():
    conn = sqlite3.connect('Canada_climatedataset.db') 
    conn.row_factory = sqlite3.Row
    return conn

@app.route("/")
def home():
    return render_template("home.html") 

@app.route('/get_api_key')
def get_api_key():
    return jsonify({"api_key": credentials.weather_api_key})

@app.route("/about")
def about():
    return render_template("about.html") 

@app.route("/data")
def data():

    conn = get_db_connection()
    rows = conn.execute('SELECT * FROM ClimateStations').fetchall()
    conn.close()
    return render_template('data.html', data=rows)

@app.route("/team")
def team():
    return render_template("team.html") 

if __name__ == "__main__":
    app.run(debug=True)
