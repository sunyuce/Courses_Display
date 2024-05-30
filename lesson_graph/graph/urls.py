from django.urls import path
from .views import get_graph_data

urlpatterns = [
    path('', get_graph_data, name='graph'),
]
