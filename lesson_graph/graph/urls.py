from django.urls import path
from . import views

urlpatterns = [
    path('', views.lesson_nodes, name='lesson_nodes'),
    path('create/', views.create_node, name='create_node'),
    path('update/<str:node_id>/', views.update_node, name='update_node'),
    path('delete/<str:node_id>/', views.delete_node, name='delete_node'),
]