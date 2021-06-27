from django.urls import path

from . import views

urlpatterns = [
    path("register/", views.UserList.as_view()),
    path("register/<int:pk>", views.UserDetail.as_view())
]