from django.shortcuts import render, redirect

def index_view(request):
    return redirect('/app')

def app_view(request, path):
    return render(request, 'index.html')

def home_view(request):
    return render(request, 'index.html')

