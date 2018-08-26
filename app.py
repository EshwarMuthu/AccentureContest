from flask import Flask, render_template, make_response
import numpy
import json
import urllib
from time import time
import random
import reloadex
from importlib import reload
import numpy as np
import pandas as pd
from keras.models import Sequential
from keras.models import load_model
from keras.layers import Dense
from keras.layers import LSTM
from keras.layers import Dropout
from sklearn.externals import joblib

app = Flask(__name__)



numPoints=2000
xs=numpy.arange(numPoints)
ys=numpy.sin(3.14159*xs*10/numPoints) #this is our data
# data=urllib.urlopen("https://api.thingspeak.com/channels/547770/feeds.json?api_key=I38L79OYGZZ954RQ&results=200")
# fulldata=data.read()

lunaglobal = 0

modeldata = [200, 200, 200, 200, 200, 200, 200, 200, 200, 200]
#predictions
#vi =[0]
model1 = load_model('model/model1.h5')
model2 = load_model('model/model2.h5')
predicted1 = [[200]]
scaler1 = joblib.load('model/scaler1.pkl')
scaler2 = joblib.load('model/scaler2.pkl')




@app.route('/mydata')
def live_data():
    # Create a PHP array and echo it as JSON
    reload(reloadex)
    y=reloadex.skills()
    if y == 1111:
        y1 = int(200 * random.uniform(0.1, 1.9))
    if y == 200:
        y1 = int(200 * random.uniform(0.9, 1.1))
    if y == 0:
        y1 = int(0*random.uniform(0.9, 1.1))
    data = [time() * 1000, y1]
    response = make_response(json.dumps(data))
    response.content_type = 'application/json'
    # change
    #vi.append(1)
    del modeldata[0]
    modeldata.append(y1)
    modeldata1 = np.array(modeldata)
    modeldata1 = scaler1.transform(modeldata1.reshape(-1, 1))
    modeldata1 = np.reshape(modeldata1.reshape(-1), (1, 10, 1))
    # if len(vi) > 10 :
    #     predicted1 = model.predict(modeldata1)
    #     vi = [0]
    if y == 1111:
        predicted1 = model1.predict(modeldata1)
        predicted1 = predicted1[0][0]
        print(predicted1)
        predicted1 = round(predicted1)
        if predicted1 == 1:
            global lunaglobal
            lunaglobal = 1
            print("fault detected")
            reloadex.update()

        return response
    if y == 200:
        predicted1 = model1.predict(modeldata1)
        predicted1 = predicted1[0][0]
        print(predicted1)
        predicted1 = round(predicted1)
        return response
    if y == 0:
        return response


@app.route('/mydata2')
def live_data2():
    # Create a PHP array and echo it as JSON
    reload(reloadex)
    y = reloadex.skills2()
    data2 = [time() * 1000, int(y*random.uniform(0.9,1.1))]
    response2 = make_response(json.dumps(data2))
    response2.content_type = 'application/json'
    return response2


@app.route('/mydata3')
def live_data3():
    # Create a PHP array and echo it as JSON
    reload(reloadex)
    y = reloadex.skills3()
    data3 = [time() * 1000, int(y*random.uniform(0.9,1.1))]
    response3 = make_response(json.dumps(data3))
    response3.content_type = 'application/json'
    return response3


@app.route('/mydata4')
def live_data4():
    # Create a PHP array and echo it as JSON
    reload(reloadex)
    y = reloadex.skills4()
    data4 = [time() * 1000, int(y*random.uniform(0.9,1.1))]
    response4 = make_response(json.dumps(data4))
    response4.content_type = 'application/json'
    return response4


@app.route('/mydata5')
def live_data5():
    # Create a PHP array and echo it as JSON
    reload(reloadex)
    y = reloadex.skills5()
    data5 = [time() * 1000, int(y*random.uniform(0.9,1.1))]
    response5 = make_response(json.dumps(data5))
    response5.content_type = 'application/json'
    return response5



@app.route('/homepage')
def hello_world():
	return render_template("homepage.html", lunaglobal=lunaglobal)


@app.route('/bill')
def bill(chartID = 'chart_ID', chart_type = 'line', chart_height = 500):
	dataset=[1296.2,
 1198.1,
 1631.8,
 909.1,
 768.7,
 1445.6,
 1534.2,
 1619.5,
 1561.6,
 1535.5,
 1226.1]

	chart = {"renderTo": chartID, "type": chart_type, "height": chart_height,}
	series = [{"name": 'Label1', "data": dataset}] #instead of data dataset variable must come.
	title = {"text": 'Bill prediction'}
	xAxis = {"type": "minute", "title":{"text":"Time"}}
	yAxis = {"title": {"text": 'Cost in Rs.'}}
	return render_template('bill.html', chartID=chartID, chart=chart, series=series, title=title, xAxis=xAxis, yAxis=yAxis, dataset=dataset[len(dataset)-1])


@app.route('/remote')
def rem():
    reload(reloadex)
    y1=reloadex.skills()
    y2=reloadex.skills2()
    y3=reloadex.skills3()
    y4=reloadex.skills4()
    y5=reloadex.skills5()
    return render_template("remote.html", y1=y1, y2=y2, y3=y3, y4=y4, y5=y5)


@app.route('/sch')
def sch():
    reload(reloadex)
    y1 = reloadex.skills()
    y2 = reloadex.skills2()
    y3 = reloadex.skills3()
    y4 = reloadex.skills4()
    y5 = reloadex.skills5()
    return render_template("sch.html", y1=y1, y2=y2, y3=y3, y4=y4, y5=y5)

@app.route('/fault')
def fault():
    return render_template("fault.html", lunaglobal=lunaglobal)

if __name__ == '__main__':
   app.run( host='localhost', port=80)
