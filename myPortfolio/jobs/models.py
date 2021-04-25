from firebase_orm import models

# Create your models here.

class Job(models.Model):
    title = models.CharField(max_length=100)
    startDate = models.DateField()
    description = models.CharField(max_length=200)
    

