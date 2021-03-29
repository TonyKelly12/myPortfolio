from appointments.models import Appointment
from rest_framework import viewsets, permissions
from .serializers import AppointmentSerializer

# Meeting Viewsets
class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = AppointmentSerializer
