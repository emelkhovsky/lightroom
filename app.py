from flask import Flask
from flask import render_template
from flask import redirect
from flask import url_for
app = Flask(__name__)

@app.route("/", methods = ['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route("/presets", methods = ['GET', 'POST'])
def presets():
    return render_template('presets.html')

@app.route("/instructions", methods = ['GET', 'POST'])
def instructions():
    return render_template('instructions.html')

if __name__ == "__main__":
    app.run(debug = True)