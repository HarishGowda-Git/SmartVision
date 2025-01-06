from django.http import HttpResponse
def home(request):
    return HttpResponse("This page is the Home page!")