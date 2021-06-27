from django.urls import path,include
from . import views
from .views import *
urlpatterns = [
    # path('',views.employee_form ),
   
    path('homepagef/',homepagef,name='homepagef'),
  
    path('adduser/',adduser,name='adduser'),    
   
   
]