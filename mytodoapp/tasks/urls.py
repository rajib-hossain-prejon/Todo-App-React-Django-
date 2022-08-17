from django.urls import path 
from rest_framework.routers import DefaultRouter
from . import views
from pprint import pprint

router = DefaultRouter()
router.register(r'api/todos', views.TodoViewSet)

urlpatterns = router.urls