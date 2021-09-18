# myapi/urls.py
# from django.urls import include, path
from django.conf.urls import url
# from rest_framework import routers
from . import views

# router = routers.DefaultRouter()
# router.register(r'messages?<str:user_name>', views.MessageViewSet)
# router.register(r'users', views.UserViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
# urlpatterns = [
#     path('', include(router.urls)),
#     path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
# ]

urlpatterns = [
    url('messages', views.message_list),
    url('user', views.UserViewSet.as_view()),

]