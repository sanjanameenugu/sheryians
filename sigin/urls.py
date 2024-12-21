from django.urls import path
from.views import *

app_name='sigin'
urlpatterns = [
    path('', sigin, name='sigin'),
    path('requ/',request_callback,name='requ')
]