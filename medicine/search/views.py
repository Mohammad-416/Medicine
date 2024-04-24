from django.http import JsonResponse
from django.views.decorators.http import require_GET
from .models import User

@require_GET
def search_view(request):
    query = request.GET.get('q', '')
    # Query the User model for users whose username contains the search query
    users = User.objects.filter(username__icontains=query)
    # Convert the queryset to a list of usernames
    usernames = [user.username for user in users]
    
    data = {'results': f'Search results for "{query}"'}
    return JsonResponse(data)
