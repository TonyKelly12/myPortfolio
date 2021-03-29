from django.db import models

# Create your models here.
class Appointment(models.Model):
    title = models.CharField(max_length=100)
    date = models.DateField()
    description = models.CharField(max_length=200)
    email = models.EmailField(max_length=100, default='email@email.com')
    created_at = models.DateTimeField(auto_now_add=True)
