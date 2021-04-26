from django.urls import path
from . import views

urlpatterns = [
    path('', views.jobsAPI),
    path('/getjobs/', views.getJobs),
    path('/getbyid/<str:pk>/', views.getJobById),
]
