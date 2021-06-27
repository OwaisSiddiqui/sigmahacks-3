# Create your views here.
from django.shortcuts import render,redirect
# from .forms import *
from .models import *
def homepagef(request, *args, **kwargs):
 context={}
 return render(request,'user_register/homepage.html',context)

def adduser (request, *args, **kwargs):
 context={}
 b1 = request.GET.get('uid')
 b2 = request.GET.get('pwd')
 b3 = request.GET.get('emailid')
 details.objects.create(utype='c',uid=b1,pwd=b2,email=b3)

 return render(request,'user_register/homepage.html',context)




