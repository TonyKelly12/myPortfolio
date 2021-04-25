from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


cred = credentials.Certificate(r"C:\Users\Tony\Documents\Repos\Python\Python_Portfolio\my-portfolio-admin-key.json")
jobs_app = firebase_admin.initialize_app(cred, name='jobs')
db = firestore.client()

# Create your views here.

@api_view(['GET'])
def jobsAPI(request):
    api_urls = {
        'Get All Jobs' : '/getjobs/',
        'Get Job By ID' : '/byid/',
        'Update Job' : '/update/',
        "Delete Job" : '/delete/'
    }
    return Response(api_urls)

@api_view(["GET"])
def getJobs(request):
    result = db.collection('jobs').document('qb4tGM8xxm7M1umhPC2d').get().to_dict()
    data = result
    print(data)
    return Response(result) 