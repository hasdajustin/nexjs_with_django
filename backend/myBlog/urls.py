from django.urls import path
from .views import BlogList

urlpatterns = [
    path('blogs/', BlogList.as_view()),
]