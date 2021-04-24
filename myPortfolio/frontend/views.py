from django.shortcuts import render
import pyrebase
from .apiKeys import FirebaseConfig

# Firebase config 

config={
    'apiKey': FirebaseConfig['apiKey'],
    'authDomain': FirebaseConfig['authDomain'],
    'databaseURL': FirebaseConfig['databaseURL'],
    'projectId': FirebaseConfig['projectId'],
    'storageBucket': FirebaseConfig['storageBucket'],
    'messagingSenderId': FirebaseConfig['messagingSenderId'],
    'appId': FirebaseConfig['appId']
}
firebase=pyrebase.initialize_app(config)
authe = firebase.auth()
database=firebase.database()
# Create your views here.

def index(request):
    return render(request, 'frontend/index.html',)