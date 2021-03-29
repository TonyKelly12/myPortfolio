from rest_framework import routers
from .api import AppointmentViewSet

router = routers.DefaultRouter()
router.register('api/appointments', AppointmentViewSet, 'appointments')

urlpatterns = router.urls