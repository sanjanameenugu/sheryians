from django.shortcuts import render

# Create your views here.
def courses(request):
    return render(request, 'courses.html')

def explore(request):
    return render(request,'explore.html')