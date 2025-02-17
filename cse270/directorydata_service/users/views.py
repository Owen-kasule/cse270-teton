from django.shortcuts import render
import time
import random

# Create your views here.
from django.http import HttpResponse

MAGIC_PASSWORD = "CSE270Rocks!"

headers = {
"Cross-Origin-Opener-Policy":"unsafe-none",
'Access-Control-Allow-Origin':'*',
'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'
}

def index(request):        
    print(request.GET.get("password"))
    if (request.GET.get("password")==MAGIC_PASSWORD or (request.GET.get("username")=="admin" and request.GET.get("password")=="qwerty")):
        return HttpResponse(headers=headers)
    else:
        return HttpResponse(status=401,headers=headers)
    
def ingest(request):
    print(request.GET)
    return HttpResponse(headers=headers)