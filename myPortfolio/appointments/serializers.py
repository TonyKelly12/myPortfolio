from rest_framework import serializers
from appointments.models import Appointment


# Meeting Serializer
class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'
