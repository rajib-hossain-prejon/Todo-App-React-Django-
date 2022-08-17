from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import TodoSerializer
from .models import Todos

# Create your views here.
class TodoViewSet(ModelViewSet):
 queryset = Todos.objects.all()
 serializer_class = TodoSerializer