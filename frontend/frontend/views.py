from django.shortcuts import render
from .models import Location

def home(request):
    return render(request,  'index.html')

def map_view(request):
    # Fetch all locations from the database
    locations = Location.objects.all()
    return render(request, 'map.html', {'locations': locations})