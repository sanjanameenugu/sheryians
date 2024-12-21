from django.shortcuts import render

# Create your views here.
def sigin(request):
    return render(request,'sigin.html')

def request_callback(request):
    return render(request,'requ.html')